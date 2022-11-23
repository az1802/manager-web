const env = "dev";
const EnvConfig = {
  dev: {
    baseApi: "",
    mockApi:
      "https://www.fastmock.site/mock/e0c821b08a50f75f47c7234581afdf2d/api",
  },
  test: {
    baseApi: "",
    mockApi:
      "https://www.fastmock.site/mock/e0c821b08a50f75f47c7234581afdf2d/api",
  },
  prod: {
    baseApi: "",
    mockApi:
      "https://www.fastmock.site/mock/e0c821b08a50f75f47c7234581afdf2d/api",
  },
};

export default {
  env: "dev",
  mock: true,
  ...EnvConfig[env],
};
