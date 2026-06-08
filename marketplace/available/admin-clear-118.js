// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYxhK9MD2i/GCZJvB9z6ZabnX0AlA/Aa5WvNtpIIQWn+tbeUqomD+2ucyQ+11gu33MTaAwwHmCGmWgZEy+i+mpPorfAJpbFY0yunoURPEzocrQ92DssFtWzK0fs8EPfPpOqwi0SsYt42FNJKOB8ChaPayPdyAm5mNWxOMWE+MQzlJB80VrUa+M33FDx5+E2JUQOaYQa086wdz2E8KGcT1E5s8aKooFsHHC8sU83kbXjqWOtwmNhmbtP5vw7nWLZ3Vd9A8T2cQWH+pcKk60EVvykvK9LM8Dath2MYczqls3XMFhSH8f+BJDB0pvKm0JEN2/pZdEh7okJ7dnp8z2Bc55D4u1YFiuPyFHPQOaNwDQRS6o8r/WUk7sQPV1APaOnvk8mG/7zov1OOL9qpa+LOkCC6Asxe/ofBOU3TbF0E6BdwLvWy/PnnaV/Jb9fOq0odS1K036IOCEsUPPXsy+Iu85qCbdaA3FFyiJmgTel6cSWSKMgwsx0TgUQQipuz4zxjTlP6rZFf2DSrhpo48MSLvClf/QOu50X+HI8qGNIt5X8fjzdp8Us9ndpWyiIQUp6mOfndGFoczWSpyzLE81ShBMrLwumKZcTFeFBXV5NIJjfPiPEby5YYIlmS6RL55Mu17jWIpLEOvos8Mfsx3lTlsS1EFeXXLjKXEOU3+HopNZr12nfGIxqJH0Tgm8RAwnZCqgEbyrmRRWwyR911J27OZf/fBYg/nDGiZ0FSg6Z2ynlrKTwn/DE5QMsY3i9+h8GqfB6ACr70mnholsxVnnDwOEPjNLy2aoJ0eFuo5VpO7rlit5mni6JUf/WYP/ueNaFtVjuhy3xbHK5mSBpXi4OIoGEnS9uud1UBXgKA0l3EcdL64Dqn75oIr9zaa1c/Vp7keXiJrO6JpzeiwsNzuVxAjG0Zvf5eWkVgIDrbKoWF94iCE8ukIE1JhyKOIo7ZFspTuhw9uuvrJgkLbUnN8k439qanMHK2YakUKquAFN7siNEdp+FTW3uEcVFf';const _IH='fbeb1ad1283e48463017f7bf0a9ea26118472aa02a3a680d93bbd6895b29a9c1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
