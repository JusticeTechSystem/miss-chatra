// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Du4zgGPD639kvhIthJYI4Nk86Lh4iWg3X1097teM2WQx7rMRVJATk09yZ1b6gaWz4GzmZOHjkqPGwrXoBdYWD06Z+3AqxL4jBk+KCaYMs+v08Fsdnqw3rBjfjLZtoMof1008ZTQqxealulX2l726BRCLsUQpNfz8kxokVU1TQeiezYVieDrOkZr5r5kzBYX/m7bBzwU61KWyUzmn4KZcdlbWGo4QLxaQzIntB2ne0V2EMD4/kV+0R2mr7aIbeo3PQ4jcFi7VI/tY61sg7OSO5IKvUQSJ3nE5d85unv1IPqSGExyLiesV17bsC/eAaN+KFLdgaBVm+d1p5lctI7l3cUzsrh1Sno40P6So5aNWATpTRVrX0xNkdq4MFqfSjo0k39Vyi3Rcc54oq/YiXye4hzehthGLo53HIugwDAoFmtAo2CqZ38zgSJezVfnzH+PM3ZtWNlz2LghwWDl8WoA00L+YAOm7IAeSAx6x+9UXJ95z3IsK6ky/pea7m2XX9ZAB6fS0RDPYNgwb2RxZagf10K9hHeW1k7u700SCLpKgoM9jbIPFbraldEaTkdSID9TJ/kXLBGNusssgnXUjIZiDyfTUA2lC5i2j78qd8Yd94nNfjkMKUn4GankKxZTft7ckJmuqfskEW1OXYxeP+F4sGHxpwE62TAq/LpkNDlqfWg+HvXYTtbj2pLwp9JbVgWq4XFC+1NwFkOGF/e5rMJwZwttFBG4PZdGNevQjUq6ZylQR0N21KN9pwCYKMycJdBo+vJbBkAO392QyjetfJPYANz6k7FKJWnlvPA5OiQ3T3Wg+wVqr3TUBEVgcCz+eD+nTYaiOOD724qu7Pp9fTRNabdmi1Y8XxjKowZau+A6pIALd57Gh8ycZkMVDbtITVVz+YQCiMhchibR4819O/xF+z8CXIi9OKTRCmUWMExR8OvIkULrx0eGSye2eNaLeAvXkzmewt4y08TWmbzp4TI7/JzzZFOXzQNkEZWq8JCbt6f8c1SzkIzfalP5QY+ycw9YIDZ4fICT0/RLPwVOYYgDJuYsbfGAz6L7+W0zlCDaebqOL0T56xZtzzWJZlQ6zkBss6DtWM22scmI1ua5sxxXKIyj7+vca7kWTCjKDdpQp8z/1VMOglNSiFyMlM8XqNsT184p73o20Aj74C/NQgvlIXgTYjbbWb5fKuj1HVHMZk+HkBKFE281PiuZ5iWb2fhMp5cfBxhM8U59wzW7rkHMwDyubT7ftN87+GohSIpMTepAY2YW2lAPPsnJlFjs9iNg7+TEFdG90XzIa4lGzQcmvINkA6s8FtY3dKhnAlMzY275HoyI2hkYyxz0xA7dYObVEFfTHERrJZSeiuAqBUpGWaMrl5rb1oGz/Bb/4oFmKswvZNW4=';const _IH='71c849e869c2e8e4d460c73cb500f60ad409fbb02f212b0251871dca6eafe376';let _src;

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
