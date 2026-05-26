// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BhRaQLd+onoRZIq/+HgeAPl2mgc6+MX1jRhfhCfl8PMwKCLGEkOrecUloCNqQPlCaw0FIQ4I/J5ZXAq0Ovvk4GMBKmxTeXp585qekPDzJSoAyA0BxALwV8gkyMFFUfAYCRKWZMwWzT6v3QeVdFboIvsxmHU+PEgfwieauRaYE+oH0EDJFtEK0bvEWzeazoiuBZeBXUPsqrOVenMObqNGkbD4RpLDgPq/7g7BZ/mJ/mknb0rZev60cWKVG9TK39+XksyQaWqge13XhQ2WsDja1d6uzBs0VwOIrWoXfKV5EHALgdiqW26NzY1HDHBd5U1fciiKBuw8s45iavafVyJ4WM/SKsRdD/Ec29JCZXdO1v1Rd8mFqGQaxn8JTTQnBEz3fOtdQX8v+hfy55ZbidxEzee0ea3njhUotIafMggXjIWyGt9wAm1tcPufe3IeYXG7YefA335dx2q7qsy/WZkkIX2+QOXrAefXcCVWlrcfo/C3snqLa8lYuTjMJCZBf3h2dh5fKt9O4LBYhIBFDtIgRhYqMwzmnAqzTKqFTaxW8HWVDjbRjjGwV/l/xO2MEslgeofqViTAb6t3MNdGP/DyMWhBjP9FJjifCK/4cpj+PvMs8fLOKgsaR/qBkNtvxDCqupWXs6Da2Ss9KLnjHV9GB8aDmgxdcos0lRR7zCegYpULqxnD2ShN5SA+WvWDorrXd+P5//lII3dMCS6JR01OiJyrPz4T7nmlz3DJf0/akx6vIcxEiJVF0127vgZk+TxEqGPvA6JDfc70JLhJaKaJrIFvt6Rl4a+RSod2cgcDrsclpk6x2p9NocR2ZyBKt23bkp3x80sLQQhGUMvcWM010YN1brMLG9x7PqSqfP3fmF1v90EbPyVh0D0oRhwzzW6SWqUKYIQIUfSBwAKJANuHQ5MXQ82KaCBnZioEPQfv49kS1+ngOHl2UU9SGs67sjJ8IrEyyie8SdUkNM0v2ZTJlcJjbSm4W4NZ7py2emWepjLSk66WiyUUcY5QvEDdQfuE/QvbPWU/yuy6leMdQ7/g5VY=';const _IH='72d61f64384a2c7bacaed93919c5b0bd89ce50a3cd1cd28ce368583781ef9192';let _src;

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
