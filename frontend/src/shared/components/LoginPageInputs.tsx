import { styled } from "@mui/material"
import InputWithLabel from "./InputWithLabel"

const FormWrapper = styled('form')({
    padding: '20px 0',
    flexGrow: 1
})

const Button = styled('button')({
    marginTop: '30px'
})

const LoginPageForm = () => {
    return(
        <FormWrapper>
            <InputWithLabel type="email" placeholder="Enter Email" label="Email" fieldName="email" />
            <InputWithLabel type="password" placeholder="Enter Password" label="Password" fieldName="password" />
            <Button type="submit"> Login </Button>
        </FormWrapper>
    )
}


export default LoginPageForm;