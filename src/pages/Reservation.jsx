import { useState } from "react";
import HandleChange from "../utils/handleChange";
import validateReservationForm from "../utils/validateReservationForm";
import duration from "../utils/duration";
import parseData from "../utils/parseReservationData";

export default function Reservation() {
  const [formData, setFormData] = useState({
    user: "",
    resource: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  function handleChangeNewReservation(event) {
    HandleChange(event, formData, setFormData);
  }

  async function HandleSubmit(event) {
    event.preventDefault();

    const isValidated = validateReservationForm(formData);
    if (!isValidated.ok) {
      alert(isValidated.msg);
      return;
    }

    const data = parseData(formData);

    alert("Res ok");
    if (!duration(data.startTime, data.endTime, 2)) {
      alert("Warning: reservation is more than two hours");
    } else {
      alert("Reservation is within the allowed duration");
    }

    console.log("Parsed Data:", data);
    setFormData({
      user: "",
      resource: "",
      startTime: "",
      endTime: "",
      description: "",
    });
  }

  return (
    <div className="min-h-screen bg-white-50 flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Nova Rezervacija
      </h2>
      <form
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
        onSubmit={HandleSubmit}
      >
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Profesor ili ID</span>
          <input
            value={formData.user}
            onChange={handleChangeNewReservation}
            type="text"
            name="user"
            required
            placeholder="Ime profesora"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-semibold">Soba</span>
          <select
            name="resource"
            value={formData.resource}
            onChange={handleChangeNewReservation}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="" disabled>
              Odaberite sobu
            </option>
            <option value="Amfiteatar A">Amfiteatar 1</option>
            <option value="Učionica B1">Učionica B1</option>
            <option value="Učionica B2">Učionica B2</option>
          </select>
        </label>

        <div className="flex space-x-4 mb-6">
          <label className="flex-1">
            <span className="text-gray-700 font-semibold">Početak</span>
            <input
              type="datetime-local"
              name="startTime"
              value={formData.startTime}
              onChange={handleChangeNewReservation}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="flex-1">
            <span className="text-gray-700 font-semibold">Kraj</span>
            <input
              type="datetime-local"
              value={formData.endTime}
              onChange={handleChangeNewReservation}
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
              name="description"
              value={formData.description}
              onChange={handleChangeNewReservation}
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
