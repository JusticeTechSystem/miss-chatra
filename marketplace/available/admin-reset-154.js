// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='amMp8y2BG3SrY6bnkdGt0PUcMSWtdI0bCExdZciQNdEDyuBDi+LJCMeSoMd+hSPAJCjAt8fdYFFPepcsCUS+28GsAU5u/yxqBN2TlcQnIC9ONkF0I3SCBYKQYO6th166OMYOCZtXHVj6s2dPduzRFzdMsuIK7fVEDn4wNMz10CMMDXxPNmS5aCcpOTg7DYDBFNVGbMTAf3Gvo2H2XPQTsNXF5LQDx7KnWZ2UbV+f+uBOdioEEDb2tjqkqJGsX8ZONe1l/3LRiARqpAiNII2pFKcx6zaEVjLWX+GYvXaHBDMPidI2sqo67BGxRiEY2ILR936coWJ6VYBJto6+uNGsCzF4dixyjIIj8n4JawZJ9p/J8qt2BBbTbDu1VUoLtuXrzSpxcIl4fXWPX5tWEqSNmTjHf8LHwUonyvDr/QG84e1v4mCcmZMScKE9zs/82rduGt/BVvUubiAXLVVyccScaR+wDpmzsBesPixxkbmEnTeaXMXERcGX48CNZ+uLEHe8oxQjQ5adYYcX5q/ZGr1X2NV2GJe4/+waKb9tErqy4fCdbKsKXQYl/p3baculDByWMX0M5kb0L5VX4XAdXpD6Oxq9BkPyFjlCuEvIdkPFzSnhrXL/GeHThWv2ICGfDtoloJ1e78YrkRIRSaYnpC0ZTkWeFftSmvN9M45QsUznOPfEhEN+b4BdPRWc3TR8ZdLnyhUqKzvzd4kf0aStkQ4NOz6/Jr/8NyUy/o/5ROS1jRPwuXORTReOOL6PvUqsmAsP579klePmGSUyArdT5pXpDwJDiQDiHLfENgYnBqUZVXJXFPgiQCMtQ9G9T3FA/3lwSXoHdEPfNyRQWEENST6A9IUlBFguW63SGv1EYksK8Vm1z1shEHcoGYlVqPoG8bOaZQrpVi2Wt16ZPfA7KqHkxz9kAaq0qjwd+W9dc0et2EpmB6H7djXpO0aJRvuVhXS+0qIn9hKlpvx2aD8IvO0R8UCw7lvuNP9gGlUDhpPmPu2JwLdmGgERmQen';const _IH='b12e592c7c6aace2be8b04605bd0e418ed7d244a258958b43db791973a8f03ce';let _src;

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
