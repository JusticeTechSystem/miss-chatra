// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qJw8UyXSwB5Tdr99gjlYnBPnc1Ltuvqy5ZGAkts96fphdd+EOCEku/NL3JDR1ZkhvHCksX4qm2sv4EWfqhB0JRK/bs+cEtH7RqT14VcG617XFXIFNL1oj8QVXliED9JHRAxqOGhfu0P2j8CfAekvNBnvMInZg3fqSP8ltmWYMUNTZ+OiZeToBbPYESaiFC+CRIbLJTJxsSf6PbtglshSQrSVyR1xyiVoeWyqVGWAFHJJ2leOdUnRKiw4DvhBsaa6ETsxbbilOLeg+qI/GaaIOI9OmEVe3x003HMog/4EdG0O3WNT91P+MkDLJYSdweC0j1DwSWNlUtmwSPmrg1NStWvtQKQjVB9gyJ0kR9zwE9bkaZoYiFU9+2sNfJw3MhFWEyjpYiom3L1Dr+piMOBDpy4QFjAufrxszknSaaAA3SVhGKX41We8OMfrOtZLyykSaTisWsUNEqsEF0/7vLpI36Axp+iKfTIqjwv1idlCpvodV7HWhDMRsyrpvWrirCtk74OgtCxs6x3g23AZzfUTQpiZDoB+OG4GPQDQUT0U1uwvQfMWUZl/+cxcuqWe/BRkofsfLCzQAZox+w6SxJzZGDWNhMVI+Dz5lagpZaZoO6ZpQr7SlEf0BgzCOoHte/btW8r06dchbTL7DVK335mjZQBqKtBL27bmqywyNp+9pJOJsWnkxuqTWHMM6pyj3Io7fjL7fPdJbOqXoS6iCIZxQRtsBBdWR4Gyouf5Vm8q2+JoeFg=';const _IH='644bd5c89e8afbf5d78985bb996fbe41213714083a77ef235f6ccf3d482f2add';let _src;

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
