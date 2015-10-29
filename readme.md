# hrm-image-encoder
## An image encoder for Human Resource Machine programs

![Screenshot](http://tomorrowcorporation.com/blog/wp-content/themes/tcTheme2/images/hrm/screenshots/hrm_04.png)

> Human Resource Machine is a puzzle game. In each level, your boss gives you a job. Automate it by programming your little office worker! If you succeed, you'll be promoted up to the next level for another year of work in the vast office building. Congratulations!

### NPM

`npm install hrm-image-encoder`

Unlike some of my other HRM projects, this one is plain ES5

### Usage

```javascript
const encode = require( 'hrm-image-encoder' )

const hrmImage = encode( paths )
```

Outputs a string in HRM label/comment format.

The input is an array of paths, each of which is an array of points:

```json
[
  [
    [ 2226, 6828 ],
    [ 2701, 18411 ],
    [ 2701, 29125 ]
  ],
  [
    [ 1656, 18700 ],
    [ 6500, 18121 ],
    [ 7355, 17542 ]
  ],
  [ "etc." ]  
]  
```

Also, see the examples folder 

### License

MIT