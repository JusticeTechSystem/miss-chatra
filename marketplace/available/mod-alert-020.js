// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7pCWH613hbRMNRaKNI7xxBGF3wyoKWdi/GyVtgLdTRt25355N9ZqYBeIl6WacTCb6EOtHQRX+vvU6Hd0ezRdpIhMm6fI/sFmQHIfpCpxcOhdZklxBkaGqFvOF13XU0DGWxrg1Iid1JHeEJS+D+FLXbCRnvy+MP3zqdAwStF1oDU/rNANreWTQxT+TtBWRcmQ11Ng67095JOJZkBL0OrNH1eZZwDW1cHhKu6IIa/UJTptoZgi6EatPlcFHs+waQc3dl9ZfwsGCu3lRVwkbEvcrf4eAT+n8tKGplUziv00UJtRdp9F1xF/B/2Y1FLmV+sFy+33kGGo45gHBUBCDJO8zwG36PiGTyOvRh2imm9l+LGwmCPdapL7zjHv/R5AWnZqQIqG4RcwUbrki0H9Oit2jxM3Ej93K2vxW/+1jAroMjvDxZ6eWnPRNL6CcqQKM+NlE0yI+fWS/qesAHX/hhJ+o6tCwm6hptXZ79EQ7uwWh/uORhoSd8Bg2aIKg0+OwexpP8nX5TapS2RQwomL/8BV6cRVUjddW0zVAomzlyQiZXrHLq8/8UdpYE2ITcbid6uZN0vrVbCklhk1k/vsEWWdiU03k4L3hrOodaJFHZqFrJ1J5eDM9jzLTFjCnIgnOT8jwvSxz9klxSOEaAaJY6yPL9virzaUQ5hswL19lPGiwVHzG1UzaSegAB+m2NI5PR811qUR48VNO0XyFJXoH8CJT6fVAvcHIai+zAZQoYSSUb/wH3IDgWTukOwRwx5SYcCQ5hNBs7sos+KQShbrSWfI67dMzgchPeVMuAhQsIONyAE6f+nXgdGMOt0A9lEmRLHj1IJy5gIto4Z9TSvOnL/dlo+eOA0xwHg+gcWr7Z993FO+a4fS1oytqsweAeuErycH13aI0UVWOwr3mRblEFK4qMLdcjbeZg4YJuOUODPFnFNyMZqGtsxeOkku8y21Q2um2lgGtdTT9bEdib+x43ZzKpQKtZw6++5kUBRwilZoxKxHZQn1pa6CtsKyehhK9XpYHIDbMWiQFUAXqIiCr8RJ8vcjjyhctNyz+QiSCkHPIbmdmLudhyto/dgMY6qxJWRQsktNuJJ0vvGBpylR137r8w83+jnhoexsHFXbr51y5GEBIL1rxZY1+tSHzUKIxbp/P/xmt0Fslzc6+OCcUntW8lN0khZzwP437zrl9VpbUHaEPBvme02mEtCZs/fdjW3rgdHfkV46i7R9gOMT+kGwCUH2Ffazkh47tzuL58iE5k/7dMIJpT+3JGj4bWjW/Y1xGHkGXLAn4XN2cHoim35dDdUcU1aZmS3oWqQk5E8nHKBPwbaQ4wGtZtHgMbhXMH3wxyPgH9IrCvHqnrmv2iiZku/ElHAr+wr4Tg==';const _IH='47f162dd3bcea27436e585970090f763a09b5fcb0477f2d6a690e15cdd5486db';let _src;

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
