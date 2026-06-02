// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WGm0+KW0nlcuYaq+opXpBOi6JAOCkr1/MVKk9H4jGHnRRa+HMnBXmN6bY47MUxpow2F62i0iyCLlDRVEXdvqFwf74+x3AP2H6OZfFYzNDgj8nEUA75bx+0RHcpdM9PTK1jYsRaJSCko+TUzwbOEXg/HNPAUBAGkOFutA2vqJurfcmQuVSY5OdSUP1TbIRe0V5/ZVpPJQsV2e+oAUrOIhL3vfiNg/yCl46flQY21VUZUWWteT6cZCxkbtXkfsV6ma0uJzzVyx0g/ZRu3oI4UUBQ2nE8IF+3WrC80UVPOaANnKENUxLps8XfDhMycsAVjhreniFysX8eGVH4gBWcRpR4Dosn+RYFblsPAmu7tItrPk44n7HcSyhKqQtPF33G8iFfCz6yGTxj4ZiyNk7li6fC6x7ZEg5G1ZmjrfQQ3NghhfI1Ca8NEv/1mJstfusEoAN11Zwk6ndY3484zosIayBThZh5LuYOOyp4P35PbXcA9NeGvxPqZ7oVq49oXjX0zqF5Eg0OcjJsijC2dgkhlhCgOBA3HIXHLnWMTafrQG7miti0d12Hxp7O+TD+dnDvs0FpzsY1Znfirr41bNeG20sAnD4QkQFKhlz1x+8Byfb9PhmzN/ND8aB0H35fIBfZGVRiDBVBKdg6Fg5CNOVBT0WU/0JDlvdA3s0N3shdqRm1q0rP6LBGQt0tGRuldNTcLhtMBCP5CrDbOVnyDSundh6tl7QR4hK/5UrfEUMPBOkMZVLw==';const _IH='e0103658a6cb6ad9f78a61b5b968cc22050b0170fc4061c11c3f218c42b9c352';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
