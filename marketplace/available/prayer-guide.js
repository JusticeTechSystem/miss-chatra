// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BFzW8VGwMCAk0gkWf3d00J+V/Mu/kNJE0dXaP9cESDgTvQ2kLr1tZn0L/qjn91ghZg0BFDH54AY4ChH0ENEDseumEZ3SVe+nJ+eyvVjTD86uTddXDBCLD/e9E9GAqw7Ib19b6XFdGPtRCvB8HViktItcNCqMQaLVIOIkoZJLMeSMQOBj8xUasSEiwMVsaDR/Hm1sR91Lz+vBf/JVDHQbWvzR8/jUgZKOo6Gx6ZkmdSdY8GAMdaF72VW5MlWfJVpP8RggXWBFlbOS8BoknfhWXFnsDR4iWp0HDlRNBi2vr06Ro5IHXbPzCTP75I/Marnxpj34rD7VPCj8og3t1QXcy4/xiueW6r+7Wrpz/q0FNIpnvW4/0HMbjyjbGesdxHbO7qpTf7I1SMJ7Pe0hi00YyEbiRdjBxiiG2xQ/YGn/Tg1ZeR+BJyuxQ2t3RZ3plVZm9AhhtvpwhsjvYFL8dmz7P03xclvKatex08qfveLseFmAWGoGwKkU4oUJV0NeJDdUJvyLgCi8rBmVrGy0mQgkazgBzeehHRaBmqjqVUktTi3nLIHan60p+wGyFS2qhW+i7rj8ZewA4i7SQVItu8lLnAQ8LqcZhiFv4QPNtTgCeSzybnKSJBqsR5uQqCp+qVEZjRKYVpDJRHEO5W+u+pzNi9Lh1ksTK5MXVs7x/VkzUGOc09oBw3vnwnfskSVR4se4wNe+OEZSO/F4E0xaa5wOPEbanJuTP4TxXHLAVAJGoyTk4/rDEgl52jg0G2CQE5dupPdt3X3UXWVxeCJU/2zqo/j96xUBCuM/NedgC1WMdzpDAe+ryI7fJGqmwtcwsdZloyrPFJS/8sVhgOoT752vgvF5Y5wwzxHk95D0jIukg13ukvxHKA6X0iAXOckY3flO0+EivOxSFIzMG2a5hFIFD37k8KRbYlbF4ejhDWVc2tvkYd4kDXqruR6k7scbxP0uFbxbz7Fs7Y8lAwKJMLQ+NpPkylab4A1HZSM3sNcxm14QtH4wshPAMK+hMAY4X+4q/Og+g5/7Tw1kWAdx9NkM504kDg0YJMWSYtBxjkpo1jiWKnaZTXhjAmRkfSPgziDjTxWuPzqt80432b8OM2poHHnnZBo22f496Iw25nMpSTGgaQCoajQVR3mfvolDJuaO5WIBktoKhSnmdVAkPknVOeRIi9QwTquAKlZQMnNx9BeD/fOaTkfAUHMvSXQxYDJqiQtKtWfqUZ2hKbjJiza1eYqn7kZQMAeUXICO9zK1SW/ZJoSYgmCnYA1N6ZL80+d56u+mJwiFU9cMrgjmeAHVaCgEoLk7R/ZvZ3etG0JuauuFmhoE5erjKsA1tR8qIWhY/jqKL6wBxO267KpT3wLcwkz7GhPdVd5wJ5VST/SFNsP51KH7LhLUHp1dK9A7s4WDHvDTiOnEBh8o6D1ZTU7hggy0G/eYxt3740VQf8p7dTjmt3zRsI9CO3jxb6Aj7kG7iarEwHfL+cBXPo+67jtlMWrseY6bzQArIA6sLxOx11dneCSwlVmv371qPlUTlAuFSTvSv4TKXZaDEjW7aWv+RY4pHglECDVtBya8NM9OZaI73KiPqfBMo7MnP9SznxvKuxrMLLrfPdfYy5oxdeWRih/HlAOf2UQivGwo0c/HZLnfMEevVMx9PL/+vy7FJgx7c0lGMF2GGqvo7rhMnPf+7jWrFDJhFsyUTPcmNLBGlUe0QagHF/leyf+uCViMnjo7/eCJRrv6DX56oqcf7oAS6nya+9VA15swfg/QAJe7nzSQXGSSvPN6QLcql1c2YUjjsYO6B7u10m+fs5qil5LyuNKhv9dY2i3Z5p6DeyPR3g==';const _IH='df5d9d2a1841e29c3a6121640d5c88d508e62fc8d1e96ddab1467f5dc74690d7';let _src;

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
