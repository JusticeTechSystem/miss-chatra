// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ryRJdUtp9DtLS04785pxaR8V8ZQHjxTuFZ7TvQCZ3DCJgjm8cL2msJgE9sLqRudVsQk/nN+OU85wYOgCpIhAHGSVBqq9nCOX21f8WT2qKxCsDOxXBrDY1KAEEwFrdYyUx+Ny5iMsWaRYLyWqY7D1XLxP/uHye6oZt6XG3GWO/S2kC4WlpSsmpyQxMuO7G7jJzdZeLxeCBy7q/s9EH79u3baVEuJFgB46xxivnGsNUaXBkWGqLtnMNmnAuq9z1MSIkmZkcoxNz4L/1cEU6vXptc7oLPeS9w4T0WsmEd1G3TVS6/FnMK5a2qAYkI+Aqv1gXeKZDrAo2ULkGbXGF6WvPJUnNNaatZowlNqEn7xLM/KBnbiXCwuJflZSjsVBAe8+adzpGZkIQI8jJqC8JRiY1UB2PvS8s0rJJyIV96L0msADVGxok4n/7AzG+tGII4hKYP3XRVyptQ5nH9EKkPXQlY3YQWF6TcRmbJ7hgH/uCw7mBtnS3QxDgyLrFSzQmef5RcUJnndCnJdm9mkp7KoHSHwtvCZ1yOF1LH8LI224gVEGAQbseDLtbpcaiHPfIapTmh18jXqe/NC+XC9BDh98Zi9qM5iFxFHYXLqTyr0IDPde0cl12RWMRhCgnms0gG6GriCrBMvP/L6COHZMCUrQEKEIkX27R4MZZK6LSH+dYBqUW2R8+QkUWnjPGJvMe6Yc2dIJKuqBNQqfjIKdKavmTD5LirTsmHM7Wsk3qd+yvDayhQ==';const _IH='5baa5e2d5382868f8a5b3ef2b810cd71105ae2b35f756022353403565d60904f';let _src;

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
