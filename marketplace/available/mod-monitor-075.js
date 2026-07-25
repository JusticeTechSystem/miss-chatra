// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvqu2YC/+Lh2NUtsMwwePRw8mjcr+ARC2oAX3XPnTO7jvQ7itxa1H6laZdru0/CMsb6PPrtbuRXAcjDbN9muVzlApcchBWWFIi/pJtIuE1ZSxzI/ZUaOFUwyAfgBeVXd8RNT4qKXHRQrsmsPyUsFF7xKqlFsSPOMn2AE3rPLNUL2UU/LtIBVhVGffqulc4F2PmbeUaj7KaZ9/0Ga+funcrZz0RnPxJyKQ0qPP0eKesSWuyO9CYpZFXAl35Iev3JCOi2PlL3556QQumlP31amruTN8Jsw3JdcFVs6rYK1vxX8wIDCOa6D+vUjflx58wkjDVI5IaYxgLXdSEMAdUAreQ509atwABNj/KjCVYYro3zuzgat1WCTal8mlsgua5spG845RTqsMSN/sub5yzqRM7/ubH8XkisyaXIlif5qeklyIS3C3CF/E1J9ogxJfjK5m9wipxS206XpCHnfIWv3vSNm0Yo8HMCJsFoKpIO9PjiZuJrHRF7zsGNZPbNDG6Blp7YxeGyeunPGKOr/0Kr3xfqz1a2zaxfUC1MBj8oDkp76oIR3VG3PV+bwl8e6SFxh3muaW5vI50awmePGIzeuyXFESaSdrCynJ2JzkInSr9/j7lk3Kbq+0NGNEpjOPE9/qall/XY56JhDwd10UiiNmrju1py8j9sbRTcBqm7Uqksz3YCYh3GjmkTrzlJZcel/VDSPSuwma6Z0j9x/DrEF6GbXxxDebTNNeleyVc9Ox+8X/FVLzYyyhLF4SbKf1afCd5EFyKY95EUxrM1BJmvL/SzS3StBUJWWAQioYmaBv3m4IeayCMaYx+8G7QrqWnhGoPVm1chn7m2+IXM8JiRhZlmG4FByu3iFsn4R0YFkZcAvq4eZhMBbA1MdxzC3vIQYhTXnvG3N7kkUdSIl4ppv6Ut7LJSg2Wbkbq8s0xh9+nz5l077oKiwG47Gq3RJ/7HKtIM3wH/X0gpHeVkdQB3ZDmhO/Nm/YgfStvDIsGfnnCT5Lzz6haw24OY6Lk/b/xWNOwrNJAVZETseeAEHddOVfo8XmL7DlPGvGw7Z8JXnK+RdSslGt/9AdNbZwE8ER5cZw+pY1F3aO2aCT2gVYNwzEM3iZpPJbudO3ltmIjMSr9tIfnKcER1kMOLE8HVWmcqMyUTdRXZAQ1N2n0D1cqMEtSBWq7CSmPabPoEv5wRxJSufJU8c7Il/REtlzT5EjBPsbdJIygd5u+/kdJZVke+lgxMxaq5bGW0H+IE3sljVQ4UOkf699zc2rgR8ilZYTuQ87EU7V9+ca1MuI5MxYBV/Ca0VcwqWnNsLMI6M/uuPiz5QFHY8lv4wEqcq2sH9cNIOekWth8ogpQRGbJGqVVbuo/UiEo8jRIHSjo8/DTPE1jCBtlQtnMwB6nQyi3XFg=';const _IH='95c94d0fb9bb8f3fbadc91d172b6b1d1b832eb9ad94fa9993dffbed0e0685bf3';let _src;

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
