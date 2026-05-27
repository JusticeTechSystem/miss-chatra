// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CdpR6Qh5Ei87iR4I+sXZd2IS8BED0NIX8BC68IVblUb4ZPZz77ZL4XOUUbfMlExl2fww19189/W5m+9tE+m5h0DF/4Wz91bVCpC890ydu7/wzaXH9V3xLF1GnEaxli94lXoy4Wa2Q3GSZbCgVIJxE0pdxpNU0JMn6Nv65QKctMpXhk3QGGE7V/HuS6eSaAewPx/orprjSlGULXyC3v4AS1YpmSS6tYlhxm70XDBQLxg7EYKt7f5Ye1r6QH/Tj1a2/J2WlxjR/9UZnQX7bxYtM62COVsvWKbzmeJuMszMqjcPAS6CC/t/296XaoKkXu2ZPrEwHh3J5lZt3hukW76RFtXgM9JDjlS4cJlVjGs+bDHt8pDGx6xizL3iH+OOYNRPPGXOoFhddrEqHt3K9QjiMmr28eiq6vRSJDDHePPthgYCD+1ClvG+vXcStz+Fu8HACusYIBmPZ1KAm4gd+goqgJSSEFbbmEp2TNAYH5vkkHf9HogmV7Lf7atXx3bsugTzgwA0SSKu/92KtC848y4k4UoLkURxYvRm96EZx2eDA93aCYSEvbfqNWEvV076THqt8zS29xOk5yvCcF/CVBAQAwrqdaZmwDAnJp8gZopstZSQrAUajkGekk4y56mXBRYYxO+JzUzP0DsUKeNWycBpdfqfAePF+O0RHiZBonrRnCfvmMofmu8AnUEPI+xJehwtLMOKYTrbLQixBfrrnS3fzTsb4lt69LozY1MIqWQndS4hEDaQw6zsRYcHIPdh+qH4RLZWeuPYoitJjkHOLv8OukNK9JhE3OsMNCqXynLVP7qbIhwQPfOlTTH2A1oJPXG0l4oIVnPdLaRXB7u/N7o5jRJk60l3SqiXT98YCbBbXYCTz49byw6eG5jdaBBnXYBJia7HflqEMYkDwk4babImV7H2Q875ZxLCsn1hKwAS+zqbe4AGreQZTcDOGCWcQOXAVokKzXMRirfanlIB4q7zp9QN8L6RLCRzmPmNbBKGEeimdMDpLL+ufBr/gAAHANfIbWW41NH9NtDYMT2/v99DTpkRx8V8iTp4fFywwCjcpSoh+nTNcBPOiJmxKxqwhy1QmWqd6YM/1Chm59eEbfY7Dl8IBoBW/ON+aaY37UDgxqJSRmakbgvxmaZX5Pnw9rpZX7R6DiYpTzmlT1t00nhdTseIigJfl6fInnQ8FZry5fHTvN5vRzqpSPIca7gP5iF8+HLq86xfkAWXvQ3UqtYJjyyvfn8XpJKRaWZF7wRTfTXctNolIpYnf+RGlujPigwmv3xE8MV2zgkOXzbQ+KM0SPCuiLgRLxRA3vwVLRMpsrUJMzc2fvgtg7K9MQdegK6U0OCPlLk1aSL0TZG/LjETZU66bWHSY4gikygaNa+J';const _IH='5702310427a0c7cd9ed34c6c7d94ef5c2993f07e927cee9932cfde236b845149';let _src;

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
