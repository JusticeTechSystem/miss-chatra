// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X/8znhNQF6bm93G/IUKZ94QFDpv9l5vWYGXIB7eIBIEhjFjWa515xIKS0jwVSUhi76LC6tZqTjswiUZ+qWx5ePTKrfd/+grkttjYiAQxcPFLpBGGDYjkdCczE4+EO0FsSbkS+cuSg7RnaksFUl1X9hjkns+pklLy0lcVoRfZ60sdgnf/mCkUFyzuizg+e9HiEcCdAKWjmHU1/v/WzPRmvrNtEwWHqw9t0Cp8u5c9W4t2JEga5bdIOhJ4vYs2BNsRVTsp6TmBg58tGe+FCZKw0CwaQhFRM3zuGHnz7/+dp8zLO0FitLl/0o9zQaqOv1Ar6agTJdn/G1zbEdGUPyjiq21z/fonrZzKFnM16javA6bUDilKQqgtJYXpgwyEWdeq+/rusUVIAi0Lhv4/bnKvho46M/vLn1fGtOeruV7RujbJ6imQ0rxRdDUU+3pPt+ZDyfp+UFTXsXlgw/S6FMXip0Kv2AtRq+Oe6OncliWATMfsUJdE7YMZKGpByOLeWtAm2//1XhT7PEz04ZQrE36Mr15AyZJaPqE/o7dwPv1TttMKgWxhyTwGeWiXVOH8prJRIoAVhKS7VUbH/E4EEBUAOAi70Ic3ANlqYIBq+YZh3sAB8czKggKVzQEDsHhjf/a3Z1lG1d+K2b/jskPcuLQjnxeI76qwoeihHYrNueIKMkzKyRUVO0Yn+933AqARtZ99by8AzEYMgwPtuXA+jnw2ALVj+4OOrtYX6InpOJ9g7bqJCjQ=';const _IH='aa64d0a816d7dad0f5ee138e3c3a42247e45ccb9835cf867bdf325ea64c420db';let _src;

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
