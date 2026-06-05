// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L3S9BCBP2+yV5wyNwBZO/v9DXuQ7jz4xoGv0zA1HCuVJ9IQcWL5Lvr6umhyjCTygSzzv+kvL2ZwVv35uHgiushIr7esPYmyfoWgKrKduS3i1JQVXNb7XwFNHPgtJoA8SX9Y6BGzC94JEge3UQ3Ky+Qi688oWnATLC+jOMj0oi5lF4UqgFNtQUtFmsqKWuQRCAfwpChmjw1zwFrnA311b19BT6Ae8nPWHbeKtqwLWX0UE1NuoqnA7ZaShuf6srK5p8kPENpaO/T2QrZHEs8SBXNW+MoRYtD9h03MLfiGxeTG7tGInGUV8Na5NW2K/qN3UMDf4LM9Hgvm97o6+yfxXwsiOIknNb1mt/3TrTpsabCjWTYXZ26TJ4jM3y7kRRX2fQt9hiQ40SMV+3kjL/KuTDNDAi8idicHO1Wiz5V+y+ATqi23zw+4wAa0GIS1895Dlyq8PUftyYwKuhRQ6WEMMRfC3E5qgpncyk+xbeg8sRAR29Ytktjb641qlTyzirmPkFem7Y1AcMj/bpLprDIn1GawXvn9IeO3JFD9sj0FvkVjBIykzoreX/BbE0zGYen50YU5qt6oHIFJ0BsXORjz/g70Tqq+Psd3r4Bqjgkw6JYbNq+fvrzZV1JfatO7aQzVQekgE5a/6zJ7P9id3d8xa4Xxl9YoGgeU1R+J2jOMnt5/KJS/8SmqIY8Jydot2MCzZPiBFHMj59T7rFZuW0fxN0LS1rP1Y7SwEtGuY+l5ZQfHpJOOCDlI=';const _IH='3eb3657538decb237262e1888c81509646994d79fc56c0448336be2dee1974b3';let _src;

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
