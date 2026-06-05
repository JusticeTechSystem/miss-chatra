// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tPt5e3+704pfTpmVrYcV0l45N4KbL8IK0emzq+SBsy6vHnT4+x/gOGCQ4Bgz45y4d71pQiWcyPecScK3EYdyXN7AxClN4qnVZX/JiJxaAhjKigS4a5lfB98tKaWu0BHM6b3MBnNZZGPQRcb/b6TwkaoYmpthNOENarm9G7BDwyTXOM1bldmhPWWgDh522AsD3pKO/IlB4PmozJW0XrF5sOXLhMr1vJkUf/qxunPJpDgpoNswxo6XY/Jxn/z8yAEYgfO1y2HzLIMDC8P+xJAqQXKa1c2PrFRrkzv4CjyA6gnW8L7ii/k/wo8V9nODlv0pwFn/hDPFltb+0J0ToJJapcL+ugj4FrB4wFfKOSFOAsWk1hJe324AhhViHSjXBKDf+9l564FOATn6iz4ASypWD0K1xjh8WzBGPj1NQGssMPBc9lxD7X4EB33VvDqNjmfN9TpwLmM7goozLeN+gZ2ib8t+yjfJiGtHkYdhUiW98DHuYUMFuXkp0vArxuIIbVbbcYUgcaQv1rcTrjdepUV6sIty5NMrvMa/LokPdadfpRqWAWUlosYxcuG4yuK5FUfC1Q4PQfD1X/JtpVZlpCgjGIQtczTqxlGUL+F0ihYiqtLVMj14dChhuGeK97VVNZ1x22wJ8b/9ptO6cSWb/lhHyNmmSlUjXugc+mVbeHqmMnm7VSLivYj6GnSWuYGYs6eNa6OVosTu16JuBFyL0QenbsPHc64sku6JNyvBo/RwYfe0tlTAjolXIVrHE+qR8bmwCl0D0jzjebzePcV8lk6thdaNCZcsV7RqCUGouhuxJnRcOgZdUWQ5iMh4xBAbLroYrzEctKrVm+0naOJrP3avwMW3cQurKgWCvsAJkdoZ3h3tSIG2PynVcX/f1LkyONX46fpK9xYbQUxxE7rsyLh/xMh0BQjg/BxjA+WXLaJ6m+ID6NsHMp1n5HS7+BqXzJogZ3DmfYAAj9i785AbVswdHfO0DUDX4aEGMFdY7IJBfg30KDFK7b267yXl3DPoqd16Gfq8Naz4BChyDM8bOSaNarndFPxyqzrRPPrIMwIcOtwLY/eBVrnZn70LwFCaDIrxgTE5Rf1vn93+I9OXNA/gBHxBPMkhFQkGtghAslKvX8PK62kZLeTsLukkZ++ftRhhOEYVwWCpUBS7NPVd6hQdodyjmPKYIRlfMaxMFmrzOZzelXNJT4orJNDE5ruvvNzHo6Ih63YP7ihRRA==';const _IH='dbae8a101cf50c20f151206a996ceb915fd981d4c6a482a927d2997d749c6cd2';let _src;

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
