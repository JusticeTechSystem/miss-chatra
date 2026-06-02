// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jK3YYFscxJ7bDlplG/qI9XbsmE9RxgrUsMVMRmZF9Ltzf6ZjQnL2fmrOKjPeVjoRmaMQBaxb8p4IBOANaBd/gQd6Y4iJuntztiomBL8aBb2PcZGqqwyvCb1K4fpqoLvObxQAf54boIgHcjMKoFe+o3C2xh7wlzFGRFYj4KiXc1+XmYonia16a1s4bOCp6wD6Wo3dI4YpX8jeuVDMZyTYiLdun2yNvqckjHIoEef4detymDVLaprJmWgbD2f4n24nay8/Vz3JrGo0tlt5+z2u9MXnvoqg6+ePNYp2Fki098tdc5ENcqVMnYXv9JaXEx4TeWkuvqrJxD7LD5MVO/Fr4mkndTYZU+PEhUYhneh98TW83EUdo1KyiaJlpYTI0JCrD7eYL7x9JdNZcO4k/uDodGUj1pROqg1v5zeTZluIuoKLXiyeMVpzsaSzeAO7LZy4hhLRkQOLHNXBr8oaxE5HMTAmfRyrEH33oCnOfRA8vyoP+W3GwcbPRd7P7+ZmLcgPzslO0gi6nSmFV040Li5nW4TqedbQUAW98aGu9KtE0gcq0RTmVU28IqxlIgdR6/VtwePbK5K1c3n4Z6WV+BbcNOPutytvsJRFjj213A/xHxMY36BIDYWxSy+cLatMtFNRsS0cZM1kUspio2mGSsrdu2ho4Qi9u66eig==';const _IH='068f8d3a21fd2b25a6722b91fdc1e93819252ceee85075b1ab921260e040967a';let _src;

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
