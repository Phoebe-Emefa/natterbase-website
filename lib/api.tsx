
export const sendStartProjectForm = async (data: any) =>
  fetch("/api/start-project", {
    method: "POST",
    body: data,
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });



  export const sendHelpForm = async (data: any) =>
  fetch("/api/help", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

  export const sendJobApplication = async (data: any) =>
  fetch("/api/job-application", {
    method: "POST",
    body: data,
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

