import axios from "axios";

export const BaseURL = "http://localhost:8083";

export const myAxios = axios.create({
  baseURL: BaseURL,
});

export const fetchVisitors = async (setVisitor) => {
  try {
    const response = await myAxios.get("/visitor/daily-count");
    console.log(response);

    setVisitor(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchDelivery = async (setdelivered) => {
  try {
    const response = await myAxios.get("/count/delivered");
    console.log(response);

    setdelivered(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchPending = async (settotalPending) => {
  try {
    const response = await myAxios.get("/count/pending");
    console.log(response);

    settotalPending(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCancellation = async (settotalCancellation) => {
  try {
    const response = await myAxios.get("/count/canceled");
    console.log(response);

    settotalCancellation(response.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchProcessing = async (settotalProcessing) => {
  try {
    const response = await myAxios.get("/count/processing");
    console.log(response);

    settotalProcessing(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchDispatch = async (settotalDispatch) => {
  try {
    const response = await myAxios.get("/count/dispatch");
    console.log(response);

    settotalDispatch(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchreviews = async (setreviews) => {
  try {
    const response = await myAxios.get("/feedback/daily-count");
    console.log(response);

    setreviews(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchOrder = async (settotalOrder) => {
  try {
    const response = await myAxios.get("/count/orders");
    console.log(response);

    settotalOrder(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchTotalsales = async (settotalsales) => {
  try {
    const response = await myAxios.get("/count/sales/amount");
    console.log(response);

    settotalsales(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchTotalUser = async (settotalUser) => {
  try {
    const response = await myAxios.get("/count/users");
    console.log(response);

    settotalUser(response.data);
  } catch (error) {
    console.log(error);
  }
};

//Review page API

export const fetchComments = async (setPost) => {
  try {
    const response = await myAxios.get("feedback");
    console.log(response);

    setPost(response.data);
  } catch (error) {
    console.log(error);
  }
};

// Order page API

export const fetchData = async (setrows) => {
  try {
    const response = await myAxios.get("/order");
    console.log(response);

    setrows(response.data);
  } catch (error) {
    console.log(error);
  }
};
fetchData();

//Conversation page API

export const fetchConversation = async (setConversations) => {
  try {
    const response = await myAxios.get("/conversation");
    console.log(response);

    setConversations(response.data);
  } catch (error) {
    console.log(error);
  }
};
