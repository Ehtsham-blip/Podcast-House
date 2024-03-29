import React from 'react'
import styles from './Home.module.css';
import {Link, useHistory} from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
  const singinLinkStyle={
    color:'#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'
  }
  const history=useHistory();
  function startRegister(){
    // console.log("Button clicked")
    history.push('/register');
  }
  return (
    <div className={styles.cardWrapper} >
      <Card title="Welcome to Podcast House!" icon="hello">
      <p className={styles.paragraph}>We're working hard to get Podcast House ready for everyone!. While we wrap up the finishing youches, we're adding people gradually to make sure nothing breaks</p>
    <div>
     <Button onClick={startRegister} text="Get your username"/>
    </div>
    <div className={styles.signinWrapper}>
      <span className={styles.invite}>Have an invite text?</span>
      <Link style={singinLinkStyle} to="/login">Sign in</Link>
    </div>
        
      </Card>
    </div>
  );
}

export default Home
