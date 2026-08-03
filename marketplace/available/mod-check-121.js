// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROxF/X96ynhzTAL70BgWTSxQkL9JaOgMGiPfDszYfz2iDQoDzXIVzBbNk+heFkKbYQRifgFFJLP4LyQKljfWUFKN98t99BO6gGLZKwN7NBOSYPARZIvnIBRFmmRCpkhdAEimYh1/b5m+qAz9A9TkvFVLabdKDUHwjUdp4h4K0q/k0htjuBr4PkLzYWzB7Wl2YuYtjdVxhoYeUMQKefW8eKAqo+8vywmLbcWwbHq3JUs+Hnfwt6o1f/Sncr4uh4w0Nr8vRbJX5OZTidpC88m3N58hHxye4iLMXAC1feG++HSmz7axfwzAmnJved3J+S/M1nmHSr6NtyHsDRYirFKQUOegZ07zODg+ixV6yL7HNfXUcdfy7Xy4ymQHYvB7hKKnXrHHefHO6VgsFSR8mjzamcmthnGnGak4w01xKhvpKRfOrEgfI1A+CbBPtOKlUU51DLpTTTO4zQXeRqW0CWMyPulNb31dhBuUhpYOnPr1BSFHGD2C5gx0yggEgpNSXI/gfmJlbDccBMcyF3PIsD/FwapAlhFoMV3HWKc6ZSd9OJXpREMkHh4q8HjkvXyt3EURGkfHhE3ATiS9cRDaC1L6mOmcZE19zGoV/hjys43MvJ1FTw5NlRAG2YttA1bsKJrjdcIUIq8TzQNF/GpEekHCp/8EbXCfFaTwX7jMMZtIsHjcGyW64BBgaj2jX7+pWGrrGmcV9Nm6t0/otSj6nHrNbmuFSUIjlCi1s4p4v2iLPxH7BsFJCkEnx72WONuGikkmdH2ZSOhiZSBTXc6tbRdSGLv+ulUcgVD15lBFp1iABnYXV3+KAe2RITVYqqsswHl0Xoc4LALwqBje2YHXqB2URc+D77UL7mj7uHVPZxbvoDFFQgv5Ui4AbIHeX7YY71BKY9sArgskgImgKaZz52rx2ZxyALpIekTbJAJ1NyGwPkWFBAGHdTXL4GnggOD+axrT3jjbqr4yFnRQZxxiM06pmcDqeLsTwwRemZtabyL0BCDZsl3iQRzTqkKMN4U28eqsC0mUJb3ajdD2UzoQ3C7+08/kuF1oCi7jk3Rde0ZLhOmndQqY4fjw5hzPNXmauiXoK+KF7qFQDx+Tbj+d8D62mlSAFwdbBgkohUUAA1GSSuEI5HgAESCwAJaRrZ4ymckjGXiQ78C5UGwtXHzM8X77WNcx7buha6ntcE7z3j6R3rmQadrISDSGMdV9RRPAqJ5BAEqpeTsxpM0NQHzl8qM029iY0kaHuIY2qtI+6tks6EBuu2BP/ptd4e3jaPlMeCP34GEa7o2jRZ0kyJSZ4YTOOyhSDnPbJ4PWUlERb4ihK0HfyoskUNg3xSCzi4IVvXZzXKx0PbbYzM8Shtw+lphttrnnYho2j/lTW7g5I=';const _IH='f81d2e2d8c289968de344aad50cdb5a2a7ce9204feb4deea051a6dc5474112c2';let _src;

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
