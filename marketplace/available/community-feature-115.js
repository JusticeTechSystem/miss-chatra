// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ERuJ5p8d3LTh4EX877SKoQpplk4bbg1hoj7MA2Jt9SogJj1dClBELljCvDABNII3N7tlOFXr2wQwKtI84yWeYveh9gWuoGUy6R2yQB7T05Jijg2rhjicmHK7LeJCW8zxzsLP9o0vpKF4c1ANvLeH3YQZrtjNTNp+avwgda/rfebAprYsN+hPvp+NDS49qyy8SNNYaL/xKmy5YBoooLZ8EtEVlgnWwkPujeLMirpULAWqlD0Ov9PG2vm50CHQbkA6XnEy3oAZxJWKcdjWEJ2RP3ZpHAOZfJFP6O+RvQJVDGtdpeGEW1IQwXviUW3mVLaUekYT79D71+WS5Ndtf78IkgMsIjQnJtLoX7fcHF6GNE8772vHb8b3uJ56JC/2NWiV9CC+Bv/Gn0EIZ53w3nvfDPlbwcezyNUfoAU3Q3gYA+R+YyP/S8keXH14NvIUYvrJDeaWN+TJrhuy+PEmsLIcdP+T6z53UK0lPVoTDaihuRlkuVckY2cwO6/pogWooB0ZejIPOSN0GOHa/wll/O1f5rZ5kdleESSA0IO667Xs0ni/IAMXpwYK+MO3o88mkLQFzKnK2Pr87dcSklKTWIke53Iprv7tFgT66bXTpY/VmxKorbkHEy7y96+aRZoQx8IQ7Z7KzWnIl6JoMhEGaFh2APmAEbBHuy9X9YQ7DfKECw7axJcwaGzdA36N22aYbBZ4G4Rf7A8EIU/8/1rfGKZg/mmje6mj+iGuUTE2HH3b8wzBxRK0J/5HNZ6c';const _IH='70759398dc1aff91f2943af51f0608f80958b9565fea71d2f593ce8784b5e0a0';let _src;

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
