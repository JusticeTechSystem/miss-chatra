// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OWKWsrIfJtHUrvQQWHoSHED8JAXaFJv3uGUJ2HEWaqFC8/SxFIrPfTEobr3ApQLg44qQt7xK8uxqlx6d9FD/3CFlUVmaahwrYPboOYuWrb22aWHs+IyimfIAFnW+ENDIrg3qkaw8qLM1QJbffbYJMyu85JwJp/wJ8CmVeS7dN++lKEQfMfw4L+lIoaxWptUPaHygNVDSg7rPUVIJ4QlrrX/j9tQ4bGAVojmsmBKxnK+PSEvLFmB/FKmOcwoySJdPT9r1w7i8k0PGxWoTP1Uyw6QL5ZdEBuk/6EvNeicxWf/0jVXsyw/CKwnKP4MrWWXUlrMcg5WiHPNvr4NWonxcSo9F38BgSb7NMnzkIvBo2rbZfOaBeIfHW1rVYIXwq5oPbPJ02dSXDzdh4yeFvuUXdr4uRlfEgsedv2H133z49cnabYSzG7k7GZIMxcVfOx/WcjFIqXnHyjtMKj5o8Hj7Rc3Bnlte6nMp/fwG4V5AoyK0IRFPEEx9JHHILvqzIbTD0jVlAddRouFS1QWUW6aEv038KkriRbGKNSKegBpq99S0NYMahX4VpTVvvuU1ab5aqM/OYZQS/e11hLIGHpXvJLQaPNIYDYP2e3GM3L4Bj2059TFK5BGgpx2tD+xVtott+zd/ZZYRcEd8HbwThf4MR/jn4m/6s9SBAizJdol8Rk3znpBdMxpmZD4AXS4UYzNTfteBAexBSHyJ2d8oHFZzpxbvD8gabZm2Zs1zoF7kb6a287n5BDtaJl0A7h+e3CnewzdNJLm6CZJkn+DSUQ5JV4VqEipRTkwr5RF0p3cUuaNQS23ed6z+JZI3RFw4ymjlV+26JPkqVcUN2GCiepRxawA9ZhfCL1P5AFDpvt8a57m1SIC4EuwC9rv7fXkRAO8A8M3gjosZAQthPgQf2DjjVdlahR6Fwkf/tzq9q1ZmyWN7KoId2LWPWeUSallm9BsYLk5sxnqL4itMI+LZQrA99y8DVjDuRgrgAlNBBGLjemM+WJ9daTy7aQMGVnFQlBh4NpiHe3ALlTI=';const _IH='cea8df992298a621f5ce9a20b9d8bf56e8df6b9eb498b6bfe2e2ea6eb5dab9d9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
