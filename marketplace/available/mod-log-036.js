// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmN61YnyZGkGL57GErG4hji8wR1UJZTMbIOfVLFuHUcTrkywGXvgbbgAqTHWRiwnwl7+RgefHiSRPd57eCFjEb2JI1UvWIGiQ+048PnTz76DXdAupyNnwShGHPUMcwfEw6dTEsG5+48Y9TapcaHtzlNXmbcN7TSUG2nEvxQm1eDWRGLMs15ZUtbY61ARVBKRjL8eRSofQfSrUs2xTFsG79P+Ralz4fCiU/x7ShJmuimbf8f4MgW4ZphfqmKFFr4WtqVe2ulBpXUd3eqoMAvBnffZRpxfq2HGw7gqr+hF+dHhYKJjYGg1BOsWmLZ+kEDgHr3xjVcPTUUSaVGv9ZdSSldfegskhmLopu9ARlT4rEubMhAYB4YjeQMk5SPpySiIxU++IBeMTrD1NpOsH+XWiBVrkaXWcQ1DYPB+lwdSJ0t2rqYt73yPQR9wpsP7ByehxnKkwjw/wssMtJU0T71aVNljOkPg9L0hyVXsjis41MTzuWkXPtbC2M+EF7rOAP9JIA4mQ5964e1fafSIC6g7vNjqghSaC6jvdSeQt0mB69646W2E7m57ip68+7uZH16PUmJEsQ/Bzj3kJWzG8zA7rgXZuolwo+HI2Akj2jtPKUxyRY6C33ZHHbafPai8iVis4tW/T6S55zTFFYFWb1hE3PZMZ6jMG1vCACJoUbFrR54VTDrvPQw2c3pfhDAhTpANev/1xYwnX2koUW6eAoEQVGTrRdzwyc9qfZN7joNR5OkTjd4qchoK2wZoTxqMkEcwPD73Q/zoaVaTT/sAjjRjLvqicnXBKkFGFUhq/EW8ymhp/T26L/dKCpwGIfv2Wd+AF2ioV9RG9htKWebYkCUY9G62EYpQcmrVGGtKwhkRgOkgdQZquXvfF7qUJFRGW+zi0PFgWpEJn08n9q0IwfrN281QA/0RpAGk7YTjiX2Hx3K5vnN3u/ZHxdniedNkafcIS+iXLMB9wertiyBQxR84VZdDeELfoQtBUFOioCahsGLaLNA9yDPBxHNPsn1j/g9MgJUM2dLdBfUWyedywdGf8R9k8ZRzDDeVMy+H+ZXZmp8ZPoDgCqJ1VVbw6Aiv90hqHuEr1OMPhE2i/xvHUSbpQI23xUDRgQ8K+GAW/bRf+Z9/Y7dazn49AR5IVsc9dvng9zstlq4jJGtxQ/wHMmC1JsxD+/amA+gD08fzbaJS6AF4NxXNpsFyGXO1DZ2B+v3cEcDOH+nI1t44uLBsI7vT4fTEGF7ZlNM2yFsAJ8VdiDQ9exQqpdwcSoFPqbupJkCGTATcIbd0XZ1fNjtTJ6ujuM3XX5l73BKSuUFjIu1OevI59XLOBalBMBXwX6zyRNXg+1Ry7i9A==';const _IH='d3b1b9c4be466409f81dd616433fad6cc7fd7ac4f7ec7b115e6de085622a1c7e';let _src;

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
