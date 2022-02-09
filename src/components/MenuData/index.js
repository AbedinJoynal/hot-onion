import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';


const MenuData=[...Breakfast, ...Lunch, ...Dinner]
const shuffle=a=>{
  for(let i=a;i;i--){
    let j=Math.floor(Math.random()*i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

shuffle(MenuData);
export default MenuData;