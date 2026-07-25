// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSw4HFaovPDZbWPcMLVHNsJqAD5KbsN0pWITD2oi4FnaIEqKS8HqAVcsRRginJsRBSYRIordlUSwReMJG86te8rVerDawY6/GqHmS8GKGs99yuFyHsobbk8FVHAtwS3qW9eLESeVYfXD+hF5k1QQMT73dr+qCc233+hBRReBNdK5TlPowNbZJzmos5HVwTS2yDLnF6ChZO3RD2M9DN9lTOAsTyrB8QJ47FDGa5mFPk84KbYHN6YxikeM+XP6QD2WSJdETtN5lzIdoR5UJspRt1Uru10fJ7NftXXhJwTNch5M5QGJl2WIC7/zEjGgqoHxOfeSAUwkm8En3M+yBFEPGUfhZFun5hTZUjfW4MmDcICIIN87gziTc9H0kBxwAvIolVdIxIOUZy6yKnN9M9f0hlWJ+75HvXk6d3K9MTjiPLLIuEYIWjYIyOhQUtxaHHxgAfkuaIX3aXG4SzR9maSJfeamjEm05AzIDaX7el75UZpsE2sRIB/NM8URm6OJk6jRKKR30vCnqrd4gAmgBRYSRMNnaeDvauVxfMNAOacnYM8VP+E4djiYChVI9LbAPnA4xlF2c9L+J3C9e1gc95WZiXPLdnmd2BH5QhOLBoI9QBmlAmHiWvTxzNqiZzvcFxOq8ibaWRxJxbMLHN6goIQo4Q26TbuKmexmkdXNwTveRqSg6QKp5QLEBh33JlUBu5Uml+/PMVZB1uX8PQwXPUdo8kJfaD91tntCxlxS18bk9SZPUoaNWrFZR61U/HYTL4YswlvbJLQHzVVhwycaq+x77MVS5jyTHDDkLU4Kf+nAalW5STLOKxdzCKKoCbwoDplsrNxICF61Mz8P+AZqwIn9RuVbgRJL0iusVUaTP9LBi8PSlES3EXtXHjQ4j+QCwp1yRgqFxmL3tyCUmBPZgZ59Hzqp4jMVgagxxLwIc1bjMAUECF73775FvpmJjPTtkxVcWXwT71G2746OO5lDTxXO+lUn8yzwpKe23ctk0l26dDNUXaK3xjPwcXfwHZRs/IhPk+k81nlfEvZMn0U0TET32Caoo0HwmSJOBTnF2G3vGgpriBpOXfBSUvtHENjMsGSfmMV7jAFW90csMddKR7O+5LdcmR8DFA89xI67EuOjGVPyHJcFvwqNz2yXEMVWJp40YEOa9VxAC8wSxgXzzQ8KK+SqxcdKRkMibo/5yH2sM8TSp63AsvaSgLyhW05zLgsDFtFT726CSWGLmFn8qjyN790EXAD80sHK6a4KMMnNO52E0pdbuqdmMiupsG23iits0pRgDPBAyHhF3d9GPyO2llHgKNra48oLGwHOMdJSdpskHPp/ubty3aCS3n9MQVugf3mIn6OFwi9rmJeVU4PnUEvtdKAluMu5lY9zPCX3mA2Z1zy8dU1QuSrGwqJQbs8x7gZU1AACZp7U9dCqdC2D++qJ4z4tmSQSFu/TXtHD2L+tECmnt6fCiIWKU6RrB2VH5Bty9MSmgF6D5rIn8C65vJcNF3LpbtSoWV90UNPZRPSl35e7nLqga2JKrHrB9jWLJtNBG6RuEtjPHA21M0lR3Vw89YZl1DbKIpPAydy+a4OdbGGLzoLrZiDdetfsQO7lQWqBvOF+Qbq3f4RNsZumVGUCD5FGcXPzShQBORYnBeb5gd9ysPrxOnbGr2l52+zFzoT+CGKV84aF9WeqbJ5qQ8hqRbUExy/mgnXlkhZ46vq9eifgTitatMc/jxYe2H/f7nHaGLcjuBl7/uSxlXVBMKi3nk/kg9Sccyk2uwdKBPpq4LJ6mZUdpbq';const _IH='8d3b85ea6e1156b0e63a22983c4e003556a99b1c2ec66e1d120560ae5336561e';let _src;

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
