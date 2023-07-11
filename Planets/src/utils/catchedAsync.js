//funcion de orden superior que maneja errores
export default (controller) => {
  return function (req, res, next) {
    controller(req, res).catch((err) => {
      next(err);
    });
  };
};
