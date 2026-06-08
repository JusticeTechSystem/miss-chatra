// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QEoOT+1Ys76oXSKwjfHJD1q896tZAEv7z88W23VbjOrM7qyE1N/9Ll/ql54kzFgLcbbDIh9CPLxVep0tNbu7eEpNw5pUnJX/7AcJw3XUpj0U6fJI8KQk8tBqBW91eu9Oj7/kpBsy+uR3dtLU2h9YnMtXGCAPLYEhIRzH1pOTuyRt6kOyYrzwxuBVht3aN/4R8X6nqA7bYgfDdkFlCrziLESsvpw/HWM4rY7/yIvwukK8p0Xy+B+iE0SPjIYtXFpxHDwj0dqkLqYfXwp8TDgGussjQn7AhHrFxbkYATc1ebnvyUMvoS/6htJdqW6cAHzzCa3wz5BPS0O/Dhugp94EYh2UInl99HcQxIbna7ODuuQ5C5eJb/40q+uNVgEzU+TjZs4YpM/tfsojwNDfOIhnZyyjOpFhXHyrfOejIPWliMyV+LHD9BXcyY43nbWJ/yyaeodN6S4e5ZjtQFoIfWzZ3ta+2+dlzskb5Y+XAqTnMr908MdcDHDDYDcAskKAzkDSaOX9BiDjzUMrHx7ps+XtOegBvZRVn2IsZBosMOcqjip4GjUsJy/2zBU/LyXrE9O6PXK+J05ZRfoLsKMdtFcxp6r0ZaUj8MF0wdVUGReIukKC8pqgNwYIUj6StZx6IgimOQgRpIVAp2KWcvqxj9blzK/3o/vieAfnH2+gwuoj5+jX+77be5rUfc+lM169QhLB5Q1U+uPb2+RbcQfTIIQQ7ajDgsRxrq7wMmR8qu/eohby0eY=';const _IH='4323668ec1078d84cf51dcf2de123268fdc3bb1f96cb47bdd75fb9d89912a86c';let _src;

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
