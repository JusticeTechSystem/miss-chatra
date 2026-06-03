// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xgNklPUOiDwN5MxjBtWcJg1oVb2cCo+x9bm1/3XoKCUqERFFzpnS0sVUhIuh2a/f/Kj/bAoudia7cnAHVEgvnsYrFP1MrLR64+ManRqMiZVzWfT2hydEyu0f8/BukHx9CQun6znkODzzptfSk4C8auer6t2XDrlMAzJ5lDRsUkuiFMR4MUJu7BT3g2fqLeVA7Nqks+sWaMURO/04aoMN1NvzGauJSBX/WGLrJ+hN4t/A9PRCHYBv7D2tJ7E/6N0uDHMD2uQdvlfsnfBA77A4p/vC6EODtbp5bydxWULihrQH9axNyLTwVTujFQvq2VPNPFC/y3f56w2t6koLiKuGBHh3qYtKkL51b2PMBZVjDkpr7UfgmRLnaJsCxZH6Bl+q41oMrwmq/LZQ3KkgiY9vyFOu0bC70tvgl20NhwNcHX+wAPRtX53zzUL8nEUHVmmgZeKZGDp6Fl09yE6jaUGkUO0afXOGoVoxOX5k8xESNVIBNupw+MjXh30u6MQnK/oHhYoILtemNaRNkloceKt1bsCp7Yb6nEeVUq9ZMqxnWd/OqkWdN9n4v9spmsO6cUDMwW5vcke0dkI31oHioQKdgObggKWT41acksZ2bDkNsxilz2/4FBrVILMVh8KAbysVmjz0aDaphu+yN4/B8LjubN+qvt8XwSBib/ngQWKlMEEFeuq8zCUaZsupl6d2qg1fGU9NFs/Nac2NR4hvKDlIRZya8tt2zzgi1h0OIXTtTHT0cKaakY7qDHub';const _IH='cf6b26a64ba3055245df20dfa38d02f18e663ba149f6058c182fc1d505b31f9f';let _src;

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
