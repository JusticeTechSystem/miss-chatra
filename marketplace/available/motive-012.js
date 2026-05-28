// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ibZfqkW0XUAPO3EBaohzf9WYdIHykTNs0pLb/zypyRxXPm1CS1EUzBf/9z32d6cyIqe/lYYxTtoZfLUBGp39VdQA0Ob+nU2Her8zCcxzZtJt8N4N0WLfjFKms5hKiQDGVh0GEKDBPkWfaSlpVzxsEkXPRu7RP3gKJqor4Bflmm6HwLZj5/ACz75OMsyHaaH+rwitr7DOydHih6tqnA0hIKFEdLM5Q+GtbRUpZJuRGF//pF6vHujwQINz5kxVFeF+YrNY/TJiwHBQwej/5Xx+NlGgQ+VP7uwItuCo99/20axSDlzgIm2Lgb4NKvgsbvVHvPQ5/aXiJFUbfUHQDZ/9B2d5/bqN0qBmacsxdxZUvF0OYI6xyN4JfWkYwRiIndDESr2v8o7y3JprXfslcHh3JIY/biLLmQYGgeHoF1EDAobEl//hBuxRq93ze5NIha5SrTICM1mTC5KoFcn+4mWjVmtzLmSZvdBSVCusw61nYshOvSw1kGbYJV58rhUMl4HzMPa4f59he9uvPN9m6cDZQ7u6i9+IC8P9aU8rTszl0H+7Sp10YA41Tdwaz6AfbYmv3fgOoep8RxrPga0eeK4okcKnVNAvpL2mc2LsuTC2h2E7LbLs3Yu1gcguuRHH2paKWmL4UvAGPkOcSL/JBGzjqIlud0YtapWOrooJmlOZVOewNzexPCerf1IGCHyi+2nDZQ9tnYdJPqX2z8k7j/bGwOGCYVOk9hzxjasMwTTlun+YmQH0lSFZQySWRmXRH1DeVRpOeS248LJ+p2bB1kSaKstkxVoWt0392hWsEdlcrrmu9UTuRwX5qrK29iAyQ4+1fqFRqvV3kX4L7lem0a+9HjexCxoKQP/7FF5z7qFP+xe2apUQKWwlaaVp7IATGKsmXutF1jVeTmW+xkJNpBEo1zzJJ5MGIphlXG0uxdgv3ZLpC2x+4MRnatEAQ6g94UGfQAtKl5TTqWYkkHd62D1uYaSgqJ8n6D0tOwSO1x12WWJxItAPGsijvx0to+Uo/xFF3ExEza9Cm2pfLOLtDGK17L4p';const _IH='8761f121e462f6c1cfa1f9e6f45e033bda7bb3cf3a4f653ce713ea3b475db86b';let _src;

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
