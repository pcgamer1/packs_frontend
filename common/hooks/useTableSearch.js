import {useState, useEffect} from 'react';
// import {retrieveProducts} from 'common/api/auth';

export const useTableSearch = ({searchVal, retrieve}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const {data} = await retrieve();
      setOrigData(data);
      setFilteredData(data);
      const searchD = data.map((d) => {
        const allValues = Object.values(d);
        return {allValues: allValues.toString()};
      });
      setSearchData(searchD);
      if (data) setLoading(false);
    };
    fetchData();
  }, [refresh]);

  useEffect(() => {
    if (searchVal) {
      const reqData = searchData.map((d, index) => {
        if (d.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0) return origData[index];
      });
      setFilteredData(
        reqData.filter((d) => {
          if (d) return true;
          return false;
        }),
      );
    } else setFilteredData(origData);
  }, [searchVal]);

  const reload = () => {
    setRefresh(refresh + 1);
    setFilteredData(origData);
  };

  return {filteredData, loading, reload};
};
