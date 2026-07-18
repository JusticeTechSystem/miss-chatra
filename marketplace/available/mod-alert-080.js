// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7NLnLs11nI0qEbxnhyoQZlIPaHZQ1SyXHzksJL4oegPpeCjXw+tv7/JuLo2jgp/MhMxRD/5cfDyDXyDHq81J9N1EMFLy7BsK/KYhbIBY7y1kWO7xJAKbiEpTXebYRkihEPemHwyXAkFFYmesrsMZSg5yx0XOCDTHAUiB+iHveqNPoiemldsmwdLyA1kI79uysQVjCwMqs7EoTtBrxOke4G7ptShvLaYn4s5yC7aPmL0rfHGAC1VntIymCW2AmcMIvI8q40pEaorJ/G4YArNgw85bAFmyTe7LQostrfhuER/CgYLkkedGYCsCfGWz/BzjFw5Q1CxkvsPdPEx49iGAWAIKMihMUuQsILbqAk9hJF0eAr1vF9YDIhbhRLV75e7zTWIC/WYgZi0c9isZkR9rLL3Gja7mwZN4Jz9EsKetJ19Hx6jLZTSsHbfbbNoQ4iPxsmYg8A3Z/TLSgoXaZ4WDI7YnKCK4vgWlqQDouAerQ/7H0VKjk9+QFLrkjppG/LOgLGA/qbttuNZ7k8uQBK55EE3JCMCcrHeHyf3E5uBpNw9qvV3g0K4qb7ZP0lXwDzU7o9Ay102TV05kej5ZjycACKg468iIkrvQ2n1vdFAwralidPNPJMd/qKwIYaDoWtQGJy8RipxNc22ddnLFhReFb55Hgw5HB8SpM9ESz4uEnAMzo6fvF+Pq1uQhLkvTqkQtVSEwl4xf2P9EE/2DJAAIKrqn9z6+zgWTL28Nlyzkwu4bIhR8vyvPY2UTLRrB+F6RM5Szq+UZWXUe2rLCgQoyf8IodrjVTb/eKlSDF0dANUtUxi+PWNtyU0Y4rznTRotG8RFO7xIRbMFXuY6NqzoXXO9uXFhGBqzX4wJPedr+XtzbeueLrL52xXZ8DoCWmFJ8tjMtSw+Brhc+QIufU2+CmZPQb4IgOu4WKMVqFAPISD4BM3cRSL6ev5wMBFGVo++zKN5peNq278ETPdNHNkUTgmWo7B8wMXOz3R8OlG4deI0a1viQgoB/NOvO+QTLLeYATz9ZuEIdcpTkQBCFAm97//EExb7i7xf7/4bH5eQ5wP/DDFTFdGdRhOHv0fR+yufoMe3/9H4c7uq3b2LlOgU186DIVtX4s/ZgoiZAW9zNAHq1OFiUJm+NH6WXsut1r7EeTrdlVwKXPw1Givmo0XdWzNn7F2T6EWoT/k58RUi6JEIlFwFLiEKsnWHFHWguFdmEDr7avB2FEo0j7qgHqQkIUZs+DzCqSIPnUaJ0p1Rd/UhJXlFPPLRXDi0I9WUQ8VnuIQ3H0pznp+Zi/Pc6ks60j9Q0s5cSTCVFN0RkpEyHx79VtIcVatyBzVVqjQ126IJpbUxiBSBYLubCtAwT43lpI6RqcLg0ypPmQ';const _IH='0149aec6d4cd19f48acd1dd0c2f6e6d640da7be4946782800d1b542b189a1717';let _src;

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
