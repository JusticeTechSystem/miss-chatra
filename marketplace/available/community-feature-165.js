// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8BMXsor5yYodWpLPpOVZYK36Qp1r9EyjeGMrlK/etaiDdflxM4oaQtMG4qf+pN5Vm0m37tG+O3uAn5gE0FJ+X0EDTTdv9gSpzI0grpFWDZaTii8I954TG2bssxUfjL3PGtbdmcVoDvScdcSqNDMPd9ayTwD0vXJ86AfkuU3wkv6iy6of3vw49QNO4Rky11xlTms3cUEWKs28ZM7jQu/NzLEvV+ECCZY3on23PlEdMT6Gvm65P9lkRk1E5sjq2pUXcmRMIAfhPS/nYKRIXYOCdqJkRbYfN396Gofh/2we5epMKYYEDblKSTlvkZmRdAXDgLCspvAsXGx9zArk1VhR63JjCrOOECncOQjkfbAcPWMUnzbjlMLxW2F4tcWgqC9b/VxkGxVKqP2zrIvjJuuDbeEcOkskIm6S2XW06reP1JUJsSqspkI6AupZ6iMt3m0aIPQsrYj226wkkiHmRBV44WeRtMSU2BqE1V9fYu9zncp3wbOEC/Au7r1DrdQD6IRR7i6vGdfcZx08rz+SIs7r5GjE8qEf81Stp1edSOfBwQt4e+mYqbajzFAraGKDlN5KcgzCF0/t+crqpDoreFY6UYn/upVDojNdWEsyMnftQzyIXdiJVNvvLbIm40pH9xn8dyKdAVp76Y+v59Hx6FtN2Shf2o3ayETfBIq6DCcztRMCKeeAfYVP7ZMnCpT6zB8KxPGoLeLHBxnJ40Iks3PTrHck+HjACGMenynmT5xd3x0MeUpklvw2LQJVQ==';const _IH='8ac8c274469d004d983ea4690cdf85ed1a5842b9dd58412f28f35c9f73686c69';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
