import React from "react";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } =
     props; //Destructuring
    return (
      <>
        <div className="my-3">
          <div className="card" style={{ height: "80vh" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img
              src={
                imgUrl
                  ? imgUrl
                  : "https://cdn.cnn.com/cnnnext/dam/assets/220202223136-02-us-military-raid-in-syria-super-tease.jpg"
              }
              className="card-img-top"
              alt="related pic"
              style={{ height: "35vh" }}
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p
                className="card-text"
                style={{ position: "absolute", bottom: "60px" }}
              >
                <small className="text-muted">
                  By {author} on {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
                style={{ position: "absolute", bottom: "10px" }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default NewsItem;
