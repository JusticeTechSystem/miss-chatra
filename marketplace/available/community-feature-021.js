// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTtPrnDKoW/3uZBI7eEqoJIfG43ZetyiqnGN/YHwAj9CZFyFUjMzJsBEr/CpgkQZh9VO6ch3Ahy3n9zm7GFy21iX2mZtFR9Qam/PsJ+fXDe7Spb0MJ188KpGuY6SpONRiNK4yChPZZveYXIytaUR1EFxM/NMy17Wb004A7xVe07/sB2quxHSPo5xmfpFMzbr+cDwXqnrmRkWzL44EmsKn3/BeyGfmI+RmHcj3Oqw269JAYNJJVBaKn3I5nQ42Ay8h9SPo9w/WCu/L/xmqqzQXNWocWYdL/g9if6Klho8iKIZld2es+7c35SzhdpP++l6U3rWJqi2IToTkIsYHGqWjcIikA/SVrDucluGgjnlLKYTvGzVKTOZJkSS97nV/PWtEwLV6ihfB+/2LOuxBlh1DJrv99chFaZFbvLuyZxKmGt5grO78oHrG2HoOWai308/E47SdNJRr9tdDDx2195WLJJxUVhwtIlKUhMqfYkNrhBvrAD1h5L5wD6w2TgVzPmbfKEbfIj3tL2jCk/xDjwdMMdzgZynOEXUGj1Ruq+tboldvLMmUD8tNqbj2K9GvUhhhawSiQZkMVpl13WdjcwCBVG+7jyYOKF8VpBD59HaDujbPCFV1EGLFlbqe96edy7uryKxlcjDhNalh1ErX2N34+isiohY8OXuYzFNWlzENm6viL6/U2iC4INOuF+i9WSvzWER6uf/LKSKDnOwT5LnBSqEHMvQ==';const _IH='f86ee2fe984faa23ec864b9bb522659034c114bc55a49fc6fe047012f2ec2647';let _src;

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
