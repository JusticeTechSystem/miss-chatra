// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T2Vf/JqKSxsX6vp3BivnXW/eVMt0EWi2Jn8PN6kmiq19tc/kn3zz/uONfmvSE4zcESLnlC2ZBRmFsdajiY2kiwqdGRszBl+205e2j3Xu4zrNa9FozD5f9YCHdJakWSk/IeBwz++rNKKa0HooNdgnbZ6IzfbBPQ5V8uzHDBatbRrBgXdWRcBu0h/iAz0bcoveIRNvupoB/BKflmourn6e2KrPgdH4VdAZoTV4F+jWnYP6U1ZMswkWDje2aT0CeeTDv26KjafgSV9liGChi5ZUVIOxiOJz3M+sQb5qYBQnJ1W482BgLTn10v71bN/3BpPzs3MD20/H0+WxyqlprY4vAGBbG4Xq4HzThFS8rpoZtVi0cADUIrP5Ut6aILRATG8OovoBSF7f1Q6RJdCaLSh01GEtRDUASIsk/qkAHjk4YHTvJc+rM5VPaEhy/ZP8frhuWNRXelAMvxFT1YfVSGrv+BmKyrxDBRwD+nE4zduIfMujlQyQrWQAB8KClTV/ZLlBnjNnN7/wf65ETBonAz7HUj6bncweGRQelmt44rj2PQOu+ASVrEO7vzH1kU0uF3g9AvCJEn7rqmVB7DZiZg9QrK8xR5w5N/W1YQsBWU0SO2uka41ifASiBdIdcwIjXJ9lbVMeIKpe0C1LT3SxNjPLnA9l0dyUM6asRsNO1MMZoDdEbef1+8BKmt6Bsuugvk92EmB8Wb5zT2efPr5xiTa2DuPBoaivt/8rc2C42QoYiRuPSTmLr90=';const _IH='17efc4bd1ad3645c0c795616170dd1e35cd17c9a5bc06487cd30189a9c525979';let _src;

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
