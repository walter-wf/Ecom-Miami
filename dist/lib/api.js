"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiClient = void 0;
const boundless_api_client_1 = require("boundless-api-client");
const baseURL = process.env.BOUNDLESS_API_BASE_URL;
const permanentToken = process.env.BOUNDLESS_API_PERMANENT_TOKEN;
const s3Prefix = process.env.BOUNDLESS_S3_PREFIX;
const mediaServer = process.env.BOUNDLESS_MEDIA_SERVER;
const apiClient = new boundless_api_client_1.BoundlessClient(permanentToken);
exports.apiClient = apiClient;
apiClient.setInstanceId(process.env.BOUNDLESS_INSTANCE_ID);
if (baseURL) {
    apiClient.setBaseUrl(baseURL);
}
if (s3Prefix) {
    apiClient.setS3FolderPrefix(s3Prefix);
}
if (mediaServer) {
    apiClient.setMediaServerUrl(mediaServer);
}
//# sourceMappingURL=api.js.map