var TeleSignSDK = require("telesignsdk");

exports.sendSms = (phone) => {
  const customerId = "B3E89761-F6E5-4F54-AEEF-4A7E3C8C5993";
  const apiKey =
    "U77mDQdHDL4gRvOnUNwEOe0a7r91Ssi0iXO0r5Lgkgp99w2+OPYsmhTwIJ0k1yIIimwQLMkZRb1PYt0sSoKi/g==";
  const rest_endpoint = "https://rest-api.telesign.com";
  const timeout = 10 * 1000; // 10 secs

  const client = new TeleSignSDK(
    customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
  );

  const phoneNumber = "212"+phone;
  const accountLifeCycleEvent = "create";

  console.log("## ScoreClient.score ##");

  function score_callback(error, responseBody) {
    if (error === null) {
      console.log(
        `Score response for phone number: ${phoneNumber}` +
          ` => code: ${responseBody["status"]["code"]}` +
          `, description: ${responseBody["status"]["description"]}`
      );
    } else {
      console.error("Unable to get score. " + error);
    }
  }
  client.score.score(score_callback, phoneNumber, accountLifeCycleEvent);
};
