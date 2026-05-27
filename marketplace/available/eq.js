// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kV0aoJyFOdEA2kjIo8HiqWYERXxaQiON9FRS6VuM9tkhszM65BNX5iYSFQG4X5nRjGi+7IpNf37pTC/QgRXaaHqDurkYtmiehPwVtVE7zT0WvOafl0rU0jjPqAE2dfK7zHmGSCRrbtV2OncqvKHNAx7oSXf2w0jWi9pMyn5Vw7sEZApZgwCqJPrzkRRweaJyoyGvr+5XEcJnLLRh3wjXU8fSFFA5dQ8W84/Evw+21vwn/RszdWMuQV5SRkWQx1gXfXIRwAzlVMxUrkwHCchg/8zWvWpbOK/rNqQ02K6ty9YLOUNbQ0oYAoexc9CkBeFAd1mmTZp7UFm42t2vMOTTqQvoVsW1g1LZr9ets5l6K2dNNvpSgVfO9kvHffeowz7MeiKSp06rGtmImuqVY7XLC/9dCxczpy3qvwv7sir2PiYQATPCOXIAkSM3MHlUr2WgEMhsv/AJ5OxX4lEyfv2+9c0YpSVJHIX0Wu+YAkNN0StyQGLOfvp8/+G9Qkchyyvx8dnAvhF/FVb69yjEh5A9Ej6fzyH5J1R20kcKC59oaJYVBj8vsNki5mwnkrtSMM7LyY+pzTTsNo60nm+vgzEHXyLMM6JsIdWLZq9VV83FwUEXVgDLaQfeLMjGYQmaN7kJl2NOxxQzUDH790x/BQy76mQNKp0JL5Xr6DCY80Y1UWnT6DC9LRYi6+BB9a6rB/ywSLZWcfdPUqP5gL1p3pTVTvSHQIVroEldGI9O1WxYlRKQNFS6cIL6mw0Rn2OtLN25BgD9jIuFG/9JVAjsNttGVcENRrDSIelRiXghbvqjCkoXZq4psL0hU36Tj5YB12XtAsL3Uugw4ZNt9lscog/vVS084H494wcuPoH2vDVtHNk3rhSfelEIR76bCUeJfCP02bfTncsyk8SO853NfJhpBiBjH6OoH1angsthhUNDU7Ng58GZy1XUS2ujb0yLZJpcyxGyflvl7k8YE8yJRjjGwbPLLzYODwu7dsdPZP12RXXqhwlmI+IqPuQY9ey2ZE2hiw2vFd0rVM6tocnsFLmTKE9JBdaqxZk6cWL0oF5dS+9zTjKVRd0yEZSRqGCHX3HWsAy4NrLZa77cZqBFWKaOpROwxNyy4S3B1guju819fonyersVL46XuC/yRSha5QxZr7bRpLFGT8QNiLuGRK9otHNhSs5JbSdghA9breIU1cIT';const _IH='5c449969c39d238988f271d6a7673595973dbcd999ea0c3ff2a6e7e2da67820c';let _src;

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
