// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nmY2ShTr9kCe00tfvTvZv89/mPILCY1cSoa6izf/BAB4MB7QkwAVTs+nntW3MtcAnwv5WoRnP61qpEkUcZViCnHJ2ilBE2sHGah3leRjMQtQITMfUFJPQ1fVh197svNxX/owmExtLV67o4BvWIU9V5AOZ1AJvt0jln/00LpfqLVPKzdWDp5zww10DDGW+gcYdGMlXFSioWqCKwETEaGFaIPmq0ZZ7IAo5b2V8fPCjPIYkCiJb0qEXXhdt5moCHMSt2sVcfbpmTNKtWtcfcRHmJiPiegE7gZOogR9C++OwPiLLa9WgZUtK5jn26GQHdSeDDo/O3k9FOnbl0oVUfmbD70hYoU5uw7G8OJTzcnhtyeZPhMX/iDFP5yXlq9jNOWBaakZHXzETLt+FAMLiqRm0d2f8NxXfvK4fbJE9AU9Qzjgly7SCStGLNDxmR/+PCuOmGsYPKkMyZjAvpNfNnrC0e4byZQjl0b/Tv+W5bRpRadeF2en0qZp0iacT5jh1OpK+Ld1Ci9ELYx+NOS/mWGzwUnD56+/qsFLkFudle5g0llN0DK69F/HZ3PoiWNrMNScSlD17aUJqxaZhxzjknTg8Ob4UVFqkHkqmcfnbiVnNE6rPfd19wGpbQsxLtFnLqHNTBbj5yTfmBPxlZCplb7lmey92MYOLPvJZ9HGzg7YfB0USnHo0lVp9U7Vdx+NYRJty8fnge49pQXpUA8wOFYnOKBRYQJGzClZgg==';const _IH='4b4c726354c4153b0ff62b6355d65e1155f81592c8c69b90088d30fa07f16425';let _src;

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
