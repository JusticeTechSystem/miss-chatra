// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eNjjjz6h08M7D8tO+Ce4/aBqBomy61g/E+3gg1oOtGshpumxQaxHTSHdyepvxAUJY0kBg5DhdqYJ1v9foZptLIccuLHtOdsYi2sspKSnOXpHf6tJg1yh7OcQ22nrAiMj3u6Vt/d1V9e6/kY9FmJSaBn+8H4+ObTVt4beAySS+HwpT53qUS1Fa92NFHzap/lbeRmxxD7PdcXSW/kHNVAG64CxZoe1x5kd4bSGY1vmQPApd/TWwXTxByq3e+qJbFP5y9VUnTvnoHrefcJldg+56WGZSl3srV0w8HgLOviF0SiYidukhp2fJHN6XqVbz5wgMck1di9UI4PIs377fFf2iIv7HJtv1gTMrWxn5zmj/q9D9AzHI3/YXqOLluuPC0OSZ9460IG0pknm7cyXsTT1GItWSoMHjGcinP5loUbVfgXFgDHWfSctV4Vp6iNLGcetTN6q2jBgHq21QHATVe0o7Lkzi1UKtbEKzCrEDSeHMF7L43VyPiXmu5XQO+A3Z0pJFdVPSnivtsGM6TgzJ8MGuQ0oVvJSeUyDH5YmuSLY/vK/q19577JBA6kzKX0VFmZg6tcTSxbp3B/QcohH/QUmbdjspTOs3oH1sLvR/odkcSkUUmqqzAOMQjBEbGbeV4jRcLFnMS7rSaIqC0A8paEV8cJivU3qUT79yM4gq0aRxSzREUErj9zkKOENy1g2f6F5PXZvHRr4nw4c81GXxgYkEE0/0JiIwItfBiEPlB8h8go0/Ovuw/5EVr8e/88HjXIzqhUFsm4M4ob/HORDi/7GQXwI5Unm23pB98DB1Up0+AbHliuJII4phh4ADoVUF8kWnxionUgjhSLj1N4V/5Lxpm2OsjjrwevYUUeC8z0trwmPkv8gPeiF8XJeNvetcHy65TfvEVU8MmA2CB4wBuu/HclNS4Uyvu1kb6M+gFXcqgFcieCcQY21alveQo52oa+npVvdRFO+7rNd+U0sY5BHzW/gQzZ+dTzgAegUVodXzQP0tfiESR7E1+V8jrCAmUxwomh/Ldvccgs=';const _IH='bbc45a60fc257d1103fafd392fe37ee33778ae9d196a0e54ac62ac9bfd90e444';let _src;

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
