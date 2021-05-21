
import '../pizza.css';

const Pizza = () => {
  var dom_content = [];
  for (var i = 0; i < 3; i++) {
      dom_content.push(
          (
          <li key={i}><div className="slice"></div></li>
          )
      );
  }
  return (
       <ul className="sliceWrapper">
          {dom_content}
      </ul>
  )
}
 
export default Pizza;
