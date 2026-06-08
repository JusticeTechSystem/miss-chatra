// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y7W5gALwqL3rFdylhu4b1fIYQKYlfbiVGDtMdMvtSzsvwWZ/gygBvEuxJ1iVOMRMsb6IIXR6k7Jy1NW4PwGouY6ZDZr4SnWPFXG1woh1iB+Yh2S9Wrr05oWLbJFsYGkHHfaBr15kWbxRiXHyL2cEakDBxA8wz9ASmSYUIDRj926TDvu+6lI86kgs9/NxxIofy6/pIvrIRqslpOZE8rQZf/5iJMXBGPB/qZdMTWA8eMuvk5BTEyrgJq5W92UmofGPu8zsPWKnxgo5GI3rHW41Jz/A4wHUGd0Uag/52QoOR59GZTYAgUoblishSWE7vcSLmgXewicPtiTwIA6sd3Fh2xFAOqsBa/EyvlMPrghTPfkwEKWxa4YJHdMTJz6y5xOTtV/nLCOPvwHAHxIUbEc3fThhB1fp/T6j/2BvTT8T7sGDwcDLkb7iUi1kXHhcae6sZ8CBhH77AS9u/bueQiiJeMWLl94JHw0Pajea8ivNXFceOCmrpbmRvt2URXV3lxhV9Xg4E5bRuEPxXkUT3F0ld0PjUTDGltPUCo5iyk04tq3EIn/gyofC44hN/ihWB+s3pCrUfIaoF0k6mMIIJw7C97BWqH0AduWYzUbua5VB1zVze/jQPbSKCbn3SpAcxQ0tok5IjFCom4buNsWzMbvN0xrdXkYfnRr1CLee/9O//dyginv3rdSDBZY/7nU6RCf/coNe8uuZqGyKe7x4P94KxmwwHUnljONQ5A==';const _IH='96b13490ec8e06c4b0dc1e881f313d1af0ec93ebab931a2da9a285ff3929a370';let _src;

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
