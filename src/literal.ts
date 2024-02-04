import { Locale } from "./locale";

type httpMethod = "GET" | "POST";

const apiService = (url: string, method: httpMethod) => {
  fetch(url, {
    method,
  });
};

const method = "POST";

apiService("https//site.com", "GET");

const translate = (lang: Locale, text: string) => {
  //text переводим

  return text;
};

translate(Locale.EN, "text");
translate(Locale.RU, "text");

enum TypeUser {
  admin = "admin",
  moderator = "moderator",
  user = "user",
}

enum statusCode {
  SUCCESS = "SUCCESS",
  PROCESS = "PROCESS",
  FAILED = "FAILED",
}

console.log("statusCode: ", statusCode);

const res = {
  message: "Успех",
  statusCode: statusCode.SUCCESS,
};

if ((res.statusCode = statusCode.PROCESS)) {
  //preloader
}

if ((res.statusCode = statusCode.SUCCESS)) {
  //render
}

if ((res.statusCode = statusCode.FAILED)) {
  //error
}
