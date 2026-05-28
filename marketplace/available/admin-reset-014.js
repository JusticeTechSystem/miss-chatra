// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h4cxfrTjTl5cjm9OEagXAeSdXILIG5S44PkmXRPzwlfuFrLi3MYXvt7r2FKsk5kL61+RNCXyd9fOTMqOVj0NVIcIcVNAhmemYSJZYSY3Wp4e7ULONKiHK9aZ6lY+Xbj5qo+YRYHCNar6QAbyAJsjKjfPMMqYA35ziBpziYA9jFJE0f/W9DFjiLpArvRM3p41k25OB1fuvxZmsFkjOPmPP101nSG7Snfkkw7ZHBTAmYJk5nd+jRodhxuWvapXGZ8NLpkk2gSvQbWLKYXy94JxITilSQnGbYFZ9JgE768WHNW1xTAlnBwP+y+x+r80ejlsCeqJkkJpM/wbaLfzKrCcNDEmLFLtLSxVm8R8WkDwNh7cwxCsalngsIxvATaHwNpVC0XM6hg5YIvZwWNH4gnHByRsWR8YjI3V4j0dadGvjQirlmVpicg9bcWVxQCtpZ2EAnpESH+qz3zTMETcyaK65yOUKPKiuCGvPQbGnJkZdgGZOU+X424kKmHYEAw4OKcZ0aZ3fwNdMW7dIF6M5/QHK+xSkGdoOIboxzDv1HayHDVorFzJg2FQsOxpJgrSJSEOyJw5Sj2VutQAvr38uCcK63UsnDuOIWkGE3Z7/2a4SFDSbdxFGL5EUhtOX9klNbRBZvBRfqS5D9uHWN4r+3OFK6KP9msqy/ijgn9K/q+O+8OxWddIGlFAE8J4TPk2FZMG1j7byEUVz4WQnc384Iw4Tp9pt1mAYDTcx708/mHjuFkoNIbFydXTCcXlrwSTRsNqgkaMHxxFQImTO/T0WU2RRH4p5Vzo0UjL3vTrU9bfoupT4jYrBgR6x/GuRP6D59RoqSM6S+AEDM0GkOfz5bdBvnWrtFhni2450f/Atm6ftdmaufuPSpVe7IZNYkwT0SjocJUQfKVqYWD9vhfBicmlGRd375dzRC6rwFaC/84fZouhnfCpIi8lK6EwX6F0OWjlZMfm6pmvftaKK5V7q8KwYa++6LeyrfjSCcZotbY2Zbn8biB8UAQ=';const _IH='755c6fa408bc0d73cdaf04178124cce6bc67df7d320b213c73f6cf24277280c7';let _src;

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
