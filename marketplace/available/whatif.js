// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K6ePjKFjJs6z1c7TbqqRjiWti2wcUpyTAZXt0HAa/SPD6A1dRhSAd0Spd/QIRzOH1xthd7e4iaWhXecKyF5yCbtK0b29E7yTvyvBXo7trESgChrtV3yD9qZn4U6vvYrnj9wZfMjZC2aLz0Bt6gLHJ8scpMbSFMmJaQr19g/5uThfjxOxy/XBRiOYavxJD+l01twds+tWvG/fmkRLkmLty9Gpn0D3606q0HgFoIo1ZpelyP8eqsCmOUsfx6mfwpginSKU1aEQdD9u7XQ2VBjr6ZCHNiZ0XZaluOTet3avtYZUCkUeNt/Vq6xsNJ+1eRF6wEJ4avjkY+3vbGad0ecqqxwi3chq4XVZgCp4z7EtwfQ8vQZK1nSeERMcRYBl5U4HzJ05DFXHLj5wIpA6n1LOo7Idv7Ha5vG/RWkwx3PyfBNJqe1s1bXQOetScZQhxrTLa5koGanPCZXeKL1fzId54VViGoxSKFUPcqFAw7ukUWL2A5+wierlcJ1FvBz0ahFZhFZtVNv2psFSjUcxY3ch1DhMFy92aFvDgCTa4CUhM2mJhsjqz9qftXzJ6db6fDEWAjodmljSM7eJ7yVoSAkNNbdQmCIVjZuVhjr/wKErh/709UYMNdtIqYhQy/v4+gCrD9PY+uf/zOYmzbKW9nji/4XBndwIvkQMv1mGBbjxVM+dLk65dhT0BdNpJsHQBwin0RgC26Wqj6c5u5TFpaNBQH3P6JgxRp7jlCPC2OfCaoXfRaIWtEr6sI7TD1aco3AYCMWLSwSmK765hCDjyDdf9+vWiEoCHCO/wLBUDmdF8C5fGG/Z7zGuGTVMEB0fcA54HujCssrTCzo35/hgoJoYfnqE6ATGs9V/nDPCxA66Yy3HpTrMEJYuKZOuMqZLEiXS67CHiGuLVvhvcegxuzubtMRsRbAIvllfDEN16Hizk+19ft1pPr5FJS/Py10H9ONsj3D2eoP+6yJA7HXQ6wCL5bwHkGDWrBMK3QISpDOtDDK9s32FF0qiroykgdgEY8GY2663nZUd3zIBdLYUhUWGG/8q2Jp6BnTroQVyCnn1YZ9Q5XTUYyxQyHNnyORZL8Ckd7VzGUTB8M6J5FgvApUe0QP1vc0lJSZyDTOfiWLynvtrPFEmW5hgz9tKc+KUInm6RNk23cS6kcj02E4ZPYE2R7Bnlul14OJxnfk9pTbwdbAZKstXAegKqVxvn5ZtfUZDOJE=';const _IH='2b2340e67af22b123813a43b771f11efa76711993a4a4190c086c3389c7d82b3';let _src;

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
