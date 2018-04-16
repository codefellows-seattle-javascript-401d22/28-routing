import Landing from '../src/component/landing/landing';
import Dashboard from '../src/component/dashboard/dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;