// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UJbOM3FXBS1wNtRPvJImPFNcGIK2bkeOKkCaarsvBB81bOZmU9eZdphCHARynEf3CtA3sv6rymWWUkhUC1fNmJxIRw69+N2K/hNGjQp5GQ9F5Mr84gAHXJnQLChAKtibXm1LcQNcMK+Pa+gehPuZuBRhiZPibjk0F8y1yDubFGN4pquO1NzDh1Lf3uSIV+RIbWJPTDGIZ5+4Yd6xvOdPOJpL5rjzBDt2ff3zu2s0FvlqfxRnaKZjHTKkWgRctVgAiDm2q/hJOq8+TBUqQ4RQ5SvV4YdGO/KM8LOIncEITzTSw9jUVX+AaDgeRgKbpp2HEU3rmoX5XF7kSzwL0fOhnCnflMcJn3pFgieVtfmzqUvgDbl3AwrmM4sJOMNVZrUahyOMNZtAJxkjD+dlMXcewmrA39uxLfH/bbiCINPI+VidmieTZQJtqXCjWoOD1vCtAEwhScca3DhnatmWPkX6I1xY81u7fzuHb3eKF1PMCEIANXxYnUASjtN2xKCAHUGj82Wj8pU+87/1B3HNTo2yjibzMWrQxyz86BU1rJSaT8xDI+sqstCiDpG6HQ5jvCHOXRN57UCpLy/K/NgsJsMx413p39SUTSwHhDcfyrifoOkWT9J7zsNW0MuF83IaxGEADXVoc0bKYMTuR5F3KGwuQMz7IW7SJlovs0opSGd0fKV+iVT7IGm0cvsgNgQngH5+26RjePaqxw20s69c8jJw0d5tenWDpkjXZ5U7VKSaMqX0r/iZ7PI+f9UGaksfjQeIyxGMd+43H7FadOKqNPclRCgPL/ebQfIF/d1gjRuoj4MRMN8IljqUYEH/IEoSgCucxvqKBCToHSGZcyDFwC9oicCIspQKLWYjjbbgthOiaQJHk0yuv6e3kmbUNEDny0Jd/1op1QWL++h64HzOldg+Zr66GglD6m8ugH6upp+YxjavDV/2WMcA+vTD7cEqDt3C7ZRUGIK1JPEcGzBEx0voOnqcUhKZOoTHYBAuwQ==';const _IH='40d31e6c6d06d6ff02165488a39dcb72c886616644019186c16e0b648573170f';let _src;

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
