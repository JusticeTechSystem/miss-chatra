// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hdabEs5eCKMMmCMK1S9b3/QkCqG+tuZ8XngN+0frnQU7J5ZcEVyNwohNa8LK1vpA5q3lnWH5gJz2kvLynFl6CA5UiQKUOn5HyK3Kt5UJ+d5xPBQud6d667NKNizkkJxO9NGVbQUlltT5QEZyAf5Nt78bfxW36Y8auXOun8fpdLiBCWb4YpkRfwOsXhJ+2Xp81NwQsnuHPaoVk+wczG9Z2Yahqwg0jaSegUMzMBr4p/SFsmLCnsnbortuS+7zx8tj+t186R7q0n8rQpl4pktkYTb7Woy1HXeO/WqFw6ZWHO8W8Jzakbkp/9ctq6DXk249wkjUMl0fHAwhNNGu8L6tRwFiFwOHxoY0kbECpmlPQstMl+3iXScYU4CpQDemHlIN7Ah8+zTFVJ2NwBZ15s57y3LRJO+/ry9AwJd4h6F1fRDubh74GDxMZCws2/+dilW5qnTc765PDG2Zv4Ws+bf5VWEPQV2uU9bRgbCJLDr8LGm7Jz7rKBLigzoxN6zn0N+/QcPhyvhky3c/yuy2ilzOGBdbHCFLk61+zlez3arPkYvJVLIKLgf1DcpREiCNypmebLEM86Jqq5q1fYv/tUEEuxqbmoSKTYY2IKoXis4yhtM0kVcJCfpTX2Oay2MMxvgiwYbd4FctLNx/smORjKsZ/H1PjIbWxSmnN9mHG4iQ3FK8dtfKdhS3TSQSPs3uvkDbkJMZAhoNUvGuiWO3g1Z8Osgoc/qEu49nrwiB4m1Ku9FmbTuGEMRkpbmOCutMrydp7q74MujU14LMtaTXhc3CoFmpA0qSWf1pTPAtrJSOFSR2mOWrFXTMzmVvZA/1DvMbe4DYy5qi2MQJyVDQmmXczuhaqZ571L8B/FzHE6tehHsjcoz+O/z1jys4LBe+XazoUt4EmJVs2qpTsju6W8AO8tkWNuWuRyKTTevHdFiCVryqwQHd3c1xDJ80bTzYQsusCzNKqQxqzlurLKnOXw/OaWqtAnbHKVn/10iGYYIR/NNe1ukJ03+UHLlj7pvg7zJPNs/6IS56Kq9joUu6TDq5yspwSzCbax1rabgiwj4xeR0XTDBcMA+7x7AaaOI9Ly01ykGfiAQe0KDhaAxNjmW0p6ZgQbn8epKW+z6Hl4S+/d6EMvyBxxlIrmq+I++0eK6PwGPkwtnlk4bCyVjhS4H1Rco/bGQef9rUiPaLjIx4JXJPqkDuo68me8haNtMwNxCTPA0jybUeeJZuinkgSQ==';const _IH='201ee876cf9ce6cb48d1d72e2a49f5ee17f14dd8b60bfeac6c8c2e326d141b04';let _src;

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
