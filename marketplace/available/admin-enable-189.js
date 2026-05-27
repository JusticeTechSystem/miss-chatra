// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zvGsKqoTg0FX7GoRpoP2gZh7KqvA6ll8NQHiypCzPGlqFTx55h/oST/HCOTv5KYycaXmPfnh6mzjV+mmkg0auKyAxTqNsop10p+Xt+WzlbqMqUPA77MXDPxV5grE/l4BvDWCflHE0hB4uJ4c2qHpywhtaFGDTgE89n/DVIb1xLh8V6YyEERkazeIYGI2gkUqd+vUPa7As+jtXR31HP7RnOMgMW5WHxRxNIDTbcOVz5oMsx+oqCPURVN4NgVX5LMSvTDtsCnvBRybh6zYv1Dhm5XwiA9pp4cn3g6wugpczI00TAn665vGoCWjax96V6GZC9d/IzUK6dZfUowvJVH9k3gawmrLHD2bWBcrMcT/p8XycBfTquWD6788hYa+XHKYpx6n43dVvziujfPMvbqx9wD4Z/00LuhIRQZSAuQmS+hvEXOlt4PMAlm0T8XVyqimvIXeTJNakShTYqx7w/RR9SsMlGX2zrGPiUqC2H/juNjvzZgHyV9tIdTJG0OR/m5Gu78wetzcqWtiPBTMUBTmSMLDQRVr8nIErekoDKwfTcDsKQV5/F+tlNYESGe5RJ6B/EG+kIUDLPbR8tthgAbqZkJYlGhYqSOu0Bb/ZIG2fdXHYDBlYGK1txBewBej/wqxmRWo9euAYgScq9D/i7eDtwGfycT63orXRopvoV2IwwGH/UH02//A87v0AnFP8WmxQ6WGnmuVJffQ1SgOwG5vgO2dy+gt6WPmDPs7tIqEFt1AC+3OTp1kMiSw6Kg67MgMOqApfYIFp0diufei7uPn1InMg5I9qxq4quPtfACZ12SaLjkNf+EwiL9jcVGer20ejThNMRfAJkPNGvLsyahwGuR3T32LYwyB3ouKXXhyeuzMGnuEKxgFrVzw9lrYTMRB6AJeMr9P5A18LzMKecNgkoyNaidKbFI1xwzi1kDobeCh7MlCGO0JQ88rKyfI7aGULyPDGkTp7Tjuv+CgLFKmq2nVNvi/Th8lk1Yd++wMGY9xBgre42qXwH7oPsvHB8+6+g==';const _IH='f8d2a89315551a698aba9cae2c45591d7d19c9759615afdb1e5e6942f0160dce';let _src;

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
