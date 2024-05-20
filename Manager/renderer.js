window.addEventListener('DOMContentLoaded', () => {
    const modList = document.getElementById('mod-list');
    const downloadModBtn = document.getElementById('download-mod');
    const toggleModBtn = document.getElementById('toggle-mod');
    const installBepInExBtn = document.getElementById('install-bepinex');
    const settingsBtn = document.getElementById('settings');
  
    // Function to add a mod to the list
    const addModToList = (modName) => {
      const modItem = document.createElement('div');
      modItem.textContent = modName;
      modList.appendChild(modItem);
    };
  
    // Function to download a mod
    const downloadMod = () => {
      // Implement download functionality here
      // For example, you can open a file dialog to select the mod file to download
      console.log('Downloading mod...');
    };
  
    // Function to toggle mod enable/disable
    const toggleMod = () => {
      console.log('Toggling mod...');
    };
  
    // Function to install BepInEx
    const installBepInEx = () => {
      console.log('Installing BepInEx...');
    };
  
    // Function to open settings
    const openSettings = () => {
      console.log('Opening settings...');
    };
  
    addModToList('Mod 1');
    addModToList('Mod 2');
    addModToList('Mod 3');
  
    downloadModBtn.addEventListener('click', downloadMod);
    toggleModBtn.addEventListener('click', toggleMod);
    installBepInExBtn.addEventListener('click', installBepInEx);
    settingsBtn.addEventListener('click', openSettings);
  });
  