import './Error.css';

const Error = ({ error }) => {
  console.log(`<Error /> rendered! error=${error}`);
  return (
    <div className="Error w-full p-4 bg-red-400">
      <p className='my-2 text-4xl font-bold text-white'>
        There was an error: <span className='mx-4 text-4xl font-extrabold'>{error}</span>
      </p>
      <p className='text-xl font-normal text-white'>
        Please refresh the page or contact support.
      </p>
    </div>
  );
};

export default Error;