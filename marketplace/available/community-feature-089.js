// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PkCahiRSao2AV2JqRj/FBpzHRXnjQFC15Qcq7W+LkHBsXmBA0m4rfRpKccGBaA1MeS2HSaG6Hv0WuqmSexGzlf2T9P2lKxOyg4TprhR5wgbd7z5EXBB016+8tL2GayQhprhGfvbxkmQ/XqDJWDVYo1mTODYdIugzSAU6fkHpaqL1MS6+U+//5Mv0SN5H8ID2BAv/uNWImqRZPvOUxjEnY1JJqFRqQrmGaKtle7YF6NbYhHWRGVPwhS9mfrfhR/0rL1IJ/d3ZwtyT6qHmQiF5prkKOkPibQZEO5ep0xUMAQO6AK8rbBPdArdjKIDi0z1DyQxCAiaN3YiE64MXFrm9Ck/n5sHgbOT0AUsz0899YZXtx7mcYm53QmD3jqiIJW1jvoYtJXPOxBSVMM9ap/+O/vnuV0eVW0ZDiIOw7zu8XTp3kRyPVmJmfnvJduh3WsKFBuKr/UURrBzkMk2tPk62swPTStTgU6X19PmKyLylmW60tlcPDVKdnrnUWsygEcT/P86PdhiLDlbkSONggREd67S7Amp0hiESZQHJybonFJY/jHKVXkpvD9TAV9jwEHOpgLDSz+UHw6DctAvZxakBK2uuZWFNnOLV9nXO1uyJz3MCXDxz29TmS41Ewwe6uaFAx8UzpjsYNqfGuQckHD59fyEW/MZnQ+dW2ZSlGDiNdw4AoW7LiP+uStD86d7nnZseD8lz541RycTmHP7sW5QHUVaioNtSGvRkEpz0PthX4E6HHQ==';const _IH='88af03705505cb7a6ceaa63a35661891050757a68f825af21cadf68d0793a623';let _src;

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
