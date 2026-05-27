// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LmMn01twIkh+vQpobH6ADTrqqhXbX6lrrdESvSjH3UVqoR6PoKlqouO4b+2E5lLPPSb5NtYTZzVuESYIoXWvkx7ucLFFezVuiY66WJPE/QGsWoGlEW5HV+X04rHtt6foBCCTZ6ikCk5insqS4Wdb8GtaIa+q35AAOEQdbi7TlDb9Ih7Yk9XyrwXOtjGFpXmsK/V3LnilxXc7+P5pEy3nLsMVppfuVdWDTku9A56tQiSacqeWn+mKqirQ2eASECV0sQsQwmPvhgNEm8xBVQYXntvuC96RF0ywNMG3nN6uDOPMGCHwaITJ1kzFuaMkD99LS5VnPGzcJOXQvhEqsWj1V+bdADYeglvnaQx0ls7KIDeCofJzLrc9S+UJCMxzvTADGhSJ9PJM+c5k49vM+44SkNNEHqoBKALVpQE9Yprznf4QOqWd+f0Zo8wIKGc7Q43lKf6VNhAMqSAvOvDhamNAmdpm7Sm7NvrdQKg8KCvCb1do4NQlpKWz7+oOUSYZsOVZ4DkHbHzXvWOk/EOQ552xA8xGY6/5xTzMizFSwUnkuk3k1eCLZCZRjFjIiKCly2ugBhpeAL0HKo/39GCB8oATZF84FMpSLC7z5MSAkALWHjoqarMtdIgTy5Gdpai4TwnPj+Ys2iUH3zgYtYwpxVCp0agC3mNs70+WqYFz0xWyxGLkg6saaeNPDOvXU83ZYfG4JGsgb3D1sFj5ri1g7Fy9fYWfLPfeHMwPQXFjFvndJmgSvyNjN9FnER0CUOIbHPWulwMKeOFHwHYcaRwqlXNL/YEQKmQrRqU2jeaFyle50qyKVh5JN5EWzo+Bh3q0/u1525M85Y+XWLydphx4c7ZPw7u221ALtRkT6sqxzCq3jLhuryNVVPsWIaYwickTSECxYRDzkWREJppYj/o5BXg8gRRR28svGfgHJbYi1PZAsPvJ85l69uuv6Ic7tz8rI/B0NyaAQ1QkP4tNyI6dZB5GHCpK49o2DVwUqXG/l2dB0wJUs1KyydwGkMWXdoeUVXoxPrH1kw==';const _IH='a8ba3516c6f1190820096b986dca39ec319e917ddd46ecca1b086fe3578031c8';let _src;

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
