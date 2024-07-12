import { Button, Input } from '@nextui-org/react'


export default function Home() {
  return (
    <main className='h-screen flex flex-row justify-center items-center bg-purple-500'>
      <div className='flex flex-col items-center content-between gap-y-8 w-96'>
          <h1 className='text-white font-bold text-4xl'>DermoBeauty</h1>
            
          <form className=' flex flex-col items-center w-full gap-y-5 bg-white p-6 rounded-md h-72'>
              <div className='w-full'>
                <Input
                  className='w-full border-2 border-indigo-300 hover:border-purple-500 rounded-md p-2'
                  placeholder='Email'
                  fullWidth
                  
                />
              </div>
              <div className='w-full'>
                <Input
                  className='w-full border-2 border-indigo-300 hover:border-purple-500 rounded-md p-2'
                  placeholder='Password'
                  fullWidth
                />
              </div>

              <div className='w-full'>
                <Button
                  className='w-full h-full bg-purple-500 text-white p-2 rounded-md '
                >
                  Continuar
                </Button>
              </div>

              <div>
                <h3>Não tem uma conta? <a className='text-purple-500'><u>Clique aqui!</u></a></h3>
              </div>
          </form>
            
      </div>
      
    </main>
  );
}
