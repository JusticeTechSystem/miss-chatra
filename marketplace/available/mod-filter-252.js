// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYuVxvwsKSqmdYMTXE1VjfU28ID9+jtQ/wWd3P/Q5sn8FEH4M5rZxdiZYylUDVYxHFMjh1OYFV3BvZq3Czqox7WKJlS8ZYt1FhYAoKm0Wg9ywuwRvwGi4kUecaJ0pHr10iuwFvpt+vspDSHhAVmsZQ8+g7Ith7lxULV4ruRF5f3tfCt8N/hXbAi3qw22/c15AFKoW3kplDc0i0o5ThCsTNLikMIcijLx9CBkhL6eXajA4JSGbA+OpFOQfrwW9ddLVL/6xdY7UYhLSzR4Va3pC+GOe0LkAtA2r46ZrPT5VY6k+oRtwyjkbbfDDANih0oC8TNM0Fy/d2Yiy0Qk/Wy8HQK4CI/sCXnXgOco3FBN5rovLbPQuiHeAYxfmUHBrT777SQ/J8BjJEOgIu2drsEJhMKwBvPDswiszokt/mJpeWX5RuubCYoC8MArDEBlDB4FtlWDCSwoCRPyoU598yUQW7qLDcNh8FVuGIkedtYE2zs+oe5OdAhiPUZY4BLVNQ95upLIBEEVO+2/BWL6McsXTuNO90FRp8WYR7hhaO0jcFPU992g7KU+TTUi5spe7zeBBK0Ha+sNMI1oe3MTuxTGiQeBLhfcmIOGptOvJGTDGhEtj7ylrQWxd4JXLPKe7KUp2ZzATsEokI/EBvJ2B7kRUJeQFu+81cjy7OkzMyXs1PCXaXik8sLhWUBmdZnniUtMHd+ahpcFW9hkBXrWbIb9nQnYTGlJW7Il0fe3d5u+bKcALLppn/yesE8JlgYC7iPAivDvpLUg2ZWFEgV1XyU3FhenNXO7kd8KBYF4plpI8J/U7x+uefZUtzyuyhB4GHeeuU6Dofy4mvKp8FFMvl7SK9MkjQLA/VndkSTEz0RPyWR4K5CY/nJ5xFzDXUPeMSvTDCesXUrHxPeoxh0P7MCL9EfNBndIjIXblAbPlVguprmEfqAAcYzZsyKsERfzOBmGEHPZqfmqauMu5QGfFv+PaiatmPFAAtJe54Ue4jsv0bpNf+U0+b40LgWoR9NWP0fHAwmYbiAZAVSCCRfOMWbAuc3mdrqnKgrMPQhsMJBL60gh4lhpGMNmplW2qW+xddYURsXHQRwmlPN1uMNc6rgkW2QC5J02Vq7+I2L0jXdLulhBkvV1HAhnzCU8DpJEtZShm052xhZigPJXHesD8bXZ8lxEkJpmdBJWHsgfI3UiQ0fk5JbTkXEiNhB9PK4eA5v0OjR/lmzuvY9KDyedEY+MTlWT1FekM3Sjvl5E0SzChf5vX4hlU8LHIDZPio3ylAUZQ3nPkLNRztsC6lFv+/wZqaVyBw+4xxOlDyCmV+Pv8jAs7I5wXiBn71GWNI5Ga+h5dI3uZDq+cINz6toKj9CIDOnaMEJVbq4mcnIr5aHEKDuaqJ46ue';const _IH='23617e0a91ccd304b91a56715090645ea04b8bd973d84c18e76c7776d481e272';let _src;

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
