import LoginForm from '../../components/LoginForm/LoginForm'

// Log In page broken up from AuthPage

export default function LoginPage({ setUser }) {
    return (
        <main>
            <h1>Login Page</h1>
            <LoginForm setUser={setUser} />
        </main>
    )
}