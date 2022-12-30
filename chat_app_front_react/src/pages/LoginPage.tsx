import { LoginForm } from "../components/forms/LoginForm.tsx";
import { Page } from "../utils/styles/index.tsx";
export const LoginPage = () => {
    return (<Page display="flex" justifyContent="center" alignItems="center">
        <LoginForm/>
        </Page>);
};
