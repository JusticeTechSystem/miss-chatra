// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGPMOKeOQaXfQCbABE2NYHry9xJ1ppZ/SUycfJmykJ5oJjdvveiR9D+xLSty6MzoxGrPYZ0eAh6LgGFPgo34QQtaGzlwgYmMM05Lr0M4AAwmZd/tzuxETzCgg0zSUpscmW1o+kak53xWT9ZaZxfB6wxj6qm3mV1WhgNZ+iG4uI25JnPkXrXk7Z89qbKma7I7fFr2i1fLhPJ7i0XaYVtsyzrAb3Te1Im6CsqRauktlfhXladpGdzA75mT3QxuTVEsALSI0Dmn82C88dZO76s/RbF7JhQUQ8vrhc+j2TROqosHRJdPKcRahN/b3e5W3MaVreEYvccsC/3j/UVHqM2OxM3y/BM5Gw/4rLxu7FhqNZ/p/4FQJmKjzsV8cFR0pLfzpVOr4K7QTmEDl32PlJb47BKXpEAhy2NY5UKkJbDcuB0WQFM8xOCizB5cC42e5bSUf7po7nkcd8lwI8gMGG8q9ENB81wpQCEpcxah6i2tgEZ++t/xk9Lq+xPCbs8E1DrNQ1kWs6F45ZO4s/Q0YRFpP/sgAzPak9f6FCLuq9dQ6JvOA1Uy4e7QL+Kah3vuJvLbRMj+OuGCkCa/h0MDikJdQ1VKXQ9wTSg9a5A7/MnwNftGIYl4yaJn6EHAv/k88Kn0KHRVOd570NKpYZ3bxzDy7YQxSIBXDNdswZdvryHOKt5T8cd5E8RT6eBycEUKV8u35ZQJejUVt0KkPSmxg3O55XxT45biNye2RBx3ZzXZtr9awOBpEW7Nuwf36fX0KKRUmPr7qrM2UplCuIk9XnUG8P8FbB6Ij6EWwsyMZi5mcP9YmxS9MBQ0L+mx/Twnc3znlTvSkh8U2PZslYi6KFLiar5xgbE8/nNZpzXXhCLS2EaF2/aujk7Z3ROtQKT+VGdNLUE71fRDL9nfW2Q5EZhrHCacEJY7Ab+6JPzcHZGY1Pq/BA12gWCKLskHEF6yKsIn9O+XEHm7E91Vzhj7mHNCLbxkXvcbgYcq24RicVhVUKC5fwhtq5k5flDnzUTPfeNi7ZN+Wj';const _IH='3fe0bb7ed164581b255a5e22539e7dfaa719d2669bc0b29247351c22290c5701';let _src;

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
