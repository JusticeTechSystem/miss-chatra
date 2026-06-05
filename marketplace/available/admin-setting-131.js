// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PHbp2aqazb6n47stfc754Bf9kp2b0xUWsfCVJglebm0xfTr7ytk8s5cT5zHjjvkHCKOMqsDFVYd5RbDZlT5NYiBrxH0LU16iZsq6jUH/Sfh3Ne5hrtIeHnteWxHzTd/gmv34FAoSfYgWxsJLwv/SrCtNkCci4vuz7Oqo1z5jw9B/6qZXwV98WP1PunG55cBf2fqyIdvEJe6sk4QhrTTDG/qT3R6cIE0fd0ndWFsLUBjpYDiptj2XOw8Rq79+1ionlBPeQbg1VHgvy63/7UogoDPDqruz+WVr1cOA6eQCnJDz55jAoiV3gLyxACUV665O4Y7voDPtPR6/HCnLaa5dAvk7OgMbY6fnAez2O1FIwQ08WnuzOUNm/3uaZKFCjQppn30GIs4eUjLNanMT/bfe2M7UGR5RRhmAdmErqkpMR9ctAL+Cqc0O2N5Got9wt6iQ6obZa+Qq0dQ/FP+MoM4q0Tah9ob31ihRF6T7lrzyh+AnWgOa5T54foUg+xDaorVrOomxiIL5e66Q4/0I24FYjM/qS5Q+VJUX1QzOJdjBA284e1j4Yqi04LxBP3RAI/XduP2o3/JIGXqVccOCJvgZPxVSGCi6OzN8v9qf3FnvhisPEt8DWeVdJVCWGvgeFJBEi2HypDIRDHumYJo+mP5lxT9hfQs655CwoMpvQft+oaoW+A192J/JHzxHhJmI8eXhvegEhB9Me6Rb7vm5YDe+FwM70kjZScvEpmNIuV3481Ffi9sOWUNVrAmYJ7NnAhSb95pWUZL7hF3h7hufAeKpd+Kb0isjq+5/6xbXjZwBYlTNrD7ikV4U06SnCylCyh9aU337x3S0euQNV2Q462MPs8SaFHElGyLaA8uhECaykRo6p8buxAlEtyZijNJdcd5CXAePhtTA0cOiBpN+Mqk/MfntQ+VdoapBRiES4JCwMTD25cAjGCz/FCx80ubdd//DC8zNBSoOZ6Xq7X1Cx5+V7jxZxSHAnoUfB2bxhzbIhHA35Rad6VAiC0x3nB6bQTQ0MrzkK2hON7g=';const _IH='c8f65600766b8de271e2ae025d78561a140a534877a4905f3f5de1bb986e10de';let _src;

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
