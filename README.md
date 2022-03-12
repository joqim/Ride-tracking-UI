# Ride tracker UI
An assessment for a react application which shows Nearest, Upcoming and Past rides with data fetched from an API call.

Rendered from the [Figma](https://www.figma.com/file/D0I5TsR7XGQECn8I1bia3L/Desktop-test?node-id=1%3A2) mock-up.

Deployed at [Vercel](https://ride-tracker.vercel.app/)

<section>
<h2> Nearest </h2>
<p> A nearest ride is a ride that includes your station code or a number closest to your station code in the station_path array. 
For example, your station code is 40. So any ride that has your station code as nearest number in station_path array. 
 </p>
 
 <h4> Filter </h4>
 <p> 
     Every ride has a state and city. You need to get state and city from every ride object and create a list of state & city for the filters dropdown. <br />
  
  <b>State</b> : Displays rides from selected state. <br />
  <b>City</b>: Displays rides from selected city. <br />
  
     If a state is already selected then the city dropdown will have cities from selected state only.
 </p>
 
<img src="./public/Screen Shots/main.jpg" >
</section>

<section>
<h2> Upcoming </h2>
<p> It shows all rides which has date in future. </p>
<img src="./public/Screen Shots/Upcoming.jpg" >
</section>

<section>
<h2> Past </h2>
<p> It shows all rides which has date in the past.</p>
<img src="./public/Screen Shots/Past.jpg" >
</section>
