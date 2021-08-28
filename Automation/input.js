const random = require("generate-random-data");
export const inputTextBox = {
  fullName: "IT START",
  email: "TwoyDed@yandex.ru",
  currentAddress: "Suzhou China",
  permanentAddress: "Suzhou Shishanlu district",
};
export const FormData = {
  FirstName: random.maleFirstName(),
  LastName: random.lastName(),
  Email: random.email("gmail.com"),
  MobileNumber: random.int(1111111111, 9999999999),
  CurrentAddress: "Suzhou SND Shishanlu station",
};
export function WebTableData() {
  //функция генерирует новые данные каждый раз , а обьект повторяет их после первого запуска
  return {
    firstName: random.maleFirstName(),
    lastName: random.lastName(),
    userEmail: random.email("gmail.com"),
    age: random.int(20, 50),
    salary: random.int(20000, 500000),
    department: random.word(10, 15),
  };
};

