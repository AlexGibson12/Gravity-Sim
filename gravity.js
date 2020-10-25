let width = 3200;
let height = 3200
function setup() {
  createCanvas(width,height);
}
let particles = []
function draw(){
  clear()
  iterate(particles,0.01)
  for(let k = 0;k<particles.length;k++){
    fill(particles[k].color)
    stroke(particles[k].color)
    ellipse(particles[k].x,particles[k].y,particles[k].r,particles[k].r)
  }
}
function mouseClicked() {
  
  particles.push({x:mouseX,y:mouseY,vx:(Math.random()*500)-250,vy:(Math.random()*500)-250,m:Math.random()*100000,r:30,color:'#000'})
}
function iterate(particles,deltat){
  for(let i = 0;i<particles.length;i++){
    deltavx = 0
    deltavy = 0 
    for(let j = 0;j<particles.length;j++){
      if (j!=i){
        r = distance(particles[i],particles[j])
        deltavx += particles[j].m*(particles[j].x-particles[i].x)/Math.pow(r,3)
        deltavy += particles[j].m*(particles[j].y-particles[i].y)/Math.pow(r,3)
      }
    }
    
    particles[i] = {x:particles[i].x + particles[i].vx*deltat,y:particles[i].y +particles[i].vy*deltat,vx:particles[i].vx+deltavx,vy:particles[i].vy+deltavy,m:particles[i].m,r:particles[i].r,color:particles[i].color}
    if (particles[i].x>width || particles[i].y>height){
      particles.splice(i,1)
      console.log(particles)
    }

  }
}
function distance(particle1,particle2){
  let distance =  Math.sqrt(Math.pow((particle1.x-particle2.x),2)+Math.pow((particle1.y-particle2.y),2))
  return Math.max(distance,particle1.r+particle2.r)
}
