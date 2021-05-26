
let x = [1,2,3,4,0, [ 1,2,3] ] //  0 -> ...
// json
let list = 
    {
        item: string,
        item1: 10,
        item2: true,
        item3: undefined,
        item4: function(){
            return '';
        }, 
        title:{
            item6:{
                item7: 'this is end 1'
            }
        }
    }
    
// console.log (list.item5.item.item)

for (let index = 0; index < list.length; index++) {
    const element = list[index].title.item6.item7;
    console.log(element)
}







