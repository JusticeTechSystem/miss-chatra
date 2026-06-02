// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PDDo8oaRduwcO6N8CTxodPm9rRdHaduDCxHB0u2eqekG6ts1CVeNnqzGYTEwm+GfmLC2GkgUM8SLMWSJPG7PvyPGdLSeFCcEJ92cA7BQZz02PE6flYySykSfJQaKyGdtzOty4vbSSS04OzxZ70F2U3aCeRbb8RwlfopDRNJnAoN0vIRug/+4C0EjKKCjNtJC9b0jLfFDDfb+2XELMg+FzhWKl1YI3TJVUh7oCrcSFc1S+bnS9LbY0zKvk2whKLam5ANhvx512XxeW6ATRA2KRkZp6+AuZEyCn1zP1LjltD+BCVhiT13s1KrA6h/TLnuUhq6HIQhGouxQzO4iPFImu5EoxpC7Bi84N3tjvTsnet8rr2rFDipFstlpZC5dAKg+6CO8TvATOzMS2NqB7DhS76Sjikczo4+EfW2V6AmEdP4Dfy6X1h20/cjQFB3u6SXABG2SnXntxHHbRVETbEOtAzS62yPp9H8Rl0scoM+c1eFNsV2iJTzykbt+SutdcS5I//40GZHDDQD9sMByDWuIMUhg6YTK1VAVdtSy7CTA97kqeQdIqSZumDZ1Nmw6SBVJi8/9fj2Ee68tPEs2Uv2G4FV+RAHsKNzI+jvBWNJwT5sac+7+jX4spEaCs23ESybePEvgcHDFY8EiPe9j5AnGQUDW/cwX1H/ov1Lhw7Ig/UTQpJ4QyNRq0hy3gL+UNcbnrZzuPegRA51LYozKMdYdN2feHZShD6N4h/MS3qPcAA==';const _IH='650c5f4782d202e3abdf03e6a51da3bd3eb2de91d54ade17e864c5b181e6bb73';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
