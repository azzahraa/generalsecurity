import React from 'react';
// import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import cams from '../img/cams.jpg'
import camnature from '../img/camnature.png';
import camstreet from '../img/camstreet.jpg'
import './About.css'

export default function About() {
  return( 
  <>
  <div className="about" style={{ backgroundImage: `url(${cams})` }}>
    <h1>À PROPOS DE GENERAL SECURITY:</h1>
    <p>
    General Security est une société spécialisée dans l’instalation et la distribution des équipements de sécurité .
Fondée en 1998, General Security est arrivée à conquérir le marché tunisien en matière de sécurité (Vidéosurveillance, anti-intrusion, anti-incendie, IPTV, WIFI ,GPS et serrures électriques…) en proposant des systèmes de sécurité destinés aux particuliers et aux professionnels.
    </p>
    <p>Aujourd’hui General Security dispose d’une gamme aussi riche que variée de matériel et de services de sécurité ainsi que d’une équipe de techniciens qualifiés prêts à répondre aux exigences des clients sur la totalité du territoire tunisien.
      </p>
      <h3>Nos Atouts</h3>
      <li>Innovation technologique : matériel informatique sophistiqué et de pointe.</li>
      <li>Mobilité dans tout le pays.</li>
      <li>Savoir-faire technique : Un staff technique spécialisé et qualifié.</li>
      <li> Service après vente à l’écoute et toujours à la disposition des clients.</li>
      <li>Conseil permanent et formation sur les équipements de sécurité choisis.
Notre charte d’éthique</li>
      <li>Attaché à garantir une qualité irréprochable, nous nous engageons auprés de notre clientèle à fournir un service adapté à ses besoins.</li>
      <li>Notre priorité est avant tout d’etablir et de maintenir un rapport de confiance avec nos clients.</li>
      <li>Nos spécialistes élaborent des solutions sur mesure et dévolutives.</li>
      <li>Notre philosophie est simple un client satisfait est notre meilleure publicité</li>
      <img src={camnature} alt='camnature' className='about-img'></img>
      <div className='about'>
        <h1>Nos Services</h1>
        <h1>Votre sécurité est prioritaire</h1>
        <h2>EQUIPRE PROFESSIONNELLE ET HAUTEMENT QUALIFIEE</h2>
        <p>Choisir General Security
comme installateur, c’est l’assurance d’une installation optimisée. Nos techniciens réalisent la pose de manière optimale en fonction de votre habitation, de son accessibilité ou du voisinage. General Security vous propose également des prestations de service qui associe des actions préventives mais aussi correctives.</p>
<li>
  <h3>
INSTALLATION OPTIMISEE, SUR-MESURE ET GARANTIE
  </h3>
<p>
L’installation de votre système de sécurité par General Security , vous garantit une installation de qualité. Nos techniciens, experts dans leur domaine disposent d’un savoir-faire et de compétences techniques nécessaires à l’installation et au paramétrage de votre solution de sécurité.

Nos systèmes sont garantis pièces et main d’œuvre pendant une durée de 1 à 5 ans, à la date de l’installation, dans des conditions normales d’utilisation.
  </p>
  <h3>PRISE EN CHARGE REACTIVE</h3>
  <p>
  En cas de panne, notre  service maintenance réceptionne et traite vos demandes en moins de 24h. Nos experts diagnostiquent la situation et transmettent le cas échéant aux équipes techniques. Nos clients ayant souscrits un contrat de maintenance ou d’entretien sont prioritaires.

La société General Security vous garantit une qualité de service, une assistance opérationnelle téléphonique et d’ interventions d’urgence 24h/24 et 7j/7, afin d’assurer l’entretien et le dépannage de systèmes de sécurité de marques différentes. Quel que soit le type de votre système de protection, General Security met tout en œuvre pour vous apporter une solution personnalisée
  </p>
  <h3>
  INTERVENTION DES TECHNICIENS
  </h3>
  <p>
  Alarme anti-intrusion, alarme-incendie, système de contrôle d’accès, télé et vidéo surveillance… Nos techniciens interviennent sur tous les matériels installés par nos soins, après appel du client et/ou confirmation par mail. Dans leur véhicule, ils disposent immédiatement des matériels de rechange nécessaire au maintien en bon état de fonctionnement des systèmes (détecteurs, sirènes, batteries…) et les outillages (outils, échelles).

Lors de nos interventions, si nous constatons des modifications de l’aménagement des locaux qui ne permettent plus au système de sécuriser efficacement l’habitation, les observations correspondantes vous seront adressées par courrier. Une offre de prix pour la modification du système pourra alors vous être adressée.
  </p>
  </li>
        <li><h2>ETUDE ET EVALUATION DU BESOIN GRATUITE</h2>
        <h3>Accompagnement Global</h3>
        <p>
        Notre objectif n°1 est la satisfaction client. Plus qu’une solution technique, c’est un ensemble de service que nous vous apportons à travers la qualité de nos prestations lors des installations. Nous contrôlons et garantissons nos travaux et offrons une formation et un suivi individualisé à chacun de nos utilisateurs.
        </p>
        <h3>LA SATISFACTION DES CLIENTS : UNE PRIORITÉ.</h3>
        <p>General Security agit dans le cadre d’une gouvernance de société privée, fondée sur des principes éthiques intangibles que sont :
          <li>Le sens de l’intérêt général</li>
          <li>La transparence</li>
          <li>Le souci du long terme</li>
          <li>Les performances économiques</li>
          <li>Les relations sociales</li>
          <li>Une gestion environnementale rigoureuse</li>
          <li>La qualité des prestations réalisées</li>
          La direction comme chaque salarié de l’entreprise sont les garants de ces principes. Gage de la qualité de son service en matière de gestion du parc clients et du suivi des contrats de maintenance, General Security est sensibilisé par la démarche ISO 9001. Le système de management de la qualité se développe et s’enrichit au quotidien et tous les services de l’entreprise sont aujourd’hui identifiés et cartographiés selon les règles de la qualité ISO.
        </p>
        <h3>ACCOMPAGNEMENT JURIDIQUE</h3>
        <p>General Security, expert dans le domaine de la sécurité depuis 30 ans, vous accompagne dans l’élaboration de votre projet de sécurité et s’assure de sa conformité avec la loi. Nos experts vous conseillent et vous guident dans les démarches administratives. Notamment dans le cadre de l’installation d’un dispositif de vidéo surveillance, soumis à une réglementation précise. Le dispositif devant être déclaré préalablement à son installation, nous vous aidons à remplir l’ensemble des déclarations administratives et prenons le relai si besoin.</p>
        </li>
        <li>Service aprés-vente Rapide
          <h2>CONTRAT D’ENTRETIEN ALARME
</h2>
<p>Pour s’assurer que votre système de sécurité est opérationnel en permanence, son état doit être vérifié régulièrement. En fonction de la catégorie, il est nécessaire de bénéficier d’un  niveau de maintenance adapté, basé sur deux critères essentiels : la fréquence des visites ou le délai d’intervention. Depuis 30 ans, General Security propose à ses clients des contrats d’entretien adaptés à leurs besoins et à leur installation. Que vous soyez un professionnel, une collectivité ou un particulier, nous avons une solution à vous apporter.

General Security propose à ses clients des formules adaptées à chaque système de sécurité et à chaque besoin que vous soyez un professionnel, une collectivité ou un particulier.
</p>
<h3>AVANTAGES DU CONTRAT D’ENTRETIEN</h3>
<p>La souscription au  contrat d’entretien est vivement conseillée, voir obligatoire dans certaines situations. Elle offre des avantages non négligeables :

Vous êtes assurés toute l’année du parfait fonctionnement de votre installation.

Votre système est mis à niveau de manière permanente

Vous êtes prioritaires dans votre demande d’intervention.</p>
<h3>VISITES DE CONTRÔLE</h3>
<p>Au cours des visites annuelles ou semestrielles de contrôle des installations, nous procédons de la façon suivante :
  <li>Essais réels de fonctionnement du système</li>
  <li>Contrôle visuel de l’installation</li>
  <li>Vérification des connectiques</li>
  <li>Teste des batteries et des alimentations de secours</li>
  <li>Vérification de la consommation et de l’autonomie du système</li>
  <li>Vérification des matériels</li>
  <li>Nettoyage des détecteurs</li>
  <li>Rédaction du rapport d’intervention faisant figurer les points ci-dessus.</li>
</p>
<h3>DOSSIERS TECHNIQUES
</h3>
<p>Afin de faciliter les visites de contrôle, nous vous prierons de bien vouloir mettre à la disposition du technicien, le dossier technique de votre installation. Dans le cas contraire nous procéderons à leur mise à jour ou à leur création.</p>
        </li>
        </div>
  </div>
  <Footer>

  </Footer>
  
</>
  )
}
