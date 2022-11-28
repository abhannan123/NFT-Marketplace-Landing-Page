import React, { useState, useEffect } from "react";
import { doGet } from "../api/httpRequest";

const useFetch = (query, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const fetch = async (params) => {
    let result;
    if (params) {
      result = await query(params?.variables);
    } else {
      result = await doGet(query);
    }

    setData(result?.data);
    setLoading(false);
    setError(result?.data?.error);
    setStatus(result?.data?.status);
  };
  useEffect(() => {
    fetch();
  }, []);

  return { data, status, error, loading, fetch };
};

export default useFetch;
