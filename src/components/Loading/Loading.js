import './Loading.css';

const Loading = () => {
  console.log(`<Loading /> rendered!`);
  return (
    <div className="Loading">Loading...
      <div
        class="block mx-auto mt-4 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
    </div>
  );
};

export default Loading;