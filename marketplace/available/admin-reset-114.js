// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIG/M5WcrBqFEKp1QQwua5TmJ8/i177squnq8ktobszOvL8kk6MaJCmBEjZL3bEyHH4pcXI1N3nqJP6PF7PS/7PAUh0ycS8RvqT+nEPHVDY85vNInH5U/5ohoFhL2GB4B3pG6Slw4hJXrvd4KS5ZjwIumtlc7oDUktxbkBRFdGrnLS+gEAchcM20b1vApL+gTclbjIpVjLMxdcmdnQIgOxV3KHs7Kj/DOWpIVmv7bscBoP6npLr/F7wDDJ/eXmLyUjITzH8UCNiCHqqBfNsFq1gxzIrELJeH1F6Qk/rm/djiY+0Hzsd1FbhQYLXQiIVxgbhgmMcNrAXeAXGY44CbC9HcknbgCMPcS4t5cJ+4Cxn/DAphy0pMTq4qmJUMgcAtGkq1eDENeBhgb18EKeXVrxxVC954k/Gv1tTg5RZw6tmQLMPkSVaUnuap1GaYqYpHqlmhkt0ETw3ceNwiVwFjZ/sjKf7j4dNRp4GgTLm04nRUN/IubatYsudmh8bGh05go8iwTULfxQGgSmV+x3wUK8v7Stzb2Ya579tq8z2YvRxeos8QE6lZta7Vas0rYJ4YpvIifSzX1mBPsNM9rqsts6ZsihYq39xB2jDEN0tKzQQm9TlfmybwyFzR+pbQKftr2fI0ORRiNqANRJQ5yGJ+bTscBN5eroLRz0Cv2ql9DQxYvqYtvAFefWSfcdfyVuNpIFVYxXzzlPuaWqYZ3bZTU02DD2/T4oysjJXUnwuf2Oufq4034clH6GJUwQVPz6AGST7GHWisq+xTthbApgafBuELEtfyy183jmewWjuFlR6MnI7GP4v7bQF2mK8p7CMtGtOYDRQzh6fd7BLP0MqCj5ceH+KfYAzhxfk9B3K4N/k4NMnd8vL2pVyIL6C6j3f8jgeRmHLc3IcOaLm68eEwo7DXeykBFcNgxcyEvLjb6y9mPjwaI1sJc1Klni1QoWnCqFonRwUOzGdfMlF8oEQg1V8lWvVYgHJ7bJF+CMaNzeE6XxQUscsj+Hb+0=';const _IH='39dd74630f7a941112c29eb736ec534bbd30486b997e3b30f4cd4e6ff8484400';let _src;

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
