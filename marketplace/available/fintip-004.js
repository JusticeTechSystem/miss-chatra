// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2/zHnTPm9MFQ/4m3O7n1ZDR+3JrYDS0u8KdBKc9QBi8PuNB0U8p0xdPKXNZoK5ZjidpJ2gxEr7VRAVBBi1N+oEI6eFJ38aVD3C6NlMhhTQsZB29wtl/HKXFnvy3I+l+u5n/O6/VhJziWgYaC+0vK850M1tZJDKgt4kGcuZ8q6H8yyHIO7OPqbHFmI3ctXKn6e/DEpaQ7TOwpiMS9vfcsT4dzZtNmrGPH/8dpolSxh9FSca6OLOBXJEYU0IxLGVaub9aCLLs2KIfUeLlyDAjDnwBrWtLpLQ4NdAW6fE825D/DH6BvCvKNVM+AL3OOurMnwMW3g3w6dq7CXD8+YFwb2f+mafnoApxv/HGNjJiE21P86DpLBC7fPVRfKlu7GcoMWzFd4uaxhTOFhvLnyobdN/oN+r833u9HZgd/Uoy6PfHeUmVj9cy/dxh8LHeT8OrskbrRhcPDjU3FRhUUyKRFjR74BrtOWbdWYM+sLtpV3cjHapf0vrOED+gVOz5XhbYjm7aiSS1/GlvDY3BJmPCVdq6zqBRYMUiK8ckS/CvN+EZ+Rv3owFcsjswbBxr9AV8kR1kK+ulupQENCi7AhiBjEkJlzc894dZ/5nvD+6GCQy4w6TepqUNs5EXkcDMmkC2OOM8e69u3pTN8uvC7/95+jtt44+peXNm9VrDWyu8YEAcSJdujn/VRWKPhAwLbk1yhjH2iWS80lklAA5ph2Gy5M5gdFPqRzMUxtnV+BKma8vIqubrxJKqumqksqZiXlRHvlRn4AhedPwpQ7bGHU3g4ojpgkVZ24Qgemrr/VIIJwvh365XIovVgwyxA9Y6BjFfBIWB07lf1IDiBqc33IlNUsgiNB4bkMVNfFeee3Q/l2MsY6L3253BusiYXKBwrjsio8MbIHLBneIQoDzNd8r2rjtcUXYH5WdIbapJdwqeAIghcp4D4ug/HjM61q11NOyCQqR1P/wzSdUY+tLdt9Wy3Z0FH+mz8pjcWhDgMTh+z0sh/rL6FEryvsXmdnokI2OrXXBC6hol6y2LUcUNpneJxErFQxbNYlSrtaK6iSuqX';const _IH='81ba947b55869c3b25fa685d6d9cb2f7c92a195f7f80cb5a2a0f4f1a54e710f1';let _src;

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
