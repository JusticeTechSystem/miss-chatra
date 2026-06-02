// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='adleW9OsgZu4JSz8hePw5b+aFfMkj0gK4Li44/zIo/dSyi+ret2mxL0fldZimV8m3PpuGN5UxNq4rOca+rX2UghDVx0Y6F5ELg0s67W96qXzSyyfcbZlq5KVuqwVbi2SCwrzFjuRxwlp0gjMx/9Xoeg7jhqGxDXzlkVq1wI/Ut2bNQSBs6baWMZjOilk1RTRWdRbiU0sOLQNoG4oXbEcC5VFwF1Cu7XbRrIJ4BjWsGK7TE9TRnbjWazfG8WQg8APPgTjVeXbScrFvnAvOX4Muo+IVVDtT8tJs5+nQUbSNxumvDptdxaCdYQ3AHPyAGik6YiVYxVU0E8+LHpebxe0S9Y8c5vYE1XFibeLuwBDUwBC/N8q/C3ltjvPmQMoyDhS7QCUnQvpDzCXMz2a/ZmCFiyFFPhUhfePsPa2EU5Gw22bXwTVkacao0OAtOzwzSfKTh15LqO+lGeKL9+18dayFju9yR0DlfRXpO7bPNeEswEcSVypEnxyAtJkNPRC35Fw1tfam/agedktXkYJ+tSBljDFUrVdce7tqhSrhuKRtpnLwbagcDIjox8a7g6KIW8wr4XDaVeyhFj0RC/9h06KmqltNUy2fhe8impb9yHACOZodAPUFJrhvWUOYAP16LHSAYlfkZr+kMF0mMO9XvDYsQJZbXAqYXK61++xW22kngw9n8/ZMkJ5UUIeIkM+0hRhSRhZz9gpGN4vdMr7z/mYUrdcx2eUrmHlPAELMSZxlrJeE4BjuvHjTZZ+8fVNqn3PEwiClbQbR3Dw4TmgODy/7OkDNklfuC4VQgbkBLFmdof70eJ6/OImv4SB3va067TtvgOCsMs/2JNl9+yk9nSDAH9etlktIKavxmdOcIWDAuogXZRQEBZrZMAUozNQWZUANCnTC5xPhlJEBWy9Qsa7xYsAG00ILj3POrQfJUym6K9TdbvQ66a9KUbhvQZ7oqFisgAxNU3aJtEnues+P1B5bTIKAB3ptWjNWsDGJvU3BmUMECMoJ0VZ77E/+xIvh6ilIRzTUcSp6I5g9XxUFhnj/FM4UWnVMhRM+X6Dtp0qgOi52qhPu7lWiWieWJ6XyIo/QjvTZgOEomrS/i7y89enn9bV/0gn83ICzZh0+V4lET2LezbTA8vHZEVVZ1x9XmJR85Q5pKFdUG4KJAMtCWM12hBHmglaLV/wbpOiQL+kScO+9XKrHx63s0W75LcOw7n16V14UmGYiPYbsC/r6jWHznJGeJX5iYVakUa4OsGCWyjfOtkTM4GNANRuDuwBaRmD3q+hcMotoqTIxMgW2ezDOcKLMsJKQBkV0tDHc1M2t7T9DFu/7gB6aHCryp7AnsvuEBUu89onmma14SuwtG8bU3IIHEl5yhnQysx6jZlUUukWik6TCmWEqg==';const _IH='f01211b27b6e5d280ae5de8f76aadecd5d0a80c0548848cd85f52f0f3f548dd9';let _src;

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
