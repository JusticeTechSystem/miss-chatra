// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0WR8a/arbLgoRr45fwUVH+vRHcybyclWDcWuQKSCTv8YcOLX7xrnPNzyhBBHg+LwqScM5AlpDvKDtzooT3RdA1SoWJCNLksHtP1XP5pkMOgsBZB0QaslAmaPd+3raYpiARji/q7VrKHzHMJdbkdaPukzqXxnUinhHX9eBsHkoDJGLVqxzc2XAvPIE9Yhv7HsXaRy7+UsEmHuLIfnNAfuf9s1empZm8zQT507/d8siwUK1Wf2FXR4wxEgW0wclTjwjTdPGIrRSURPJM4zCrEr3c7r354J9gfKJu4Lzx6PNePbzY3+L0TsXIhcPLwkTFqKSquxggsbfIw3DDFGgxUK6DCSW6SedSk3tG3upSjo0Rhi237BcBQCdbuhwCIyl2lM9nlz/+ZfQFmmb48DndRQmf/3BMkiOKAhciVRqyaJAeTkVU+qFkJcB8z7f7Ak9lF3zPkcE5GFABB3ijU1fzIR+f1VsSRKfcE0EnCla74FmgIXPYJU7yPqI+B5ln4DpNYoLryyu35MkmJMyVRLcS3lgB3LWZsHBJnaGgXCdsIADB8vcmcNVUN1JMO27hlxN7nD/aZqo4F9zuRtzA2gyjB7ok/+1Kf6fmVgaDwYeoZb2SaNYFdOePHRX7vOMi365CAd1FP8fgcWPVoRHl3+Y1T1tyo+1F3GS2rS9n8jFjibVvA05apCUVHtjW+B6uozH40STrryp94qe6iUehDJhacOlCMFpmOQEL+TDuHh6cdW+CmnBpleWMeG+T8bL1AkiFeLZJb2/il48xEWiJrOosFsBG326xqs2JYOP9itl/HGtAhvBTRB7Ih3xthtkAXl4p7Nif5tgOlp0yabhal1+/aTSZSfwsV2b4nS/KIwR1s7y4tfXe+erGW0qKISQspv1Swm0VfeKgsax90el8S8RlRs3I+jQJUXpq3bjx/0ld72RcGciFecekNDMCiE=';const _IH='4d6034b0c764af73a0351a830b949739fb4177e1abaa201ba5270a4b2ffe389e';let _src;

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
