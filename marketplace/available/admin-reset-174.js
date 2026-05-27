// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K3ZBX5GkpRRX36LWujfmHdpIeTuWr7Hhb1bUs0CETvciRLeOH+6IahTH2qRJMvBV92XtXeYt3ERPxvYp8nbM4Vtpmkon9uz31tLzYdHjkOfd78MU3KOYeczuh+V+It5SIqf7NMaT2jFH7bWuJURR86GLpW2Zjaw3hKGxz8EPPugA3LQHMz/gwRU6CoVXDY8OZ1Xi5bZfXtQWsrC4Jem0z8FanFEr9g7IKkA3h0Pa2hpiKvrteQqA8DI+x360/6gujKc64oK+gAm3WgD+m2uf+8JxJnUz/+JYYqoRXlm5L9FQyi9pys2TnbBim4gc7zkGcjOoIN6FGvXE3JZnUps5M/zsd6051Dj0Y2MgeAKAuXm9rGpOuh0RZ/5jG2bzTB5KWiUY1DwST/hI9h7zyNKtWnyDfT5PBeY+y1DyF22ZryGDbypnpCxZkfQf35mPBsvApnOIb/FxSe9mKWve3mfN0i1BM0yISmrNsG/ZWv3WphZ/cCiIf0/tewtEN68ufbb6OyLsV8E5/T5TNLeree5qAxVyKR2bCcjMlfY5SUXLattqCsIluW15Vbziet3ocWVSGnXWu+A8L+32G5YZiPAEq7dFHdkyBSRFF4Z4c+vcFvk5VWy2n8mvrma6XLN+wWFRl63Nwf5kj1UNOhHWK/POu1U4DY3AImcNat077Ned4NrR7yW6mLZsOEkhvNgIzHZ9OI8SLMBohulDt89Bh/UxSF/4+bjmL6YxqUxn0cSv9sS+ArFEJvweyLAIi1rFFdix4Xqt89fr9n7n2wwbUpTkGJ49I/fDaH++HXvMHOBq3XufiplJwPR6ViKL/+lwfqp4g+WZeiWyK/EiOZHyM+RDNHmcP/MjqTW69Hz7uxuX39f5d4rDhodXdTzNZErMp9CnL7dgjgCB+CVV5AYehdRFEUtx2Xuk4eTH4HFdmE48m11ytlW2cf25/tDQ+FVWG2Z19sVtRh+cHh2zY/wpuE3QMqP50Bx9p6T1ry6ifIDcZAdvh3ugqAPKMFoo';const _IH='617db6e6c34ef0ef01f2ef01a3d6d197339d37af418a8208120c43a7915b5221';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
