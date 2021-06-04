import "../pizza.css";

const Pizza = (props) => {
  var dom_content = [];
  var today = new Date().getDay();
  var targetDay = props.day +1
  var dayLeft = targetDay-today; 
  console.log("today " + today + " targetDay " + targetDay + " dayLeft " + dayLeft);
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
