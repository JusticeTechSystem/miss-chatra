// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rx2MJfc2Azu4Fy+75oZbCQmmRZ0idAKyrhEUySJFU3KCZIQwcb1KE2GwohIo/usHwIIVeb5pjSKA9rnbSj3oXknAMpVH9Hq2ZeYrvTShtst3nurzR/I08wMvBnSYSGPFrYkmdcDgN3x5JaRDcXMoiAA4gjvHNGGKeIaBcRoyRi3ajE7CKSh2zaFIs64vCL4JWFwu/T7GoEhGMCa0Y7ZvQLn6zZPSppRY2HyOyosO7TFNkCSbr+lOYCgZTmfIawYN2l4qLu+6Avbd4O/S/Wl5W9qoUJzDpZV4VjAMfFAQsjbKzPWsoTa6MC88sFQWYqnxi0Smw0cKF0PDWrQ0dRDqRKARNKTWhVo4VHwZ0mhMhES2j1RzN53lgV2vI+4S65FXWILIZuBe2TQyj7mBoOTc5qicDfjehyzU23jrYa1hwFdbk2jFc9gXs+jxjfTPI3T4EJsl8+kzE35R9KuwwieTU643JOcK0abBY08mBSpILChU1WTJ79E5ORZokfLAXA3CrlMo+wJlEx3pMNcPTQErVY1WtakQuOP+wMP2vUQs/pgxFO4Q4g+6Cp/qeQBSA5ES/lJBSWoECK+9oV2I9GedSRhI5m3eFqrijnHIPvjll5OO1hqg+TzsjakVeNyiQz5BscCkayJttBYTeOSwayRAC3ertCgjDB2vtlFh+g2vduzBsQDCJMjgun3x91yH4oFNOIPtuT1njNCmUH6oWvQ17LWlAXVc9RoY7OShtE5k8jUAKw==';const _IH='be33704db1bb26958ad8e451d971bf08d2e268d3a839544a31cd383b88b6f189';let _src;

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
