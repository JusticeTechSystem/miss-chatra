// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tbPW2hJy5oIhosfTP/KpIgZxqBgx2B3AD9Rk/flt3s7BX5BZEeZ4Tc4MSD5mY+L9/AiVp8IG1WQRYKw+7Q85pI+Is3V8ctUt1SMkJalVNUNbf4B0K9UtrXfgxbtro7YUp9UCMXLWHejVzTXmLSC2m8mquuEHslk2BzUdhAXdQA4LrkChSwcDDv5KIgdJPQZTGdViG/4yO7cNB4AjkdkAFuzWHfniA1HjMF9/AUSCsUQ4XMkEsJ9Ai11MWu7b6OTTgOFGfwaEG6w07nTtxf3wi/AQDgpMeT97ydnbxQxIilhLYsr1z8ZCWIUUHLoY3jOS/v3EfS8r6hidcUCWPM27hgmQlLhTRhICE0LgprlMOWWl4FcOBAxQrg8K6LEYJR1SYHuLq1bg5nE1mVBCcB6gjFzRqZznXx01lZ5ydMFjz8dx+KVsAjNyJRaii9Qj+TtwTgbszIkv+HtSRrO/M2AtRMaXYJ+gm0AlZH3wZ7XGELI+AAE=';const _IH='0b11d5dffb6d7f1545c32bebca1fe047863c10a423ade4165a7d1c0726c292bb';let _src;

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
