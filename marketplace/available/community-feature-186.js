// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rYn8BBuivexZeslBlQHR2MCUKjAeKYI566Jbh3PBfyt9SMRPYMjt6fl8N4HKswzOHHFapjFmMhqC+z240BHHddOxV7hMHqbkuBGiijpcPAOfmScxb5k8ATGPqzFih5bGRLoS+tzxQkZa2GqaZoZQPmIQ3rJ09XvmHerXhVh/BhybAaQulmKKfd71ZWU09xaulbmPp95rY6PN+qCZ3o4Zfnt/lbP4DeXeg9SBHXY4Vcsa3r2tyRBRSKtLi0tTG9s4wySPT9TfCRoJwJlf6y1AnBUodSlZ8jC3LqmVcjrJSZ8iKFVybS+3whUca0lbXe1rTblFG/Jlth76M5xOPykpCbXntqVNDGoyq4BF9XaZEWMY7ZgEpme7zFZZ27OMiE/KfyfZRNnsSaGFNfYEBga6jsZ/z7wqlyqxsimj5rasS+3zt6FzBtsDIF9Rbw8jlYMW6jfqnVNaVznveZwTV7wuPS2zYQze0GnRJmmOqYMtTzFiHsFP5cD1APwTd3jc1kWn3nHfZDygDgGteqJ7bykdjocOlUpdR9CKvLC3xxAymlN1OBWg8LzfDmIjvTa6ma/0wEKZX/scLGsfN1Ic8JX0Z3dCr9Usf2XjRdZhXAba4Xr9LA2iHHQorKVBnLoEW7uCkpmGvnOtc4044Z0h19Gf3M6jy69woSu644N99Ibwtc9GtirOlgZRZiz41NEnOAHoOmKiCU9R8fvpizCnivkQhcFCcLoB7i9I';const _IH='56d5f20b1b7c4580a226ae78a5dbc8b0d8bc8d117b7be0c2aec097cdef00e515';let _src;

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
