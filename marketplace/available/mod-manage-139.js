// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8XAo4/DV6ySc+moViMpFXwSrtVWHWIDVvcnHhiUEnJeWI4qoruFiqw06Apna+f8JnZkb6zzNF/xT1KqB/ZKhQi/Q7zDZDJHo2hf7DBQYnlUyDqt4HXM3Je/Do+OlRDk3QH9nmlJVhHvSAORaPYBZA7TkWYoeJWw3UmKCAQqlZcvkMKVoxNZFQZCaKEZ9mo8CD+H/kdoxLng8I+tR85USEBVpl0TtNzVfV6UnPbc6/yZBMsuuCQm452PcppO+r8r8q1XK6kssSj5Uv78iuynqoLtfx/d/NEFBEP18etliF3IcLIctmVNf6n5oaS00IiHu+k/d4tdGXuGwvtzRgu1+mc2na8Stw2v6Tyo/iOkH7iJIKq77wJsZiZxiqiPLm4VOzNnbUqWPiLkda43rLK2lmxKqr6dCBXZZLjwcu36mCsbtvSFF3I4dlN+HBEV8c6MV7ODs3LXls29hORws4nkOi/DWlOZ0SsTClUNBQTNpgldCwc5/prvpas+Tqrkh7pBBK0891MZirw4bQ+uX+x+M61UCoGEbbGcQKkSzIb5MAx555CAuyd8GhlBpV+1fnB5Ud0gMT5WEVsQx+O2FAUdk867QIfnGdI52txAJxIIS16OBtjjekYeeTYa1HKzSuj2ii95xu159NwFANj8QomU2L9eLixW/mSLQcrqEyz3yzwLCqEKzaUest1DqCmEfSD8+JBT3ZWWiSJNfZw/KI5ATgISlNx4EU+ruaGfZ+2BRQrc77LGJK1apdQlPwBFEjIO/qCHqN6YZgKwTkw/pBF2dyaMNQKjKRGGxbghd8oja07PelTJu26a8AzYi3VKPn9Nd3mcnhTEMtcsORLEv5MuKi2CSP4qR5CeqWz5tI1m6qpm6f5Dpk4ya5t3WcXKJlqe1agIzNnkI3LS/7qPmVn9lqXtRML13R1E9GUq5ADnNlnfiWRogPUZ7aD/RoWbfOIXRirWUCV1/x6vFkYUhzJFNY0MvZXC94BJ7kGV9OdtJerS1xuPwR5HnaHlyXweJmlu+7Jluet07X5YwwX8U1A5VYqk856aCJV2iyUjk3ZDr90cG0PAJFBJW1kIfQ2lRwKulFzekrdskzwMAvp0+0+vbgSk9POz6wzygixwKX37MhGeTdu7DWp3n2mnRG6uu7/vF5XCilkv5oopeszLUYyIaAg+syHIzcWoJx6CFZYauQ7rDsJSBe7nct8aG7s5nIlyZNSwn74uSbMSarABWuNRDEBFW7wP39jSdC0NgTL5pDbe7/lqvA0H89cSF7K+2fzisyKz0EhHKW+jX5/PF2X3zpgEFY2ySMqitnRifsmlVMkI8LDmBIHOO/OYAkE+6nY8Mux2aMKtAwUn/FXArKw6dWq/XfrY53q+nxBPz6u2NkNRzeSGk560C1c=';const _IH='5e4aa70d1a2639eafd7ea1cbd28aa44a9d099d223af0a8a29b20c326f9e11c6a';let _src;

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
