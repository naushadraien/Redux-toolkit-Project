import React from "react";
import { useGetClientQuery } from "../../redux/clientApiSlice";

const Test = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const data = useSelector((state: RootState) => state.client.data);
  // console.log(data.age);
  const { data: data1, isLoading } = useGetClientQuery("hello");

  return (
    <div style={{ background: "red", height: "50px" }}>
      <p>test</p>

      {data1
        ? data1?.map((item) => (
            <div style={{ color: "green" }} key={item.id}>
              {item.age}
            </div>
          ))
        : isLoading && <p style={{ color: "black" }}>no data found</p>}
    </div>
  );
};

export default Test;
