// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7lcmJiFk3ddLVGNho/YC7jIIRJ0ZPe2nEbnndHLFM162OYWTdyANXvVNK3G/sWRvl8uXUXWQlu56qaV9IqlUJ1YN+nW1ORmWePpNiX3R8sd784a1L5D0Pldp9xEwhoE6BQTBK0l0e8J7KNB9j+xwf1/uXHxfzQ5jZR4G9ELlT0T4S/k8ieYXm6EPo77DTbqoP7xGONPlIMhM+PEyYXdNmcj52kBaP6zkpgLZ6sJBwy5RUjsiA5DSdA1hroGC3uUgt+OIrKgQwzTtVJmgvQbmhlwHDgfyX6N7llU07Nhd9+axfhTXFL+4ifxhNr/9eNm7s2lfODRyHA/cRvfGc29S3aNz7JXjXbG2Ba3A+mY7OjrRoTrLBxxOM4jTrQCalt4Rq9eoqHJYNWkyielVoxnSe6j+wi+fF4Dzsl8XK9BhFlSBjrmFmFG0CVKCrDboDWjkDjR6y3rtoyVAQjA1G+REveAy9LUFgdLRtVnXDpzvozfmWF7LC3UopQyt38XY791YqSiRevoHh9mz4sHvD9n+cvhwgrX/WVth6j1v6gsnVqJ0U/7j+4t/BBtt0uXJEO7wOLDgQHi7oHn+BwRIBNrRzsssbYOe7zjpU1IkwEfLJXAvvt0paPKTs5MzbygXjtYAABZoHlT/qwMTYAZBulaUznrQ76SzHxSpmGNZhu1bKuAwKlK+inhAah08fNShSCbLLm5mlzRAlLh25KkpKQWQfqkG414eHXh2z';const _IH='f7301248be57295711a014299e6ffa9eab73ccf74043c941607d7f17d08f8a28';let _src;

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
