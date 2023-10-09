import { StyleSheet } from 'react-native';

const step5Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '30%',
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
    width: '80%',
    height: '70%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  categoryButton: {
    backgroundColor: '#007bff',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  selectedCategoryButton: {
    backgroundColor: '#fff',
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  expandIcon: {
    padding: 5,
  },
  subCategoriesContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  subCategoryButton: {
    backgroundColor: '#ccc',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  selectedSubCategoryButton: {
    backgroundColor: '#00cc66',
  },
  subCategoryText: {
    color: '#000',
    fontSize: 14,
  },
  createAccountButton: {
    backgroundColor: '#007bff',
    height: 50,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disclaimerText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 20,
  },
});

export default step5Styles;
