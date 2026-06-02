// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='40Q84bM6bCUWxZCfwMdl2ma8HWvuMalfAzsLllCSxsDzBUcI7JMnmMvb0JlRTHiBIQ4mKKwJeH1vB74RnDujNSV1ZEeaksYb7/DjOweFg40oWnJ3rSq+hc0cWN1oNyYPJTy2wseYk+DZomhPtaLmq/imE17aaRfd9l4bgsju0o5QuWmX9+3KaDONZ3FMQhkeEVHlYiG+ke2S7pEYYHLAXb5Md3RD6yGhzpT/rM0hpbhfFHkln8u22pr9updax4RwMaN+Rrogv6JUxrt3NmPL1Sxbty6j6f2+erMSk8lFMTu649twkTDrcvKAIe0xiIrSlR1faBGF+TWR353y8oh0HMt5ywLrTSJOajYvF8uQBZNLrarHHo3tQBn231Z421Twq/7No46kHwkTU/7ly8xl1Kbt88R1eICUyqlbqHIlWvMuQMj3MZ91S/Lj8/SHpPLu88+quuAxafa9RTUhnKv/ZIl/0BX9CK7QxwZ/KhjJKtzlnnY1PpQkXdllLD0Vo6xF7/RtvnBWuEVbFhgWrb2iT0/zHDKVqz6byEERtwQMtTO1QS/sFS1Hs5tgqx4O9awNIalCDVHyOT7MrQ/sCvOVUDNFccYLZu8l+tal39IRRcmxAuUM3EGiWof08BkN1hYbyPlkCkNdbLGLm1QVma3Yi+EZ+zsAyXBas5ZjbecnGshMrhsq2rMN4QZPKu+WnjPpNW9wRk1UbRPox/yhn4NzjsoPFuDZ7kyNba5Tmw5NUTT2rSWCujY=';const _IH='764c2b5301146e038c7c8c8ad001ba7894be6c96f6daac3488986aef5b194c10';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
