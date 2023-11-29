import React from "react";
//>> Nesting Components
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

// Creat Components
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "job1", title: "dev", salary: "500" },
      { id: "job2", title: "tester", salary: "400" },
      { id: "job3", title: "manegers", salary: "1000" },
    ],
  };
  addNewJob = (job) => {
    console.log("check Job:", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    // console.log(">>> This data", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}
export default MyComponent;
