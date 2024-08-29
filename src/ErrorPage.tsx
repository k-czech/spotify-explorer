import { useRouteError, isRouteErrorResponse } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status}</h1>
                <h3>Something went wrong</h3>
            </div>
        )
    }

    return (
        <div>
            <h1>Something went wrong</h1>
        </div>
    )
}

export default ErrorPage
