 
 
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json','true');
request.send();
var data=[];
request.onload=function()
{
     data=JSON.parse(this.response);
    ta(data);
   
}
console.log(data);

function ta(a){
   
     for(var i in a)
    {
        
       var d=a[i].id;
       var e=a[i].name;
       var f=a[i].email;
       
  ma(d,e,f)
        
    
}
}
var table=document.createElement('table');
table.style.width="100%";
var thead=document.createElement('thead');
var tr=document.createElement('tr');
var th1=create('th','id');
var th2=create('th','name');
var th3=create('th','email');
tr.append(th1,th2,th3);
thead.append(tr);
var tbody=document.createElement('tbody');

function ma(x,y,z){
var tr1=document.createElement('tr');
var td1=document.createElement('td');
td1.innerHTML=x;
var td2=document.createElement('td');
td2.innerHTML=y;
var td3=document.createElement('td');
td3.innerHTML=z;
tr1.append(td1,td2,td3);
tbody.append(tr1);
return;
}
table.append( thead,tbody);
document.body.append(table);

function create(elementname,value="")
{
    var tdtr=document.createElement(elementname);
    tdtr.innerHTML=value;
    return tdtr;
}

