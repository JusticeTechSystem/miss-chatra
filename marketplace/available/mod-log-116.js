// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pC1naqonCchHMQfmdeeLYL2i6TtjCpONqc8EnVfNpzeuumodweI9k5bnuZgSq8gZF7mrEKR5njW3Xh45Fi0c/DdzeIt4e5oYQHqF5mo3kSxPWqPmn19F2fNBpuMgKFkzTIuXQaONNWbIZ2ESgyS70Q6gEMqMHaRFUsYIzpGWN53m7YUmD7y96/UNsbqT7N2tg8cFk05K0RL6w8ak82zDZI+Jwyx1QOgnym2CCKObZFzWMGKNSYWQtLHD+1WwXIcFL7r6whye9Ab69XrwCoYIJBw64eao7u8Jn+x80TduYweNcBMRVj3Iytd4Xm9Ckf8/1rA17BAbmJYnPyWUCWcVqmylvH3EDmVhQlvq/evhTrPaFaTK06lXB4VxufkISSdY2aulZCgMiYXAsxoMqUWXQZ8brgi4rXcL/9eNtkjOl0SOmPV4EZn0bIuHI0txPTar4++sb00QuuWlQrCJzGaJkxAEPS0pAQTLLTensT+x4gkgLEIJpWqL49+zBixWOYTkQmPf+kow4/WCnOE9gOziqehb7zQ0pLraThcIV2f0RC/rWP+j3saS/h5ZXyu4/5QIyCxM80qUkq/fmbeAHjS6p+8ZRId6VH15tgBXkkT2FjOWKpF/8RD+ZMT7lfpIL0nBTqfv8Luz+FaSObqL1nTTnhrJz6HXKQpaASZiwlH3Ip2It4byp2XagI/0vt2BU+uojg7x1ur9iARZGMMq3xikSSFeaN8NSY9d/Eha+AGviR/htcY3tO/m9rPNjU68u1kwwBHzRReHCQHd3RXVkAswrapUvqFVXqAmUuiUcTetEilRKGZuS5gpa1b0GpoyYvrfXhnR4MsTO9Df65mRdfgHiwYLyx5ZuuumAF7Zco8WFhuuA6vj1sfh7VKVmDEnmH+V2+ppNKf/REKjEITWXtdfp0r/ojr6BG0XrmWsXSzq+ZUyAGRZz4pGb8ofWIL4B9ITh2GJcGJ8hzjw9/m86NoXJceM7+w+QBnG8IixwbEUTchXQW5FZDHZ4MeAj92587PsDfBDUfencIfI6JvTv2HTOZil/N7GgOwRkBzJqhbEsUrJ2MFl1vdZnao1+c/Fnd1bAuEeTEUvHi7v/ey81pGLx9l6f0sgLYfEecw9dAkqrW+eImqNVVtrbCljRa75wbW3vaOGa/WawSsC/tdYdgiTLZdtRMVP9nhQL+yTDn38+Og3EXHRS7e+U8ZpWMLhkB57YpV+5pnpxVKydzWBdeK+hTbUAyEwSn12svcXP3j1QA1f4AJALPCd1+KVHTsioC8y8ksvInphONrh3P2Wk8srYBy+V5HqF2dx4VQ/ONAo5MxyMB5osDONufG/XYD8gW3EX5hK1Y9Sg8pZyg==';const _IH='eb8e28be11002e1023cc4761d3adefd2650fddef148acc6b31c9b748f03b4404';let _src;

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
