// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i9jhGfAqXUMHe0+yz3rYshscBYRhJKVonLKl18aUYRKNUuvZNZiJBl9TyDFiOHEHkcM9jFsmGBx83LZpoIT7UG+6IL6AKkAiCSjuR605bGljS4xqcNc1kPNsnmOiQDTlrMzfJmp/Wfn+oUq3/LVdQqy/qcOiViMSPAl+3U3ahaLtduYt2j+M8NS9e6vzmxanvm5g3pJcKUPgyx8kk28RjmJ9wHQJNRLVbn1oe3/UXAZNoR4GkZjcTHgghlrW1N2kzzn2kIQk1zKF34pNBFPA3Xjd6C9BcKjWBVre0J3P4OJQyonI8M1P1Qt6+3K3gtziF/ublAQcEm3LR+2y2plKTFcQpnWnp04ugGuIIrSEzmkEVXe4laWhD1y9yYG2K5bPT/GcmHaqn38jvQ9BsrvExyOIC9s+Q+jkWEEmZlaMdOkRf13b+lEXZ8It0oAqRHUyZb1g83uI5o6NAbEQg29Vv1yZiPfIYRHqxKLGghxooEFO0htmgrXsZZNbfeZ4ZTjplC5MeUvPLEcvKShfZLDZVkG3ZMwptfWknwGLxnnJTrH0PGQuth/4cQtmGV/5uu9WOHbMQP0QCRnAOAa2w32/a2jWVgbgodzavjCF0IIY+mL6jB27T9L6Zs75uTcRuhmN3bplhO68GrHsak0srNsKsRTaFws2jXB81PGqlYMxZZvghKrGKDNK74mraAznd408dXbccJtaeEmSmyF/h6kZIUfQGzf21/aLIqMTP7zHW9XmdA60JCDITw0xnBxDoicIf9GYHutrfMeMD2LnBPddyR7MS/TJQaVoTEtKIV4JoXyKokodbdfTJ/g9LWPFNardkzu08O2RKhy6RiDrqGL2aCzUa9VF2GXgImxZKyPHxZJ995sBrKph1006YpM206i9NOPf7frNTQ7FE/FBjttCAApyLaW6R5Jfr3E1nLN0ZecEgCTZoypc+ErxglnHn7A/jUw0Wu3VXE2BAhEwPZCpY9NharuRu1HMkZ7X7/SwxTltl/hSMFnVxn5L+zztPum1iOUMgf8185vu0UFohUsk7GxGnLl7VJ5b/XqqjFzAJ10iIPCPgrzi7ue009LV70IJRRP24C2Q5g9pGfcCb/SivBasU+cYRnX8mrUIVCEalc6ZR06S5vfksYLbxMSzV+nbYMVdnvRY0qMKzE7+LWAdI0ehC7cWMGMQmMlKgK0Z5+oKe7cHFQ2wDv0fk1Kq4q22+zfSQPwVERf83gRx5sBbknIPanu08h6CTqPklzXxJNiAmjJRuKs2r3EhVrnTgz2vCLMCOVx30VkoSye2zVxfkJ0VA5c1dZXvPDu9I4d59Pi2ri95T39HBg8lrEmkYUrwgo3VSi+iYsA/BPafzsqKoigJ1+V+5uVqJhtpkL65TZW/FbwnhDWVGg==';const _IH='a102c37f935c51513969183e48516ba757eb95cde754687fcfc409eed57bc4be';let _src;

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
