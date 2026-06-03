// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a96di8f3XVzyQ1MakMaxnx86lbYY/1qzETwK2vwTltILLEGJ+zQC7gll81CxTnyRnlqfp+1PG6LHpZ1IxAneYYGGzqRA72FZBgUKB97pyEu8HC9zKMRGoCaoWR7CJc37ozm09M8i3/iIQHbKTzgyBbl519DS1L5EtXCYr/YYgYw6mcDFOHJ3yS1kH4quUcVpvHd8dD7LWOUHO2+VlukaWgEVsNbxpthYOzkNejHfWfPTpwc71cnha4fecUOb6Q/ZptxuxEMWolPHv6W2OevAgPMf6BSZ2V+zGRF0lndtEJiCPl3EWZalfewbV7hp20cnLHnoJYBdH9YHzUGfbPBf0XNIxpxqFfXa1FZOk1Qi8ySHxIUgNmsszI3Kr7TAD+EKA2zkx6yvSXaHNlVzMEIr5ieykxEBM2UHCCFx1jW/7AaIbzKiXrkSJnfRVNdycQVD1+AR8vXmLNr3UAu6dt97cIEMjHcd1nCJxBmBj1FE87PHW1oHAnPTqgp0Kl9+0ETa48TDRt/o6Xyacz0XOmAGHOiTI2YEk+i3b7n0tkpwQFEeMHXgfsXjnKrE1QvqT7pboaf2EQwMuUWA07N+GrMMjfBqYHwFcXW2sS4fGX05S0hQmAN6ZTComBNFwj4on095FkhZzzzQOdthX58FkYziqTo2E+TlbV+uyhB5D2MR2r8PhbPqHzQ5OxfdrOxKJluQtlANrqPMH2mhgTGqQzsniZaz33eNj1oD+g5rSfSEWNFxU7aur49pdjHYf0PTQPyJQ+YqCPLTb7oTuHeAC+/TBV7DVpbNTVhdNGqduUw0z/xdldWFJKhRHcBF8m9jCyFk9Fr/5yXYce2mAeCiVa9JRCIF6/XyCQblvM+tjAX36YeI1Rw5OzFN0BHwFPEvAURu3xdtomhZ/DEz/RwZzcy6CBMIJQMaDwWYhF/GwLUdSMA+yAN+HLjKZA==';const _IH='458cfeece9764ad963e20979e4d97e6196a8623c4220668a06dd68b74046ecde';let _src;

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
