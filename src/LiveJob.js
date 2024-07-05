import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
var w = window.innerWidth;

const LiveJob = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          marginTop: w > 420 ? "20vh" : "10vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            maxWidth: w > 420 ? "80vw" : "90vw",
            maxHeight: "50vh",
            opacity: "0.8",
            borderRadius: "1rem",
          }}
          src={require("./assets/image9.jpg")}
        />
        <div
          className="centered glass"
          style={{
            fontSize: w > 420 ? "2rem" : "1rem",
            height: "auto",
            padding: "2vmax",
            textAlign: "center",
          }}
        >
          Live Jobs <br />
          {w > 420 && (
            <span style={{ fontSize: w > 420 ? "1rem" : "0.75rem" }}></span>
          )}
        </div>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: w > 420 ? "10vh" : "5vh",
          marginLeft: "4vw",
          marginRight: "4vw",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={0} justifyContent="center">
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              height: "auto",
              backgroundColor: "white",
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
            }}
          >
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
            Fish processing worker in Croatia
            <br></br>
            800 EUR a month{" "}
            </span>
            <br />
            Our client — In 2017, near the resort year of Rijeka, Croatia, a new modern factory was built for the processing of fish from the Adriatic Sea. The factory occupies 4500 m2 and is equipped with the most modern equipment. In connection with the launch of new departments, we are looking for:
            <br />
            MAIN TASKS:
            <br />
            1) Cleaning and milling fish
            <br />
            2) Packaging ready-made products
            <br />
            3) Strictly adhere to sanitary standards
            <br />
            
            SALARY:
            Salary 550 euros for women, 610 euros for men for the first 2 months of work, in which the employee will receive comprehensive training (in these months you can earn more, subject to work, the salary is what the employer guarantees, the rest depends on the employee)
            After training, the average salary in the company is 750-850 euros / month
            The best employee at the end of the month earned 941 euros
            <br />
            
            OUR OFFER:
            <ol>
            <li>We provide free accommodation right near the factory (there is a photo of the apartment, conditions are very good)</li>
            <li>The company has a kitchen where you can warm up or prepare your lunch during a break</li>
            <li>We formalize you in accordance with Croatian labor legislation (you will have 20 days of paid leave, sick leave if necessary, social insurance)</li>
            <li>We are looking for employees for a long time and are ready to provide work for at least 3 years</li>
            <li>We already employ foreigners from and we will be glad to expand our staff</li>
            <li>We provide work clothes and all the necessary tools</li>
            <li>We provide free Croatian language courses and transfer home</li>
            <li>The vacancy provides for the possibility of obtaining a residence permit and permanent residence in Croatia</li>
            </ol>
            <br /> <br /> 
            <hr />
            <br /> 
            
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
            Handyman at a car factory in Croatia
            <br />
            700-1000 Euro / month{" "}
            </span>
            <br />
            Accommodation: Free
            <br />
            Men under 50.
            <br />
            Work in the production of auto parts CIMOS d.d
            <br />
            Handymen in different areas of the enterprise:
            <br />
            - acquisition
            <br />
            - quality control
            <br />
            - grinders
            <br />
            - work in foundries
            <br />
            The location of the enterprise is 55 minutes from the town of Rijeka (one of the largest Croatian resorts).
            <br />
            Guaranteed:
            <br />
            -Long-term employment in Croatia (a year or more).
            <br />
            -Salary (on hand) 700 euros initial + motivation, salary on hand goes up to 1000 euros + Free housing + one lunch.
            <br />
            -Internship and training 2-3 weeks.
            <br />
            Work schedule: 4 shift work schedule (2 days in the morning, 2 days in the afternoon, 2 days at night, 2 days off), 6 hour shifts.
            There may be overtime hours, they are paid + 45% to the regular rate.
            <br />
            Accommodation: hostels, houses. Rooms for 2 people The conditions are all there. Kitchen for 10 people
            <br />
            Important! Order with documents, work for people who did not have problems with the legislation of the Schengen countries.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
            Working at a car factory – one of the largest manufacturers of auto parts CIMOS d.d.
            <br />
            1000 — 1100 euros / month{" "}
            </span>
            <br />
            The employer makes a work permit and contract for 1 year.
            <br />
            Documents in work 30-50 days.
            <br />
            Only for men under the age of 45.
            <br />
            The work consists in the acquisition of auto parts, quality control and polishing. The salary for the first month is 700 euros because it takes 2 weeks to train.
            Subsequent months 1000 — 1100 euros. Accommodation is free. LUNCH is free. Work from 8:00 6 days a week 2 days in the morning, 2 days in the afternoon, 2 days night shift. Then 2 days off. Accommodation hostel, at home / 2 people per room. There are all conditions. This is a long-term job for 1 year with the possibility of migration both personally and with the family. The company transports transport to work to the house. The road to Croatia is at the employer’s expense.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
            We invite Construction Workers to work on sites in Croatia
            <br />
            Salaries from 4 to 6 euros (per hour) depending on experience and facility.{" "}
            </span>
            <br />
            We invite Construction Workers to work on sites in Croatia
