// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcWHlX3BPLVRZeMijmidtLPgUP2lsR3Y7BAuemO4TaF1ONFhaX7ZCk6J6j0aQC5Yz6oxvg/EX1wMNLN7gGpvB6s6oOPnEPmu/VVUNrzVpRzoh6Kw0DEeyFzaOYzIq6Sw3lBkJNEKdZYQicY26jvdsLoQpukcC4Sgawh9A/X7/J4ZRdhYw3TO8luee06YGsVyEAg1xNKbL5d+63JIDb3IqVJxXJHLPEBZjGu8EvISUVCLh26PYf9rxLot7IZAee7AwUpttYvliphLHd8xP7yPvIyperquXRaFnOHXk7JwPYZ7vRLUAVfxI8cxP4SlyhcGFP0wt0MghN85lFdviT6tkyI9YKmU37PTnPcfuzMErtoTrSaOEfN8IogL8Ni7wZc/5sSykjWdRulzwGGD8oBAaT1/qBfSzy3Sj9RzKfK2DUoR+Nfoz2X6AYazn2fQ/6qHx8msFWiIl3uRbsn4Noj1uIMi7WGBhSPkNUAJTn8t4rS3kpQcDXaYicSoMm0ZqcCDPNHGpAO2En68H0rktOTZJTKGqPNpN2Qv+Iz280UvfEPwz6eQuZ+qC5HfV49RVYY4dudGV0Mv2aJRlgjrUUOeaLMe/wj3lYx1+xOq6k5FdbP9IHutvMlOXUa1tFB+3zwdHBTfgGEhABmXkIicH+wVGqfA1A8srmg77+4MmRCfHE465jnGZtpxSbSKnHLs+FdM+3SYxTUrZRSZ5jzT7vbJPOnufZQuHWbcBHGg3MxDmgls0/OaJdwQ0NU5XRv4TnT4BXZlHyw8ShoBVTZW3OAZGDG3YWqy4DgzVUS48r8DIglcoEIdAWG4j1b1++cCxPNTPHs+tWiEEK8vzU5brlSMXmYjRkV13h52uRr6U7qvwdsMuCNUJkM3g52UvCAJyaKN2C680bI3Wzf+ikgqQpKi2oRewMX16ZW5xzpfKswxCnBdZ2uDQS0IccrXfjwCVNule1YVrwfp8dYndUF0pQWXNA2w+UrLUBP0Rvp6+F7sWFWUqrUTqlbaxieWYDcuP3o4ibkaV7N+Dl5xS4IpS373GK/oPg8lBNi5Y6GSfKJo8KVYjJPNd+kK1f0ZVDySv8lcHMIOd9jmOuYw2eZGBhgKWI4Q6qQIEMzSh1W8Hujliq6q4xN43OQwNSVJdYqy5V6zALTZ2jdcOwNrYXF+NSo3EkUY/cOQa5qaptrrta5eI0304pkwZpI88Wf2ez6k8dNNGyuwrfAoaz+WQ=';const _IH='774e894dbe8242bf271ca3fcb57086ec0eb4677473371eb234a2ed6883674bbd';let _src;

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
