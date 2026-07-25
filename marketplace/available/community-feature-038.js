// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6b5+t/8OnoY6NIUH+ywcZSv/2U/tRSjCNAfxxz1APuikd+x6IU79S4LiLIFNZktJKooKHg+BAEknprGCYCTplnSkEYVxgpI/FpiG+QKZtDKF+L0OWV+A3ys4casy9j7oXncJniIEzzYSqSrN6vz0nRYIvO14gMCNH4fa+W4ultRcvzwHyq526h/mEYScRmi/VlwAPFqmbgAWT8ycNVxqmoc3MIdV+zNK3JoK74o4kB0G+/r8h2wcRooOe5say6noZpA1ug4pWwk4r0FnDYikGJ/sPsMNl9LhvuW2fmWHY56+JWO6wX96n1e3cwXurX8b2Qq1orYBuaWZm3rIRvSUgiZaTpJSqgH2GK+SvxLhLEez5/EuNvleoFoOJXP2MGQCaC7RJQ6J5F7jcaFVkWf1p9/QR2+nsR4gXp+7FPuifXo8qhWzFQD7RlDh6ErXQTcJUOAP4wf4H4JlzANrlKbdoxw0FWudj25G+io/7Hb3KUBSlEIBkkGpNYwGZrl8R/t2dH32bK0oCUsgo43mv00PibkcU9Y5iNTqIxrC+U6PQ4RMXIIE4hgn9RGt3TesuFfyyODkW75+qZyuUK/EYmHHxjb7xWszqqiLoz0K2YRhz1BmZo1D/X4igiuockq1rwQqnrdZytvKSY/3HfF7ptOh5zFbeR+zJOYDevFLFFyIxzyX0W4JBU8FqnqhgPyziNRaR1sIL7QoZYimDOg6Ga26jtBJnkIKCKfLV';const _IH='3083ad9c1533e3bba56042c50149882a8dc2667be14a1873a3febdca39798922';let _src;

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