Salaries from 4 to 6 euros depending on experience and facility.
We invite builders to work on sites in Croatia:
<br />
<ul>
<li>Bricklayer</li>
<li>Plasterboard</li>
<li>Painter</li>
<li>Plasterer</li>
<li>Tiler</li>
<li>Plumber</li>
<li>Parquet floor</li>
<li>Facade</li>
<li>Roofer</li>
<li>Concreters, fitters, form workers</li>
<li>Ventilator</li>
<li>Heating specialist</li>
<li>Welder</li>
<li>Electrician</li>
<li>Finisher</li>
</ul>
Paperwork, accommodation and one meal a day at the expense of the employer.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              
            Worker at a Goat Farm, Croatia, in the Sibenik region
            <br />
            Net salary: 5000 HRK (680 Euro) per month{" "}
            </span>
            <br />
            Tasks: Caring for animals on the farm (feeding, cleaning, milking)
            <br />
            Experience of working on a farm with animals is required. Vacancy for men.
            <br />
            Free accommodation in a house with a kitchen, in a room for 2 people. 3 meals a day. Distance to the workplace: 150 m. Shift work. The first shift is from about 8 to 12-13, the second shift from about 16-17 to 18-19 hours. Saturday working day Sunday day off
            Registration at the expense of the employer. Contract for a year with possible extension. Transfer to Croatia at your own expenses.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
            Work in food and textile warehouses
            <br />
            Salary: 10,15 € / hour{" "}
            </span>
            <br />
            Germany. City: Aschheim (Munich)
            <br />
            For men and women from 18 to 28 years old.
            <br />
            Work all year round.
            <br />
            Duties:
            <br />
            Work in food and textile warehouses.
            With textiles, you have to collect orders for well-known online stores.
            In grocery warehouses, sort goods, fill shelves, scan and control.
            <br />
            <br />
            Working conditions:
            <br />
            wages 10.15 € / hour. There are bonuses for good work. Supplement for night shifts
            official employment.
            work schedule: from 40 hours / week. Work in two shifts.
            meals on day shifts are free of charge during work. Canteen on the territory of the enterprise.
            accommodation 400 € / month, will be deducted from salary. 2 people per room.
            they bring to work 140 € will be deducted from the salary.
            <br />
            Requirements:
            <br />
            Perform their work efficiently and conscientiously. 
            Hard work, responsibility.

          </Grid>
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              height: "100%",
              backgroundColor: "white",
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
            }}
          >
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Helper at Car factory in Croatia
            <br />
            Salary: 700-1100 € / month{" "}
            </span>
            <br />

            For men and women from 19 to 50 years old.
            <br />
            Knowledge of the language — spoken English.
            <br />
            The work consists of picking up auto parts, quality control and grinding training 2 weeks. 8:00 6 days a week 2 days in the morning, 2 days in the afternoon, 2 days night shift. Then 2 days off. Overtime pay by law, hour rate 45%. Accommodation hostel, at home / 2 people per room. There are all conditions. This is a long-term job for 1 year with the possibility of long-term migration both personally and with the family.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Working on a pig farm in Germany
            <br />
            Salary: 1620 € / month{" "}
            </span>
            <br />
            Working on a pig farm in Germany
            <br />
            Salary: 1620 € / month
            <br />
            Germany. Hagen city
            <br />
            For men and women from 18 to 45 years old.
            <br />
            Knowledge of German is not required.
            Spoken English is enough.
            <br />
            Duties:
            <ul>
            <li>feeding pigs</li>
            <li>veterinary care</li>
            <li>farrowing reception</li>
            <li>caring for the herd at the stages of growing and fattening</li>
            <li>driving and maintenance of small agricultural equipment</li>
            <li>Working condition</li>
            <li>salary 1620 € / month</li>
            <li>official wor</li>
            <li>issuance of uniforms</li>
            </ul>
            accommodation and meals at the place of work are free.
            <br />
            Requirements:
            <br />
            - Profile education.
            <br />
            - Responsible attitude to work.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Looking for farm workers to clean and disinfect premises in Germany
            <br />
            Salary: 6 € / hour{" "}
            </span>
            <br />
            For men from 20 to 45 years old.
            <br />
            Knowledge of German is not required.
            <br />
            Spoken English is enough.
            <br />
            Duties:
            <ul>
            <li>Cleaning the farm premises and preparing them for the new season.</li>
            <li>Mechanical cleaning by automated systems (water jet under pressure).</li>
            <li>Treatment of walls and floors with detergents and disinfectants. There is a strong smell of ammonia.</li>
            <li>Garbage is cleaned by a bulldozer / tractor, and from corners and other inaccessible places it is cleaned manually.</li>
            </ ul>
            Wages – 6 € / hour
            <br />
            Official employment
            <br />
            work schedule: 5-6 days a week, from 200 to 280 hours per month, work all year round
            a face mask, work clothes, rubber pants and a rubber jacket are issued. Take only warm rubber boots with you;
            accommodation for free, in a room for 2-4 people. One-time fee of 50 € for bed linen, pillows, etc.
            they carry or provide a car to work;
            knowledge of English and a driver’s license is desirable.
            <br />
            Requirements:
            <br />
            Experience with physical activity. 
            <br />
            No bad habits.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            We need versatile builders for the interior decoration of apartments in the city of Dortmund
            <br />
            Salary: 1500-1800 € / month
            </span>
            <br />
            Germany. Dortmund city
            <br />
            For men and women from 23 to 50 years old.
            <br />
            Knowledge of German is not required.
            <br />
            Spoken English is enough.
            <br />
            Duties:
            
            <ul>
            <li>Execution of work on interior decoration of premises (renovation work in apartments)</li>
            <li>Working condition</li>
            <li>wages 1500-1800 € / month</li>
            <li>official employment</li>
            <li>work schedule: from 8: 00-17: 00, 5-6 days a week .</li>
            <li>represent tools</li>
            <li>accommodation is free</li>
            <li>travel to work is free</li>
            </ul>

            Requirements:
            <br /> 
            -Compliance with safety regulations. 
            <br /> 
            - No bad habits.

            <br /> <br /> 
            <hr />
            <br /> 
            

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Helper - Packing sweets in boxes in Germany
            <br /> 
            Salary: 9.66 € / hour
            </span>
            <br /> 
            Germany. Gotha city
            <br /> 
            For men and women from 18 to 48 years old.
            <br /> 
            Knowledge of German is not required. Spoken English is enough.
            Duties:
            <br /> 
            - Sweets in branded packaging must be packed in cardboard boxes.
            <br /> 
            Requirements:
            <br /> 
            - Age from 18-48 years old;
            <br /> 
            - Physically healthy, attentive.
            <br /> 
            Salary from 9.66 € / hour (clean hands 9 € / hour).
            <br /> 
            Work schedule for 7 hours, 5-6 days a week (processing is possible).

            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Working at a logistics warehouse in Germany
            <br />
            Salary: 9 € / hour
            </span>
            <br />
            For men and women from 18 to 38 years old.
            <br />
            Work in Germany at the Rhenus Logistics warehouse.
            <br />
            Duties:
            <ul>
            <li>order picking</li>
            <li>packing clothes in small boxes</li>
            <li>assistance in completing goods for shipment</li>
            <li>maintaining a clean workplacw</li>
            </ul>
            
            Additional Information:
            The company is engaged in logistics operations for the ZARA online store. Processing orders for online sales of clothing, footwear, haberdashery accessories.
            <br />
            Working conditions:
            wages from 9.66 € / hour (clean hands 9 € / hour)
            <br />
            official internship
            <br />
            work schedule for 7 hours / day, 5-6 days a week (processing is possible)
            <br />
            accommodation is provided by the employer.
            <br />
            Requirements:
            <br />
            -Age from 18-38 years old.
            <br />
            - Physically healthy, attentive.
            <br /> <br /> 
            <hr />
            <br /> 




          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LiveJob;
