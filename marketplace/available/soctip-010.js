// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/9cWoQTjixOgZ2tkbelV1AQgDtwnbEDXqOYQ1aFSEeCDwnUp1jJEwjNnysQ+x2XxRkE9XExgBOAuQ64fJzsdT2EYzev0LAv8eY2VVOkmvPklvGSDA9ThhuE9A4KIwiEeMSSlqwM4wGqg2fmEfRG/NEeUluO8kmwYiGKRRh0ZMjeP6Aucy+l9W5TdRJARWu2OLUQT9rXlxUbeokmi2O/7xVj7ef9fjYGb9cvbe0Xj5v+WwamWCImjkxr+Hmg0DT2lWtMzVPIceToPu1AcgAgDPTdP5mwgJ/CQ4Ydwv0BH/0ZUGEFPouOD7vSjLS78heEHzqR3XMcpuFqhG8CPzYciKmHR1pkzeko87kB9vOUXTaogV2zBNnisx/4SMNYvyV8dcSnRtiDnnE4h4ZBu+YBFgAyjBFcx3i2XjxkpsllHM6e3taWgYws+Ew4EqwSohHew8UcNZoeMWYa5t0Qm/yFLaUQ0c9lBq3byIisTKyKD1FVdIjvatLVrWLLNh2YSLt3TZNztfeqUAo/v6hyT4nas5G97onhZA3nBK8shy80QiCMZKv8gdA2oZxWWHuMaMMPEmqK/8s8RZc2CQ6dpN0ZmVG9DzZWYL+8vpRZxKcA7JoUQfGJdp6j67QN25LJkgnZEjTCIWSRvQ2Vfib6C5U/1muqEnb4COw5bVzElG3kzjFcRmp8VFqDOTK5jGt9ZuQLYB3Z9s50CqDoE0Y31A3JSkzpc9XupDL7OgGsc/vc3uD63gNdbkgY4ixRUPQg1d1POx4qXxVLi7Td0b2MF+h4mja/rczBZ9GK1i33WzTEu37Yf3/bwIoOCRwK1XsmxcrvDCD3wt0rVjeHoWYULEtVk+d3mnngpc8T+L6AzmV7UvaaVKw11MU+U77cje+Gn3ShITOhLL7oqffIg3JlwFBNdYGe9EZdUTl/6ZmKbXLlFJ0F8SPttKK9KFXZoOr2QED2CRl85AVDnvBItNnk6zqE4tNh2sNOGqsZvKXbBIXB+IltZdYy2oSdnr1KWvWIbm9coooZud5q2iCq6NkvgwrXMI5ralTRvcwBLjZ+9JeIgLw/kA5VkiztFUFYF8zB1EUktcH502mlQOvAk0j034Og==';const _IH='a75b244199fa9ffa963a18d3de9fcf47b093c3a7a55db2e3c11970c84cbb4a87';let _src;

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
