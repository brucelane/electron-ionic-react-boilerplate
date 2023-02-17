import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <video width="320" height="240" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
