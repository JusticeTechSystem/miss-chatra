// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I9TJD21bNeHaMVS2EdyBEMWBhNFF/016M7t7/6oQuBu+iIUU3+kjlIeyUVqddf9zMHpJGj5KpANbe8rlLcEKFjZrlmqpemCcMcMfbPYyT9RkW1XIQJCwj9fqDTVKI4uWe8UZ1dtptMShOwTzKyUqLpsx22sylw6cWmFfNfxe3BnecbjI/biUkAqBSoDut6C+0scFTE/EqPieFGT7x21bxDUO3PK5Sxu0pV0XXMochkTKsQW/j6x3UlIjLB4DlTWq7iJBqBryEpt48NNqIMo8BfXTHBlZMyvwSkeI4sfgq7A+Py8vh7Vuo3BRLKfpZA2x/dOc7UCLAHNMdTXC++B8+RpMdv2W7qu7mZ4dnQ5WQJRT3rylwNHoe6a9zW/kKcAm8xKg1qr9/C5PB7L9igpIS8Va5itOUK9MejMWEomDf83V3WOVbIbZwMZ7+QSNuCguC+I68F2mXQWjlnStZkT669wCqy2FMcdFrH5YlFs27P0dEZKJlqBn3cohvbNJHt2+7zHKpVmzBJrWWRvcoj0hW6mmkjkV82MNjaQvtUPa249BwpB37OuKkIPwvWLwiaSO3Mxx9KApAROXUNR/MwXZKdttPguhIuppaV7DBLbt4gnNPvqPFSDHId0ENfaeTwBHcatMqHiJIuTzFHGhNkvnlYn5JK3YSY0pjjpMAQ+4QsfXFg40UmupYgXVrGF3i6g+Yuk6CDXGYXtYtNJaDk3O+Z7MLJpwtfa20FkrhrmwEg==';const _IH='3790f78fea048e962aea339ce065cbe3d6f5ff035fce1533fcb455e58b889efe';let _src;

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
