// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3QWGIPpxLgVlXcLoke/LBb/qeBNRd764g8T9nfdKGNAe9LJcYSICqSQ9h+tOxFVTCLEDHM/GP3s70VeuEjke5xITt12rlCB1oSStjFZ2X+VmKLe3roaGSE4KoycMFpdgxsBn9HOha0KXczmol7kyFOpOk1T/h/MdYAGd6D018FtjvlHb7Z+16AFhivhzlmiFMbAKgsNRezrGOy8RPgsXl6v+EcRnDJ7cxptltCXYX/H3dDDbWbfHei5UrJzFRefflhB5EFXa5CZ6EqPkKI5wI5Rcs6/VOaj4BPHylrjrwHk3/mbV1l51hzg+FDN/yPXZb+zcwrXA9Ri1eTOGqevEdwkIXSIjV5HtZeQYFgwJDS8k87aEsZgb+iyxdK69bmZJtRIrptNctYyZcTnrW2mpNOIFtSpnD0ySi6bY1wFXfw4lWtdCElexssrWvKIvhf3RPvXFUbuTE+JxkCXqyMawbVmDMNOWym20iD0WUI09jIOkmV/tMfaKP9UH/b3w4aw2qP6uHpGYhcEDMGlJbaUw9flinTL/XHC4w0R+m3V71mWBktKStIyGKSiJty+fuivizCv03TFrOSpWP59KBvdYK1gHx6z+dvfjhuLcm0Ud8qKegdk52S10J/0s+HPDn4k2GduxQRgoYv2yKSoNGYB4HNJxKqX37ZrVIdasUzILwXr43fM+8jEXkMOKKGiGnIes8rwGjt+f0mSdg3GKEg8d7WwFEH3dJxqcs55iPPbrlFEqlFidIDg0bT8ufmdnHR1nr1RRs2Fywyx4blVt4lySS2tpaEKVfQW4VPCN4yHJdtAE645pMytOURwj3wTRIHHrN9MflULD130FXUb8A5t7sTDrbpKQf4nxn3E1meTs9UJft9WjNopr3zqCI2+Y6Evxk2PkcOUpl0giZ19QLyO/I/pY48d7GoELEoQ5psLixXPuguUSGxbr/Xkf9OlZBNAtgYEG2Iw3YMHwX8UxnHPsrYuwcDxuQzMRX76LOUs6y8PTtKpSCLrbKlJjozBA';const _IH='dc0522ea1c06a514af6849d6bcd02ac863631adbd5dee176af9aeae2030945e0';let _src;

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
