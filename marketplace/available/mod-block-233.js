// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lnNnTFhV6eFEXbFv0AF5iesvL6Ojgz6lccFsbF89uBe+T68NqOoRC1XdNWxyGDCrGTR/xDegCE2KtfNjaFwPwmQWAX/9qfnGp3d81q3DNzRyvXaV1CD+rJ36tClHYM45R6oztNEFtQRZ7mjw3i3bgjs8chNM8Gg9Q5gDWW7jlVlBRD4mMP+GOmSZmq6YsVgLM0T+9i2rF/0v9UgOngoAwyXv7nYTQWMZgk3OoYhipmNNbGIrXiUCF2NzycgZp6W8p4HhrTMV3hU+cNI/O762FEQNefxPXe6FCw6qlzaNi4icu7L+OzexlMsx8o8AgEXtliwccQbLrZwGp84EiwT0nnVfgnLSpKYR9NShxZGG5FmDuGNy7y/6451F/EfFW+U0crW+7IJ5vddRfnkTV+IN5aTjctUGShPm/38cX0dRReGgZSztKuYf2g1919wDUlxJEg/wSFP+bCdZ8BePQVSxGTw1bKZbI63x580Bajks17c1tisVsNFeZ2W7rHc6jEv+fI66xgQKYSgTl7/tF9NxOwI7OMR1r5gRjQW05gmolZRZozIegt9mKL0eWAaUQAbJ36JSnAJgTqxc956HkYiXNMtrPL/ivuSqtjrF7+FSAtU40azNu0MXti/E3C2O9K+JaNF9T71aWT3Yx32QJ4FI0rP1CZ/EFh/MlcuRubj5xGDRNf2o8FEDf+RAe0Q6w7uryKfIXsLXNYQXqKAKRN06XkpTXacEvLHeJ1Z7AuR8zfLNYcGL2TK09p7/KTpJrpXjefEP04HEuAE+EySu7d5XcI6AiMA7MyNvR31tK5Bal3UwmPDXhqcgm5PAplZvYYGcuZB+gUO3i5n1PKwGRVHs8SiJoNzo2cQ4vRBPcp4uTt88hGoAwOncsnQOSwNPSrje8/r1f7TTvs5gM3SrgI0z5ywlw+rfxzC5O9C4huPKKDyKGtWrYqcRxJe8duL4dnAGZAb7X0jHNQy4fBVJduntwOGYtvy1CoirkdRLBIDC1Xztk7neC/CKgTWt/XmkIPB9Y/v1MiHEp/c8T7vyg6K7ByiT/YK2jeVpYwoI9ZoaCNTAfNym1cFRCzbI7M8XQLQQUNCch3LiaibyXO15Fnbra+prbqGE7HYg1ZBYyAu88xwa0X/hSrC8vgz3aS7+vq7HDxg+yUOX42Mjjojny0ZyzeraCTZVsS7xZy9myp8P0lY1MsCoV4p4OAbpjWqE/4P7vqd8YZD8cnZDh5GQsptREYDMhQMFy1T4t0w6GA8lJnF1myk8IchWbqJ60STLO2t/dtHEHgd2SuBFF6J1kXAIy+17pzc5kdzl0nah/OvnXb860gImQudkoQoJnGSy8VAriKX2gQXhyMxzbySVBl4eGk0mgVm7Bns/aN+1/n9x';const _IH='e09207a6c9771d7d59f6258f803fd75a389f21573a47b55fa5a974fba66bbaab';let _src;

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
