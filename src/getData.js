//Here we pass the URL and get the data
class GetData {
  async dataAPI(API) {
    const urlData = await fetch(API);
    const data = await urlData.json();
    return data;
  }
}

export const getData = new GetData();
