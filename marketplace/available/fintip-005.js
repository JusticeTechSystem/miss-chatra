// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwARbGvVRpufwmLYkOZyTfJqmLIWaUmDSq4PK+PML/6H3SxiMvodplvK2CTFjDwBeFPR6KCjKgWGR62nuzGzS73EnTf/t9DxSjTvEY7OIkbU9AFEHP5B019vVrxv1x9uC+qYXfPoVm64uuuzYMkzFFrw5AN3RJCtRTfPGCh1UQxopXXYPmraw+xCqQT1g+zD/UMb5AjDNUkh1Nvpk8R3sQp9hYx029dt3YbA0iBLgLU0Q6wwZZHzkBpqquRdODX+w9W8Hw5xolrR/ABhHhYzbL0+uw2BA76eRDR8JYr+UNXW3GNBr9uJl9y6EHNvE5irrzRLy+Oh1j8Ki/KCp9joAneKy+/JA562x1dSfH76ChZ7K5eBN8yzIJvE05q/XpHKcCkly0XYf1wAhvN84gNYLqL2+YT6ZA708dwiTiy0Sf/c+cfTwmQnqaqgRWnxJjjW67yujM+vgVaxRIj0UUwSNmPnxJ4Jev9O5rbhdFZotZx0z6J3ySCuCeTpNidUU0lr+WssploaXBPeiSREUFfydosqriF2gmDrWdZ+O9Zeq3ciGHGy7MwegXKoi8e/QA4X7qhcanShQgrQbKRO5gdMaGOnZWR+Ohkbn1BHQd4JpkeUoh8wQ/8mBpUq158p4gG9KATccQ9kfwa9Btg2gP1ZrjIf4ErqB6J+DJQbLy7GSbEBuNyeuox9XK2RqDGsn10+oWNbz3JwJfLEb1305OBJIdV3LyOEzCEwzWWIOfwMV1x/minVZFwZIjh/NHMEtv92zHmfK6IVnlyr69z9LVXKnWUwCzkLpv5hVqjvqSb5qdEoSQtUl02/PdWAy8JISVSKz958pF8nLHmZxDRiDdOjlsrkV94Bndb3iqdd92RXrcGJD8WCnte6o2fRBEjZ7OCx2V8eJpZ0I5ZAuozg3Yq3wz9dSxVcvqlPyA6hDemE2p8CnJ2lHEGiKE1wwQEfsSWhf3Xo4LUM4hWqn/QOdzeyTGIaoXneSWPx8wFkGcKX9EBnsyUiB1SUDVeKpx7D/Zwgcegze79h4DosLcAJys3WLZ2BJWqFTEc7PbTFyh';const _IH='e86904f78a69d61224ad7ff2727bae118b1ab5a1a88f55b6586c33c00cadd894';let _src;

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
