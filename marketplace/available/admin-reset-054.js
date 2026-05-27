// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EEa9om4sJo71lCHcWLMJvmvNvoYTW4C81LP29fTBfCNa5vEfgtWt+bcdGI+RvIWVO2eqoc5Qt+xWN04sRN86BcaInLrUBiw2l4UgMpnSA+KI8MH9VugJOAfmBWX9Qufw2Ggos0UVP0gAFdnyAwgTzJanoU9m5pe1/QmZBXztJi424Fe/mAK/dCwWra2xYmcVUYYbbNIR5sitChtkTHZRaGxrGe7cufuiFy4XOc1ptqcHYr5p2ntquyubd9zLiRBaW5TYFepD1W3fw5cjmMVYC9+aKLDYBrU5RoAn+tocuuBL0tHxryvxdyKqww1OM3C0YvTXNe9RAlwycMztmwwHhev0chDN2bmmrysOh/qP6035hqmprSpuZxQ+93O8WnhNwoXnqjq2uMMkgmQT9FHx4CeXfQCr65qwrK6jBbpRKk2/3aYuSi0REKQ1mONtKoQMkWjTNZJEeJKnj2qnnlR7lvd8/YQSS19c0Q3ozeYGqBvidT48I7e4MOBNphkZ9IrT6KPgUVNJktWqUR7VBlfSl5Uh0Eh2JoElhni+QAGyfleHVvj+rATZAShm3ALY0J6DOwd6LO2qC1peM2RRPmPVI0e5Wg65lmOoe6wErUzmwgVQ6TNGsVTmsanyd/gdL1WGV5N6klOX+oncwJtw2Z2FhbGH2D+T+rrQQrttROseK8nZugv9X3UWcBUT5OnVAMD0ynByTjgNq088AQCfcaKWdAvHoMN+EOXxAWsjhXgCHjPkRXnoKwV9KjTZpj8SeoIYA/qZSimS73KI3/+CBb7dVS0dGGm7lr0MmBSH5ug+O2mJH75yfqqPApO3VyIlFeSMCpSnHJ5s6C13RW1jFbiw3l4qi2mCnbQgHW//On3FQONLNJL3lJL/+v7iSHXorx4p7lHo2CX4vYHOIFaO+CthsWmhcRlXfmlQ7LrBuFo5d02ZmK3awKgFBqKGADzxhPKN7VnG6Y+JkKh2Gn8kFZnCC8CcJUmYCIZzC9fsp7yM3/9OfASpIY0=';const _IH='c73306c67541e8de2deb566a0d7a4755f7af9906a94f0dbcf39239e9583bbf63';let _src;

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
