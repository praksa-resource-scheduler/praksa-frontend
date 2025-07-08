import toUTC from "./toUTC";
export default function parseData(formData) {
  return {
    user: formData.user,
    resource: formData.resource,
    startTime: toUTC(formData.startTime),
    endTime: toUTC(formData.endTime),
    description: formData.description,
  };
}
