import { styled } from "@mui/material";
import { useState } from "react";

interface InputWithLabel{
    type: string,
    placeholder: string,
    label: string,
    fieldName: string
}

const Wrapper = styled('div')({
    flexGrow: 1,
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start'
})

const Label = styled("label")({
    fontSize: '12px',
    color: '#000',
    fontWeight: 700,
    marginBottom: '10px'
})

const Input = styled("input")({
    borderRadius: '12px',
    padding: '10px 20px',
    width: '100%'
})

export default function InputWithLabel(props: InputWithLabel){
    const {type, placeholder, label, fieldName} = props;
    const [value, setValue] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return(
        <Wrapper>
            <Label>{label}</Label>
            <Input placeholder={placeholder} type={type} name={fieldName} value={value} onChange={handleChange}></Input>
        </Wrapper>
    )
}   



