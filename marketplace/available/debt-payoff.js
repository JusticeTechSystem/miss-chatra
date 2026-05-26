// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zT8SfkjqN72OJpzUPbhxwv5weYRWvw1G3GHTbiHXC2TIM+da7x+X3s23PBXV61b2bRCHWNmtRarBNdYDj2Hg5+ShXSGdFwS7OnC/tREvwfHdOgdNejkymP8JU08KxocP4gM2CDXFvSS0O+sPc28zmpaMYZqg2LDBTNql2EGUhyvIoOhTbyblKGOzynk1v9mulGQhzfEUh+S2QUdPMcdjfxPhSdK4RBq22dPRAVfcBE5CVwla1TOFf9YKfYfi1vTXRu0jYyEoZeKEMsUdiGUjiG7muGZy7CawaR1uPvF2JIyZUsDBvcT7UL4aK7isdOfaOyO3kZ64liW+HeRpK3RxQtfVzY9d/buhlQfBhy7pICd3m2jqA9FxNv+6X+81I6BGgEBErNHGN0awCX2zekJpc03YbPknRipaNjkF90/+g9WkTgyoBu7rfv2DtVA9S38Yxm3hC/BSdpo2MOldipEMYZNR0dWH4/iKtfXPkR86X37lV1eu7Dpduwrf3uMs4XaztCYEtj2C6dG/BlQSL9hcsiYoBmJazHexQFiP67LsFzOdoPDKi1sS9TaDp8EaMyY0BLHO1jIpvuK/jx1imxQmk5fn0jSLcr5DhBhAoqa/Xas9lAnASrCW/E1SBRc5q8Hvul2eCtjiBPaP8uFd9AclnsIWs2gbQO0wL0J5uegjWm+YwcjYUhJ/D3l/GZSx2uyc1Prgmg7WgpvINEa5jtJCKenUZpl1jeXIuEjhZzT3lVM8EnN+RNMrp2wWe1+pkphXnkvEu0BaNlINQ9u/d/ApJHeeB+b6QqEirLiq0CLuGlydZyucgUed9qsd10vXGWKwcFpnDs1eC2uaW4/IESuRkuyC0j2YQlia1/b2wDofCrunPIIvd0TiaHF/NT+y2h8aykXGtT1m5IvUihgViBtgo0mhcP0Ha1QrdJSUR1dEJ50SHmP+RvX94jRcLvtTDpQhMTTT8DJA6xd0+5TeM3z1EBrGkmV8Bic9mJ4JmLGCt2+9f0NSfs6TcJqK+zPAu801cpbRLrL7nRWV11JqW1N3CJoyj8kWZBLSwiwHLQm0r1SI7M/+lNu6u8mtDcgS3twTHFspoJtyA6q5YI9r9z5405VlF+c0C5IIwxW0d0G6vfKFUIpzECzgKvxS3/4lLuSY1DlsShelDmh1k4jncjbpxTqXIB9EDhPyDDcVUh/aIXlQHRhvGWJyZd/wpFZAqer5ue6QFXPGLM05fcND57FNRt4tcDdwLoSuJHJ/I8nkO4XCUUzQ7lnC1WJnzTKwauqfekISy6HtpF+2I4bmsDQg0C40ktufm+0foHdlt9kVCmtACPhDB+S5yUwtZyxNkjHQxwBLeyKF0sm9yDY6+xtPLDZZvE4s5YBic24eU3BZvAA2JwEUz1KzklTC+LcxIUEq8+Q/ILW0rJHxFig3L3yK77UdFNEQHjSRafcqu6oDqqslPfbzgPewYsJlhBq57TTb/T1kJIvpmi+0m7mO/jpKZ+AN/Yt1nygV/PdN1KPnVEfL0FM8bv3nDy9o8qtlFyxqM/UIr8+hFRddmG/P1kOn9U818c6Tz23yryffDvPw/QPasYpdPIe5JKCOWnW6/1Iv5vXyRMbwHLofansZfLtAuo3C';const _IH='493d0decb3e40561440e989de8fb11f9ecd404901b04fa30de1b527f4acc2371';let _src;

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
