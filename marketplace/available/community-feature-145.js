// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkA5YqfmDwQDSePwxoR/E4OjMhP2XWKCUvLoi9glTzdsD+hAM/dkOyq6ApypsOM/hR8fzLAszShDBVIjFpqsWwBTk9A7PtmhyYAIqB5kL2XY8ZtiatMB9wAzQtNnUXaUYGBFzQ30P7JBjr1VqIpi6e6jnIvHWJ3dws2czuC8OxycI8Yd1XqsqZQZ8nrzeiI4nKIlXr+EeavH0SLF+y5JBgvB0CHGIZ9yoYTCNkWzTuzNKcc57vNWEsxFIkP0Dwk+r0ek29f8BpQj821i3ofWN0y33QJMGLm7UzOQGSKIkNVikQ6/cQ3S7BIV6nISkbyadbL5ZPqNDrRYRXR+KhdRdWQBxQXIMrKxvnp/j3VZzvgWheuD1PiKSFbxYwQoosuLSvxYPEJymImjV23e9j+xC44vxS2e3YKj0OT9ovewe1/PtLM0OJ91p+HEeoqN9R2z50HIQ2VMo0O1XyBYFos56I4pMUkiQjqXzwNCDH97l8T9tk4ywNEUMJT+UpYNdwCVaADGtjkU9931cbG2v6OpfxFCjp+Lx8vRfec6PCepxdufEbalp98m6+rVOVP/MCm00e/lZO/bpIFJ2aKYsv/hxJ/9q0N93s5ofPLdnN5lORk8cSDfpNq70vU3E2HpECI8iu9GEOB6zbclRzU4J10Zx4HuzzOWcAJP352avZhJjU7026KpmSnJsI0mWida3ntFUhc7GYPb7j1BV99QNV6ALyQq/+t5HDEvKv6cJVnQ54wcH1Wmni0pLdC4k=';const _IH='0266536be9061a0ae4b6e1016db0ff25ebca10ba26a91b9dc3a4828e7500189c';let _src;

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
