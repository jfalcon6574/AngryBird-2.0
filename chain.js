class chain {
   constructor (j1,j2) {
        var options = {
        bodyA : j1,
        bodyB : j2,
        length : 10,
        stiffness: 0.04
   }
     this.body = Constraint.create (options)
     World.add(world, this.body)
}
    display (){
        var DotA = this.body.bodyA.position
        var DotB = this.body.bodyB.position
        strokeWeight(5)
        line (DotA.x , DotA.y, DotB.x, DotB.y)

    }


}