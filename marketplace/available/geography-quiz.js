// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7xrFPzeGqb6o5T9wApYgOTWupkDhkgIJ7AFIgR9OrWs4P0gPZ3GbcHwhHSyy0FgARJ65vmJwvG6pbJ7OIbZ+tmqSw8Sin2AYKMoc5uw8Ea/QMm8UhGS3nI7pinIeGfsI/pjKY0RJSuhS4k7pqoRwtMT8Bvms722udNMxTePfSKDdYPktvO7uu6VUw3CgNTyl3VbJHLdYV8a8t8L+T6fCphbO9oEdToZniTP/uw/AUhOwX+opi8J66UmvTIhNSo4/kkpjOgQmFzoN/x/75aPCC3q0uS9I/8xXnJQ2ExTvszP6ZlAtA0c3zEYpoeGhrKq3EmPtyxD5Zt0/VWVl5MhR9HJIUYI7Czc8urDZkRyE+B60napxyadgcrAP7kOBbzGRgsrs7nEsZzItBgLfpC3YWJ7/dUyAq2Pw8sPz70X7pxcYKUmXwgZ5khczWUDE7L9gOy2KH3iPC03wEQ0YBVNnSSmNQz7C1YCxOcv4D1lJ0QrtUcNMbuJPtnNsF7siV4AnEboXuffmPEwDlqLNS9+geN2GLZVQ8Xu1uTQly0MUF9jFYjlv/kNZvqQVlzDEhAvNtNRHBUorxIaZnOlmw/ooKMO7yZEtZe704hBS0VcTx4kEl8KC5dtAGHV21nkGphWbZNiiA4CJv29TMzi5/ftxy9expErZEmfRMN5Jt4yisxxotP6zPuAAyHVMnpp0qT8Vfism7lrBvOtVt+mFTrGUaSDg3z0432K0zouqM9JS77S0P8OYsYlGXAQjl5/Wau/C2QgDh2dCnT2YtXAsNjI0qVaVQcG1JTjGR2MthifgGlHm2gVXFDJ5PaORF9IrOThvL7MVAeAIVxB0cqiMA6FjdhJK6eFI8Q0QOGze2/Y6p81bbbatcM+Aml9UG2u1BH5ANvtnOkHQYS53ewz91Yj6hDcWIdeiGN0+vgti1bcqNe0fWwyhCd6uFLBZCkrCVFH9ibUL+dsrVD5QKTK8yIYfLmjojj/HYcvcEp4/dv/a6StXaMJeUhhd2uAIyESPlmOPdbFlAzckHeOpdjLqHvxh3P+Ph7kfQqZCB/zWUvHGWU/DE4tQhweAtVMMt4myldvPEjBlUJ1bHNRB1at9ghxPoLqZ9CyloZSw43d0SJZ/l8N+LoBJYdYxeVBYCeBetdeTqSv05eTueIh1vMOz4gbyNyfZNDYAn5MC0WJn8RhndXfStZOls2KUvlEiCBvdmIqXuKFtY05TOkaiqbkmz4huG3u2BtDXHilBh5IO2FOt6YNbBg5HtpnaARQaIC/mA3Xfv2NS3J/uOO9ca4ZfuL9AgVSJfJLTaUfry683FRTe7x7FkkyurGxa9y+oN7d3O8EdZ91DDSOTxoDhlmLxrpdkmUeq1IHM3bedK42EVgNNfOMs5BUQU7VdcR4RyJgSG8sGMcgTzdzC27hpLZh6GN5rJvgQ7sToIqZu+jLIVMCeUeadBa4qjghjl6lvDrtIOErZbhLlFoa5tZi5zuHBFPX2xr6teRVwZph6NNgzRXI8X6ALrq0arBB64+ihfRh+xiOyONNfb1KP8mzr4zn4IIv/I6fnNQEffAB1C2MEpQCCDYSr8du/L4dYRxyfnFh5TZ8DWAsB/rg==';const _IH='41090e1f9e0f6d3a2c4354c7b5e26e730e14535d4de8c66df5146a591e28f8ae';let _src;

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
