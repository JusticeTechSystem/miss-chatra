// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zINZXQExwH+qhXsboFImaK7jBpywYi2eJZ5rybEGO9+UXFmy6tqOCMwNG3D/27/VHw7B34qtFPVnGhk+pkusMc5I+us15B4N/afB8mlcZvaZ7GjnPOa5Wlap5Tyy4GCmNgbzQqSX77MSlXtKxQ8/zb+R4QsJN7xDKt8TdOTiLf3UHGlpOX/EQdZckmR+LSjwawJvGVvV5tmuYK8CC5/ysJCC0vfcO0AWujZBvZX/YSCjm5MvJ+0/gwALhKkAl1lPicIqnFxps6k/wW7ESAUtCY5NGay2qumFXhUNjKWPbR+Ven0XETRw6/+6Rhq8ADFSaUWuwV/f/yeCSQIAFQZWudGJw7K2WvDikEn2bcFpTIaSsAI/aWOAVvTP9+kfJLZSkaqpF7r6XWiLDT0Wp5rDsL0bNUWCtQyWjvPYBUtlSaNgCzsGHE0b1XHCESZd45TDNY2TgVDjqwlWpcl+mlCPBKgxnn3DZlkJMhPa6KNNng7Ugs7U/pZJFaspKr12Zhw0+AUt0nor4tZvSbGmZOVLfFEdidMXrDmJhzPCxa+Wf4p5kmGoouJ/mRdoccSPLUPDKrV11OHNo51Uym28lP7Fmqen5aTAOaskgHRRWkfYlGobxlcWsTEZxnMX1uLEebyK4bvDPzZkP9YNG3irdsUJGujhYA0Dw++Wr1mVZumbXMZgtqOcjetoPqJ9cDdWz0FtJNv8/7dF5DZ4qQ9AGzHF0+KnpfOQea+74VYElZjNSglR4d9+6z0iPvi5K0NQW8OMpn/yuzWGUb24XN07bl6fVH/F5gzDC8hn51NmT9QQ23r/rwSs11niJV0dvlRo7dlvvfX9q/BiNWpJo7bVpY/ZvS7AbBSOAtYSymq291p9u86IBLp3gnaHRxkEKsBFlC0PkGa0+jglP6doaNXJVU1S4PdE5g/FT6c4U4BADqJNJhihiBxuixe3rVn1olU=';const _IH='f3fc784e36ecfb3f7286bc0bd791eca2da0ea03de2eb526bef7ecb119c3324dd';let _src;

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
