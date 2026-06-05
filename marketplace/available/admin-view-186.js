// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5VtKU3PiUxU0Hpsy4kdZWEZfiHeMMtfPImH6Bjv28KDXz0zZr0l77gCOljLhKAdHCwtodg1In2oysg0+TvfQUYaSYI18ePNrN+r82WOzuPMmHJaIRSe3Vl0jvL2UQ1rcBYZNRSrVmddTLRolq6ZnWC7aQ0u9W+VNs4DwXY906t2OH1hX1JAzq7CFmi04kflBh6GMJZ2X/ZWJDT/bC0JJFXvfAojyBcWDU5+LZGouf7+9Z6ewtpOh7qjB3LQT2kdEJ4ByOBPYA1e4ahNarZhbOhUkazxEAkT+EzhdgbHeVKKG3HhXSc1gXmr9UlLyR3XZ+kEKZVVnzHvbJrSFpmnH9qv3f0pTFpC2FCI4p58Dma0/PvUbIAtlPYhjhbL09P6J36y4KvQPgnuS33mw7IMAN3OneoxWyXmO/reYj2GjwOemDxlrU6a2AICWMImRRcvPfCXoTfjHiXx9ueV108as0Dhnx2y9BtOaesWdZfs3dammdaS9ta42N7cFv6xXkCAp3D2HioUpGpu2YZmDKTvPG9C81hI9ITHMyBBmnX46RXYqgNxA46R9VTps5o9JvIZMKSPig8coeTRYtQwXbeJoDFh7StF3fAzZFNxs188ToncfUSNv++I/3vaxx88XaYgAaKc12gaJZpB1ZsMxCgi1s3TIDdeKenadHVcZ4KDQ9GR6mE7rJNsDPNMkTUDqe7aWNI6RgM6e6ENr2Ywr7F+hOdtKNh++PTLL67ztBdvo1TCmjZCwVKvr44EvrC0I4mTZPeWXCnzzqmiUGkjy6w3GBKf9mZ8xYOQLNxJvN8cYA/swdOpjTd6I4JGfqJYeuhAGEVgvznHlv3sWjbS3utFUE7BVqg7S3DaE6Wuvc2MTvjHjWXLvfdqMn9T7r0b3HXKEte/l7/kBELbN5Zyauh6my0fo2hDi7ye7rSsipjYdH8jHtwfm/W7GFjOK1cpthixPwYut1hLsMQUvUcGrDpYy4Qr0B4BkuBcMJivqm23HhpDWJik=';const _IH='3847c04252ec8264e2b27470f85d984bc1152818f0679823433096720bac243b';let _src;

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
