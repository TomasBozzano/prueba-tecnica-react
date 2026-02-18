import { ToastContainer } from 'react-toastify';
import { InputSearch } from './components/InputSearch'
import { UsePerson } from './hooks/UsePerson'
import { ListPosition } from './components/ListPosition';

function App() {
  const { email, handleChange: handleEmail, handleSubmit: handleSubmitEmail } = UsePerson();

  return (
    <>
    <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <h1 className='text-2xl font-bold'>Challenges Nimble Gravity</h1>
    </header>

      <main className='w-full mx-auto max-w-[60ch] px-6 content-center py-20'>
        <InputSearch OnValue={email} OnChange={handleEmail} OnClick={handleSubmitEmail} />
        <ListPosition />
      </main>


      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </>
  )
}

export default App
