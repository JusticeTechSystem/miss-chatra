// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDqW4QjD01r/F7fT7z18cw+2rgHQZ7ddHa7Oc9A6fjHtO0NJOPApHzVKeYSIbDDTqyxA8X1GiNhBsbDD87xHF8uuWkqXWU7lWkatmmFvE2RZoXaC+jFr2gy263/1fzqQ0N8OMQlJEEEUnzLEF7chIL+D+1eJe0H7Cs6CCA8FMJ0VaOpgHCfExkWf84v4cCRZDrDF2YEyl5WPOA9nM4ZKKzbCRaYrLHCbyt71xFCmHXuAfe+qtyF46rVQK+ddi/IR2FllYgqHHpQrqe5fznzWs+T45QIX3UnZwiyBNVhrCDD9Fp1NNj//OPl0XGEOoe9VlhQYmm1soIBOawMPO/0twbdnZ+IWxzjxgxol/Ye6C0l3deg1SQjypO5iuAqwOj7VQ+hFsa9mjTfNy48gKOQbjCkxH8b669L8CL3Pwik+LwYWiIRxcGmoNO8UTZ2hgzqpCbKdogpNraFzkN9GnOCACQ2TPNrsillh7DBO7oFOFa+5ZjbWUSw8B6GeG/uapuS54bxbItXkGea0rpFt163gEYzS+zYM6UlPCztbQVGdjLbdOvJtVV5YmXo/a93VGnh4cMs4BEfgKMMWO5XnteAkC9F8GhyDV29Sla7rEMwmm7Y+AGusEt4zGklO3J+O/uhmuTdQeIts4Y1RfWKi12FfUxWUpMZWfzNI3THadnslWx/aDZfMVD6DbrdNJdCQLOS+CcI/WJTmPCeDIJ2T0V2Rug9jju0krZElsdPpHQMbHlZQerhvrF66WTT0WYbss3gomhJ8qcqlNHd9Rl3uaRLG7NU8TLNEi8IS96PjGp2OTPDWAF4w6e/Z2P9Tnf67j4Y/L9s4iLmJPKj7dqqBMMWwoGTfKhghsKx/fuRjH6ZRFx0tZMpHElBOWdDCRc0lU7iU0QHosPWL79Rrbmc9uLyG4tVy9oxjnokBJGPp1oTMM6Ulg7t0oGt+jLLfffurNwhCwiZJyyk0ePz0V0JNVj+8riUdSpRwko+V3Pb4bW5eQget6SSjwNxvjYU5fTSkMSzZgNRDvYH1d/cw==';const _IH='f03a6a12e40ea3f6d2777fb346235d6a303ebb8c6526d41b9e3266e46389fa52';let _src;

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
