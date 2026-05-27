// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PEW/HeHosxkZ3wH0m6WckJi+hJmEvH1spkeyRzxVyLa2MKiCzj48ZcVvH2H8teRWaoA+olj46AvQgCH47IdtrPDx+V1kQ6fYY+8vB3S0yHAC1VkmKrC6mIW1/gaRerEIL5T7DLREG2UiUOCaiTbQGFRVm7S9QtAtGkEqo8g/574y6MU1woe3uQaiRa4Oo+bvsOy5tgFO9d8YSAK8F/NZ2S0dWpvbMoqD4l+U1p7wRz6SKgDLD5XUQrJHAYeia/ZtQhh5WaJvC361mBVaST9OFD5Hksu01/aNf3BclqrparLmwUzRxcxv2zl0Hq5/m/ZNEYCu/gOqXgoLly0aIIc+gPT9C3Ftqiw2sfc6Z1ANr/HkgsxHlaT5xB75/+Wew9T4jZYZhUOoew667je4NE8qdM7F3ZcrQ78pAvnPBCp1b/h7XFqQWi3EMRvaSp4ORwbCJTUtN7sXi1+Cvct9Kqb0Sz0LGy/cOWn6vqfiBznN8VXGqrZpAqLA8+9ANp35hFLT5WKlXTCVMkBtRFz3MVZGiK+0amYgCFFE4PFW364FJ1QxAOQxgMb/27PdUWRURWzzy6qN8T8jsk/Rn9Im2rEjJD0KQUrttSYxau1Mv7NKFDlFtBKqnoZXFOJqVSmJgwC4vDtCdKB2pgbVstsJ6sQoDdmyiXkRhfyAr5VRCS17zQFPCTJeWHBPHjbfFpXQUFB7xLgeEP/nTTbKwfbI8Nfb7CjXxjubzBy51ujlorItr/pKymCd/AH5pMoWCcdkKtakQucjkuVCpQv4fVLyUSpgvuYSZ2OyHuXKmJAJAVpoQJAySlC0UVYKjszzASmL1LPfmAGndZhivCt+nUsJcct2U5fSBd+t9PAXC+67PAFqjUpr02y3KwUagCAdJd6Sg86Du67OTHL/WTGki5pbr2fUslGbn40jAOXyIJ0KETaHXeTaOs828PwEoAI5/aWvpWcJD/jqAM6hTgOFOlO+Xa39xj2i871ocOkd6rmKZyAsBOyvoUZjKkC9T6jLqVlnDzNcZd4SvLdhVtmibQKZvj7HKZCVzZSMkRHd9AQBmxtpquiL/0OnmCRim8hlpHPwPnAXlKjBo9AH5zeblJPOqaiuRomnbnOF05jLgzPTHqQH9nX2AbNyAfPUYV3377b8HpFFTu4aADUpqFjTWhUvadCM2h0HxQKSwxDoXR8okYD0+44iPIW1tc7MlwWbmPDC8JZkDpWX43AHRSsrWzrqLgO6nUcs8Z5pJ/h2Xvf4IeoC9vxnz4ORzHSjfmSpt/9wYAgtmykeo8BwYNB3Ur8WNLh+cM+vyle+nxaac02cDFcIj+JsdZ3WQDqCxfI22ZAB03pH4vXNmqU0kfz2NKzuOjeGbOU6eI7tykBQ5ZEsb3eK';const _IH='1bf5159f64a327a5ebfe179e827565e1cfad1cb0a26cce78341b2de329236a86';let _src;

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
