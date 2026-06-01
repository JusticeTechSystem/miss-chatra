// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1A1iY6sQ2z0sPaRI7yqFZxJN4F1QH9ucBZaLChrbJ8u57jC9ru9HbxCwI+wd+Ea6KNknbT4zQ+8unNnrohejqpLgPPRTmw/1Uva2J89V39QTNS0eTA78AWnD7B0tSw67l2FHGCqj/7KSlz79OwUN6tcWS/kOkVg0yZmikkJhAZ8R8P+vARo4f6dJZDLwnS83hYZP5UQTFBx2cNdzpWOzjK8RinMHawqaDkO17uuEvKW9eHlE91l+ngASye6UgS+KRGE4krFzQ6q8lLUMz0C9G2NwPZNoES9tcAYjxS649rFoOzOoAJ6F/i4pLLE4itYH/OwyGvNgU9q0QdPQ4PtXpFtpy/+Kclnx6TeKHJb3MZFeI8B5L80XVy5/X1WshAs/m8mnMZhCTISNPEuKpZjnFbFkjc3w22lTiUc5OEkclMJFnXr7EgaSYFDaWlHvNgOUMUInaGHJXhGHhg/Cwyvajw0ITr8wo7mvtzMsatYoOlRz8sE+V28xFoHvGnw5iC4NakF0v2jwmMvCDr9SLxaGCc/19KXB/RGekXbVUWwt/tS5bmi/mEWRWrPknJKHqaG1XQzT/twG1+FSrN7425EeLCQH4XSHD3mwVIwDW4U5DHT+DSgnSMpj8+Qdxr7boJhKTH94Reo0TAukuLaa4lEq7ffCGKTg3SELh6Jk7emInis+oE91HBjyKzLTjXvuDZbH77xZNUOamaM0D122EBMbqw8rDc1ZNDA0w==';const _IH='4a1d9e7e6019216368b577a19079198e015cf649baad9f9a5f92abfbf07aa87a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
