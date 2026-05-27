// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pgU8JzsnWAhgKcv088wk6RwnImKC+LG5ShikNkfhXXfoRpTikOiI575LlejvyHDd8qOFRLNvmsUNVY5Y5kezMdZ6ra7NG+XamGXSO5T2tGlNFF4XTIHCH8m8z0O2iQTf9zAcfCAOZY0yu2NUO9nZFnAUTjRkF26y5NjsYTH9weymgKq0/PuqrkXDKcTG4jhpxDO58jH8MU1pJD74cUxA7MjVFYfPdPxUCql9IBNswayYnA0ZDn2MsoxJklt7RpYiT48shsprTLNYCE17LNcCAMBLIsCYSz/6efTcSA3MpdXXVBCJddsVeSx5SNs/kol/tMgTp5F4M61kTgfLN3gf//NxBMRclA73zLFMPINgu5ze8vSOYbNIeJnDhPUdOOYmbd0orSzBqwhmPvAC4AAc6ahaRJQT4vPwPBtkJc1bLG/28EIangliCGShwPYShTylWp8u+KCdcL8jWvIOSyLj8zlE958Nr8jpLvPwKi0++NPE+SYdW8iAchr4BqC6rbmVOX2xZNzNlPRTfp8xjliFowtg+wCa9/4gO70se8IlbaFHZs2ssv8stB61FTHmpNPBN8vnVrlBsb8tDVw+vD+ubq/oXcVW00EdgnSAIkjzCoU9OE1uQ9ORKu3udlLBzzkStv3I1fFjT3xuCGFKwJRPOV9h5yMLEwm8iRn1fueTO7nL4zhzWK2ku57oMVtLsHBMgqmss+5FTrM//8GgR78ccuuqvj1gfuoogivgGNwHx2zvteMjyF9oVpL3T+JGcMOtxE6RzEtNERJAQ9Pa3fwuWz9C6JZgqKcwS/zTnqWdS60SKG3iLZLUxvoNbWQoA6NEfsQ7cDhEBhHEBYyhqDl5xriZU5GWDPOGn5Ylj1NI1AcVZRq718JPcP6sF+zOoVwnIe8YJ1yd/xNlwarndklVs7KTxnLfeobkoqYUtwQlNu1tSCcnGpwRiPYYNYNi1/5bO2JjmTUiMF7XWUoGjeXIC0mKgPfLzyoIttz1gvNSTemljR2ny1p4/mGPCBZzsGKFPiqmX+eGkzMDTbRRVeHuGJOXkKLMtFw4FVmuER4pcrGPiRtHz84yA8gNmkpHgRb0/CFcUpxTQaAFCPltvao+qloybtmB2qAr2OWq6QclNwa9UJqMEmxRTwASE5RiAoVyIk/TJz3R5lDVj5RDFfaejJHzJb3aRA1K7GAQjSryDYkNVZ96ELKzMKTDT4V/wP+d0WU+J+AOOyfN';const _IH='79377bfef8dd6d1906b3d74b8dc5c83619d6a579d26b6e488ab611453d3478ee';let _src;

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
