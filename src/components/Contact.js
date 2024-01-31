const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl p-4 m-4">Contact us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="border border-black px-4 py-2 m-4"
        />
        <input
          type="text"
          placeholder="Message"
          className="border border-black px-4 py-2 m-4"
        />
        <button className="border border-black px-4 py-2 m-4 rounded-lg bg-green-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
