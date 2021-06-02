import "../pizza.css";

const Pizza = (props) => {
  var dom_content = [];
  var d = new Date(props.day);
  var n = d.getDay();

  for (var i = 0; i < n; i++) {
    dom_content.push(
      <li key={i}>
        <div className="slice"></div>
      </li>
    );
  }
  return <ul className="sliceWrapper">{dom_content}</ul>;
};

export default Pizza;
