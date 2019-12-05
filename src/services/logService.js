import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://ad544d85d8aa48bda02ceba801edaee7@sentry.io/1845961"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default { init, log };
