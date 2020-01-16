
//类的结构
class Student {

   

   //构造方法
   constructor(){
      
   }

   //属性 (实例属性| 类属性（静态属性）) 公共的东西
   name= "" //js java dart c#

   set name(){
       this.name = ""
   }

   get name(){
       return this.name
   }

   static tags =["xx","uuu"]
   //方法
   learn(){

   }

   static run(){

   }
}


let zhangsan = new Student()
zhangsan.name = "zhangsan" // name get set

let lisi = new Student()
lisi.name = "" // name get set 

Student.tags


class Vue{
    constructor(options){
       this.$el = options.el,
       this.$data = options.data
    }
}


let vm = new Vue({
    el:"#app",
    data:{

    }
})

//框架 公式 = x + y

 // vue公式 = component(mvvm)

 //vue类的构造方法中的参数 （7个） + vue 8个hooks方法 + 4个核心指令