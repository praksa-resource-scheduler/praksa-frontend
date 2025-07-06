export default function Reservation() {
  return (
    <div className="min-h-screen bg-white-50 flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Nova Rezervacija
      </h2>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Profesor ili ID</span>
          <input
            type="text"
            name="professor"
            required
            placeholder="Ime profesora"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Soba</span>
          <select
            name="room"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="" disabled>
              Odaberite sobu
            </option>
            <option value="Amfiteatar A">Amfiteatar 1</option>
            <option value="Učionica 101">Učionica B1</option>
            <option value="Učionica 102">Učionica B2</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Datum</span>
          <input
            type="date"
            name="date"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <div className="flex space-x-4 mb-6">
          <label className="flex-1">
            <span className="text-gray-700 font-semibold">Početak</span>
            <input
              type="time"
              name="startTime"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="flex-1">
            <span className="text-gray-700 font-semibold">Kraj</span>
            <input
              type="time"
              name="endTime"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>
        </div>

        <div>
          <label className="flex-1">
            <span className="text-gray-700 font-semibold">
              Svrha rezervacije
            </span>
            <textarea
              required
              placeholder="Unesite svrhu rezervacije"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            ></textarea>
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-10 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Rezerviraj
        </button>
      </form>
    </div>
  );
}
