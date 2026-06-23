import Child from "./Child";

function Parent() {
  return (
    <div className="container">
      <h1>User Profiles</h1>
      <p className="subtitle">View the details of all users</p>

      <Child name="Deepthi" age="22" city="Chittoor" phone="9876543210" />
      <Child name="Ravindhra" age="25" city="Salem" phone="9876543211" />
      <Child name="Arun" age="24" city="Chennai" phone="9876543212" />
      <Child name="Hari" age="23" city="Coimbatore" phone="9876543213" />
      <Child name="Priya" age="21" city="Bangalore" phone="9876543214" />
    </div>
  );
}

export default Parent;