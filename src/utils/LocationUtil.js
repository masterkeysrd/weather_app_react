const LocationUtil = {
  getLocation(fun) {
    navigator.geolocation.getCurrentPosition(({ coords }) => fun(coords));
  },
};

export default LocationUtil;
