
export default function RegisterPage() {
  return (
    <div>
      <h1>Registrieren Sie sich bei Flexpertise</h1>
      <form>
        <input type="text" placeholder="Name" /><br/>
        <input type="email" placeholder="E-Mail" /><br/>
        <input type="password" placeholder="Passwort" /><br/>
        <input type="password" placeholder="Passwort wiederholen" /><br/>
        <input type="text" placeholder="Berufserfahrung" /><br/>
        <input type="text" placeholder="Studienabschluss" /><br/>
        <input type="text" placeholder="LinkedIn-Profil (optional)" /><br/>
        <select><option>Fachkraft</option><option>Unternehmen</option></select><br/>
        <button>Registrieren</button>
      </form>
    </div>
  );
}
