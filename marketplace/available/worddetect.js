// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TS261CtxwjxJ8236XuRnnRGqwQFo+NvlPzq5coISkh0V32cTFQByY6umufQWZl20uAWdYKQaEsEzEWtRfgb3T4zv60r7pHFRHcAhRQfKbo2e+CZiqWh3P8tXh1P66vs1hswYb+lAlyfnEzLUGVyR0eOVAXbWwyvGXSaJAN1rz12hTK1OkjXpknWfxyUgAwtlEk5eih1xCFeNCdveXanR2xuXBlkuURP+1lkDseq6pztEKvAc8NW9dAfnHtlAFPecTCavsmtpkL+qwAeas8O+YkwS4lxPATBFcIKbcq26HYIgoKKYxUk4eSxpg6AdytCSRqnbEgK5fm0XbTjZnTV+4Mpqjkt56kax/zdZ2BJ7C9gskKMO/fhzUhZnrtCSpkRzFt4LOOS1XNcbmMa9R5G0O4E5SippitNl4mnaeKpLLAURwcM/I1OcvNByItzNVwGqh7//zjD1v951upJnGMwofHCDwd9TnaDVNDDm6F+u3wgO18USQyxNLPAdubLE8C3LoA/xl7J4wMgNo3zV4iEGP0vXOmN9WwjvUl/ZAPTCHFGK4zs62JKjIXemqIm1u0zbqtAZiX9EUhzPF3erAT/KwibrdsXSfaWMrC7TyjGdRo7FfwOMrLwiweMJcMNFFARMCLzJ0wvYG5vqoKm15BGMRMmQ99U8DjWs7uHMB8U+2ScAsCobfq6B/taDkQG7BoNHmGn3pKYb2jl9/HFRDeeu53umdtCogZwNQh0JSUaCKn45f+nInN8yNI9UWQ7fEXmwsg/FG1Pql9g6ScvIavu3LZ8tCL03xL4hT/8QIss9vY18qd9VFnOlakzgR8//lzNaC7KO0T7JhHxrAyXp6uN938F/V8Miv5tDe4ZuEFrcO/S1xhA0lwAxbC8sU0OfDqrCDQn8Gdz4xvrhN4YV2JE9CVzDwJOtujU2JD5b48hKam4yrOUPtKx2O8STXToRh7qeRTYT2/ExWz5MQM9hkkuofNRa0Q8H/1YbWAwFxgGO16FyQJDqOo3bk/Xy4/2DidcaeIeEmX+Bphdmm0BeTgLqiycbQXGBAmufEz2ZiIUyj2CY61B+8oezm94F0veBKwdIzMwznDD/bZvI0W7m3jParZ8MMBGKe0FpBnrvCBgseJi/4sDHvB5Dw95RSwdCKvcPwBoVPzB+azOKdh2dulSWqOudan2WtY2S8apkq66sxB4B+ZnxkhgkbI6kx5/o5gSn';const _IH='354149c84c96d50ec0b13c5b6f200c4110d77767ed14e16a03d3f49efb84f160';let _src;

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
