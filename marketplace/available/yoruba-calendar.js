// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aLfuGRhNBQrMxcVAwmH1KNKcbQNkGXbYEEk2pT1oi7+Vo0X75rGqhfkfor5N+lKu9adU7+qUEkUqWpxshVs45ZRdAzxIqDm4sZjgobfbznk6RuvvzzFR3k3QT6+06u6Nxr9HrMlR4T169p/bOMyTVGKc1o0F9XSRk83842WAs3A6I8jApmJwWWHvAVvB9WCFjHzYtrrn8VkzEw57621UcVIQANOLZXyDM8EZhTjZDwWeC0gly6B8T3ed1smRl3rJDORMcVUKhUlI2iqbBsEep77clGsDjmXpVlWoclPeS9a5PV/+119ra6yo1Iru3ktwBsUDrBqTMDIJ7gnWLCH9Rcwf2V5hLsk0J1MdyKv0SvlBcffFkBubQQFmqeErlRG/5g4PJwQfByuOgIiqcd42p4MbDpLz+Dk+S4TjoMnY/ak6Kj5o1OfH627k6Qd/pJoQH19DstoFxZI0sdS/ZPrzHTua0FjE5PUSM33aEWhG5Jpm/QebJyLSVyK9t0A77rRlui1AjlE+Wm2tiZ2BtyfJiSo1JDXmT/dl4n3Lxpo9KnGF6aQ0LsIRIbu+IVaNWwgm0Hw2FEI+QguK2Y/LZdLdOEzT21gvaRO0ehNxCLugZeCl362SNNTQtUtOmZA/yrW8IkZOaBRzOfHFxbkoxrKlWulayPQQ78bkdlapskri9b5ioVuff+dDyxd3dg4PvlKDCI5QOW7L0ottmjgAc3pVnbgTBrd9IS6HczlpjwOqDKA1eFQ0UJB6iWeLjiFuQJ3/EDFyhkxiJjssFxab+rAzR+CZQMNUqMVMdN3pgf9lsdsYeONEBOThis/4oAjqb1dpmXL2+SgMV1lff307pSAs5W+tF04mByhNMrXknjxaFWG7+Sg2++osvQalqnD5dJzsFUqvEl8jELdOMH9VkE+lhrBa6e3Rb5TXaIo57XMYlwlrGMJn883vjZbOIK8aGuYfApLysiVSIosZf8TLXMaNOeKnNnW+gzLiJMZ9PPvcptm4dsrmf/zf6ABP+YZRqs+YcgyoC8h73eALMCMEs4ZG2vCBMsgG70WMFQMvfrLksHWJXKE1sA9anKSCDMtPMUl3wnTiKVQM64MW2FNHQBHka38Uk5h+o42JJmakThI0ZQ18QS2TqFCcUEtTYK1y9Xg5ig2yZFjV3WvDBhSl/SzrkJ9CVXGq1f+ulSX9FG/IZw+G1u1S7nQFjCtjU9YWj6HY/zZdqhJhELA7ijcCRy0GSq2Tx/0DMR5hIdFkWBEIM8xRsDoOAQVAW+EU8cY39qcTY94GrxlQt50AKCDgXvs6';const _IH='d17e648178059d37920ae09f60ea1806080b63773accd83cda9e7199d0f56879';let _src;

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
