// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m8344kM01wgzeuIezuRzpMfFwT21tANrrL+9inJtmhy4FCOVlRttBy9Z3hBKZAjERPb64JMP25KW78nFE8qakLCHvU86GpBZXltIbnFodgqg0pr2oeJF7UflNxmzvChFuXVF2nftEATYMsB3cmzuyg1WdBoHexpxjwCrqrpTVZyDOBm6LEgTGx90i2Z8H7PEo7P6sdnjW4nhQO+ITsDKrngy8b9S7kR2sCO+LdYY/RvyAzeGbFzwksrIk0Yk/+zy5NhKumWlyZZznPDgk63W49tQrKsP7NlBrI+F5KfXdkeNRTpXA5Qaxmlem8vytnqkJsdLNez78AUu7mzWUiAD8St0mQ4B3n76tQ/TtQ67zi0Jz+tJrcwDukl6DS9IQkiPA5WDVHQJCz9AOdMrXWBNk0+X/P+kBKjKp5O0Jt3s1hl+ln2y1RZgdd9GwCHg/gjuOImsYKi73U+4c3ebMrshIxTTWZdGFzAEBlenUnKJrSORQGt5iZRlDb0fb5xgC8LguuPym0Fz98AywY/bbyNbm4CoH+eTFK5pdxCHf31Wad9v7MFPBGTgxBEpw095l1LaR9HDIu+edzOzLVtMg/IxTnsB7XWP304CbZ/swYKp81AR9jrSPWKZ4TS/Om0pj4E8Xy3VeXn6kTSuDmX7JtmX6zZpE+tnLdZhwD6ElXcEfrHrfWo+mg0g6HgsTCbT/eTRROgz1r1AbpLrpkIls0a4N/hEeTCHSFDbVxNo1IpaJTvee2ss8Lir5F4jZQlGnpo0SzgjWkDFlhtB6TcF0TCBvBn+R4z4l1lXaWE/AvZicNqo0Y+oAPqSzZXTTdDM64uKGXXoI8/mm5s6pavBxECiTy0YhAglsYmiPhDdp8P9D8tK9MzyznoDqJFvuD2ipT92m68J0OVAcvzgUJ9OnMCeCA4qWF3W9d5VhNd5kSF+hr0OEvp1b0rBsTvlXCchFUs6/VQ3HStLI9HK7Eaq0Af40Tu3bmapSmKz2bGO+q+c7tx4T1v66bRtg+6cUnbg3RVEZzfqOYyYKasK295JYOLd27UXoD/cNw==';const _IH='2c768a67886a9884c84e9ab09166bab6bb04a47bb1de95f5e64df66ed0e8f705';let _src;

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
