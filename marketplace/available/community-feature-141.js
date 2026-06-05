// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f0LQG/uTMhaDKcwAigX3dpF/GXsJv5bgaI67WSFeAwTQHX/06TolNngM5EFh4mleKhZqvbUedQyEGKptK9SPxbbMfRGFCIAzBWI4phvLwiW6lbvg1PNUdwqwtH19pbLK52KD6vW2cILfdHuUjw/J77DVAho9zllq6ZduDwQ4JWjLCByrvZUXVuYMoxrImXFOPMNi31tKMpp6AhbXPYcds0MerfbH4wR/SRDyRscw5/ng8h5/ow6Z0psCrJZzJQNWf9rwcRCiN4xXHRoCJYwA3MRPgONce2P9DlYPXc8SUrmuInAsNWiwO2uaLEi9HtWsamoanIuG+H0Yfj4TxutJJgh45PhDWHxVw+4vvbpNFmTsnUXfhdiFBwf3Jyl7NKI2caxIW5/LMRQuS9Z+reFwYFbinv9jaAUQyiN3jNoK1KjSRNr5IF8yM9DarY43jvane+ZMWs7eT7wxQcZbf8MaWIfoaAeTgl4yqi13xuZffRkq7ZTivoio/ABjQLz8dyIAdztmx97luzpXaYmgd/WbGJItlOiPoyURut2dR4X31bVesBbvXAvlKrY417ESrcQy3YyORPbl8njMdY8+X1wcPIf0pinFQOVEDQC2mfePW7FLWQqbXdmwxCHtsHtArw4Liukx59eOKRF/iNqSpzxR9u8AUChdzm4xEHGWjNIcFk+cGFGP5xvZmF39E65aU81hiKLnwyiVfK/PBtUe4NluIsvZzRxuxbnn';const _IH='f30f3dba926524b9a4640cb6d2c59c351fde4e2e281ea394ab67089adb06cafe';let _src;

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
