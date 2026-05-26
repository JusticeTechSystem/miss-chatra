// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CgRC1BKDZ2x0pt6UOGyCr6bv08jrrDvjVf1Ndyl7ht1BWLVmDXZ+mBZ0Roa7s/IngTxGfb4Mo6YCMIJStq93Hp9usiRKHSOvZUi5ZIWbJ21kKq8Wuw80quEkKXdzxBUEWcmlRmyr4Ydm+XcfnM0vh+Jo7QSMACO8qpPyl5BMVEYaoZwWhhJXvTUlpkL1pgiWCrL1BIAX6HfwRYAx4MJ/TeYbTnx/4AWunQNSP92Ypwb31xsfV+SYd1+BTGIloTH3SyD5SK6MFQXkialRMMwXlD8StAsbsrh1RSHd11xxQ1tpo6E1o91Z4Pg12bQYmfpc2oWjKxvXZaO0utxPzhFW0nKauP4KTKcqOdSM/kyrhZSUPxOuKCmxbUAwt3xNKd6Cc6N9kiO6jjTJ+wFX6OsT2EuPlJh2MKEuTMQXtP06zzA/3gZDlApZZyUOU2sMmytWiEaBxyr85++of3bUaCRQAzZi+/IqvruBsluc1Y+MWc6DpepTs11P3RCvGerYk8YN+gCTqQBygXRqGV3/yj4b/mt83/fKNxAvMpJ+BSP0bJuhq5/J3xSTflSmH3IfnjvUN43GrB3/lU+F1KbKrLx6w26XDNn3EuqNcBcb7Wbp26mjzx/pSBhwWzvtBZ1REzC0ikMaJJEemEF3tCto1O246c9fQdJMb9JT1MTO2KUUsFtCCQ+xtA/+OYA+Wqz/igOdIjj8vDaSWePN8p8e5ap5CbaPUgoB01Hiv72d0oqXcMvYICQ/vRiS9ZMMKoPrlHT7G0D8gyB/AD6CPZUifz5g8oVLsP/AyMsGfW9XLla+XTadgMiyRsyb9YSm0U3KqmqD0GaSY2Y8OC+bZGogZoyksB58e40RnEPgFcjnT1qNQLCh0JMfARgYHZzwMJn4mSsu+e5rJhmvPQXiWDwv79FX4eFuLad/4q+zm6B8zKlddu0a9JCx/BDn0eGfiTunlNUOcsOHRBl96LtADWQFmEx46QQaCgIiaGjUTrCuQnxoj0KSAHTG6/YOv3NpES210WzLZtU+nEnkp1KorzCjiEB97LiI5beJNxBDuvyLjGYjeBEymODaioXY3GcAxORBR+BwAvdpJ7If5kvZfJYhJ09uC26t1HQLJdY5DAGFR7U+iew0lsn0ZRiNzgRy+6uV7G2IN7W5ffUwsrhiWkCdOYHc4i9DaAmZp+atWQiB+d5sodf44eJSlSF5xTo0c72pfOLU0BUX2JLiJzaPrP7AUorl3VpGq9vc0C6LirJTgjhxJFzw7OxbgDBEV9E8Vl+GmvObiKv1w1lMM107nBNJsWGpeCLXrk/taghJAKTCtpkJz+jCNPoZQ00zoqjKuTXrNgTmKDzhORgndkZx5fY2qZZ3b+HbSHx2Zy8y3kvak3Yg/Ek0ZeCIzGBOr5H2uaWl8GryXsXtkwgSyeunPHhU';const _IH='7b4652936691a04d1c5b45818c0d507a5f9a8ae2380298813ef854d18d050974';let _src;

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
