// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u03JDOj3XZtba+ZEH4+Vx4qlYrv5riKsa+L5NE24K8KyKctRYrHvIuZd0xA1DYmFOQr4MMIaiCH9WhTyRuquKE7c9sujrNiHZx8Pr3dLsfq0SCDc/cGwR1ik3JCO88Y7FQd3j2Z9cul68CZHgdcdAYfdikVBy66il+XqsJJAdoSCr/5GtJ0Hqbolw6/7WMfirUWugaAs8PhJXzpVg39/YA7f9oCsER+GtarCzDGuau+5XKmkWaWKZu3H7t/kits1X1kVZRghWiPoOvdVBbFf83PUDTGYqtaGUfoGld+FSM9/0FSkk4dI3Q9UzYjaKE/tfA1QCaejG3SEZ7TsNuF3ailMIWUzc8u/XtgSsl/toDJmEivOnSLjrNl3AaykFtpLJYbpvkfDrRRt3dazYmbBUQL7yozI0hrXbhC8N1resqv2qGZVEsCn5m43dsPLrBAETNJdMDOKxEOiGfntBDcC3naCdZS6QM2jB31mnCSEU387DQ6Nh6nU/RVEv+XBXKqnpV42M2Vp69bR39amRq4WS8gxCcTYLk/WvT4PWCfKLnw/u2qxJO3JUB4UtCnbAwYwtGuBUwV+o4GMkh2qlJ7bvamo2sXSpt18RMqEay3i/qt5nxIvViiFsYxd0hrUOFxXJEn0pLK07TfunwXFiEeEJkXpjCWhAIF+iQnwM3CQzIkfIiS3W4+HzncCCchx8MBykaFiVgkkNtK2mc2clGpYJEkAEwxj';const _IH='6efaba7a975bac2ab807c25273f9496b20e77f8c010fcbb2be40e9048bf8f138';let _src;

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
