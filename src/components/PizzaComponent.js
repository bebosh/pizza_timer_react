import "../pizza.css";

const Pizza = (props) => {
  var dom_content = [];
  var today = new Date().getDate();
  var targetDay = props.day;
  var dayLeft = targetDay - today;
  for (var i = 0; i < dayLeft; i++) {
    dom_content.push(
      <li key={i}>
        <div className="slice"></div>
      </li>
    );
  }
  return <ul className="sliceWrapper">{dom_content}</ul>;
};

export default Pizza;
