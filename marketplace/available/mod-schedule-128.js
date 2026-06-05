// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MBHFFc/OxrwnfjJdzHUce3HTPMXq6LZAqlft8m3VoizhqOxgfnKTQSDi+Rf2xsRx+3lkisFj6xen3/+7iconuwUL3ubLvSCNxrg7xza59W0ZeuIAzA6xODcehK4I6ZZrTLX4f/DM35sDb2eL69lHMlzNlu+itlnvSQmoUs2BTEaPQpHbCVB59HWqeGwFjZfzKmB9Th0wsStbB8q/KYEtZJAGPn+4XIOkERk58H8hltf7DzzoWSfDdt2B/jpnnFxY3AeVGMO88GuWopGE13uIJrYZDzhGucfmcYDgtejjFNQMNHt5jiIuERE9InSx54ia5XKXCXEt9GdHxULKncpxv+Oo3Y7XbKyVYZmOGLS4BfKNHh6Ll7dED2L1XbgskOLjHwPV//qGDWBn230iI/opBa1N+X4pkEZCiB8PLORlPvc2xvovdNRHdpTxz7MDvuP70jZvzOL8vGuCvFDMr4ub4jO48fZ+FDyj+9Sdw6TRmYVozwKtZcZYwHvBZo6kvLu1NoODq92C26kxI3NsHIE3ZtbBJd8VXfR/JK8r0UDRJGjiMATXEnmW6gDqjkv8B/1LVYstUt7Mw56rhbN3x067xLRxhcwC7B/6NSwEXM6BPwO91h8H3Jr+Lxli149CXWLhDe0vPUSwwIukbrDIxn2lwaY5Sf8J/axGog5g8XLw5A/wMf0EbK3m17GMvFZu16l3kVyOmo15377LpqJES1V/uQLKl++t27/HocZIEDOUJhIqFEbtUVJ1sd/cowA+4XWL6brKwbkJ8stXIwajeqPltYONYoSMsgRbOpYatOQfZvCvKSGmGiwZEjttiOzQjv8CcU6aHrHNI3fvCRjupDz1AWSfUr2VUyW+8pXI489xM0+uiZZ3DI+dVnRWLazzszt8WgFFtfHJLGe1MgZQwT/Pg9dEJRe+Qs2A4qX9Dm+nNKhjgK7Zsz/51xRIaWO0deEqAcj1Q+fH1UE00QTJ15m72IsEgbjG0V6ob6AqPBBmEVJUdn/eycsPcp4PlwlQYyrrkq24rs7rJPrthDoMGZT+dsbcfqbK434xg0DVjeBdUIfcd10ZeMSS+7FLMmxJ2h16mi5Whb5XvzdCDzxxlMesPZhdpbHsP2kSMuRT8/NHxDFYoKy8P+EKpXIrlx2YJRVtAgYDHQQwOfWEemEY77/h8zNR+VpeltKpJ4tZo5PWMrLFJDa+euBm0S24+YQdcPGwdLh/BDvlk7KAxPb0Z0Tu5ky1Sh0s9CjL916MLS+IfraSpxF8DmImKbESU7XcPY/SEYt0jgHn2CpdkK9FeLdnFpA7WIo+xKeACCxrNGyhPKP+Zy26FlFsRDjDRfYpYaCqaCJJkWFKYrY/AoUJtLG2N0Z2DlIjDH6F3adJajHe2zrYU9yDl4YEdMkUI6UNvH3KbBs3kZ8qqDtPfJz6';const _IH='a132e3ebe72a9f819961433cadaed0ccf8710287dc6f9c7b412b503b5b9e4a0d';let _src;

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
