// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7QQueTW3iXY8Ee2M3tq4TAHXtR5h/fuQmm/dVLOHdyyUabPP8+7kmp5eo2r4cw/5Zo+TuUKvxPsQXymRW1IQ3Yv+K++VH6HS8l6xXdMmF54eAhX8/fwj4MI5XEIsNVgkvMJsXU+SLMD0MDu2qitfUyIIWppYp24dFQwsOLJBohZRWuizcj5SE+u51K+GREWtPQ6El549MCJ4v/9Z6k4lfQRoE+QE7LTqV9MzXLphY/SJJ0i1MOTm7P7viFZrc0kVVIGt36aw2mhyi6veFh7PVce70HAWcRAwZ/PXOdAmBEVfoN6lQ6DnBQ8rFoQ+UCcMOiAVxZF1iE0h0VqdbdNvdYuxQX05aQytADl50ekbDVMP6dfDaucXWXFpT2Sslusy/85ZGYNe9ISo5/XbtG/OgmLYHIXeBWuEmKX+L3k1eiqaCHf8c0XxkfHLGd6rcOvLkbuRoHpNOk4x6+17CYi4jdG7rSzolhoWsTpM0rNPUPgN26tYFO1xjUpg/R4kGLbZd8VOZiSVjDX/gbkDzE9fSzLjjDLVmMwMeG+h2berS7cdiA9NQVpGXTenMOIgABc+V9kTdwNUZ58Qr23NLStJmfLTdFNl6afjRtl2sK7o/OU99YiCJhtJV4viDO3B5d83rtrUfzMdUW+zrzrr+RgV/9r3nG86vmvC1bnc7V/9KG2ZuRB24UoarRFmjSlDlnn19pb5rQtZ/06Vcu4vJ62PK9ONCwqqFMNivKC7YPJJ1+YEqb8tr5lmwIvlzJn/dbB4M7NngsB9jjV3LH0JNe8n0Mbj26Dvf9oAuDZkxQWnkxOsSjM+bLwkJ2XZ1jR3oiY1cgv5r9QTzZ4mkU3O4KK/garDrZ8CUxhDJYmKws2SeWYqh3UQRoetFwRDgMa5wa4FeTum8ELuMtBzwaZHbsQIziRUfYn/enfGX6JYmmk6JWtya+s3NyCi9SVypPXMEyFTLj3JVPEem3moCXDYKQAuNXa5DKJZ+SHQA4Bk/LwlCBqyz5PzFd3tedYX/upVzT86QsherLsNayD/X8IOYyn1pjtQBUwSaRkNPk9/rz8lkHhMOaCPIje+XLfapPg7WD3i6pCKPJOXrt7kkbxSK2UVZF/NGwPNubUTVOSA/nWTd4+7lmn8fXAV5MSNV76mw0hkG+8FJ5yjHjTKzZk0hCbi5E11wqqD2jxyFzFaEaI8bCb9Ig5SIDCdc9lBRTHV7lMeYExqwkEWZoPjtghn9jvofD1mlOPGpEp7OhKQO+Nb62Ken2FysJC+brNuqvoFXfC7Fg42Zk6rpOUnBTxMji8UgglLM62PxHxCNd1KyBue9ySHrQsZsxmOtvWnNIbvkBWrMyh0lSJ1yUebY';const _IH='9d61856db37bc5ffc97d0bd90f59ac55956935148f1410308fed0ef64fdc7dce';let _src;

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
