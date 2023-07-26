import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import "./css/navbar.css";

const Navbar = () => {
    const items = [
        {
            label: 'Sobre mim',
            icon: 'pi pi-fw pi-user',
            url: '#aboutMe'
        },
        {
            label: 'Habilidades',
            icon: 'pi pi-code',
            url: "#skills"
        },
        {
            label: 'Projetos',
            icon: 'pi pi-check',
            url: "#projects"
        },
        {
            label: 'Contato',
            icon: 'pi pi-envelope'
        },
        {
            label: 'GitHub',
            icon: 'pi pi-github',
            target: '_blank',
            url: 'https://github.com/MatheusVaz17'
        }
      ];
    
      const start = <h2 style={{margin: '0', color: 'white'}}>Mv</h2>;
      const end = <InputText placeholder="Search" type="text" className="w-full" />;

      return (
            <div className="Navbar">
                <Menubar model={items} start={start} />
            </div>
      );
}

export default Navbar;