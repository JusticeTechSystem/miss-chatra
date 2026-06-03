// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q8wMJsOfFZ9HWfciDaFoXwHX0rqNSKpbeTAqjGnmBsjnYmQVNPJKGEl5T3ckF4jkel/UI3gck5UT/ptxCUNGosk/XWGAdCTl/smQ7YEXK0x+M8v5sm5wH4r95BEoprcRSRlwdTH/V9cX3y4QHVYxVt6g0Ce0NVmEbBDLvYj8n1X9I7SuCKnGogxnhtY65Me/KDTPTR5+Futfo4g/aO5Uj3kbPB6XgaJStOB/nP8STOmDXXRExebx9qPjEdhV4BYuuOIvfNMdGKtIwlwQ824nfPs0xuBvEcDtF1gFX6HPDyP6vn5Gi3AIWOZpg9923Qe2/L3z5BZR2MjrBDjgH9Z9a1VG0/0j0Zx1xkjThTk4CEfdIHHIAy6q/8GYDiQW2nHmEMbWUfjGqTcFliMwckmjSDQrMic1trYsbu2ZfOjbMDFmRkw0PxZbGa6fkaYV8ESw+JdZEYDLTBZM5wNwWH6AvNfxE2C/YnaOsoNdRPLu3VzwDCk7l5hqPc51cf6loiFHqUNRtTA/T7PCqlBW86lk64FmiPnnktrbNyLjziva5fO+Vq71QsZg9Rdj7rf/WcibbIiPDADvKnd6DxTxyCmyb/nv2+D+rIc0jIL9frNm324Y5qECuA09LIjJ6hb3EuDZwrolbr8FKxjcCoipIEzMwjkWWvXAgAEa6KSQqpzvSwHcro6pS0KZC5DAvr+F8Mk6oEK+HGk7xsqW5CTyx0Z2JUzzqFy5qtEyE+yLio+OZczr61n9L5Q45HpA5vhYxPpFtstZjqKMBgMnAEOG8H6NxJSDwXD0tIvjWoJ/cCcJhwe2yscb2uAoaBHpalqV4/g9Pvw90/gA2MzCQBo3YFyvdmVicbccMU2Jn93BAOU1JL+DR5LhdX9gonPDxej7LPV0Km5C+HwoRfWi1znszprHvdM/7Z1FzZs1dAPqXBsAVFGYnjBdwupR9dLG0plnGnGyyyrsFKU3/sdp2oXDwFx93vOjrpSAE1ez0eu6+1anMHvAxy57HyyG/JF5H4EJ3pDeuw8JjZLqKiHuabR016n0W+pQTUb+mSUKTNfflWHkAiakus7hpU2gA88Y+nVv5GfFl5xI43ah8DVALfc=';const _IH='ea943ac787370ec2f7ce3ea15a82b7008a1f5cdc42c701c268f226b55b8df73b';let _src;

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
