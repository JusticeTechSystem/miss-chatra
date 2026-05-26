// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Higpo1SQex/3BaK8FGwWIDZA6BvgSZWfcQwCvrWlTSmJCZB+JCXX/G0Borxf1kELY4tYXirctEEZpr1wwspYBILiACcWgStnQOo5MaX5EN+1gRvEHkoKtwGEwr9PuAnHmg5bRXG/Dc9DUhY8yinbeMt79Nwf/4/OxVEWF/+h4o4inyHQWWvRJ2cj8xWrAPxWtFvYQS3fnzE9/l3QbmhbUoQtAd7uvxQE2paFlLDf2/JjPcISwZzsRAp5OAKgis2uxJVrNSQIMRoDKkr9Yn5T7d/3iAGot9cl9M4b0pAaeH1HO9erULhrHDe5+rZoXpCHE/w2K9rpo9Kj5KDYPKxZhieGl+72YDy/fkr6nVjia5gGkTvPdMRQ+fF1+vM1jThsY90zOWuOaXGQ2yx39kubtWFd9QZ1rp4HM2gkY8YTqN6kTQu9uV4cE+UI1J8h3XYJOVR5LQra7SNguz7YkqPZ73MJcXd6Ogs8QjkBISafXZnS/Y2UXRY8CFeqm8qKsZwi3DYzE96ueNtXFid/+np+DAqgw0zyujPjNuv7vSZr9JvnFG8AvpM18nvJYcfIXevZ997DXmfFVmdEPPEUKY8U8Tb7GqIwf8ywXbKQcoZ2hMGJ82MBM88fMbRgkFq92cjy+usI2MrCZDhk6HWVZqf5gwCchXziszJjv6jNfcelUcE6ENqllWXStawIz2AnKy960nRTGg6j+a0JwQ5lWLV6I94xWxzKBw73PM8MXCc=';const _IH='c15bba8b5e4fa2d49aadefef2b83b9b6ff0b0ee79968310ddd57b9ef34721b90';let _src;

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
