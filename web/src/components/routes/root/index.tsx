import { useEffect, useState } from "react";
import { getFoods } from "../../../services/food_service";
import { Food } from "../../../models/food";

export default function Root() {
  
  const pageSize = 50;
  let pageNumber = 1;

  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    getFoods(pageSize, pageNumber).then(foods => setFoods(foods))
  }, [])

  return (
    <>
      <h1>Xablau</h1>
    </>
  );
}