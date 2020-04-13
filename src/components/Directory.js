import React from "react";
import "../main.scss";
import Item from "../components/Item";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          image:
            "https://i.pinimg.com/originals/25/09/22/250922d4342dd8b93ed88dc646ed872c.jpg",
          id: 1,
        },
        {
          title: "rousky",
          image:
            "https://i.pinimg.com/originals/2e/c1/95/2ec195e57d165cf50bcb0cc91fa431ea.png",
          id: 2,
        },
        {
          title: "textil",
          image:
            "https://i.pinimg.com/originals/25/09/22/250922d4342dd8b93ed88dc646ed872c.jpg",
          id: 3,
        },
        {
          title: "textil",
          image:
            "https://i.pinimg.com/originals/25/09/22/250922d4342dd8b93ed88dc646ed872c.jpg",
          id: 4,
          size: "large",
        },
        {
          title: "textil",
          image:
            "https://i.pinimg.com/originals/25/09/22/250922d4342dd8b93ed88dc646ed872c.jpg",
          id: 5,
          size: "large",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <Item key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
