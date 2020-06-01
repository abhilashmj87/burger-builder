const HTTP = (props) => {

  return new Promise( (resolve, reject) => {
    const httpReq = new XMLHttpRequest();
    httpReq.open(props.type, props.url, true);

    httpReq.onload = (e) => {
        if(e.target.status === 200 || e.target.status === 304) {
          resolve(JSON.parse(httpReq.response));
        } else {
          reject(e.target.statusText);
        }
    }

    httpReq.onerror = (e) => {
      reject(e.target.statusText);
    }

    httpReq.onabort = (e) => {
      reject(e.target.statusText);
    }

    props.data ? httpReq.send(JSON.stringify(props.data)) : httpReq.send();
  });
}

export default HTTP;