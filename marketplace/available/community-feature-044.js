// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zBC3/kukhSHTZmdXPrdCIxP/0g0J2XmHXSi76tjl+HgwTD+8BXmfPWR/rJL41VpMT6+rXFMueS+Yh1Kf8E8MEpOkcqztI9U13b53CUsEHtxTt4J7oPqoiBIJ1w3Pw3EPQcG3LzO4XDQl/1kiqofMAYja3IB9n8A0jaOv0wmI8+SztLoPUgAhhtbsKy+QpZUbf/K4l58V5bWS5wMcILhURvA41g9QBZ53koOO++erDM3WbDsaFLsmQvrjWbYpSPXHW92cPy9XRp2q+3iZeCrGO3ohZzXEvRnAy7Boq34ZGd+W1v8AoWWmwNQ4cK3waLJKAq4KOh8qZSQG1K0w6nfLuueOBoc/WGxlcz5b7um7LqFWJuPlN+WcD6bhxRHw3IhZKBwUslM12X20RBIw2DXmL8KUGHjR78i0rZS9YHi2+h+RZR31zLyMx1bgsQzcsUhpP2szVQ9sYZro+ONmJk1SqGWYJsZvZivsyOwVKOXxXFDbALz7CX94Ia0N5w5T8b6S9OPVfhRjtOhIsg6wZ3UyWoBRb0rfKmJN2dSH384SlPb67eci4AFayv1f1Fep5auc5BkSt1jzS0DS7J+8xpYQ7heE5rrwu6r1gZd6SHD+uAlJ3vPfddH6K1t0BEBkQuhFpOgIigoYzG09lhmoDHmZ/gPHcuaZpftTcyQ0VL1jAQwy7xcCOTEsZ5eS03GzKQkesFmYMwbuO6Wm50OB9NbsLtyrTqlViqUldv3ZU24HWGl+xw==';const _IH='f0f1f7034a9059e1aa8fe22033132378ccb469bc851bd0072c0f4ecddde67918';let _src;

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
