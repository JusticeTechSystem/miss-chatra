// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMtes0Ozo+HUynlYu+itn+0PqY3I8p8szVTo8ICwXAujYsylsDuQNnoCw3DXZ8J66fsB7SCdEwBcZRxc1GBiUdgkOm1Fs5c/IhCvM7Gq9bJ1qFm2i2gyDbcv6+zaWW9pDm3cF23x9yE+mnZT+sRWiTB5l+vpklSicF7SyreqCKJmlFkMrOZ+/BdqT5knyAx0hJYztzeqzvESzDvR0l4P/zN3TCKJI9uBr2Tnc9cVxll0OMlHxIxXbUexKjkceEZ37HOppzvzta767iRPA0VoYNemKHJS0/0RtHs2jJYY88gYmyLK5ZRbdHu09oepJVJahojhyVYtJ1JV2U9HZfDepB5OLouVX/pr0J6mPzvES/+hyRXeoTPT5K3qEIbfFmswf/JNA7HmPKDMJ4uEIyQJnv0h/ABpY6yFe87vZt3ypYWGrQKEFcORJb8GopLfJqycdtwEEdkkjElmCuuWAFhyXHKvTtyU9wgllbPGT1mJA/qc6uu9W2HH3td1r305tuDW212OwOi9ueuqk6Z7Knb9P4GDhyy3/uRs4H6XEVkW20jZB8QW9912ak38pGqY5J49zc15uG/P/x2ssagiBZcR9tJORm5bnPZrJ5K79jnSFJsf0ZHkgVl/CM9csxnamc13dCZA8YVr4tuGgErDJ/CK9UaPrqzaU5BWA3qWGBfi2ENcKnjKTXcSaySlUJxo8ZdtELBkjenm6YsHSg6xVTfCgurOcK8hrNG6favEvFrfGONknhpAUnteDlIPFVw6i9R9vl1lgf1HNdnGv/0tNscy8CUUq7yaNRJxPlh4fvYx2lNMeUn2mCIQ7RxIygCZM6vrC18DcKl6eyqpaKGMAw8ftP7qlwL7JV+YftSrP1DYCKml33soTYBFKqVzehDyKJF9YvzMEPO17xv3eZ0RNU4uZ0wRIgPrJOXc8LEqH3eoAk/EmteN506K6NzBH1xtU/tim/cxuM2oO4VaOP8a5ZSEe8ZrjBajl/lni7/jRw3+oMOTPXV8nimETvhq3+xbvy2IGpVOcl/o/DSkfNFsWM+6dVKai2nHmk';const _IH='1c4f63f0b03561b023beabb81d10b5564c29b714bf8097f9855b137ea5b6478c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
