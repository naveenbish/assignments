import "./App.css";
import Card from "./component/Card";
import data from "./data/data.json";

function App() {
  const arr = [data];
  return (
    <div className="flex flex-wrap">
      {
        <div>
          {arr.map((value) => {
            return (
              <div>
                <Card
                  name={value.user2.name}
                  desc={"A Student of 100xDevs Cohort2.0"}
                  Interests={[
                    "JS",
                    "HTML",
                    "CSS",
                    "Tailwind",
                    "AWS",
                    "Node",
                    "Express",
                    "React",
                  ]}
                ></Card>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default App;
