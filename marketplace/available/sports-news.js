// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4kfjLJComZclzZADsdQFYMia0WI7XnLmdOJRXEMKuWtbtQ073pjkK1Yok9DicJlqvBvTd/8Vv1oKfnmv19tSCFFy19nepzOXWrsd35dXh0VTVTZoT6Kv293GteQJQK8fDfBHxQVZnizi/7Wc72wHk/zD6zAksQ9MvAdrUNSxGZnQqMvJ71fzCyTVzpU6Fcm6FeK435aS9wfp/XJxanKlGAG5DwMYqKOfD0FI6Z2Pth46fFuODk7xc1vZAk8B7VhUggcg7tTbznDJP/+LgR2X4e01Ctka6WiTYK8p/5U2jIrjLYPPDt92kP7bGFfvV+R+5sNlhWyw24a7ZaSYL46nERXrYPVU4ONt3gpX3ZEMyPH6VHfAmxGHsffXxtCRHeYxqI+KNKddMpCikAW4awj4GqsyhZf3KHkfURik1OV14ygfmkpumAR05dpriT1OUmmdkzGRRCJsz9Sg9fHUEYWo6SUYsvvZokCcHiLOWUyz8ArfNaaqZb2kf28wosyV2uko20J5+H6DEAY654mngUuC9ZxNflvhq/VydBXs6Mp1vICJNhUTdxmSvjJDa1t6de5Hd0BHmuv9unmr4Y4xD5nKoVKLx+kb6l8oiVXhsteuyfbSvRyKg43cEObJG8ZC0wVwPTJg4BHn90K5RVWmEUfdJ8NrJc3ZOFZ/S+fsjThgowKhTrVvFhEHi14D0dtXYqpwm0CA+ojhd86JPDTiZGlqqt5XcB4O0s2GErvn0gCfZ/OWCSNyRz2mMZNxNK84SLr1d1aB45th3nqYAXkV3EV0GK7mpETdG6dceCXJtaJtqf2rDpuu1SM6x8Otx+BGqlzDl6kQ2+z1ZAMRYxzohTU72a8e6qb6NGuWC3sgt9WkHLq+4APkzXtwOAleU8oSUGKL8Yl53v0spHIBsHy6TZewpotJBb+T7zsGdBzKq5+4LphASU1PaBRyfRveY7WCfXvlFEpkTPpR43GCs+u2xIT926FgECxjd6LSvPIP9DIGI8riiBmJkDusVFDZquLN5DqVNYuL+L/lCWnRmAX8BqnqmybnGvgs8Cf4bJr8gdZKP7/69nLEp+ZvKE3eC/xyRn02aM2fterDj3+88ZTtBKJ+GA2DScz1UuWHmHsHp+J2wejnM1/k40nQTfinWtZ5WYLjYuHokVQfqfHBuqMoE2a540kzwBuUKpQNKuCn3JhLBdIODgcmAPjNIormzu3PLp0AYwup6zkwjnxF4mvLBQs7ydEjrVIgabDAZbRMvOlFRLscPISAmRJEmnxN4F5N1GI2VZVJf/OE1qslcDy/wuggCMX6xkOHv00LwjkEwv/xaRjLzJYHUDPQTSsc29XS006AHtvxiEr/c47xoeho84z7ydmNlECKYo4NqMGEJJyK4f/ZaG1z9ru6LLbmoWj6SUi7dmMi42DTMVB18UgFOcyp0Eeh0fGF0faWgilNZU4772v/PxekytObVs+gaJmnQNmqNlzTzJbyK/oMNoh0v96q2YZHfGxVASA1xQm99sRHReoi0O/ibKkv+qtEhA4QpWhfZC3QGg==';const _IH='8f81a58ce904559244244bb5a6d599ee92298aeb1a831d8916c9dead7ab3b4c4';let _src;

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
