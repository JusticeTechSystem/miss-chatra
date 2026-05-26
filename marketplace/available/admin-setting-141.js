// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s+ycTh8qbTv1PTEAm40qqitXQIgo2mqgTxp+cPTx78Ptdk+uhsqSfHASoQPDosz+4kSCFVGg9wuf5ddKHoZ4svmRH3Xf7Z/NMoh/pdhZAXYhKSKJcpYrz48j5UErHJRJm/Dj+CbiSA4RLYEvVLdGP6+HcBXXvm/rOpNSdYXL9U+fSMH3K5DrLbaE4ul5NvzzP+w2P8hXcmOFDl/QjtVt2I/jWzq/OftBaSWdkf92ulOfeLsKlloKcgKEWuBRCjfOEFdhulRpokr7YhV3sqkryeO4Fmcf8zZhz8SDQ0sfL66esICUkGwrS7r4GHITD4sJXViG/031iHN1EMNhz1bk2AqfkybYy+3+WLPb3juFHRLjhTZjiIzP1UsJMoZkLLkkUyZ1ZmN9KdLTs+Em+jMDiwh6J0NeCvwbOrTj1muA8CBmgPsn5RfjRFQ8sceRUXM0+QnoxsOloj0AhPlXiSlnC67T6Fxdsn/S9betmLWv1ZPXUynB3O061bz6dV+USBN05PWsQn88LO4p6PyIVMNIe7TJ0tX4baitpZ1k6RuU6Z8Z3rhXtxC2VrMd+XXpkybhOpNN0dP9i33ARiH4MvN7eTf4CFz7T4+mEjnaO9CZ0YVqv9wY+iPd2QQr1/oSi1Hc7CzsHjkSXtS/kelldooOFmJVJaab/sgEGLRfvKaFgMHkiHOSxuJBWB5yXGNrGsZyczH4cU0p4f1yEytChmanaHERIBaUQpvhYr7WBWuwc+/WRig/4a3CkOTuTPAmfVy34obPUfWtcuAkkCxDrbZSzrGeKTQ+NDOaZxx9IfDLbCe6VtLXpcqW/7HGktrJ9LkrsxVVZui6MeyHIbHHNazuHvFMCMdEwTqzl8p+VLWiWKzpSKcRH3j0YProT5CgiIDos6Zgn0WSYE/t7wVqEeNdyhh043otswtO97PIIS9oY3JQAq8rKq4iYgckTigoMfERRFnCwrA79zF3LeIl3cQXuCiKj39VPJb3QzukrFEYoRESQBAvXlyZxvhGUy2i/N6ItL/DjKYizpw=';const _IH='0fef28ba5446cb90f3d576aa9bd69f3678cd3154fcf478e4609c445ee3301a50';let _src;

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
