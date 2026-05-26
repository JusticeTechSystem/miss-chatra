// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SDYncFuRRxExAbyAyeUSAq+hvXCN4II//OpnyRc6pQ+bm9Jq05hvAUUec9Hq492etw6OfBHQhXUE1x+ptokZUimLJnpsF77kH7rDhlRxnBGJg1C0ICNujfhZxNvM0WC3WoU3rCCqL1I9quxIChEhc8IdXp7We6zySN44KD5dQCBQqBoan3x4sPi9vT+CN8kB4021AhWwdaJzmnK9xYDIi/4bbbnm0f8Dkvi6bK07kwFqkj/lztieKINgMjyUMLCGQtfGoLCl8t1vjS3ygjJNIFTGiyyAR7vlTbGelHp67+r+BFR9g2GwoQrBuGWykpDS+0RgYiMwICObn61T8yrqwFCq991Y7dJWHQp6b/6E1AXtxlZVWp7gHCg7R8jPUvbgCUDhReUYhC7gg2UYA1azkDF5FUDLxB3Yby81nu+/kbKY3K1iFz19/ckiIPVg9i8vIwI4KM9j4uP8tawSRKPMnH6H19ZU4mBPHXVmW/BFU+KC1P+kZ+iR6nb3cWtg1X6nujvrlNxCXataDFcMENXjPRbXYRr9GoFWX0rOtDZSBA/4XrXoVvI8n3OdQs+Q5e7baktkSylgFu8Q5YStwYJtaA1bcohwnK79kyn4WrVIkPbGloCO248bQAndnL7XVubPJgca4/3aFxezPf/r/SFf8xJA/I5rcPB/T9QmtDj0e1yuKXlEdbtka2r+LrZRbe1RvpzMphNHh/TZw/hutOsuF1cE6ZbKYLbX+6kXE2b939CWKg31OcvXEAH7/zx/ZQCdBSOaShgz0P6WX2F0Ay/2hC6LboX/vSHYziHD+tMvrnEtuA1e4YcdM2HvpkFDaj5ed1yAvF7TsBfa6SfTrb8Mo/MU3JnYLR63bAsCKMAA87cnWg51mKLb2V+m36ngogH/WL4Q/QEy0LUYO4vtUJ+NIZI2OheOILtbizDNNgt2Rp8cFG4H7WzeGPioLIStgbhY4S002xps+fJ20idylSkSJbBrqzTH+2pqlHg8YFHy3KbnzUCZpRHUpl2B45+CdJ7OqYX7oejvPYtD6UzCVVbRXLMIR7HO43ttGtFOUujM0PJCPqLZLHWmWJ74Y0NTTMiU47E4C3SqtUVNg7xgckfA5wNVqWJm8felrCtlI6Na1IdphJ0A/83V5HHzrpND+Md91hfNgE8kKg5vOcEXbaSKPty6E9U3U83/x4NE3XTuirUISbomZcCFo5fvFkbYx4nt3lxomjaivUwEAZ7LQtCkHaHxFSG3LuliG6wyy+yFmqF/6xMHnW++USvVjyS9xJ697E3L91TQC2rgR9oie+4KTWMg27AXlk8jr5TBtw395SsqgUozzRXLnyhlDt5DuwbUPdwboelR7RO7OiCQ+oqow60GEcELGYpTlzaOG0HUAtJlNEhzCZnqwaJH6RbV+n0HOR4=';const _IH='ca117f6084a349bfc2ceb97cea821c5a61fc863d7993e988fcbae507fca38415';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
