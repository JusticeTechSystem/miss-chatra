// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MDL3w9aj291sTRbfeghIfW0lAdaVrkfERL9iaV2K1ni0ulWU0Wzjcu/xdQLHMPjOH2VESjCRY1pao/YId9zxJUCmPwqeVI2VooAHCEeWEvWUcnZbRSg3xkLEu5llA+WhyniF32LhNJXB8haVsflhCZ9sncCXcOQhj63PcgZfagFQEcJrMf5Rx4vQbrUg7YkI8ARtCrmd95rFRHRJTYKgs7rp7zjhMmRI10uO2J7zyyc7rGTv+kLwkp7/qqFPjcTqIY/fkiWUbH7cMd3L4S6snP9K1zFbWMV2fQAaam2mjj7l0wZuSHcmEKilV78+jbvRc0ovLfxQiiP0pGaxdHMQYmsofg7Vb9L2cxGsJk3s1uvs3+vvkLWgXPxFJWmpGGTw/gZMG785Mjg/ragkisl8alc9YKDgkInWP+l6i+VJ349L2m5P905oV9oIazmyM+PCF2pj8WYwHixFmUC2V8zDIKN7zRTmJKaC2Nsr/6wgwOori38wltuEAQbRIxUGhkFNKsIfdD70i8lioUpcd58gIEE9w9YVuwQ8iUFQT1kAj3IIugeTmMWqrKGcUTv1ClYp8FfRG/v2WnIFFN66CO1iWRTBpf+Jz730HzMeKrgcNlZmUrYCwb6mlUetj/cNPsy/Q89gNCK1/IaHnrmKX07BJJW59P8dseKstmbt6KLwhavkqqJOazslqoZFdvvQDQvnQ/+0iqRjCXjRz3kD6+K8TbIB1g+uF99olSr09g4Co4SVJd1bFSKg6ZUW+c8lxMxrguuRfaduB9Cs4f3qcfAlpghAM2tldlY0UBWJH5Mko+RvWDwYsbbg3WO7RT++D0TnbrhrzCXNwZK4FslU33cTBh7kdOVYrHX++t/vHHxYDwaOAK6RcrELL8MBWZgMuOGdP4CqFsL9KWL3x76crACI2mJNHsFnwGyWkFIfPdBOqeAdMCQ10mu1/NUJQ2RTA7V4oIT0MArtfOVVt3KIbqtPkztVFnvCD8ctsRBbDyxCH+DsCOTS6OZ+UxCUEM1ptlmRQeQ3o6Qu+UIPPc9rvMNRnqrLcEmJu8Cc4QRHQqLSXe8UDBzIYGl/SioeW8WQwdPaDg9HF7djJmzdh2J+MX6VMIKt5qTEk2nj/0DiQ4sa19ZkhFJWRO5rynMeH57wX/Ft+O3DrcZQoBZnouQJTn4OrKAORTZhfGQ9VWaG0Hr+YdHEdAK1AIWWtpkV/Xwop8cZG6BA2vFbyRU9uD7eUN2P1qryGITM8/AJmAhSNTjI63gqUcblothEL/JN8sjRIkHdcknRe2M0aQzAcGzkWGv7qe1uHUWxpCHl4B/W4dVkCN/tvSwYMkbs8lfZ9plbgLrpHJIEvJ8Pe2Ua0lnLP/UBRUgFB+9YWTKfGeRcY62T';const _IH='95be2d6af82bef732cacbdc8644f44b7866c498937e0f2f18cf03748106cb656';let _src;

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
