// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6seQn44eU0TYVMx61KKmWlUlHU7QqnH6J2eSc19eEppHg43LOO2HlxK2gDCLoMg0h/oGZUCXmyxit+4LD42SEAhD+jHljohLwzZf+CgMdZxGC1x9wKqJ7DJ/bV6SkF7GU+284dqxUMKqdiOZ+r8mRAt6MWgyMWX0NqAfyknynDyJ+zlq7r7YaZHhsRM3GmBFzdPVkVjARBdIu50uk00dXRvqyr2JvmhuU+PfFXsvGcy3ByY6LfUJU5iwneYRZWh9KZjlXZ+aSi/HGeMnRbmeF22oLL88V9SG1dvEL3cPIfEq9mLJjCaHidvaKwv3z8UbUoQzfNtIQK+wk8RtpVszC3GSzhmRd95rgLXo9BjpE37YYD8UCOWVPxpJyHhKKierSingoil0em3mZpt0Z5EogI+ujmfwoJVGTuLS4mmttXDZlaD7Rler6OlETeAHO4xwGDHoWaUtZ0XIRh8Uz/NHC/pWFTbAEHS8rwJItacm0dy0yskwFktC9enqQrS5EeAUZ5BF2HZAyZyOeVvhtHS1VKbkN2XxzFW5MwWcxMg5Z8C+lqx6NpEmAOEZRJFDgccnxWqh4tbwo53Lig3zlC3VzhdR52naEIH3hCW8P2H5uDTxYuO1i2rnH6IGb7Iz3jhi7uVSBLPdY2ziZf9QvTC8NhsnRsaWtyI2FiENFqRMXvCNI5kainAKciIwgZKVHabL/DskRBTMyWYyFrRNYhQdr5l/ARMNdRbBu4e8mkSsjbgMYdDGSnSJccb/6eswG+iXWhE5S0wUiS5CJ/PxIqr1EfrbumWJ8KZoQQ==';const _IH='4d979b56f00a71dce587c9863c9252b66c39663e51d39607ddd083964cc78455';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
