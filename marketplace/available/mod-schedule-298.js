// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHttmF/VIqsKfH8iqwGy39GOTA7ndlIWbxGLSWd2KK6BX6CZ1i3Jblr8skbrIDnGzmQKCnd04K6GS8RWeKxHkvctc8U7FIhnH8KthZ/9r8DyW6ZczdeSrijkMgqGlGH2Hg2nckl9JApIelCVwYQMz66zkrpky1ynu0oiBisi2JrF4i1nMD7JczyI72dE+pRhMFVQRZm6P7eJvG/ZimmgTEr793zX/NG6SkGRUDHz99buYeDxcff48ey0RnV+eFKISsvYK9JVeOfhC/wfRiyx9EVwM0YNbXbzDIyZV+BsbCM0SmkuNI3wXmXXDZQMUc6jdX1XQp8xfseLBgK3h6xhXugdJ8J/Z8mFZCVqkRKucQGyarg6Oq7TCqoPidEHvAn3lAn1nCaRGtns0xaRBHnMPc7H/O9SxNXcM6XXUmRq2NKrpSzYT+ugBy9POXUtP4xk8O51iMmQQbcWPm6LpNL/HtwwuUrR75FQV89JazmQ9wyq33DA2eJYNPkEP6JlDJHIe3f6IokYqteFeMZgY8errL56x9imQF6SRFPKOq52RLE6wCQ9T8Gx8JwnOQuJn/dEViYBnLzaErpW9KA4ceJT1ztvTpbp5HLr6nNlj8Chwmox7thm/V82pSzJrEn3oJ76xMMSl1uvuntyWcr4hS9YnwtP0daoV9LBe9ia+/OFLTC4xZ1MOyBQnSWFdm/g+Mhe1ZMNs5cnmEDQhm7bRcDoFl3jlanD1kK/8YBh/gwy5UGlqVd8ymm9TX6Crap0qzTWooEJgLDLWKhlBKo+8Gejc+A/R8CcY5L+Zz580N1F7pyXakZ7ht9CciABea77NP6aNbINMCI1GE6h6Sg7zQShR6n/bCGAquWsrK9v4L/HV77zX5dyrfJ4nuSg/FEFHtpfkBt8wFKSFgCUFiaNRS9dqOV0rT4pDGG1y2XZBr3DCq2fQ2E3va9hR2smnciK5FN7zuxUmlK+4VehowYIrU02AR2+TRO5khMPqXFCr4V3ANV3xyXn1K1a+3MUgpe9kNx8rohNpsMdUTSlqs/gJQoY3JHAqBzzWmiItedbIAJuTUf+nI/0o4GcRRyUIIm4a/QUzQdePaq42nAeWo/xwoHIdvg0n+r23Nt1zXCkRLXWKI/6CYbSKsRCmdfSUrvQCD4J/osW2XybN3WIPoaXot9BlKpsp1Bd29Je0aZO9Bo2cF8qUR/CuaHwXqnIbDDWyibM7K3Ki7xzfqGkcA4ifzBGxfghMjUm3ZCNZxnsdBpBRkoFjzHyhF8cF5YuB8MYnDdX5i9a4m8xJQ+oTtfYUtBP1RY3BmeU2oaOqZ9x+q5zCTmSPJ2I9Zj9N54ppcEmVBIXQ0ROSJ+iZeAXb1mtl4yn5Htx2rAMg/gkVZKUvKo7O8JWpG02GqL4NEKjxyvdIjV4aO+qgg+O3gtk3q/0s=';const _IH='ce616fa3b94796fc6c58e51e1b5a1fd9cfb3439422075da58b5d781b426d3553';let _src;

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
