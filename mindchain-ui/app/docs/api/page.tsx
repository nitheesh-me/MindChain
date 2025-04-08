import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "API Documentation | MindChain",
    description: "Comprehensive API documentation for the MindChain platform",
}

export default function ApiDocumentationPage() {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">MindChain API Documentation</h1>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="mb-4">
                    The MindChain API provides programmatic access to the MindChain platform, allowing developers to integrate with and extend the functionality of the system. This RESTful API follows standard HTTP conventions and uses JSON for data exchange.
                </p>
                <p>
                    The complete OpenAPI specification is available in the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">openapi.yaml</code> file, which can be imported into API tools like Swagger UI, Postman, or Insomnia for interactive exploration.
                </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <p className="mb-4">
                The API uses JWT (JSON Web Tokens) for authentication. To access protected endpoints, you must include the JWT token in the Authorization header:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                <code>Authorization: Bearer {'{your_jwt_token}'}</code>
            </pre>

            <h2 className="text-2xl font-bold mb-4">Base URL</h2>
            <p className="mb-6">
                All API requests should be made to the following base URL:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                <code>https://api.mindchain.iiit.ac.in/v1</code>
            </pre>

            <h2 className="text-2xl font-bold mb-4">Resource Categories</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Authentication</h3>
                    <p>User authentication and authorization endpoints</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        <li>Login</li>
                        <li>Registration</li>
                        <li>Token refresh</li>
                        <li>Logout</li>
                    </ul>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Users</h3>
                    <p>User management and profile endpoints</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        <li>Get current user</li>
                        <li>Update profile</li>
                        <li>Get user by ID</li>
                        <li>Get experts</li>
                    </ul>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Queries</h3>
                    <p>Query submission and management endpoints</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        <li>Create query</li>
                        <li>Get queries</li>
                        <li>Update query</li>
                        <li>Delete query</li>
                        <li>Update query status</li>
                    </ul>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Experts</h3>
                    <p>Expert matching and management endpoints</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        <li>Get matched experts</li>
                        <li>Assign query to expert</li>
                        <li>Get expert queries</li>
                        <li>Get available queries</li>
                    </ul>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Messages</h3>
                    <p>Real-time and asynchronous messaging endpoints</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        <li>Get messages</li>
                        <li>Send message</li>
                    </ul>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                    <p>User notification endpoints</p>
                    <ul className="list-disc list-inside mt-2 text-sm">
                        <li>Get notifications</li>
                        <li>Get notification count</li>
                        <li>Mark as read</li>
                        <li>Mark all as read</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Response Format</h2>
            <p className="mb-4">
                All responses are returned in JSON format. Successful responses typically include the requested data, while error responses include an error code, message, and sometimes additional details.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Success Response</h3>
                    <pre className="overflow-x-auto">
                        <code>{`{
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Help with Deep Learning Project",
    "status": "PENDING"
  }
}`}</code>
                    </pre>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Error Response</h3>
                    <pre className="overflow-x-auto">
                        <code>{`{
  "code": "VALIDATION_ERROR",
  "message": "Invalid request parameters",
  "details": {
    "field": "email",
    "error": "Must be a valid email address"
  }
}`}</code>
                    </pre>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Pagination</h2>
            <p className="mb-4">
                List endpoints support pagination through <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">page</code> and <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">limit</code> query parameters. Responses include pagination metadata:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                <code>{`{
  "data": [...],
  "pagination": {
    "total": 45,
    "page": 1,
    "limit": 10,
    "pages": 5
  }
}`}</code>
            </pre>

            <h2 className="text-2xl font-bold mb-4">Rate Limiting</h2>
            <p className="mb-6">
                The API implements rate limiting to ensure fair usage. Rate limit information is included in the response headers:
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-6">
                <code>{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1623766800`}</code>
            </pre>

            <h2 className="text-2xl font-bold mb-4">API Versioning</h2>
            <p className="mb-6">
                The API is versioned through the URL path. The current version is v1. When new versions are released, the previous versions will remain available for a deprecation period.
            </p>

            <h2 className="text-2xl font-bold mb-4">Using the OpenAPI Specification</h2>
            <p className="mb-4">
                The complete API documentation is available in OpenAPI (Swagger) format. You can use this specification with various tools:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Import into <strong>Swagger UI</strong> for interactive documentation</li>
                <li>Import into <strong>Postman</strong> or <strong>Insomnia</strong> to create a collection of requests</li>
                <li>Use with code generators to create client libraries in various programming languages</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4">Getting Help</h2>
                <p>
                    If you encounter any issues or have questions about the API, please contact the MindChain development team at <a href="mailto:api-support@mindchain.iiit.ac.in" className="text-blue-600 dark:text-blue-400 hover:underline">api-support@mindchain.iiit.ac.in</a>.
                </p>
            </div>
        </div>
    )
}
