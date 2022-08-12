import  {Generator} from 'contrast-color-generator';
import randomColor from 'random-color';

let generator = new Generator(180);
 

export function genColors() {

    const fill = randomColor(0.9, 0.99).hexString();
    let stroke = generator.generate(fill).hexStr;

    return {fill, stroke};
}