// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a9CfLBLiyBNg+bdIzBXa6WqsnkKZ4DYL5T5Q8MH/f7C5irP86NGPbzUXxE6thXUbvzk16AObz/wEIy2poG7XVIdXv5wgg3ppTEwFwtwGdiCS7lH6PwCqmtpWup+GgVWLS/7xrqXWBT+LPooiaZQPxVqZkPWRPYKkoH7sTbN2tVbjAPNMkzlCFOXYbBmBfDtCG7NPAiKn79yO0oRtrwEq8K0GNBhh6EsguYXsItYGfsdQGYT8cP3CUXzBzvbVzJokDo+F81Op3eHdv+n33FdPKqOHbTaexSjr22BbLRuxsYopS00IwMsoe1fLDwjtecYPdZWzVH/2rfkMQDpFQySEW1sQFr2CRSJx78LG/zuezub42mzNCJvXDFtWqunxaq4+DMD92CWSqYW70VmshwvsJVeCBJ6g6IUDj+xmufQakH7r/bYiIgiXfd3h0fdhPgCLD4+lm6TE6U457h39p9NbCW9A7MyrQX5xFMyrZF8qmfze7KDJttDElCeBnnd4SmyneUJGsQPYud3kCCy/yM7q0LU1yNx5Sny8QkclRtIr2gD16EEZtZjx+6XS+slAqrw1RK6OIvWo8UWCItg4vvZTR/a0feELCoQauNdxL4rR01VncU58yTTeV1TIVzhCvg1UxdkrRWhXRAlTLjpAfhFx+qM9edW5NDoPKlSb7V7yhlXqoygPimg8hRu8OF0mPi+22ayXj80Yax/vGCuPJqbq/d+6pqr1eb/vjQ==';const _IH='92df18bfbbf3cf1ec283e58c1c43c0fd14c2ef0734105cb2952aadbd5c0aabc6';let _src;

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
