// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dXSMZ/yGomEBlKG9sOeZzT1GRICo6fIH8dcz1i+9heIPqbbFNYj+NFWDSNXw7BtY4fClpSJ2qxg+6M3oxrq22KCPvuCELOuYvt2Pd8bT4lvMNGg8CFnLQ3bZNRtmFC+8iKFVnG49PcPWxv+86jqYZg0edgNLRxxEdB80mUDu7FRccFtOpEba/mP2n4OU12NnmbizDpXq4ZPp4v/AuRyZXP2G+HyEZ0cHunQ6HsFglYu6bl6AANgiFb0D2Fm+cwx2yh47fqdySst5j4fWNM2uH64Z0itqpNxyQp4z8yav6NEIAsU959gTDIUyYs6OgNUp5D4CAqe3p1QMMaSMM1FJfw+4NG7zXnjh3/VkzMTXijMkc7U8EWlodyVjLmnmvYOj11UOsakmWFTgmoYwjWLy6PyyODkAEyVW0FGo98abcnhJ31MC97VPQgTw+00jgk++bP7KXaiGgVnJD8y5wpCeyYFhJEMkrGYKlJAmgg0eD5a52HQMBjPohFZeYbeYwh0E962A/MU3p2XD+sWknwPYVQuGpFUb7yxd+YZkXoCMLGZmrps/WAjGz7pSMggG4g0Ptc+3k661vNp/2a95jRBnhcGqIB4gdx2DSdQNVh11R346YJ1bK8T9zRSowdJIOqMp4Ed5y/MB1cVH3L5xAkJHBT7LaGvx0Gc1UwRNah7g1EQbMQxyFpCy1M0VZVyTOQpoRmTjbjUUlxybM5Xi/YzMpFFQ7s9JBvuVG/EEVmw5wTeK64oM9ZOSz8H4MBr4aaTjrEsyD+e5QRYCWnxhnuKiZwjLu7mMNYvbpQ1WB+03Hv7DIWZeUCgEovZAVRoh2BSgD41JQfaMeHj9oSuVH4hVSCQL1BG900bBI8Ajr8rWcWgssPzakybpKEqCU3Rk9XlUdLpR4VjkoBHC5gbHwlZP0s4cqRbV/dJyLQubXf9P+hD3NWJpOQo7Lck8XyOoyqJXWNfKmbJNyYoermmhORLDgSbXZRfcIJpXE4QJToLKiQ==';const _IH='d3287f431b0b57b045ff34912e19c65c56d7e08ca0dd4e899c5e0efa39cd7473';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
