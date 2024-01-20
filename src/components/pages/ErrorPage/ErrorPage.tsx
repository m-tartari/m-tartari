import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page" className="flex flex-col gap-8 justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {isRouteErrorResponse(error) && (
          <p className="text-slate-400">
            <i>
              {error.status} {error.statusText}
            </i>
          </p>
        )}
      </div>
    )
  }
}

export default ErrorPage
