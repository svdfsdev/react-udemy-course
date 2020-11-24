const { default: Quiz } = require('./containers/Quiz/Quiz');
const { default: Layout } = require('./hoc/Layout/Layout');

function App() {
  return (
    <div className="App">
      <Layout>
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
