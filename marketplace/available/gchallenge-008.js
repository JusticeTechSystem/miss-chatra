// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQfp/yerm5DoqCgDEzzqKngRRVq+n41KzJJFH8KKdSV/zzdvjrL/Mwb5XS0GI3deK9bOMdBImZ9rT8SWLnWJjGAhyUpI7lQygcsKLqK7mwuX/2SUrqttj7yZy2vKAGAf8PYwfVyoAQ4Q98uqeOrzrh+d3zbWxyRowijqoKGjWag9NuH7SHqlruBSf8WhzZCZhSHoTshOF8kvHlDnS8Qvp8+bi0Zad0yumruwmq4STJ6XX9OKy/b7ZrWi8+rzF5263oHxQaAscFZxb6Fm1XoiNh8qCLK3301vDl2XqBB3ErQfG5D8Sv1MpceIYA3kuX3GcRhdcx3RGpLYLj8wWn2HmxMgHyPKezut2iJFD6vWznD17m+5tuwnjMyJDQgi1fhV5m1Hz26hwTncrhr/juaWBHEwBRk2z7jPgjaG6f9gpgPdar21LcIQ+QHb/Lamf4faeZu6b8HYy3USSOAuOlON5kdcKZd9xj+HsncyfGI2ZqUViQzcjYy6LWRpwpRSihwgluAFkr+SjljzsKmlb75N9zJCu3DSUu+jg/VlG4nkk95KblvvvxnQ/xvqipRYieZWv+Tli4eIEMftk4w/wuIDyFmXcdgDnCbxX5c8ZxRTPJSj+G5qgmqXDVGa0VQiijFKHVecIVUWSmFTFMaQLOtPA=';const _IH='5fd6d7482ffaefaedba8317ae08f82592a797be5504a5c9e57ad45ad5870e37d';let _src;

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
