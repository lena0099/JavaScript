
let newarr=[];
function filterBy(arr, type)
{
    for (let i = 0, j=0; i < arr.length; i++) {
        if (typeof (arr[i])!=type)
        {
            newarr[j]=arr[i];
            j++;
        }

        // switch (type) {
        //     case 'string':
        //         if (typeof(arr[i]) != type){
        //             newarr[j]=arr[i];
        //             j++;
        //         }
        //         break;
        //     case 'bigint':
        //         if (typeof(arr[i]) != type){
        //             newarr[j]=arr[i];
        //             j++;
        //         }
        //         break;
        //     case 'number':
        //         if (typeof(arr[i]) != type){
        //             newarr[j]=arr[i];
        //             j++;
        //         }
        //         break;
        //     case 'boolean':
        //         if (typeof(arr[i]) != type){
        //             newarr[j]=arr[i];
        //             j++;
        //         }
        //         break;}
    }
    return newarr;
}
console.log(filterBy(['world', 23, '23', null],'string'))


