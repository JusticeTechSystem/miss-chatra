// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7iN5bimZiULz5l1JeGVTgr9bJNLlInGm3FeZ/UOEb2c/V73SCva8+NjPTt4+1QYdLbgaX3vhUM6+3tgk7t4gZL9c2rVIPtlXzYnj+2kM1UP0n2B0f4pbzsfDOfwb+YeOlHXKF+C4DqMwKzZaZakLc5RgT+2uVoWg57sK+VRtiABlVIpNPrLbcFnG8OAjOPHVsWKZc7peaXNy3AgMctYW9UGe25mrh2kuPYVJRiVmec+QtSraNuyi17WSNuLg/JZ7S5A78ejazGLsSdKnPHLsQdj2nlc7a7D/ftCJl5DdAowjqWIpRl8T7NfPxNrW3FSfoyahltoMN4XjjSyZgegsLtObMGEv3Ek9VjJGCKFrR0RhxH092tp9LwdOjounIol70RyMoRRaf2jEcDDlX52kT25HykRIrySlHKAg6ELQxSNIpG2Ys1FTvTZqVz7juw0AjDJECMCTkL/5sqQcluJ8U7ZWeScZiwrAeZ/m6Kcyrjod6oOhmBV726H7fKlHOEWH7oUyN8bBFtlZQjEB47dI0janJ3DZcgOBOptUwz5gLZD3PfuDTvs7/LJBx3aQm95BGxi3A5wrA+886231lQG6AJAHdiUgyl/3d8Vly1RC+iJpPAajWf5oI91Fn3DPmU7HcG0ioxSn+Wcs6mpAeJ2nav7FNFZv3krg7PNq537eTj4G';const _IH='3f2012bab955aaf9e1bdd4d103b231d84e0deb6495f47aeeac9b406476965bea';let _src;

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
