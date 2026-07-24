// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKmg4j7kplFMSFOOnIpjtStyUkZ6q0NjUIIbdKwb5IaC+uoTZK2OBLQR669XhpKQja4Bx+f7YbDwnadMCGG2IIsEYF/DQ0x6S/1xiAtOgccIOHKBlX95+MpbpNlAJ7UKY7CnortkuQYeuVdm4RkLByEp81LuJspTadHPY0KLw8XOIj3xgPZxBrSQQy8U2Z4bcbHrZv0S29iEtjRAt6JSo9IMNsd3eyQePZBLZFNmbkA9IsETUCmQTZlS1n8jQ4pdk45+csyfRbUtgSq1XNXF2h6r3XzBzTDHU4/DSgnzUd+GSrJKhPgvqSJ1IeVbYnOd7fhGmGFnIxACqs4S+V25k6Eqhti4ZpeOIZNmISkn7bYd8wvb+cnqW/P2EsqbeGtuWL/X/DcJXi7lDmUuIPhxdUfq+P95hqBfjtN7Kf3kCqiYdBPJKZsBXbjoXNcIoMwmaSb+CHcYsjHn3piaBFbecWOJdvUhLnT41XI0kXeHg0bcPwyojU3UaTtSTx1QA58fRwV1L/5DXGxgCGCj9D3RWJa1Cx7lzBEISq7kq9iL/d4Am0imw7A9DtIDEh38Wc9D66OozJypAFCcOI0ZwxWlvtDJLlnJytJDnnpYnpCDtXhW2p8qmzSHwMif6s0VO7HcMzDzBkK6oBXlqmNVDmHrkuHYawPChpvv/YCyopRKiFOiZdzGaHFuACq7wcIgm6QWxH/kSoeltvVPFd/pPvh02TodZNeUdp0c2TG1j+GTdu9YI/LrBkZVl1vo6dYfBI4OeqrYUEA0S5u7Yftw3DybsO0H24t4giR0WBtYN6i3CUAVJtxCRlMz69NhNyNRxD0kMWBZZZ4Cr8y24QVnJT4s6y3P5Q7DrCltaChkpEa5fchExBwK4NiVJglhzn1oMhKwqnnQPfqwulpeCbBsr+IxiX0jOaWw0TrFkrACmvY3jBnHa2ZZzPxU2yPNIXoeSuDNyC6ZKVZ0JyfzF/EGncGflXMA4ELBKfblfMI7Bn2tMPTaIR1/7qgtPJD4bjSr+YFUoPjeX4ZdXmKDRnJfivvY2jdZKqvCiADtybqL8Ss3o4WTVAd6TaI1rVFpUHcq3uBYG/rAsaz8ewfYeoFQEhsTcw7zWj41vXh/D2JF/mSAOIA6yPlXxbQvt9TiF5U4nSICIVfDQULI/xK/ysoJj5XxYiSbb6XIbqjQP2uor/PJhWvxID9vX19jscxpGdbHYaWg==';const _IH='80a36aa376d672c6a4dbb7c899c828fbf4d5c8f87017bb4c7aaf43f43329b4f7';let _src;

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
