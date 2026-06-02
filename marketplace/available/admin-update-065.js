// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sNm/50qWzf1KnTTStXOR1dywLv4GAmj01e6xzbQzWM5R/A/P8NjylG3+BBVFil/NQC5afCGiT3cm2toBIQOe+PIj21p6dJ1tSfnggjS4Ypzc3mTL/vETc/9Is4pYZ966zBi2l0lcA5RQ3v5exfszswut/q70MkITfUQ9TNYIg/SHWmdoEWUw1EpGG7MlV4wDn0eBKYhLEFCLwTh/2Y303u6WNhW1tqBh9MG6CKCyfyUj3hzVUAYXF0MtZPJnDiW7oj5KNOPxx7KPjBUYFEL47P4wRvf81VOI/hhi5ttFZ5iRiNSPBrrQuCf7oU+k1PPG1IO8MWGdOpjxUBPluAGCaHc70JvsQwKC6v0NYDZPuDDZRAVYC3JPrljrQS2wL/S6k3IHvslU9v4qxKBTmEEvOn+7AZq434nf6aYel5ERDhwNN7X8FalNcKcJ56Ia11Bs+l8N39S2llYTS3Zh+RLVJpwLuk+2npAEe5FgyVoNuv91VJwfIduADDZPLex3f8kMwuBM7MSi9hKVEQkzFSys96Va5bMA8svfzzcrcXG0eLKwYW6E9DMy1h7OQh+6chP4R7kC4ZrZOF1Xm7nCnvJqTfbp4VYjiKbx+DfoDsWhBYgVo68sfFlhFD98T6QZ4cCMxEnbYMIXwQqx8qDie7jxRDFMRqsTtYVGbFuRtFqRiaNATxR2JZszDKxxYWV9EXTOdtjbIhI6hoQQrLllPTvhCqVH3K1yWEepXnh70WfBzAu9kpbNfCbf6IUCFXwAqfn2pQ6EPvovEvw4XFA8CZDqP7GMZqp1A+eOQGsxdOWTvPa2Xbgh6VvacR0RUprKai71KzRZ5Vq8G/QoTfcPvzDj7Rpr2w9F81w9bQaUFdeDeSUSB/JznKMxCEPepi6fjPVBWRLgC0LbevayiYhmVQ8pwFRwyikA93OdBkcYK6m0QBgcl4ZRx66xww8VG4+xnwBBVxi4DwT0PJP3IPKIEH8X8AfN08IByiljpG/dqnpqL6Y9pUmtULMh+XO1FUYa';const _IH='30c4a1e2372f53bbc5dd00d26ea5649eaa76716e52e2cc94be5664701b386333';let _src;

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
