import toUTC from "./toUTC";
export default function parseData(formData) {
  return {
    StartTime: toUTC(formData.startTime),
    EndTime: toUTC(formData.endTime),
    Purpose: formData.description,
    UserId: formData.user,
    RoomId: formData.resource,
  };
}
