export default function LoginPage() {
  return (
    <div className="p-6 text-2xl text-center">
      <h1 className="text-5xl font-bold mb-4">Login to Wordflow English School</h1>
      <form className="space-y-4">
        <input type="checkbox" />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-xl">
          Login
        </button>
      </form>
    </div>
  );
}