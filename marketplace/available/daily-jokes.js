// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIev+nkDid8ZLqFDKlrH23ExZTQh6hhWgq391tVOr7RUx3CM2I9L/2dCwKWp8FcmRAsGu2PBdEiNPVXHDdcEk7by1pXwGpZHvhwUPXCvwjIn6HzXgM9H74L0Q6O56/YQwvlLF0QDDkdFIULMzGp2ExbeW9bQIcpiOyEkFTtCN+wltSqZHPqKF92ytZIHhYMt+l6sEL9aG3T8a+QwKeB1ojjHJqQGZCOY73pM3TAuvNwmPNuj5gV1Ec4zst49ETDq+KFDnNxlgz0KmwhJ7WtKfzXdR15zCTHnovJSG0oV3SdVCGNicc9iUCOulbUxKGkgS/2//4TUQvPU31lSpYFRjjrFchfSWpIQ9aNOSo0Gnabs+I61n4YBZIzNVeLLogwdkS8ZvRMCSjMTS8CQp7GXIMqF7OvLARCe94i/v7hW5jijvAVq6Sk7m2+6ZTjLlbSTqz/DLyeb67JvRlW2gRxfmhJR8L4m/anRJJyRgD3UMqXm5U5ri3OedRtgmV52rFaUAWHLx9tbbdRzmoGziIlthJNqeVS7B7FmOAi5blmiiVkDp05/uc50+mpmSh9GXl3xUMoSYZUEEstdZv7QootJBpbpXrw5P09NQ+9jT1e0C4cfEFN75fuU+BwVbBDcLzAdZKF155I/BGFBjbb9moTjAjZSnBUaV1bU3R1Va6Lx5e+Yr3GCUBEPFfW8AbfLsyXQ/StbjwH/Fb8cQ+FjKQ7y0d90UKnuWlFJ+Xr/H7OQqN9tIva+sB5MO/IherfyFFUyuDty7r962jGRBpi39UvP8F3M9mQtZFq6+Ry3PO0yA3rAK0k1dPVrnDxQgnIYgaOXc8/+Wkiy2Ty67j6OnM9GSxSmi3LjrZDUqedM7dWbzNV/q20sd13weheKQW+jCDcbLwjuFIpCQmrT/D7WLKr+mDG920c9oRarecRko+KoE7JfB6E9nWKVX93IWpN+rFs9rRkLZaYrOd1pwDvJKX2mu63KrSZCaAWUyg+E6XTiS08P9140s+ZrExuOEdA78CHL8xdPLN8pIqkMWlvV5v2G5g30PC6KMPIjgKFissybwUR9z6t6Mkvgr5bXFkwyyp+tEeZJmWP/slEfGA3ofoxdM6uZD02chftCLPuGjuvAeRwcKOUZYDSb4KEaj+FX1LkeqydouLPkOhpX+mgdY5sP0n7Y+zyFJ6abcICgANfDAQQVobHnH669e9clL3t6KVIsMo6TtfFn+VXm1WboSEZ940HNHQ4aB1d936lgkzjNxIe1QIv1ptaanpAU6eIrjqmKcNR8lKV1Fvd+vhaWoIy2tygQ5pxx/VsfGLme30cVleqtwNF+UilGNMijzEe2iPWpG+hanl37F4km/duXuYNL2EQujysbsCqh4iCzVxbOxnFC4s2zAlRDLOSnP31OKzWXsmdCyGc8bVP4pWs1WAVRbV1UMW9tLwYND89qLIJ2nK8rC+zOOeGyV8fiz4L3mn2/OComRRo96BA8dz0QKDFdobkn/iC13sfSJC6ZUls95Ih1WdciLKAMsMnlPOai5Ob64Yv9sV/e3dKL+wdyUM7oGwVyBpWvKmVlH84NDX1FG7MK5IPJDiZeagrhhti0M8I5BIBxqvFIV7fp33oJQlUDc7Nbc8pSqqIrD0rPxVZSe1VYyjrGeRR+ihSN+5EdX5bIatDq/VkgHLMcUDDeOvA2dzuoCBisthNjYNziqv2Xo8W+TxRmMxhYM8ZZs+tqJg9HqiAufoE19XyvqxjjN7fGNSKJtILO7MbXHZ+WWq9JMoKJ9OGkI86empK7s9xw11KRXuzvTHR3YLzqBX';const _IH='46422d55fe365187cd3c020c920365690692b6a24cb86b615d74df7516eb4620';let _src;

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
