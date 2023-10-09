import { StyleSheet } from 'react-native';

const step4Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  logo: {
    width: 175,
    height: 175,
    marginBottom: 10,
    marginTop: 10,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  partyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  partyItem: {
    alignItems: 'center',
  },
  partyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  signInButton: {
    backgroundColor: '#007bff',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  partyText: {
    color: '#fff',
    fontSize: 10,
  },
  continueButton: {
    backgroundColor: '#007bff',
    height: 50,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
});

export default step4Styles;
