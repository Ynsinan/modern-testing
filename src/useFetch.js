import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url).then((response) => response.json())
        .then((data) => {
            setData(data);
            setIsLoading(false);
        })
    }
    , [url]);
  return {data, isLoading}
}

export {useFetch}