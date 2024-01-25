/* Javascript Map Methods */

/*

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map

*/


{
    // using  get() 

//    const maps = new Map ([
//     ["option-1",20],  // this number(integer) value 
//     ["option-2",30],  // this number(integer) value 
//     ["option-3",40],  // this number(integer) value 
//     ["option-4",50]  // this number(integer) value 
//     ])

//     maps.set("option-5" , "hello"); // for add new  key and value  in map

//     document.getElementById("n-map").innerHTML = maps.get("option-5");
//     console.log(maps);
}


{

    // set() using 
    
   const maps_1 = new Map ([
    ["option-1",20],
    ["option-2",30],
    ["option-3","hello=3"],  // this string value 
    ["option-4","hello=4"], // this string value 
    ])

    maps_1.set("option-5" , "hello"); // for add new and value  in map
    maps_1.set("option-5" , 45); //  "update value's key"

    document.getElementById("n-map").innerHTML = maps_1.get("option-5");
    console.log(maps_1);

    // create map using only set method 

    const maps_2 = new Map([])

    maps_2.set("option-1",20);
    maps_2.set("option-2",25);
    maps_2.set("option-3",30);

    maps_2.set("option-2",35); //  "update value's key"

    document.getElementById("n-map-1").innerHTML = maps_2.get("option-2");
    console.log(maps_2);

}

{

    // delete() using 

   const maps_3 = new Map ([
    ["option-1",2],
    ["option-2",30],
    ["option-3","hello=3"],  // this string value 
    ["option-4","hello=4"], // this string value 
    ["option-5","hello=5"]  // this string value 
    ])


    maps_3.delete("option-1"); // delete key for map 
    maps_3.delete("option-4"); // delete key for map 

    document.getElementById("n-map-2").innerHTML = maps_3.get("option-2");
    console.log(maps_3);
}


{

    // delete() using 

   const maps_4 = new Map ([
    ["option-1",2],
    ["option-2",30],
    ["option-3","hello=3"],  // this string value 
    ["option-4","hello=4"], // this string value 
    ["option-5","hello=5"]  // this string value 
    ])

    
    maps_4.delete("option-1"); // delete key for map 
    maps_4.delete("option-4"); // delete key for map 

    document.getElementById("n-map-3").innerHTML = maps_4.get("option-2");
    console.log(maps_4);
}

{

    // has() using 

   const maps_4 = new Map ([
    ["option-1",2],
    ["option-2",30],
    ["option-3","hello=3"],  // this string value 
    ["option-4","hello=4"], // this string value 
    ["option-5","hello=5"]  // this string value 
    ])

    
    maps_4.delete("option-1"); // delete key for map 
    maps_4.delete("option-4"); // delete key for map 
    
    let z = maps_4.has("option-4"); // this has is return only true or false value 
    // document.write("because in map_4 kye : 'option-1' is not exist  that's why this value is :- " + z);

    document.getElementById("n-map-3").innerHTML = maps_4.get("option-4");
    console.log(maps_4);
}



{

    // size() using 

   const maps_5 = new Map ([
    ["option-1",2],
    ["option-2",30],
    ["option-3","hello=3"],  // this string value 
    ["option-4","hello=4"], // this string value 
    ["option-5","hello=5"]  // this string value 
    ])

    maps_5.delete("option-1");
    maps_5.delete("option-2");

    document.getElementById("n-map-4").innerHTML = maps_5.get("option-4");
        document.getElementById("n-map-4.1").innerHTML = maps_5.size;
    console.log(maps_5);
    
}

{

    // size() using 

   const maps_6 = new Map ([
    ["option-1",2],
    ["option-2",30],
    ["option-3","hello-1"],  // this string value 
    ["option-4","hello-1"], // this string value 
    ["option-5","hello-1"]  // this string value 
    ])


    document.getElementById("n-map-5").innerHTML = maps_6.get("option-4");
    document.getElementById("n-map-5").innerHTML = maps_6.entries;
    console.log(maps_6);
    
}