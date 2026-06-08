// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n4yl1AF17xTOyBmmf2/bDtG6p7B0XtQSFxSsLlOytA488hIJAxOcwXP5VKSu0uQKSQH/YY1KcZDZHVcRgO06qAiX9DPyFUaHBIzxEuUD1KTdkBRiJdVx3Dl+OgydOIQt7PXeW4hy7DtCYgfzjHsLqoc4OPxgmV+JLwk4Fkwe9I9T/eARbtB7REg+0bisd+7qP87HTaAwIcWHy+z9rGKIeWz1ISKPHgHRrPrmMxV1CEEkMVM6f3u/dfEKpStwBZOaUgy2P5S1wKmivuzlQ9TRg82wfPzE0U949uIt4htuoKZnAbrbddv54p10iUHAmrO4WpMOcMgRfRFQopvaZD6r/bkHTjlxBu6otil2cwFAJyJs8JYal7ztAPQEGyDXway2/6TEC4OyQgJlWE5RqS/WFEOBuPysUw8hA/Mh1JmqT+68d8TYqd/4iIQNMLkg0bVvKsYgmMyUWIFRtE34NCSehcS5OvqdRYTyQnCo4BVMfZdiA0dISMRZ3VVPMYIiC7CsJTonfUXS+3rrBwmTrr2mqEemHSRcL02eJcCLuSwqaSHdiwPzp94E3gChjoPNOcmAKQ8=';const _IH='63d6325d6a4079a3e3cd7bf2bdb9f5abba627a63a012febdd09008c0c38b9f4d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
