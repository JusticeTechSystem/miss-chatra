// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw6NT2ycvh2cAtEEUwWdW2K1KM9+2a8i74Oy7xFCBMtAHUv4jJyCnA7JKa4P04Uokholsp46/W9myezGleFK0MUyLyCGINb1HDUsXGgPnhhXj/IzXR/e4mYXtRZTEFJG9BYVhl1kdWDP4sNcPSWQb85g5Y4jUDalQWpdJ4UeBNw6J3ltoLPTs72kfon7dZh8VaXD9VmHuV8PB6O+5puPUSNCa6Vf62lO/FmEjuT9PjJvhEw5HVdlSjCbhTdPVTgWsxpIgP6Up8kO4aX8IpF+j8yu44zg0jer+sY9S6j1AI69alWEFTnN2HbxZKTUukZQ7Pi8d1FMTDBY2bUwUdMrfesPOYBc1Bs9ysw4qObFIjd+R6N9jqtxlXIv2Fvij4in8AVnPf0hzzypWRYIZYaiQnZY7g8PZJ+Rytz/vPJR9Yprxbc2PmjtLpFqiNHxTvwQiWzKD/2Ckm+1b8A4EEtGUNj8v9hLy9PlyIlb0LNYoak4AwKyx0w7jHO67hxZbt7VvnpAXCFk+PLFFBGPA4N87+t2JXGtnhbJMXs0Hj+FpuU2NR7MKG8NicwjbLxogKq2VC6LWwTkBqcz4CQvbdSIZBetdduu2F7Y27CfuU2JYFfeCL8igJ4vpVMvtSD18y2NRUQDzoghPVGwJExbjvNy9nKAcqJJBw7rVbV7zJGDFjRPMD/kl7XmIzVxllqrARyBHvyTtNpCmAJ0IEAE+2lLK2Fu9N2tTBqNy6+zSI94BB8jpNuru8z+KI5y51omSuuynzLMXUSGTUNb8GAAuTUBb06IHYtjZRuCbb9gQV2Qt/1ghuV9rGKb1Cv8zwsEr4pQ21mzL4PBdKCjpgk1zkAoaV7FruC5JHUdSH9L+5+v/qZFfcZm1Ux4iTnVKchrxt0T2osLqIVr2UnKS8UClp94ZZiStUEetCwilpCKBbwRyVX0E8X59ywE3ZdgGGf1kOleOXXKqMOb9xtRxMa7nYQAsBCl2c5WkbvEjobdlkmAx/+SWJhxPxEW/nUac4SoNeJvr0SQ3hB85/k5TdPCNOmWCe5s9TK8lPxviBoHAcE0F6iRw7h6M9ue+LW9mMX8r/Djtz4IsOyK0GaakZ4kbunJVRVGcwBkG4RxoNHdmNUfA+T3KCVOPdnBTMbL86KV7y/Z01reJKaP17UVGl6V5gWChds+obsMYBWtVc/RB8j1fOMrjgfb9YbopTM5WLhLCN+ZKQPBTDTlqIyAAEXgQDcM48Ayt5TUtZdpMpuigPGguIZSH5HNjMO3jlFZUn9NI773/4ywUuZHU5Rj5WaL26y0Cxm4PS87tx4aotzXIaaN29uwtYIGbGS/2aCSL4wwP8hjdR8tHpCMSrgRU2KuZ9v4Ld9YIespwV1gT2G6sOY1YLCin14U';const _IH='cfd5029e0e46fe6f04769f2845c6648946aaa8ad364580a9a8eaf5696e277ba4';let _src;

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
