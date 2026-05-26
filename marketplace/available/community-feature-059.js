// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mWXTEghjjdwjaMY46OW0ln+lsIQJ/ggh9WzfBOY6M50pIGn5VE3PnJEza8JixAchFWpNbWOoy2kxgEdI7H6F2gUPrOd4YP0rWTQ+iFURLzgFVIWBOq5QuNPA0p/2fzeyUjOqqXMZ7zU+gkR0nw7bRJTKoNKHhj7qKNMjxfKv1spmWuK87MyZe5Z0SIAr+JpPeOnnNPS3kFi/swNttLaORTsnI3itpgexbc+lk2fE+OhgLdLd4mI5Bg3nvy1C65IJlM3zs0T0PdSbqLdCyLSFGtLMLo2obMf9H9TXMTKM22tvagYt2RAypM0I9ekUrqXT5ONTakUNHjLJN1vUAOfVnAVEOH12aEgPVDYtjWL2QRnmcXIKSUyz/MeWUbFpptx/PscV1ZN7m9ftZsRS452nCamRj7V0ccKR76OVpIByaHFQwEyBhsmqZEeqVBRvGK64C9jMl3pRnEseDSJ+UopsREq1yEJIj9uUys2bALMznf/fK0znJUqUleYAs3HxZrwM7D35qL7Vs0CMq1IGO/NPJGODiWfF6zf5a0oo/g70a1wQXGqL+1rCdfCsRcu39NOdIsXoQAk7JlCHnZpjr/DZ6KWzeJ81SAIuHSdRRD5U8Unzc6JkwiOs2Lh8uM35CWLUu7yySEm9Ig6CPsYv4AnedFE5QZG8tyRNFlz04gt2LRdtURyw0mYHrPqdVTKlfklZYOOLq98oGmBvCLIrq+fQkTQ42+83VGRkT4D2H3OMMO7iEw==';const _IH='d877d10f58b2cfcadf73fcb373c9aee3d15f9048f52e2916953ced1c69048638';let _src;

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
