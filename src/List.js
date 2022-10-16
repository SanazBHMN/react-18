import ListItem from "./ListItem";
import PropTypes from "prop-types";

const List = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <ul>
        {props.items.map((item) => (
          <ListItem key={item.index} text={item} />
        ))}
      </ul>
    </>
  );
};

List.defaultProps = {
  items: [],
  background: "primary",
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.oneOf(["primary", "secondary"]),
};

export default List;
