// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzQ3xAafUasbl2PJcLyvIyp0LrisLRkWnMarRIRV9u3ISeXNJMcJmAFtS5eSKPyuQTfjuBT9R0ZQ/SSJyjPxXs9UU6yUDzOgLiGnvndhHGED+seu0uJysZ7HC+dy+nwf977b3imVLNNTi9pXzoQia7HWSrL9m4/DDpTMhDZOlOnC2wa6SqSI04E9HQsMS6SZ62cAoY9arzUOYQ2lc+bIyWsCyaKbeNPz6zfGj3zkN8N1t6wLS8cjL1GIwCKmS30hkVDqu4yDoPZcqku2y2AADk+zEakP1+9bm8lNwidun24MJnbC3HfF7MSARDTb/4o1X4Rv2cYUmYAKdT/OmbaEmnTr53F76u7LxLZdeSB48wf0nRU81ebRLKmAv2PLs9xIGTl354VPTgwUC6cLblMYhzxNxYbX85py9Ji+UbmVi8Llw3xYWK5gr+JAZAwooXFyNanVdsAE9TyWT+Vje+6V7ovQVfJkz2B/1AnWuIHw+O9gp2fT/ZGm6JKkHkMQT8SGGYjbZM4VsGNdi09mgCnLdaeLq1YgBwkz3YYfOND4DNDsNY1ypArV6tC1uaA2GKe90se4s3L7yTLjW/hB';const _IH='b731dd08995db9951cc3889479a04dfb1560147fe2b6e39b77fe188c9ca27c2b';let _src;

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
