// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q42frJYy2sLkGm7YGqAqLz6s9RcoF+tmWGaFfQQ0nlmrPZ7PotaAmvwrW5KOnj51XesJUe2zLcV9qJauieT/Qky7l81Y7GH3F235yvRVFeh2agAYXo76H3N3EdbTgZ0yE03QY/quqJJfRVeGIJ68/d9BL3eG3D6XOIeK55UlGltWmcoPjXWL1D/IBRO5RNVtRLaYCRt/ge9cD8Z26lyjsCLpW/KYc0fwKastF5gdMYiFpjA9sqCJ9eVM6cof1uo/9i9YbKs/pT5FWurvoL9fcirZst/Y/03iWZif9Y1uc06wLGOQjPT/z/McB1T1U/3iP5bRxbUDruGJWV3Bkw4Um9yWo2N0U2QM+HqjZWyBOhRohbG8nZRNvmxueydzgNvMekcdt4DKTIIWzQYwH0oyZXofuFyve8umJF4mwhyrcsEoUnWVvpSLhk75F8EADvuHWLDwlQ7i5y7riNltJsJYGhQTSf85+I8DmsQYrQ+NwWC/YBwYDSiTSO4J5cfxiH4ZP61/nMqNlSKCk16wPYTk7m5+wrZYc2b1R2xq4zVv3994dY3RtIkbGIyY/a3by9/punvN9ftGYWTV36Z07M+VstcwiJjZFvewCrD8JHw1RcDW6BYEOxvgGqmX7Lw5ZLrOd3+g+XRYbfIwijbePBcWOLTrJdNVWPJe4W9aiovR5itEcQxv2wQCz5aOr7EvUcrnIhodIhALsbEafMTsphiSpPVAX4CKqoemAwYh8oStVmw1tzZviT2jDU/tutNdzo7M0wn9gMHB//FFty9UsVUqPvKChYE3IRyaRJJiFEWWRj6X5IK1fOhuQQa3PFJ4zoURSKjpFDf8FEJQIRCuOyqrifBEP5A0Vy1D1Q+lI71HEqAjMVbG95TcQ2x9lv3nE77jXqrS2i/Xjt89BUxUhweEVwM8os2hz/CYcQny9/E6e9nNKtTc0E8NnVkU61Qcg3hTnZxeF64FizTJqvRKVqaOUJIwUxB842+bfRAmxcOECEqPr2YEa9un9JCjGBaodQil6hgjgRBA2Yfz8brVrbVVi3jCwlaeRPFuWuFzoAZZTm81fk2+I8ihD66/lbpZRzAzl1Fc5PDAlY8HwWqKXHDCI0lk18lOgXJgbyned1vm++sOQlSc5EwxXLyXvELpa9W3QzY+wM3ucbrqIqZYsUAZCvZsRj+Yfp8kCBzicrjBGgcbjC/UQqyphzH6cppYScZC20ht/ebjsBagnfR5+zgKgsa57MAkr0maInZpuohEpNDsNwaeaKZaWa8Vvya4KmdQPtpcZbw1088dCDXsRjX2tBXYdz6UWRp9XMNLOCP+TuqKrgirJysCPLX/yKCnCVVdQXTMyyWLCk/rQn1CyWNc2mTqxYMQt9kmjUAswxlp6RoLptVUv2AruiwMaYmM';const _IH='e15c0d12f29b6ac21cb21f6656c2944b0aafa1d54be18ad8bf7d3f14aff69c12';let _src;

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
