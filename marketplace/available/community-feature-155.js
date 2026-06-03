// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZtCaKQYjLH2HzyJ/VVzmdJqkeobT6nbZmVoWhV/LlneOGIo5nxb4D1rCUF6WmQAiBCkgN+7JKnJIIVEx5po25xov8RBp49oR8+q9ZmDiICZrlwv7X9EvNUrF4eev3gftF6GpoF9EFyTBX3u+w5Sf/+KzzYrgv2Umy2FIcl36pckqT9oAz+RiySEE9wPrubROmwAn3UJuZUfOyySgzwM/AjcIZGFIPY/Y9okiW6MjthdMPS2HrSJA62wygBEB38KwzGS3ElexcQe+RNOsNV7SRrU4L42Ms+e6p81wpSvLuT/mY5UkULJbhgegmHdBypt0Ry5uDTxH68nSyICjn5gmvjOXjtsh7Lyr6hr6xYOk4oMru5j/tPDEqjJn76rHTZhfuKYg0Z5unQnfqy1oMZso25cpSheiCjkqEL6ABWGcWEUpaYOig/EincZo2AzoMhC3edzOrGpPEGLtkE4QS06Ddz3zWkkxPNsm5Q8jPpJma19Ad4UcUEt8ah6qowq0ivp7dZ1cAUUPROsn4zs28D8hJLZi/LMrykTrgaGwedbM1Y3vfKKHqr7b8+ozp1eCthJN8E1x+/UlIMDGPOkYacU3JBriPfbYI+3spcLa8R6gOdEG5XMjWGbKvLZI8WbQKQBziUIxU3ZGTKHmZkoAJZ0gdSK8Eha227gOfo0uFxGL5fHPQqK8yly06W07nozS0we1r+VzOo5uDI9lXjZALMMxXuT3AdnL1ByDF9cFgulbU3Gh6RBzWrabkUVU';const _IH='5f93ff73985ae0d8ccdfae31e2d6cfb8bcfe7451127a8882a0e17d47026451a2';let _src;

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
