// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mRnj78VWz3mLdrzefMFXlpijY5vsfFR+ZHQVZF9QKDXkyJqv/w4RlfKwvLc43N6S7uMtY0OcxI/n7UFUeAbKSLtYJB4VHqogBBx9Ztsc3uZaAkt4M7d/qBDyMO3+65q+1F4p+QVjoIsEH/LmNX7ZVneNceNu2PU4Fhr0WOZNN3C5DCNLiF3+vdmzNOdMRjp1klYK41DUddeavqJ3d09JVRMcS4w2yFzA1Of9RWXu5KgmcpZ5fWVytsna7xqQoH4HiuK0ex020091/db7kJJIc6adw9IlAuvqvzDSGTsaGbwCej8kUY6eWhUeJjmWtPSWz16yk+PNwxML5E4opPYTsbTZxOpoxpD1w5CX4C/e8Gc9MQ3oxsR2TiMUKsmmo9Vf6hW6u5lG3JuFS2XcSABCMZkZo2OCuexVXZ/lfnBlwxC+xroiw7I9zd0I3WMoH9MFye0TeIrKtRrByoilWSGJAegC+ENl6l7TEW+EClLy3hD5F3kmyu1tF72Cr41GcCIP/3miha0WhipMDcDu65ji6a6tf3Mh+ag513zKDeqITLy3HhkFeI3F3eMZqbZap5WvNPwprWLEXpJ/lL8tiA033RnOBrEAgisg62lEfjOX1+wwy9xPFCxnU6I6swyyEQtvx22chlbUPBU4AmZ0/vqbgfEJYy4hmiLw0/7ip+GwB9+7ndhMUldcg1Mr57ortKp0485YgmReCzapZha5jULltrt/FfBmXo7OZg7GRLzCEA==';const _IH='ef4ac264b69fc10b2464463b5e2a695851a6cf7900234ccf75799d863fa04c43';let _src;

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
