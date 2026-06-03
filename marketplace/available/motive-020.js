// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mHGMuZC8MTDKBioe+LkyCTbA4cdLZyuh26z+x53JkanMG8BQFIrwD9BA8DPBMq8k9bie+u4nAPg1y3ysVuRhuxkJiNHLhu6tB3napusNBgUGC08iLvwt8TUAu+ZrBwrLE2DFYC8h2kA161/6m/6IjTZbxSrX7xYuRjjgfjjDiC7L/TUzDt9gNGpnwRV+2Z3I0xNKZoWrxcC1knKopTQn78Ye/o4xketx81+LqXvVOa2fpof7pB49X281AxhI4OnyR/6kUHqjUX7OT5j4AWv4p6tvEwrfxHiXyrzjx94w8arRdGUD1UHlAUepT/Feu0fX/RrHxvTFFEzfhl7lZAHvSw2LRhkuU8YcarRuAUA7OU03ea0ZDbriDpwML+Xhzo0m274JzmkwAgwY4VzQmsmqUW7ddsMxNwoHVjXf67fLmTksLHgEQmD9vuxzvXs4eE4ESNWRax2DX0jlbP1nzulgoTbqJevBUNu36/9CN/V5Wg/TkodIALnD27nSaUbeyv4SsMBkDYRMAB1yLeqMZUucGezC/qiBAry3lOo4hMfZ+HsxMUPrtfhvGoWFtFmpVrrEoR4DlMatHK7QMqxTR9JnNQnzOqX9MIB3wuoFu/Sog+bwkKtEUQ/lJwjpUXQfulRMeyVRqiXRpnKuS0TJNp+qPTJXFZcyLY3JWLLjv/ZgMbdpzTE2tILG+EW1VjPsK97Oli1pFGXYLuwhTELA509846GdUI6Fqz/hNhNsxeAnJZkOTEKXpkq1B1A50MQtoTrhxGd3HrJWBG18OxB+weu6jd/3Ku7TgjjpoTXfmGnG/5sj8BGkJ4ttoKNW7lxq0Kt23Yq4nJSPJFNNjfY3QCCZbTwVuNx58PLomWvunyydevpYvUneR8p0Jlhs6uzq6jg1xeMGQCVlzdtagoU+x56DVhEPRqzX8uCo580F/aGiKigh274AB9M/exUl16S0bqQy+XAMIibPC1DKlI+pYElggJMkCccokB+20VqThYBr/f5GuU0u9BoqYFxNYyG1Tdhm/12Up2kvvg4+UNB7SAjMy6sT';const _IH='cfef9b4a51bb8e2e75e41159ade7c7ec6fd3a87a603ae9e41001d689dddd1187';let _src;

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
