import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';
import { Message, MessageButton } from './components';
import Root from './routes';

const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends React.Component {

  public render() {

    // return (
    //   <div className="App">
    //     <div>Welcome to our extremely nice app</div>
    //     <div>
    //       <Message>
    //         <MessageButton content="Best Button Ever" messageContent="Psyche! that was not the best button ever" />
    //       </Message>
    //     </div>
    //   </div>
    // );
    return (
      <Router>
        <Layout className={styles.container}>
          <Sider>
            <Link to="/">
              <div className={styles.logo}>Our App</div>
            </Link>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/me">
                  <Icon type="user" />
                  <span>Me</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/trips">
                  <Icon type="global" />
                  <span>Trips</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/settings">
                  <Icon type="setting" />
                  <span>Settings</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className={styles.header}>
              Header
          </Header>
            <Content>
              <Root />
            </Content>
            <Footer>
              Footer
          </Footer>
          </Layout>
        </Layout>
      </Router>
    );

  }

}

export default App;
