// var aldo={
//     harun:()=>{
//         return [
//             {
//                 atian:'berhasil'
//             }
//         ]
//     }
// }

// // console.log(aldo.harun()[0]['atian'])
// var user='aldo'
// var umur=13
// var harun=()=>{
//     return[1]
// }
// var obj={
//     user,
//     umur,
//     adriani:harun
// }

// console.log(obj.adriani())

var arr=['aldo','dian','harun','haura','putri','sekar']
// var arrkeluarga=arr.map((val)=>{
//     return `uzumaki ${val}`
// })

// var arrkeluarga=[]
// for(i=0;i<arr.length;i++){
//     arrkeluarga.push(`uzumaki ${arr[i]}`)
// }

// console.log(arrkeluarga)

const mapalala=(arraytes,cb)=>{
    output=[]
    for (i=0;i<arraytes.length;i++){
    output.push(cb(arraytes[i],i))
    }
    return output
    
}

console.log(mapalala(arr,(val,index)=>{
    return `${index+1}.uzumaki ${val}`
}))