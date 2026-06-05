// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EzNvWPY/3J3Aj+vGkHuukHhVtfVpcld5lTbEYJx+jaCES5q70JaVcWCS7qVENdXLZREhu3nGxFX/6w+9b0V2SrTzUJ5/6oj/9KJ9eMOD/rNtzFKMGH7g0iG2NBg5KXVm2gmGKXEgrSplYOodK/81WouO/LFQrfjKHvsVBo5FcyrG6FmWZXQ2UN4WFt2IlxISeABuZm/EYx3cD75kbCSRwgEKOXuJzxrFLmqD9TIJmScpB4KxjzkIYiPwGi+Eez4fDC6aKqhAhVawPwK+CNeurfh2w4xaGoMrQYLQP2dzh+A/D4LDMx+9c7J8M0R1scnqkzTJLDy+etxFp8B35b6+YU8vfeyIwaMCTzQNN6NjoUhS7PR2hKbFnTzgeZA0zNZx9cFjzhX2Ca3MauWe2plPfsbzq4AvWN6VA6XiVFLxIM/j48nfOmExB+fpRLYrz1NS54sfvWqbJNEujHQ4snWIvzrqB0LQySRnPl91cL3nLG6DJqV9RnhB41irvCY2YSAXVm3k1KKT7Hgl7iESlvtKh5rWDqC/EZVGNQSF+rES409WOlk+BDupNxJrEwQR88IV2mCvnlmeT4me+It7DaUUz2UKKsWQtxdbC+a11v1O0gofLFfpffU1LC/1H0amqGcnq87Uj1+ANCbJyMNEQUzPPN/tJPLBTox2XGeQBlj8j0mF4h2NIyMgMg6pLUz3foRZibWaiJVeAHt9q2rHY9VXZp7WjfIfjhZKmVLGExeHzYaI1M5jPk0IxpePa4WTgqDZU8doAMURLWRA/fRi5z/YELREyupqrJpJwPTB3vuqr6zXW/T4P0m977qW/zRhLnoAKUD+MT7CcqlukgQ0EbJ87GlWQWKU9FUISOqpzsPc6RxPpS6pAVB9DXZev1qGEoHo37eMedtNhCgjAVUc58iq6WgxFDkRuDAnp1EmqLUFAoVjykjO2Sce9KNRMpYbD3GzrH5QA7nmteRKy79yM1/8fSiL3lbbXwKw3ALmvAhgV4SuxkMddPNS2l4y4LT5qhIyp5gACYIE2gGtj+ULXM1nv6oMunXwjDlP0moe+yH9267966ZXZJAKgqVHpQA/bWxHrwUxxsGZcBnnQzdMFkEeh65qscA4HE8UiiQ4guPqFsXW+HJ2IQvNpDkb0EMpOK4vSQxbxr+OnXOiIbAgvuZmhJXwckVVdjk+icxxHovVK6MmINDrewMV';const _IH='0a5c2c2056c6ff1dd727c9fbc3463010e69a055c993c26703a66520c2ec0cf51';let _src;

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
