class GetData {
  async dataAPI(API) {
    const urlData = await fetch(API);
    const data = await urlData.json();
    return data;
  }
}

export const getData = new GetData();
