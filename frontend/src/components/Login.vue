import Firebase from 'firebase';
import * as firebaseConfig from "./firebase.json";
@Component({})
export default class Login extends Vue {
  private app;
  created() {
  if (!Firebase.apps.length)
  this.app = Firebase.initializeApp(firebaseConfig);
  }
}
