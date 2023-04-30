import { PersonType } from "src/types/types";

const updateObjectById = (data: PersonType[], id: number, key: keyof PersonType, value: string | boolean | number) => {
  const index = data.findIndex((obj) => obj.id === id);
  if (index !== -1) {
    (data[index][key] as any) = value;
  }
  return data;
};

export default updateObjectById;