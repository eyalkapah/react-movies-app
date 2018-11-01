import * as Sentry from "@sentry/browser";

function init() {
  //   Sentry.init({
  //     dsn: "https://0ab7e8cdfaa24b95b96d44dc06a6b178@sentry.io/1313249"
  //   });
}

function log(error) {
  //Sentry.captureException(error);
  console.log(error);
}

export default { init, log };
