import isBefore from "./isBefore";

export default function validateReservationForm(formData) {
  if (!formData.user) {
    return { ok: false, msg: "missing user" };
  }

  if (!formData.resource) {
    return { ok: false, msg: "missing resource" };
  }

  if (!formData.startTime || !formData.endTime) {
    return { ok: false, msg: "Start and end time must both be defined" };
  }

  if (!formData.description) {
    return { ok: false, msg: "description must be provided" };
  }

  const areDatesValid = isBefore(formData.startTime, formData.endTime);
  if (!areDatesValid.isOk) {
    return { ok: false, msg: areDatesValid.msg };
  }

  return { ok: true, msg: "no issues" };
}
