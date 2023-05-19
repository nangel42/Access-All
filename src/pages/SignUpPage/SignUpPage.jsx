import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function SignUpPage({ setUser }) {
    return (
        <main>
            <h1>Sign Up Page</h1>
            <SignUpForm setUser={setUser} />
        </main>
    )
}