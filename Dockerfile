ARG BASE_IMAGE=node:lts

# --------------> The development image
FROM $BASE_IMAGE AS development

ENV NODE_ENV=development
COPY --chown=1000:1000 . /workspaces/m-tartari.github.io
WORKDIR /workspaces/m-tartari.github.io
USER 1000:1000

CMD [ "sleep", "infinity" ]

# --------------> The production build stage
FROM $BASE_IMAGE AS production-build

ENV NODE_ENV=production
COPY . /app
WORKDIR /app

RUN npm ci --omit=dev
RUN npm run build:prod

# -------------->  Nginx extraction (Debian-based for glibc compatibility)
FROM nginx:stable AS nginx-extractor
COPY --from=nginx:stable /usr/sbin/nginx /extracted/nginx
RUN ldd /extracted/nginx | grep -o '/[^ ]*' | xargs -I {} cp --parents {} /extracted/

# -------------->  Production image (Distroless)
FROM gcr.io/distroless/base-debian13:nonroot AS runner

# Copy nginx and libraries
COPY --from=nginx-extractor /extracted/ /

# Copy static files and config (edit nginx.conf locally to remove 'user nginx;')
COPY --from=production-build --chown=nonroot /app/dist /usr/share/nginx/html
# COPY .htpasswd /usr/share/nginx/html/.htpasswd
COPY --chown=nonroot ./nginx.conf /etc/nginx/

WORKDIR /usr/share/nginx
USER nonroot

EXPOSE 8080
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
