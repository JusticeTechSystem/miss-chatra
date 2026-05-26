// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VXjp6VY9M4l6wSbp7ccp/Ocq9+lAOhjiqgJeZRFYMV5Vvd6xgervfVpIjhzeQgmn1RpISb1evwzJn+1tuQFEG7HlhU3mkHKLYzl9pNbgmhg4J1/huuEKAZMV346Tzgutul64nZercS24ljyvag6NOzPUMhaQ+7Zo9ZxrDbjhM7X5EU/fM3jHXL434eQ1w9Z6FXZ+TLt9LlNpRCORT4K6BjRrFNAsCpCak5Uv5t0x6BMUID10aoQjez8DtKWXtiMhA7I9xggUbYzLo1rXz3F8CPskIZfkVkTJFl0J4VeXPoWYWeUt0j2KPoPY7/WQUI3Ds+MsPePEvIMVEv9n95fh+O9a92C/roLnMTPE3vIfX3VgxIRoJ1LNmxoRFCHI4bJhn3gL37p/aYVW4N//0koRXkz9kOGJoB1bfKpiTs0OOCE5uK2ezgHTXaaha4bXYogAU1qNd4OclzLrkCKHMtTyonxT1mENoWKzd5OexVTYtlPSDXL4fRBSA7jMQ9+Pl5E/FMcsrngfQ5WAYWIV390KYOtnMbWtEPrlIorahhMxv8JMFR7z03SFu1rbtzAcPJZt6GQUTgmsBUS6xwV6koa/EXxX3d2hgEi+g8FFLOfB6f5FyBGjp94O2TRBiun4kE/Fx07WI1A5Emnmeb9wFqLUoq0586cYA8o01+lHzgw1V+eRSLY6pMtMcPaf9QyU+pVEgZDRWcx9Ad3qAFvA7JXWhnOUhOtOxkwlbwYgBzwusmojye3PTSUAOhuaE56CfOPzkIaNZVP0yWTB16AdhRRRXYZ7l3sC49Uwj1/vIiVlCYA0JoG1iPslOKx1hJRECtNPoyVVo1AUUY9ldCOn0Qczi8IoEWhV4bwZrvybm+Y2jV6UP/uoGi++7TaVXS+2pK5cT4GPrzLKtWcQIcVOX+wTMs1IazFzoCkKnYFrJ46IOuSocr0M7IPcddTGNPf1DwSGHvo8DKu2Szf6oEKxN1nr8MqkhLyR7jItK7xCJNn/rCsnVSMxCXM=';const _IH='60b30847d899f6a7015f09e941a5eab906ebb42d2d7288c2075fe6edde80734e';let _src;

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
