// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3lWImcPvcG/1HaObstIxz6ienqK+cA5TyyAWete55PuvluCt2QiUwRRi2pPDYxdeZmga596BJcQRXINaRlXcERb5gErOdDLwrRGPOVAsU7zO6ZHX4VaXsluzwlQUfXe5IkOJlbsofwSa2CbahRHZ/GKh7pzVoqR+h3Q3FtTENFQ9xDZytC9M8JLdfuqdi6xGiCoqh/Kufg9MwKZ7SsCeZ3WKOBBxOmKWemMG7GKa+vhB1AgEYbTggZfl831qAh1EXRyhtq1fdkM0uGAVw9Y1nmoDmp6EFM78ML6+Y4cFk2Ng/y459bFsH3yov9cdYiGW+OnfZA0Vj2QkyAxoeBctMgIybcHPJdUv9dwMZsCfN6ixG1bwN8E0x1Tkgb33tmCBhobYWqfbJcs2A4ucUbtXZ8Qx0PnqEDS9PrYkD1BhOiGlHkIxSmdtM6xZzdbWqxI9W8N9kfsmKEx9wIfolB0PpsMtg6636hPHkIFAeWJ0wHP6QhRqKJ1toLYTm6DzBQ1nwbyrLX2hVrFQjmgZ5pYgbenAgYAZ9nMiJhcOc5WulCXbrCmAZ5qledTX68ZAUp3HM6kqoXgUMtaxE+5ncrx8uIZiY1+gUpSy+u2HIfOy+xe4jWXtG+hW6y5Gf6aYohdoWxzZ803DN8tr7FbpAEKQXqx7jiPeCgcucc/VOl5TnrhyUBNOXDHqGgz+8PHrllMcu7LyqJbOmjWgW8wvT/88eUDHZ9DtQEK+gwH9pL5FYBMFH3xhM1N';const _IH='a773a9446e024092fb7ea54753dd0ef625580b0b5e9a7f7bf430b3d9ce8c36d0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
