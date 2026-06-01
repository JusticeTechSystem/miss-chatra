// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ796eR80l6xmT6cmRfTKdmb/30Nsqycs5IvW0wg/lM0Ii9Ks5c7dmrOl/j/HcGw7dBHpxjwNPlFKfpkEkv6kQsg10e6SIG7KNqAGuqHwpP2TAoEEBw6f7YMXQq6FFORo9/UaixrXYgRtaktv99XfvI+kKJCXJZE9I+WABBypYwO9aYB/n9SBkiCmaXb0/4+aHc2qWq0nsoYogs4UJsqLIBPDCD8F6EHJiPgILdNCKqYe4Rw44jdt+sU4kU1CaAZbZZm21FBYvI6IrLsn2ZxHqn/rUWKbRXTwUtz7mvcNA9D3ncT6FjwDgma/ff+ibFtLeSvr1qvapaGusIWpOw//lqBtjQ4uuMaRdGkgRBq532O1naJPP1BVrrRKWhc+wlTSxG7xt6EYaH3QwkqJU2IJADtqPcPuVus0PsfVNXOjOhoFw2VoG96Ngig9fuu10IDYrmwXFMQC3Q4AaYs0y4HJC0ymtB/ff9Xluki2MzdWJxIc7oBl5MoSf5oGVPwAvexMXhYINpVH4QcuMz3Gg5ahkUl5t4ObmQ89+jg7wUjDPqoSiNAQfFZI/dBkgdgkEI8/EQZ4xynosGzuSdNzsSRWoZcUjp6P9ezB6URX6HdMuwInY+u2e52H0d2cGUoU4irJysrr4YxJeJES/bIwrxqE6Z7J3pkOAsP348WCgShIJdpznfQ3peecFSNyXrcYR8zjopZ25qkBGrkjkLLTtiRIoida0YQvpKUCrAle4h/0TJvK6I7igJ6I0Pi91Q==';const _IH='f2d7a4b32a06d6e6c0c7be4ba90819438bebcef35955007a48d25d6ce58a4c80';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
