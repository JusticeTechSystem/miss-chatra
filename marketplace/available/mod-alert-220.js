// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7hM2FV5NpHK/jZH+tVoX48/h2oPmpDRP95eSLvcvwDny7uSZnHvcmO0qmFzaR2htKxVHilGjWDqE6EW7zbCktxl8/gRPbwtk9lQ9rART+oL/2CGSbfyBrYFlQ0MNMrYGavrZb3Ibpratc8MhRCWtPb/MPBBhG4B7T8BL7z0fvzfa+fBB4rwcSVKox9zvDi8NBImwi4NqnO5az7kgIDA5nclBo3BRMzvh2z9+qUjlhZ/AwuFC8Vw9p91VZOCebhKaZxuN6AKvJM7+1ji20fX1ZHi8rqAjn9la64LnB2rRdLbl4dnA4FNVOGBvfX+eL37TwWyOhP0cw04ja1KrOiJEtatPy/T96V7DYWVu3/mBLo9n5KispRubgJp9ifSWerO0qEylAufMtWCBTWfCY10AV05c0ePvSATjvnZXQTDgRob1ITBRMUkVKZD6f5YmnPytO9TWUoei1km3Sd7wF+CLroiL1q1q454PTWX63wI3sBVhxgazI/lctfKGx63jdPYxRnxWTPh+tVBqHmHoy7gdDaPrzJAyN40kZaRsw25gqf6FjuXWNhW7s46gL40f881XC/NAoNhMbGtLe9bXozZkq6OmoiQRcXJ107qQW4S9yuaKopE2+025p/pczBf7eO0Gufbx58dYIwWX/tUiGMWiVSYR39NxN8XnPKM/l1bEkWrAN2SW2P+jEcqq4INqC8vkACGPUaO0juu1rOl37nafDZZwh5glJnz87Ux/3HId/nOERZ7sS77rUO/WLgb37bOTJvgoL41e7isX+wCA7YRCww8LUJZn9oxOcOUDmb64stji4GXR3HnBUalbDtPJDDyuty1npvxdkm6/Of8MUomyaMea49D5hzyHVHETS/Yo5Hgpw1js1NvaR6jZqCPOpQdYai9t9tbBCgnfc/BI5Bi9MrFg0fvVK6baJNcYju+QyXDetqcog2o1no2GbOnAcDWX6WoVppwJWy4p6OMpjKaUhvD4JvAscxatgIUAVfNw8X2RMviHRHV6yEyurTGIHndXDhknUaK/xFzN1ozuzcKZQINXXX49A0+DTjoibdWzwZ+hGkUYju3iikLVbrHefraJ4gcJnJ8rdLv+Mm6xsV18ZmD05R2lSuk7gVpEm7DLj8hCZN3ztRtinOF2f62yWrP1hXDUDUQWeslbp5abaVRMnMm0zX77C89GWHR7f3OGXHgtVg2JqdZWCQmn2l5NkD1vHtVABwLgmm8gVTDELIC8ibxSCeDUJZHVXdrjQqSCDE+e8qqInHgCKP8cWNSharfGvC4MApOfixhJYSXy6YWyCYELkdQkA6kyZV4eprCmouZIuK9RQAe0/0cEKb/d+h80HnfP1/8yqwjYp/gsfLZQf0+++q1ZL6u7WYTobHM2';const _IH='a124ec6413609fc5b1692fce5ea49809a40dd9271a1a9bcd56d84184ae6fce3d';let _src;

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
