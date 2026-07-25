// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzLmL5XpgUI1fdI7fA8WEuUjHKnkauQkS+ssedpk2/O7kemxVRstJFbNtP15T5cXCqSIKG/YALGcZ0HgFFBbr9Avu8CkEL79/5nSWn4Q6oc4zGCgls0LrXtYYbKlICKhoHg8tUtcOqlvg+/pTq1LMCJ8eVm95cFS3PuKhA6lFpnhCtL1sv/H6IQ8rZGFHhWPTBP+SOvddyC8aAUgOyxmWHG0gMV8xoZmvYplUuFWwZN869VA20z0pIZBCzy3OTEvk7SkeVVLwUWAwqufITY+T1AAKCb/rAbp7hEy39VrxPMxAlfWOik1woSPMN1Ax+DGeo8MymWVDu+byDs2jtNDF9hfx4xAxKlz/4+DiS53STTtWWMqCdZKi+DhYi4uC9FMENqQcEnWLmhjumeau4ZrtZ5uhdfEsIzHMZVKxLyh/rOy6qzQVqU9vngDhWbC24TMv+o72RuqVvN4HQI3sLOTJg4jWkgxaMeaKzgqXU1jAzutGsF7UJBCOGf5c7kKRdS68ARs7AvpKy+88p+gPXQYXybeSfdZumfRMxIWIgsGXHNweDpCU9SEgFYq0LUzxLTRzqjjwu9ICC5ANoZG2/HBtoRFIJfNuoq9gFd1gyTc0hPvcIXLZWSxKaOvdR2Y1dBznsNreIxdNYXX6LsK5q99GRCQWMkGCbHauMS+or1xMnQ5KcltqSIeq8V7wejGqLyjfs3+syfvGzoY1o/im+ciVuZJoR/QkNW2mcUpqjV3Yg0+ARxfh/m38jke8If6phPyhy0wgtD93VFcp92onAOiJ4cWsWybtjXSWHkKpc5AWIjWA596Tyu0mMLZsCGwOUuYE4yO906iIBDZ5zdZoOai3oQTOiDkhdKdMASUzBRo5ESoO844x0qfrW5wiIEGcvZtfBmWQMLzqbWjrOmB8Shpl+1JxTetMLWmmfM32OIrwJNgRF7/xrfOof0qiXpsvanUm2h3wmfmcWkAD0xJh0HU6qOJPJEfFCbRebWLnEdq6gGkoevT2ean3JBvNUoV36lwP53lpUUcUNtq3uHFSrJNEj2A5j3epejJBbOHdBwGZvjTWpMPNMOoKtgza3owjZrcyT+zHkJ97yxXD4yJ3lcH2rqNblGj353lckhPPeGo3frGHhwPaO431iBpF5DJzwZzPj08c0lEfKRuHJgU3NZWhcXVy4piHPM2ZCyxogrLA4Sf34v5XqdCOL/Ou8KpH7ztwELBB+ZPCs';const _IH='f675bf5d42e74e9c479a7a01e0647581840e336e63f55bc150ef399f33f6ac79';let _src;

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
