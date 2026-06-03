// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nzSEl2paHK7UKJ8VMWRRjch9Thp9uCKjG5oL9/QIVEIyWrjijWlIxGqu1EM4Sf6QlZtIlY3Ls/YQ3UDqGWx7emsLKQSLU7+0cUhZdRwmLvjU9nPl4FN1ElTTlVpJPvu8K48057Yx1yxvXqPQx3jK5KJX0uFTkt+7fhoIJdxiaebe0RT/Xv1xTvYIdxeDdpaIu7PyLBuxlT45sobUSVFEzCvaUbE+G6PZmvjV4r8Q3V1ZF0NXQNu08BdNs5Jr/FnF92sjGPhvcmcPOp/MDPHxyIPokCMWcCHEiKTuhSgy549f3FqiuaKJ57bu6y5r15JXqnHcNPUI90G2baa7plhcsDpep79WtIxAoVEEPKGe9Hjb2Xe/jNU7WmhAY9lzHh2aEC4D9P/IAARmLqm6r0Fyz4Dv5vE5aXeN4TFmVQOm6Jek88rGfsQ0Vsw3xiqMDYntYahWdSKIBUg4fULFNWDz/esD03A8actFHz3K929G3GTXPYIiX2DTGgbpMIEz0V4NmNp6HKjfoIY0pQY+6jr1xSYpTOhM8S9rQ90pZ4rPZd/KzMRDa2PQyxIhsa7unUo2LvIOKxjANM+vBGIX9uX/HFdkK1BXIrdZhSY0ZluERJ3kY7MSHHIIh1W0T37wSlUTO0uDdEjkoRo7uPy10f1HBnI6VGcpFiCOii+MVbdotUwcxKLR7s3qPOlYRjKm43LyZ2VWYjMcDKhFo8YLIbmsfuW1LbXf6kQ2BGvLW4l7xAr4wFVxS0PiOUZM';const _IH='b3ed46e7347e9a13a5328765c9c681040b7e80a009d0c4d3e704ee20ecbbd45a';let _src;

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
