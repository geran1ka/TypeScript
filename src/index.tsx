{
  const log = <T,>(val: T): T => {
    console.log(val);
    return val;
  };

  log("string");
  log<string>("string"); //указание конкретного типа generic
  log(5);
  log<boolean>(!5);
}
