
import Card  from '@/components/card';
import TwoColumns from "@/layout/two-columns"

function FormLogin() {
    return (
      <Card title='Login' footer='Footer'>Login</Card>
    )
}

function TextLogin() {
    return (
        <p>Login</p>
    )
}

export default function Login() {
    return (
      <TwoColumns component1={FormLogin()} component2={TextLogin()}  />
    )
  }