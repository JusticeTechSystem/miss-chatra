// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNWKXVVydUzVwRQxMFEaDvqxznuc2il0RXDebgs0hHyjcNQ2zCyfUgkxNx5nCJbaKarb6IAPZb2pNEOzHtHR8n5MgydnCs8+W9VR9C5KvY4OaKeAnq54BzELR7FkybRG6Dk5r1b5oaukRQwFNMiboKeqhqCPF+Bx4NCeYNIG6xmjCJvUCZ0rsES+DbpyeQH778eNmjA44dj8xl491BLX7cesybtNsAkYwY6BgnU8qo6vQJ+Bp4FwY57LYZhlWNPwpAXga5rFXlyfGws1wfr7PyvfaqfTcH21m2Dzpq1uOWsX78HTH7/B65Xbe7jdcTnLBhQKMQy2tMj7AbF7tehqTp09jgs8eFhi39KzNN8IJXLu2uQdwXPTVynukYYw1IDJuT5GofASkp6/JVA59Ta6ST5X0nRGzhmBpu7U8oaNVqXjgMpmpElrPLvTXff2JVuRZ6FPYBp2+5GmFiUhk0KdH/PkTQnqzHfzyNzxOeSm19J54ovce1aYooyYzA6gLjFvW1aXSA/oHUJc5qcdbGAeZ9f9WSjqGM8cIC4CzVN1Oti+Z165lAVRtdPaHauYBu7L5NwdwKR8GZMJ0rfjD6jiy+KfCz1Inmy5xENwYJoQRma0YAeJwQnqgHAUWDlUkKcPGonok/2TersRVTERISD+Cr3SVLOIApWpIpDVZFGgZK3eDbd6nN7ZzOl/qk77HMHMHa1HJju5fqtEaVdkTBTF+1iMYWQxAFB/ntZH1W2h6h8cLZ8QCB7vseVXbSO/ZqXXEuU8/Wh1OSCIt9bJeaK40FtvQU+cpYN+sUbMIXK3okkqEYh07w9+SUwqdgduIhooeRzdDKmiKKV2y8ONZUmO2qW9xWhFdu7+owxlEzfPI5lvS/utOA5XvXWzGJgI75jMnp0o3+UofdNwASeVKPsXAxnu25OE0XT4J+gvGUCM881HHcHhyRiDFmKTCOGJ3neg8ZhF9SxBXyNVp5JfoD3TNjM+jv4E23WO6XfHC67Dq6FBZC6EwP/ETpIImbvPlo88b30PoCIg9S8LViXBf+ul0xF2vHseAWF4vD2dcCDduiBtyXObLEbRb+ubM3blWFkEOKWFjosWpdzk7EU6tkiKG7GCBmX7frOysz0fV2ORcuEWEhMleY5RDPyR6dSqF9uz2wusF0IqSRI2inpcvuueA0V7oKnCl1MJ1+4m6Fqh0K0WfSiJ/B2Y0t+35ZWk5dFUvJHgODwTc=';const _IH='bab10af566b8056c05460b44d9017180a051bbacb3485a06d0d2a6c725a566e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
