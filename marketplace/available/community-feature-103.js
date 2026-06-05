// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QKi1v1iLbJmGDgI0Qt0TIttV3CStNrwqxXp56otmUh9CBa0YSHQJVjOnMs9DNRc7t95RBRBDB1oxV+e0QcyF5s4TQA6R5uG3LppxNeYy9ZnFXzN0/ia43VYCehY8idiBt0BHUgGjcRIJP77ara8txXMIsF6W0GDTfBWADzJ5GbumoDK/5pbUiu9dwzvACcCKa9JylhF7ULEOk0udkZ8MtX6qdPYdGOfkd4r7XYz2mlV4ijvaaLY3MXuq+xsHrW+uit0R9rMHN3LXP3wzuNKuzwiAJzTo0Dz2bSBVZqChXpYe9vKT1DnR+Co95Uk4lbFUdddOnw4JWQAu3vZgopawNzdYqU1ql9HjI91MDf5/mBLrTysHaWJAqXnh0beQUxeN9KxEYXlvS+70KW0mADE6yX3+NyubtgMXIgbB3lvhJUAt2fwKFe7BWERZIdIVsDPrBYo6pMXKAedQmG90Q+SKKBP+1ubfLCRX1U4Qc6C6fhOicsZl7uuEQ/fHHaIcQAaNmHFvomI8p9Fg/pgwLf6jGBux5umqOt5PZxqyuuqYrMo3IMl4TqLfM5JLf+pDPnBP4VPwdbtIqJX/CSg/eRDqJ5D/32lYVoWgdZhfUuv8a2/QfjNuoSslLwuvjQ9JX6LwE75InHBW1OKKvHe09WxBUc4Ld+CYUTShQ5n9wrFiGiujQ3uQHmHWQlT8FdQ1EpdPKUfKjg/7YMWG95ylA3P70g1QgWZnAy9y83WuiBc=';const _IH='0163697c31555f0e9539dac50e864c24908aff26a42fcf7e9431beac45c5a3c3';let _src;

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
