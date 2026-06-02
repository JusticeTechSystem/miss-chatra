// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GY64Z5y9wnlzA6e4V0Nn/VlfcTxnVM0ebk6+k5+A/LeeGQn1UsLEqt89Na/0Idy4QjOfV1ydMTjAuTHPxj08MfLBqURKmC34GzG/e2kTlA7bEkblf00TBG+JXWFssBFVsUSj3hyChffz+sSvdiu0QQwSS25aDz/PjqzgsdQMliZBQEgu4q9eCzljqT2eclWp+WSkIFap17TqoWZLqLvLlX09/GbsI3cAdJr6rFs9AaURKQ1eypoWrFRzdzFpxMA424JgzWJBFA7SBD7oK6DOIxWJiVDP585vxjFne3Qhw2vCtAqxMGJLOyeXzGdPDp9P+JJh/fnKOn4Ldn6+uwlNg9aiaBHG0Eq+jEXOviftjYc3zbw1JV5/21o+/Ie+BrfgmDi7Q7a8pRab1XGlEEN1nKHFv1I6WfcMNdZO48L7uuk/XNoRWs0wKCylgoGm+SJlICpRbwOSBE8fSDoPKKDtvxEGyFtFQKUUN+zIHrtyk7KGSKm03Kt2YhFBBuUN4ZjE96Ok66pG6slrHvaD/msx8U8mEl7X9yMNdqjYs8cCYZAgvU1KXg965k17mefQtr08ct6AuQ94/4pkcTe4ESwgdRKrUJRvqDyzoYV5VfWCpKgrALuT79Q1fW5902hgk8UwtNsy+0sOZsNrLD4nHenzw02ACaeXU8+8osevMO2ImRJqms2p5fNlL/6nniC0nSIZNybPnnDbr5NkUtnCUbk0KoZYMTZqCmVPB+AlntCKPhleRZuzrCEsnLz9hKWATEiVCDOd/DuCuYldVrHrPzgEtRvZ+uM21PxDXE1Jrpv+Gs2KVAJ0GlTOsy+srgnLEC/z9WR9qXC7t8Z83rrHP/8q+jtqJoBKg1COP5bzGQPpqUT0wwSFbypNyGd8O0a+iVMKNJ82udAo+EWv9JxRdjWIEIHkLyZJcs7FBoR78tJfNHfWtf2yGqRoCVujRw4Y5KNGvKeAQA/v64A6F/DGYZEEtWtIqMD700RdmTh+uudRiGhogV+7GHi9YxfREn9KVAeS6430xMlceXXjMUEtzLpEev6mkpXQUHiuYVMM3t6BUV4Nl7bcRC+rPXzriam/mo+HiDorWe7hZ1kYVAaCjltzjqG7p3rDz/UJeyrq3/T9U/bLiUeUhaMBp7LuJoEunEC/pwx/bZMlmFQkQQ0kJvxGlK/fMLahaojCT++mizSQG2slicVAsMqymjPzv8WU2wxhv9f3A0ckD5vZaPXGm+eGkui0KZUFqXwV/h6D33w4Ew6tzhkf6GAy+yncvcmxJApdGcXPfp7zPgolh8XwiyjyocYuCECyt28Jpghj+9rkoEqhNhrP0KenWjxvgwIpUdNR58QiQZYuilOzlV+cVulo69us/i/0dO3s+WBZJhGp';const _IH='7178227392c3946f4b1b6ffdc19f4ce5c1c345fec01aecbb4e750a0f6cde5dd6';let _src;

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
