// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LXED0EoM4bYyGyay53ttrRRE46bOtZEdIErQAaIf0RG1IzdcXyrGpDdAa76FujS+2AIamCuZ+rwN5KOfAUfOiVskzcrd+B3pKOHTWvmPHrKBQODqJdg6+z3BU9IEk+Jpch3SY+8LgOMrEMHz0kB7yaD8fzuYkZQ7Z21/X1P9t1Hn9O5h9iZWvSeVo3KVqqHD5gzAq8lGvDvv7IhnwDPXrTHopErlnBp47l3wO6eTiGi6e1a8obn0btmX/kYY0hHMoKCnNgOqRITTcHXJ5j4IGASfgv+SZZoqCyxeTWRUw9S7pjWJtXHjk5rjtEusgNYJWngVQpnqT6rh3EXvC2HbC5bKSKqqEYttO6LbqaXSZG3F0LxanGecsTMuquBNv5ppzih8t7VJg7ofIUMRHjpJE++FHzw5mA1XgLiSvBS9jcG+VHnsVIAl7l5won5Ke3OJrov7qrnU1d34v3Vc9foS3I9/N0o/sv6QCIbSIdVlDEmANAumgAsHYiyp6vTGA/aStPnnFTgI4FHiXYLLS3UscYvOdCoZqT8neNeJsPMyFy3ZR/kp7xtNMX6lqLzTe+4lYir1ex8o23wIzh8hXGx6R4X65BM5pfgTPrn5qAHmWNrkjFISAzfBHT0qVA8qe5OGySQVzoHqxm9tTnBMKwRub8dL99FMTXknHrDYWgO8krPpoj6HRZw2uL83mUUo+0cOyAQjJBLg3+A0u9g=';const _IH='31abe19f08127039ea63468299c3628e623d68fd4daa7be8baf41ff98f9db933';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
