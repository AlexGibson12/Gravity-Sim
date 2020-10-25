let width = 3200;
let height = 3200
function setup() {
  createCanvas(width,height);
}
let particles = [{x:0,y:0,vx:1000,vy:100,m:1000,r:30,color:'#fae'}, {x:1500,y:1500,vx:0,vy:0,m:1000,r:30,color:'#35A27F'},{x:0,y:1000,vx:200,vy:10,m:1000000,r:30,color:'#FF2536'}]
function draw(){
  clear()
  iterate(particles,0.01)
  for(let k = 0;k<particles.length;k++){
    fill(particles[k].color)
    stroke(particles[k].color)
    ellipse(particles[k].x,particles[k].y,particles[k].r,particles[k].r)
  }
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
  return Math.sqrt(Math.pow((particle1.x-particle2.x),2)+Math.pow((particle1.y-particle2.y),2))
}