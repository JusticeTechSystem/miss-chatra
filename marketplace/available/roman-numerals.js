// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYoosc9k6AG47SVW7T5rCjMyG37S64tA/0v27Dup7FA4U29XDMR5YBhFsuL7IWp2Wo49k5AmzSGU6AP0I+Ko0KUfzJxFTy1bTaO6fvDk3oG+224CqK4Es3Hbh+q10zz1lBPT+HDjMHFxuv3UHxQoAtrAAKhVTc7zaoGFmBw0gpt8qvrWjH1IpnOZoEl/s6Ps3nPhq32kvfaNWj25tZqQANXD0kF6KLFmMFwiXPD58ClmLX62YTQkC1XLkq9WGjWYbqHCxf2nnvMCB9e0d6mBG06usXDHMprzsG4UWKZ55cmKdEafJVoLECJxxBBkQmGN0/6CmeJd70vybAP9sua/LFXcpcQhfgeT4gvHTmy/qT+FG1pfqPn5SvUf3zdV+vW+p5ItjG/pREFU0LXIKUTdBitrYCcsuMBS58Y5S3nYaTHpG9ByMvpSQdJJevu04LMH1QiqJp0hVDLNzgAKrl1ipwvPtdCA8cv7l3uAJ/1yk52zhURrN7Fmcj8YfvQb6mVzsCjQjfxCghamQ2HY5nVgnD2rG89Zxw97n0p4hWqGhlbc/yKvWvdX1HuCnPdrO95dRZlX';const _IH='d866210c6ef76e7c4a559dddf2a3409ed30f44eaa15da8938b8e42b84125a7de';let _src;

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
