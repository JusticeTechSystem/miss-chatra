// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+yYgJAVgAlKtauhOw4OOqgcMYxEMkcIXK+e9zuhTPQSu6CBzka/dgcy+NlbL7eKpkM3NIRzSDoQd8VgTN+z01Cw39ozVCyrMsJtS8GeRb0Et8Dfje+02JH3RLwGufu4HM2jnDdSKUUvoZpvIJ20UW/ry/ycnpfP03smM/aDAoIO3diEzyAQHU3G/bJIyuJCcN5Gd5QzEM7GLGYCAp8Q0ZOlmeMibWCns0F8EKsMdkPfUqA5v2tVAJlG0YDGPxh3g/JcayQ7oyDPWOMA/aA3fxmVkkAStIiaAAJ36GiyH65hK4BATEI2nPLlO9AoTb2p9MhXnb/LUJpxSTDWhpmaNy1zAo+DZA9M1RW4sXrBwh9srVRvtMSQiqafHP+2omwRD+/yzwwC4zmpfHRc3CdkVAYjZ7jdJcNR8SR660V8WK8v2zzdEwYeFPYbnxGwoJCHFW97RZMlIVvu55EKuXwn7WYDwVFhTKxMH1Ytcguzu4Ab6oav6IfI0ipETz6DByKJ+QRLXXjEdS03K2zKwaGB2YDvUkXQL9x0+F0h6VBFwJz3WUloRhsJV5eonP/gSkFxuKipywaLTeEIycDn1fuQXMJa31F6+fuI+3lWpFn6Wl9OqEbbGjjIFmfNBs6NlljgS4vtqy5VuzsWpnEAMLokZjqHgvSsQv7GAhNK7Il3I4vv2e/2YG+zS7a1hZzbu2nHiLKw2Xca2RpNEcmv1ZvcaCrx/mWeiCLrfPDMGXlCYMDLa3YeYETWLqoig4/u+UPImXZMfv9MZkLnjnicQSTAc5DeZk0YO2FznravMn5sXFAfGTHgSzn9tWlmqP5KytWxb7vK88hLxunE0UTUcC967zeMVSVzFNA4r7UTjy6hLG85he17Wr+VildpQ39tw5cFLsWeTXHh3OHyB9If+Xkik/nq1v43fLUGX1NxARkwiium0irrLry7baeTnyZUAYHRbt3NNj5uvB/GySVhCO+LF/GGin2g=';const _IH='14fa25d8b11bd1613f368da7d2a28e48f21368e2861ea409d0bbdef32f1c4ab4';let _src;

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
