// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZfH49PgnrRrFRwMZc958inz0oliek73yUN9nuAopOGmuLu06j8D/MA3xUyzjdfihzqIiJF1lUk6auWuYDRIOEKqYKUfKgC1sExCp0g4jIJpTxzxVQCNJWm/jeLZvM6hHnEmBu9yZGJKaFtjEhw5pRJltoFagv9baRnF+3kv6WaRPUHF9rTdhjD6EgNkCRDcgSSrfmjS4X6Y7leD4id1CylvkVrJzGgjvF6hS6TkpRRYic/GXWlQnDAUePXhal65MSJ5ezSBZGDil/5ttCxBLD+1dE7BaFb64KZMNehswtNBlWLBxJ9tiFOb7+y40FTwnffjlHb3x/6WRIgw1veU5PNft7+wBj+oA2UtB6DFJlUoTLyN7AkeHW4EwlK/0/5CLyxpN06k16u4oTgAHIpcNVy/ZpEMpX68f09bVQAU/7opWxmjO58bSTADaj0kcgFy7ISdAPFbiHgRwCuTkgrxfWU9E4vgyRGLdSIUfzRK98llhqAl+sdMz+K6tafDMBLVP8bRL/lvv46RXhLeAluLH2pCJKE8vQqdtPV+1pXfMwWhs2w5BWF0eNOA+f1q+vDGWZgZGRySUd+sILes2z3pqIlPBubGgK27h8akfawNo9H1fJvOB/wZ35CIx+iinw5VlD4Qjra2vCobcbYNH5m3W16XRgwlxLzsQa3K+j2zOf5TxirYIVkGAT7fO8lclJ1bykzL4l5akEG7MStT8lGdlnOXhTiUpaiI7OBZ06gqDNFUM3ZGLEdjoo4c4kCwvvwzrnQo5tngBBrmThpNobD2z8oX6eQS/DZ7zeLadVTS7JiDi21xhhoRMqvaMsXU6Xml5bxR3G3fB1PTfl5aGDu0wffhgEX7tViNabHbQFTHIJmAg+gi+m4VqBP+pneDsErA9X2B1VGiCrBH02tSQKWoF4bYn4lODhi/q3WtybQ8eq/cm63yVCzyVzEqxQUqLORn9AAHKRbOa+BUbGeE142Znv3mclP1MD6eo58NvawmBlD+D0+s+IF+NIYudML4k56ICFoCBzJ4Is04MfFJe+JTdWoOfRv7ZD8TRS4KsT3KAe8+DLwOZk6pvplA+1llThdxx+koG4hxcA30iV8N1aHn45rjCmhWHEjhOM/jTPgIFSQiizB3fpl/DJsTT43C+wKwdp9Rxby/ZvyUWLOKrmBnxNFZURMvDe1v7zh1KOo7E6WK+1T6F28Wb5oWero42hqEhMBQTi+/87sP3pEdDTHfSnrS6hHFy5VdzbpzuOoNxir11GUs0qDMLmGqJ5VOUeNKl2OvIz0qMMZBQ5rqnFoCu2c5hvkwqWQpMhAE4rJHPxIyKBhA1yXXBMzXIJQOVNLOy64Xy3pusI94bSBN7ayeoT6Er6WsWe4/fygYG93P4oirqNZLcV3cu9A==';const _IH='e76e583b96f403573564f84653e89c5c14d894810cbba69448e602dfea822d84';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
