// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s80SEFRPN8YKSE20xM2E2BD+McCh4g6LHw7bvTm4NjEPYhf6pKLInlMeg5C2DqGRAPfjPlshNtbrQWlmBmv59XoS26nMOhulfgx24smXKTcoITQGj7EyQFeDjEXgREYPUqAch6z67hF0vOTEEKkfyffZqPH+dL1k0kQbmP/Sd6SwBB3RPOj/5H+eRTwNOJ0uBuI9okb+TrlGT9hTtQ4xJ2YSqLBCA+iMjbRg7CPk9PpzuH6/YcWiyi1vfmMuZsfveEMWwHqNcUBiC+iFHCu7DpzhXGC4h+bpZcAzjRdVscaMGgAsNIjaVDva7ytVCReRLUEcYQOKnlf9xgrwXSzeyMN21fmHaoKmvK8CiPdZLOttgLXADKPBMts4iZDW6TSQwDrmoCYZNGuJra9ukrGjqCn4zEkS8WhCa7wQIlB/o4RVkHtnRHknN4OOUeUnVuI76S3U4XHR0Wz7RCvSVbdfp6C+xZhuaraR+aWThy5YrZeYrn2Ru7u8oGyjwlaUdve/aFFoAdqiodD/CRxx2UG04gSAVRI9fxkQ2Lbh7QRM5T2Ly/UbojFK4FvwW1x0xW+JIfFpciy2OTuwC2U9c8AtIbihjXZeP+Rwze4zJuuNheoqpNPMWXY479KAOnWzMETG55aWXbw5VdPTuJMnMZZBIuWYbr+iLDpo9mnq/hcnwel7GneTVf135AH+ngrj56R4ECCt6TSyHYnKXeurLJ03Gm26hiOqwvzipyV61ppyaQLGuZ0p8b4dvDYKKGG+KzFNDFY6Dy82odAitfwHUA1wEFewAkQ9WMoIdIIGFGe1RVHNm696DnjAJSdPYtULJUYqKDYxx+stuz0WCEk+52VcgQ0FWoVuP4wBzsuCcC3jI06DQ4yyEJYjxJ6AHeDsccvPrp5N/S6TjwLkAuaPwWp4gOWi+gS68fIzq8xm8bjmKgYuQayuvnrSj5qiHZhL2UTtnLp5vVB0WrNaXFKf5eIbCwGKI7RAiLlsemgtHvDZQs67praqpFz0BwW2cxkiULkCDJBObcO5vmmniPfyZiASPSMwGLk9ctPNXj2gSP/pLO2cJW4LcqxJ77FjJU2Pgjh7oiW7CNy7bFB8h4NOIN5qJGLK/sBgyWiVe4q2QCcwxyL2Om0HkvIPnqo99bqG7kvSDaqvrl7+MIyyLdDC4DmaMpx6mFTL3Y081lWMJsh/pm3I5agj5g0sNbok83nC6ggqiWVO';const _IH='61bf560499c11df25440316307fcaf255d6120b50c2bfa4e2fbd66feb1d91072';let _src;

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
