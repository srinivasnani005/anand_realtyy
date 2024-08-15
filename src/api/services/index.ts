import { http } from "../http";

export const authLogin = (data: any) => {
  return http.post("/auth/login", data);
};



//userprofile-id
export const getUserProfile = (id: string) => {
  return http.get(`/users/profile/${id}`);
};



//clients

export const getClients = () => {
  return http.get("/clients");
};

export const getClient = (id: string) => {
  return http.get(`/clients/${id}`);
};

export const addClient = (data: any) => {
  return http.post("/clients", data);
};

export const updateClient = (clientId: number, data: any) => {
  return http.put(`/clients/${clientId}`, data);
};



// Ventures

export const getVentures = () => {
  return http.get("/ventures");
};

export const getVenture = (id: string) => {
  return http.get(`/ventures/${id}`);
};

export const addVenture = (data: any) => {
  return http.post("/ventures", data);
};

export const updateVenture = (ventureId: number, data: any) => {
  return http.put(`/ventures/${ventureId}`, data);
};






// Leads

export const getLeads = () => {
  return http.get("/leads");
};

export const getLead = (id: string) => {
  return http.get(`/leads/${id}`);
};

export const addLead = (data: any) => {
  return http.post("/leads", data);
};

export const updateLead = (leadId: number, data: any) => {
  return http.put(`/leads/${leadId}`, data);
};


// Users

export const getUsers = () => {
  return http.get("/users");
};

export const getUser = (id: string) => {
  return http.get(`/users/${id}`);
};

export const addUser = (data: any) => {
  return http.post("/users", data);
};

export const updateUser = (userId: number, data: any) => {
  return http.put(`/users/${userId}`, data);
};
