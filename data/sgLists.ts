const sgLists: Array<Record<string, string>> = [
  {
    cat1: '1. Clothing',
    cat2: '2. Gifts',
    cat3: '3. An animal',
    cat4: '4. Things that are cold',
    cat5: '5. Colours',
    cat6: '6. Breakfast foods',
    cat7: '7. Things at the beach',
    cat8: '8. Movie titles',
    cat9: '9. Countries',
    cat10: '10. Musical Instruments',
  },
]

export default sgLists

//new learning: Record<string, string> is a way of typescripting an object type with a key type and value type inside. It's like saying create an object type where every key is a string and every value is a string. Using the Array<> wrapped around this lets you reference an array type whose values inside are objects
