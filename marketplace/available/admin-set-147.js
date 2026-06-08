// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kcWUXAow7+fUvof1NiJJgHpI6DgEEDqumW9mHF2efLiK1l/gb+RQQ7gqcL/dPLFcUTVCCC6wGoKy/gp0O21JT9V3wtiONHMfMuPs6XwnTe8q4T8b2rafi5nciuCeftSprBM3eIAUcOeuXtkQ6ZAoXiFyG91DVX128xTZJTTyKqOw1IaJeWu/H+IqaG9s7RId6W9zX+dzyRPqtB/S89g04b35L1TO/Yy2daOJ/hYTZpllGn1Gvbecf5oCQruEv5fzFmxGP70T6Qki9zMuiG8v+LiIjExZvQ8FTrydtOaAfKtoL6UM4/0rHKtGksol1L2rJrSs74UUpEQlU1Enbj0v8j5PoXeJm5XvnrybZ8r3B9aIg692t/PEaocgZbTgGbdPtld0+dB5oHsYMn1HFYf89KSEayT0kg5rXj0Qfwm99l4OpFzGZYWeP3E0bpOgCb6OO45MYh0/kWMuFjrSxOja/PpIAgumvhYqu8AXf10/niEp/wzoe08ViSS4WExLM91Dcyg9zKAIDmNveAf54ovURW4M/7ECUnkmiDQ9oGi/CY1vuL3rr3ECehVKjhLWPctMBG0CwryFz6vjRYSsHtjsezk78+EV+Wb7f+eZIrDxt9aqTJtLmayQle2D7+mzWIS0Z7k8Yz3qG20ATMy23JEjYUc6ZChm1uHpUyLaBFXE4RqFEU4SFnOosV58YNYh0o2dDUtjQODy1kf3A8l7FIgkv6d3vytOR2R755CxxOy0fJYHPBoHkTz69MFPVhNXBMvMnJheWVd5yDGBYYbkPfMqM7qtU4wfjmnxaCLYG/H/+hLsNHMU4oava8hiYT2uOy1zlDBqXk3rxsQM8rX0Zn8/CxFqgPRVEj14TlR16dMFcUvgfCtzLigG3iHusNxehQAu1VtycyJSz038FsN3a5gvYTE/PKO+ft15UECxHbaD41uiwtrIsmYnWKQJiogZylYTA++wljfY+43+FkMlqhyqEY0yDtFQwM0OpsE6uA==';const _IH='3088ab88e4a08523143915b794d6a99aa6f315510ac5beaffaceae2241d3681e';let _src;

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
