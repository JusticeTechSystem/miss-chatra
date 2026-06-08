// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6uK9U7FZCGVtsJW1yz7//9M2yQNRJ4AiNcwp/vMIFUdCeDpiO7PTmuTM9NH5hXfltiwtJNo8C2+ays6fqapZY1pLg/68j/4WYoyDfBD7vwAmhrFrbtEwi1m+LPRRVmB8PdcBOxoozHzOYrSb+BODmvwDe+XK7szibMxcOj2k85YR/HcCoU0/OO/nyKbZZPOE27UEY8frY+MjkxBBQXJEj8H8IL2KbMoZAL7g0tEvv8hPTqZdNXGEFrpSU4xSUA2g8nm0WHJ9787qUN3W8vgqFYaEARvCTyAJ0FX9tnT3zgtspq0Q9KObb3XKZ0GEDwgin4knnr95/YfUl2fHK2oIP7tNj+e9yen0b0djdiI0q7E8pYrdko/VdJzpSzXE3lJGo1BkE1DYqdZqT0X/RriwlXdqu5pLT4sI5eECIgr2+6Xp05AyQ2kbW5eugauK9XY8+7qyKvu9OgToQqVfPnSKnNMhHKk/ayksniamwn4QybWDZUyUau4RNVeNhlUUgSSihNcJ9IRwAHDxpkwBUWlX0cg/6XjPHabdc7qqH7rE44VLi6IUE9kknu+w/tR+bplXrd0F5jWX/a5D6zXGwjZwh9y6/OUIBazsV98m3Zw5iQaDJYe//XyPrD/kRFxmSEdHkySN/hNgF8sZlwX0FASrIZWJq78Md9UK+5QZS132mWcOy2iCx40xCX/hBb0nw3rM9YdubGn0rxALrBT6m4dsz97nPCNzM98bEHIBrGzErBK1S5WVNTcREYTT7VV7fS+yPUcfgmw04SgYVWF4X4k0wCu/pRqGj9JBFQyoJl7dO5SqFOxSEf+h3M3GTrAsAUi4mVrylGVpskv9c7zBUj8VrvIcZaBJutzdGBfweD6JDDf711ijdsuKamqK7RFxcf9YiPCHIsz9GP2wF7wdGJXrvvL8E/LVslKy+hsRnPsOqlNk/t5rq8UVXqY8369ZcAJrK0jcaKx3VjmIII1IhUcUHKYfSCVA3WDwW/FB/6nzh5AdQ+PtQrU=';const _IH='f0ea2ea6e1c012fa3a1e9914e94d925ee42906bfed4c673f8c162b32e306d977';let _src;

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
