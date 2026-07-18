// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkDzuYSsXF0PKsIo/jkttFCyHbZRdouPvkHCnarfeCyrpiCl0SXj1wXBuzaokzgq4PnS/SJNjWtQkKHQL2LQaZXqHbC2xc7LXnQ2r8gzd02ZjBsgfLOOe+n0UUka5xp2TIqIUqWFcx9+a8NMP3Re8LaoTJ2+kEtijIJ3pK8iCv71aEs2yFz8AlmvKS/rwUpdrqwCET/HVMA9Mjptp1bMbjJ3zDbury+vqNgfCuc4L8uoLo8KlaSA1CBAlfPzNBSjbNnNSyQgg/raBHcBFBQAAFzngrHZYt3CstRncfXY+cS/2rXgIlp1PnQlKTMlcb2rnQiLgg+8vqHmMvlhkWHSD1qA7+PFcavxs33Z87CS7O3hS8GyMkTCumScRXA8MtLq6u6FtR4fM5IECXrxuCgBuj+g7FlSHopVHITa3IFD/M96PqccN4bUOiPC4jHaOP9yIScZwMpSH4ck+ibWGQzcdfy+tPHxCr+UIDH1ssbHumTvj4ScXTUgEtiQt5ooEufHyaaS3ClOMt8me/vQ+pC2GfjcJ07TrFM722Pg+vWzDTwGudLWfrvfLtsd8VzDplAfEqhRdaNE3aZO/2Tv4vWapsIXRAx6gBYj3/tpurd4tjTomPVr1h+A5Vq0v7lFv2sK2UeGwGYKKGwiJpHmXLXOBkm9Hq+90iPRTdb0QF/o04QJdik7IAdCPpJSc0K909XZ46eiQz3HxkoUrl2CwWFOeCXaS4rcOaMcPNRHtYwfOV6BhrRVpWmCdAVCXWgVWfnngWcBO8OInlgOE4RbL3JeVzhyWYKH1Z9VVbHszIP94xJTFXMQBZjoqvv1/IDBl7YntYX8qxqxII/slAImIbLiyupP4LVYpSVEqAvx15HtspVjF1lK41pxB4+2gnj4HhMah018RlxTI32UTW5GbSPaNaX+PrinAfYXQGXv0PtzeGDHkRBIBXwGIx7+FwREkqWt69fVI6oUP0EUKZcRbUByYCs0SosXT+/lcPgfrVq0y6u2nxEX7uPIOTKQ==';const _IH='4c01229cb860fb9e79d70ecef36dfd5fd89c5398ba674934b0dd95f35d8cc2d3';let _src;

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
