var list = document.getElementById("list")
function addtodo(){
    var inp = document.getElementById("inputtodo")
    console.log(inp.value)
    var li = document.createElement("li")
    console.log(li)
    var text = document.createTextNode(inp.value)
    var delbtn = document.createElement("button")
    console.log(delbtn)
    var delText = document.createTextNode("DELETE")
    console.log(delText)
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.setAttribute("class","btn")
    delbtn.appendChild(delText)
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText) 
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.setAttribute("class","btn")
    li.appendChild(text)
    list.appendChild(li)
    li.appendChild(delbtn)
    li.appendChild(editBtn)
    inp.value = ""

}
function DelBtn(){
    
    list.innerHTML = ""
    
}
function deleteItem(d){
    d.parentNode.remove()

}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    console.log(val)
    var editValue = prompt("Enter updated value",val)
    e.parentNode.firstChild.nodeValue = editValue
}