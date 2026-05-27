// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E0m+Wtb4SwK8LXV8btg56TEhlKT7YAtwedHRHW379koDG0QIawT2vZePJYZ4FI4wCbKoawac7pVTBlntLQXybJqKXfKSHg4K9yVC7ONsFjfY8aqYCIxLyTK/d3hOdoGK9vamliCijmkLEtJmaW/Jlwc4cfVnpaQ24pWZreFvMDmDaYa47OFbIE6Uzy//F32CBizp5LPs7S0sNiZyv9CLwb+sL5t9FqH0cg3MiUobR8RjttBg2niHzucXdmuZR2x5x8FAYilL10fCE3f8XwMKONVRhzztER7Plxt5J0Fc6KiSheZvmVyyIEN3SJz8qn+ghhUPWfh9sH7ffabUsPqS0AekC652T4BVZLIoMnzmC1sXd4aSbxVYt/6inYTvPPCsrGivvASFfqBh37L+WFcXa/30wyxo2s8uvjEUmgTR03fI+kSKl/UiylMEQgG6PM5TABFWZXLhek1U5JRXFeYVibrcPtVgdnIgXSfsbo3MFVu1wqxE0oACxemSTAhHrWlp7Ti9Xx2TFsDU9IKcbWf1DHQaV74Uzkiqvh2bJmw9n9/9lYUZ4xK1mFX9LCYE42l11Ki3Yw+rcphC1/m6lHVNJZj7FGkXlPHpj3y0lJK8qhTzwN0eJZygbidDLZoRi+7E+rPbqkri2gtUByhIo9VAOLNl8GmC4ExjWeyfogn9EhMk1I+d1Kxl4uvjpqemANVkJ4XPLsszMY2OBE4jlKXFxCJx7YlAUei8e90efPs5oXjpY/JUfkahJ7ScMYty2k1SG0bmLHSteIFgFiUcUvcNpYIXbXj2HvOA0U6Ig9f+LrXQ9dDK2IepYPC+R7ByrSZ9eCliGCdrx6E2zMS2uecSzYa5vtUIosWEyvfYzTAjicHnStyUfMFuB6Bj5qZnfRM3zxnJ6k2yF1/2parmJcjsZ7sNf8Mui5tKUuuDgou3/kiabU7L6zKt16yP0ro4H2r4KgxTynGW1B3vAMj3uT79tkak5xQPEpmhJ10KnDBb9/jFfLLvxCdzm7tnrXtPgnJQ54FHfHnHm+50uNWr+srGyiJGqyri5BLSODHqnzVYy0Zo3izTFFO0ridl0fH6+wXn8tsDO3ageUNxB7LzMZrW8mZrPyHJ/P0K3ybCyalAwnlkSriEY/mlrPzoeFMtfQ/QV29lD5I9QMK4A6I915XERzOiHKHY+iqimd0XI/7lPeSO6sV0fKV4AsT+/VgfYHLTScR7IGKjO9blK2M+HvdBTW+eZZRStPppF4/8JA1SM1hKtajIM+Hsn9SBp9XrxI1RlhZdzsmrxlkv+yosFF/yKMVwHPgnBDcofPe6KiwhTVT75o6tNMDQxubs49seBb6OxZecP7Isf4Na/MKMc65SdUbtkrq6kyPwA45DpTsC+gRCPkUkPO9U+N4LStyhU0p0bpSqy+nLjJSLu7DJL8cQLL/9klqwaJw1hcdXlOZCQGvqFnXqhGVmGLOYZt4chpmPIuK45kHmsvROjsgzF29zv8ZiZ1DBzSiNJMFS+A3j1kC+RMG2Jj+uDD1EObJv/3ebU15eXry4Nt5N9sKbjTOuyG2Nwe6n0QrGuOm6JBijgSauGGrMJ+ZTp3FeEm28bkp31L1Lpv2EdPde8cX2f5KmtV/2+h0wAecB1dz2UxEpJvrLiBpRvlWZSoK6rpBnMbRwZaV1TnlI3kIzznEpwNiP7FBSUZjd0+XU+3tC/5zqdy1gNK33UjhMxRvcWG4WMuJO3odamruAwfbYE12H+KK08mT06jFdnhm/0LSexWEuqrDo0CGD9j7qG1ZLhPB2W1oX2jUlP/scZVtUVNY1H2TGOYLhNQ==';const _IH='72580581dbe41c8e6314a5737cf2be7c86e1611be2b4ef0173b286b5e1f83510';let _src;

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
