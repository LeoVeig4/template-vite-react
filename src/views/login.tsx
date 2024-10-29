
import Card  from '@/components/card';
import SimpleLayout from '@/layout/simple-layout';
import { Aperture } from 'lucide-react';
import { useFormik  } from 'formik';
import BaseInput from '@/components/input';
import BaseButton from '@/components/button';
import BaseCheckbox from '@/components/checkbox';
function FormLogin() {
    return (
      <Card title='Login' footer='teste'>Logina</Card>
    )
}

function TextLogin() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
    return (
        <div className='my-auto  place-items-center'>
            
            <Aperture size={100} />           
            <h1 className='mt-5'>Seja bem vindo</h1>
            <p className="mb-10 mt-2">Por favor, entre com suas credenciais</p>
            <form onSubmit={formik.handleSubmit} className='mt-10 w-80 '>
              <BaseInput  label="Email" placeholder="usuario@mail.com" type="email" input={formik.values.email} onChange={formik.handleChange} id='email'/>
              <BaseInput label="Senha" placeholder="Palavra Passe" type="password" input={formik.values.password} onChange={formik.handleChange} id='password'/>

              <div className='my-3 flex justify-between'>
                <BaseCheckbox size="sm" >Lembrar de mim</BaseCheckbox>
                <BaseButton className="place-self-end" size="xs" variant="ghost" colorScheme='gray'>Esqueceu a senha?</BaseButton>
              </div>
              
              <BaseButton width='100%' colorScheme='cyan'>Entrar</BaseButton>
              <BaseButton width='100%' colorScheme='gray'><span><img src='icons/search.png' className="mr-4 h-6 object-scale-down" alt="google" /></span>Entrar com o Google</BaseButton>
            </form>
            <p className='mt-32'>Não tem uma conta? <b className='cursor-pointer'>Se Inscreva</b></p>
        </div>
        
    )
}

export default function Login() {
    return (
      <SimpleLayout component1={FormLogin()} component2={TextLogin()}  />
    )
  }