// Détection de la combinaison de touches pour afficher l'easter egg
let sequence = "";
const target = "solutec"; // La combinaison de touches à saisir

document.addEventListener("keydown", (e) => {
  sequence += e.key.toLowerCase();
  if (sequence.length > target.length) {
    sequence = sequence.slice(-target.length);
  }

  if (sequence === target) {
    showFireworks();  // Afficher le feu d'artifice
    showDialog();     // Afficher la boîte de dialogue
    sequence = "";   // Réinitialiser après avoir trouvé la combinaison
  }
});

// Fonction pour afficher un feu d'artifice
function showFireworks() {
    const container = document.getElementById("firework-container");
    const colors = ['#ed1b4b', '#767b7f'];
  
    for (let i = 0; i < 100; i++) { // augmenter le nombre d'éléments
      const dot = document.createElement("div");
      dot.className = "firework";
      dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.top = `${Math.random() * 100}vh`;
  
      dot.style.setProperty("--x", `${Math.random() * 500 - 250}px`);
      dot.style.setProperty("--y", `${Math.random() * 500 - 250}px`);
  
      container.appendChild(dot);
    }
  
    setTimeout(() => {
      container.innerHTML = "";
    }, 5000); // augmenter le temps avant suppression
  }

// Fonction pour afficher la boîte de dialogue
function showDialog() {
  const dialogBox = document.getElementById("dialog-box");
  dialogBox.style.display = "block"; // Afficher la boîte de dialogue
}

// Fonction pour ouvrir un e-mail dans le client de messagerie de l'utilisateur
document.getElementById("yes-button").addEventListener("click", function() {
  // Adaptez l'adresse, l'objet et le corps du message selon vos besoins
  const email = "mclaude@solutec.fr"; // Remplacez par l'adresse du destinataire
  const subject = "SOLUTEC - Café !";
  const body = "";

  // Utiliser mailto pour ouvrir le client de messagerie
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Fermer la boîte de dialogue
  document.getElementById("dialog-box").style.display = "none";
});

// Taille du Submenu 

// Fonction pour ajuster la hauteur du sous-menu en fonction de la taille de la fenêtre et du footer
function adjustSubmenuHeight() {
    // Récupérer la hauteur de la fenêtre
    const windowHeight = window.innerHeight;
    
    // Hauteur du footer est fixe, donc 50px
    const footerHeight = 200;
  
    // Calculer la hauteur disponible pour le sous-menu
    const availableHeight = windowHeight - footerHeight;
  
    // Appliquer la hauteur calculée au sous-menu
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach(submenu => {
      submenu.style.maxHeight = `${availableHeight}px`;  // Définir la hauteur maximale du sous-menu
    });
  }
  
  // Ajuster la hauteur du sous-menu lors du chargement de la page
  window.addEventListener("load", adjustSubmenuHeight);
  
  // Ajuster la hauteur du sous-menu chaque fois que la fenêtre est redimensionnée
  window.addEventListener("resize", adjustSubmenuHeight);
  
  document.getElementById("logo").addEventListener("click", function() {
    alert("Et si vous écriviez quelque chose ?");
  });