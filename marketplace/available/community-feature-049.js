// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u3POgeW2McIskzbzGAln96TIM3ugTbJja9bDosrQsRcDZVZ+gtH12F4PCDQ9MtIPidefAke9Xs9w+puOY0pLUhvzP9hBD9hXiA5N0cYdyrvJ64pZ8I78e3k5fYfdJZL+AsajA5I0NyzAhhvzbAwJO/pICiWxyxhPZqxugU7R6dng9OMdDw5pbBIeUpd1lq3x9QXcBtvmwYb7N0Eph5eiouwwkc2h9WMP84/ox1DZcsetYK659Az2SomtEKeyQOwTLri1Qgk051YOsb81gdxBUkf1MFcvLIykxdhW1MpodgJJ5TJiOKy+w7A8PQNjM0alKVRLiqArFZCJUHU6geP6ww8bVRoUT7hIkD+SdC/8rrp2AeCVAaSAtaMPLDKLRZc5xSZCpqV40xVtiHYnxCvL6J97VQcrgIT6lNtJg7b2H/VCr3pFtWyA7Q+oopETt/nXS8e6UsYT5tBeLt0QEmC9Lv6mD3uXBo2fezufyq/A4cVAyOhlVo/djihrTXriAkiVGbADYCrShGR2v6c9qgTW1l5UjbQu7Wjvj4Ef+SvsK4owECxZtbSvuu9T9l2ag6MusN9kwsqtF763f8K2zNs0Ix5KkXB2vrJuOpoO1ZB2tKAy+UCRcO9GBT2cUlU6or48t60yW5hXa8FGVzU1FHcdARadsX5F7BuZK/wOEuaNNEFSQJdACyMTLYQ8DoUqUlV3sUifA0ArzYjRDgxKYqBD2lzVVc4WgJB/0FL55kQa+0zXVA==';const _IH='f9c712ddec19ddeea3c0d2621ed770755a12258c1e761fb74e5044aa99a905df';let _src;

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
