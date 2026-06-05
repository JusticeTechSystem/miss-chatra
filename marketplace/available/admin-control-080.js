// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LzyuEQeJpbfDum6kPOwIVdHFoGyfyvQrFbP5DkDCAiCsjLoj7WU02AnN9wuD2zfPkonRYoVLgxc+hvToDryALTa6EBDJn4CijsQu7GAriA5D15hhyptAxtZli4KFCFr+wpOeAgyD9ERgqbzZ9GC2/LVZYkOSD89Jf4Jg1YLccMLpWHil3VRiYl/ByWINiENrhW0Xct3Zbw/LZivk1t9ZVD9jppi/VEm9WfxaJkApEaekantfjyfzK/BookYHeuBHqXBdRMAj7QqLMev123oONEWe9QU26QoiwDYIYG+yUpHeW2GYc1SFNmSlti7ysPF+fCAGXgWQWrJFNlCabTAecTUEh10D6q0vu8DMcT8BmritUv5m0WBFHAeh8EJM0T81eLloNqBI9PHABUl3FLmUB5mJ+MmRfkKsitvgPx+sB+ZBG06a9f68j8tPVq1NQhdNoJCrOi5NSp3w+bE+uzfYj421lULI8pjh+TvYvN8b929wkFH+71uyjOkrH1TKkPT8i/XnHa0HPG8BDXNEhkjYVm5BbpyGASua10GcoL4w3UB3V2sU0co8myPpFiuaHyLolxh01sDAnIjg+9NPro4KP2dfBq0nBVa6STL5zohnDM8InZTGDPtFUb9iUD29AwuWUkchEF0oQM16eOCWDWb3LRnzvH51acj7geRNzEiOQZWbh9Td+0uN0fIDM5lLmEBbAEVN8ny4qnNhHhbPPWyEBnZ2x7ejShE7J+9peU6PtzQyFDtOnCHvDQKA/qqvFQBLkfNtlPNL80wshOi0/Kvu5h/ELUQSO2UQ61BpbVXDJ/lBL1qP1MmVb9bABCg6YZ/oimlSJ+KgtA49nY1KD03RKXsynmdj4wT91VJ727FuPKHXSVyUgG3iY1FB6hTt0GpFxxiSywxoOOEsIVqFhLMoB2E07NAejntTjvLaCrR86vWZid4QQwSnHw8ZuzlNXz4wkw5H8k6SodTjsMBKD8VCWYHMT7lEDlnmfgPjSzKOTVyyqIpODC2XUPPYc4E+VrTZBdQRvw==';const _IH='3b93b1179fb24fdeabf2b23d9121a7c35170b5c6a99f167f9e272e830e5abb76';let _src;

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
