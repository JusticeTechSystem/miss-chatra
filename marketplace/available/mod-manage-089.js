// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2Ial8CbHv2oJcFpR4TyW9deWM+haHYsSStQxOvRJcvYEthW13nPqL/cYIMDL6ovhAOaJkDRMJ6WMd/xEyo7greUZSdZpX9CpnB5FcqaPcujLVNbjRKGV25zNQJp0xCYplnp1SU0j7SdL9cIhFVltK347rHE+so1uySEi0VzXD1v2AJ9Ry99YhrFh/CWwuB7WAy7/veOVn/A4NW8nLvgw7pOBjM81u9iUG2in7LePoEoNBvUr0XbBP8Orqw6RN15i1OsEsmuJO4URs1B+UJeYWZcxQWttqQnmiD/mgYg3Fs8nZ57Qn2z3cgF0q4Z8Vj0fhkOhatfk5DgmuRTnrUtOA6YegqN20yd+JSetcZcyz6OjdlS7731JjoWQ7TnNt0CtAinjnjYWiO42RA39am2YGqI8W2oV7tjvFwv80TFo+eFI+1K+WZNzj1QE7329i1vaJxys1uHN0O484MNxkhrEUO8Ue+dJ9WCh1NUg66+ImmPJDrvAg+Ju/EIErI6LX+e1m8gfnDYwgLJL/opFoz2s65Dj9ofe9ix0cv5QPVsUTuCoT979y6PcfmCq0ONJvcosc8mKUYg7Ou8pkF3k5qq+Xtx1WVLpznZHif8ppvc0N0ptfvVVslb+wpw2NA1qfxTnW0MDK/QQen4z9IjNFgj4oc4M1fwYJPfLyp1vP0qQDsH6YogUP9N88/Lo4HeDDxS/XikDti0igtNLKBkN1J+Hmagf+8y0gac5oFmzbaQdCCn/imloGL7323XR2cWbJd9vyO3cc7LfcdGfR0KPCYV3wDi3I9uhoTyWborPCr9+v1aDWqFUNitRaGkNLTjpbtT6WNhxPbXVQ1Hgw6cq0NdO4jsqahJ68C4xUQXMmfbt21m6WKUKNcew1YGdJfS0ffbkoVT3hOBsBXfYonQDBOgwRwFqRstqEebfuByyjUFWGXtkg/tSrS1gE2M+Ayu1OWmUz17hRvdEZTV0Kwzjkjz2L10PpKNIUVIDgOxf3UkrqeUYH4NbaqL9051mvk99z/V6RSIjsJTWsGsT042pd5OFs16G88zNlNF5EA5cgMNeA7N6m5Ftsdn7N8SI6goPPBdtAAZdEhfefhkWBqRcSKxQ2GpWwUdCJENbUXtbmFy07QecnYHk1EAoJD5j7w0iDlFWCKa3k9wBq4jKrDl9b9M9DjudMoPpO0EKdNylNbwvSU59rH8RucEePH498MXvR6V/b8T0ICNzcITvVKEc4pX0pv9kw2oVQDcVwk7GpYdPBPo6ZKgy4e3YyjSZvcC/sjlaAqBui/A30NIYdxy19O9MPhijkKAsEXvprOKKET+D3eCRPrOuBJz4qg2ogC41F+hEg3Tp12s8CPjHfkP3IyuEvNDIZj/6o9ZzlOl6cuhFukg==';const _IH='b4bbf38b93c78be7aba7c42365b0e23a63706501d0103dfab81edc5e4588e751';let _src;

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
