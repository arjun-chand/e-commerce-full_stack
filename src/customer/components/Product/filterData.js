export const colors = [
    "White",
    "Black",
    "Red",
    "Maroon",
    "Beige",
    "Pink",
    "Green",
    "Yellow"
]

export const filters = [
    {
        id:"color",
        name:"Color",
        options:[
            {value:"White", label:"White"},
            {value:"Black", label:"Black"},
            {value:"Red", label:"Red"},
            {value:"Maroon", label:"Maroon"},
            {value:"Beige", label:"Beige"},
            {value:"Pink", label:"Pink"},
            {value:"Yellow", label:"Yellow"}
        ]
    },

    {
        id: "size",
        name :"Size",
        options :[
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"}
        ]
    }
]

export const singleFilter =[
   { 
        id: "price",
        name:"Price",
        options:[
            {value:"150-500", label:"₹150 To ₹500"},
            {value:"500-1000", label:"₹500 To 1000"},
            {value:"1000-2000", label:"₹1000 To ₹2000"},
            {value:"2000-3000", label:"₹2000 To ₹3000"},
            {value:"3000-4000", label:"₹3000 To ₹4000"},
            {value:"4000-5000", label:"₹4000 To ₹5000"}
        ],
    },

    {
        id:"discount",
        name: "Discount Range",
        options:[
            {value:"10", label:"10% and Above"},
            {value:"20", label:"20% and Above"},
            {value:"30", label:"30% and Above"},
            {value:"40", label:"40% and Above"},
            {value:"50", label:"50% and Above"},
            {value:"60", label:"60% and Above"},
            {value:"70", label:"70% and Above"}    
        ]
    },

    {
        id:"stock",
        name:"Availablity",
        options:[
            {value:"in_stock", label:"In Stock"},
            {value:"out_of_stock", label:"Out Of Stock"}
        ]
    }
]