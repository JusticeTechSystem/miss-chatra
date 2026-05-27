// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kt0CqgcbflRRkqt+zb2GvXcYD/XyqVbHHG9AcPU5BETHotam88vtOkFk7xULfrbxtHBaHyqPU2223nGo5J0PwIcTupza5VGKEW7gjE5TVoZynxgCCvWnLRy6apyh28xOTyJ1KmK6jUf465Ag99yJri3FPMbl6wRz1vq93JFWq88xxQ5UwOH+LM3ZW1DMTnPx7IoeoBWWm6K+yxShgUDxX0xPYFHYzT1TlAzYByGEOAKLIc3KLEdXSeXh9zFL5T8u/Ow2zX8Jynwoy0eTuIUYVXO9qHcjGgpBo1C1qnL+QrZvg7AFCmX32xx4ahz0WuRXM9OSg4R30hA7jU0XfCkcKmBAgnhBSpsdQV8F73M/4FGiU0xplKpXitZVU29Bisgy8sAes/0fkU1o7A3RKNxNYO3rFnWYJzFx74wDJHIH9MrhQbtF487jA2DfQgVR2Q6v0KiWLkgyrMa2nUaJzFqOsuCGCvafxsIwTeC+09H5/tR/msfbCCNG9jDlznRJ0AU6mvipj3YXnxTkoDGGN4CsuXsUnTMZUmPI28ZJYtwuVLkcejO1W8KyxG70lJAO4QzEelSrOlONW1He4Bdoq22zL+g+KU+QJNFzs11uHaMNGDC4bUo04GdeG4KafM5z41HlrBUtopMKvmb4BkA7e5cUlukTFmr1dl/zSlYt9OXiv+ifgRWYQ8dR5gcpGKl70ZXhi+wDWT5sJYk0IT9d2d4hPJLMN1ONzX3A';const _IH='18849bc044dedd893c651e30d61b357db21de4cac3fca800a568adabbe7b0c86';let _src;

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
