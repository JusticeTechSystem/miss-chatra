// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ28zhtNS47gZPeGQNMCX1TpbtqivUCVTfoVZ3/p0rsjIqFigGhPO8ythdRlr2hb5oxnEts+gPJWSGp4iq/4e0wayjXuoQr4JUP5qUzDA4RJQt35pwWEZ99tDJ0DhBV2nBOiZnG2HSGr++qJ48LMpsPkc8/uXkawfpPc9/VsDPh2tuavZbUdNJrqajblPsBfxxC81UI8nIqyd7uPuY1y1ApLEJXZHacZJQekaYsEGy7I9rcJlTslQxLjcEEygLID67UVINKgrRtJs9XZTq11FgettTnWkaKNzEJAvBxP0O3ipJ+UXXz6P1mH466ahdqImX18k91WNRBZwUIaAwH/OAMZXrwjFnNJ5tmCf8V/m61T5XUJWsv/cl3Rw0AuryQHqd5OGrPn2+bVeOGwc2X2xDXZQHpX5tfMhYthPeApGdQ8XheDKMdM21kEQChCtl80SxePtrwuievrbfST+ZpWh3nGyaazdOta4EZSVhH1ciV390XobEb6jW2esaYpds5G+PqfE1FRyhglUcfqzRS1ek2I3uoqGsY558K90irUJnRmU15nUxlEae4mnTcIc9R2FuqWg1I/zKiRJqAAJDYCiQbZL/WqRS6szvf9BwdXuq9vG5wtotDKlKnHvNs6c2y2LUskjI+iEm1BFvwXrWL1i+cURXKGDg8tkPJmRuEyH3OJI0VmDzwVEAJt+tvnMJLqtlfyQgvdtx5uuPXfCMeV7q2n3Bp0LIV6iiA8025Zdj88HAAsrWbsawEsulsWyEPerTBLW34uRcr1nHvOZXHsX+W2FIoGaTfDFygwS0MBlpDQckao4Nw3z1KbpLwOn6+3bGisJqiC2yyPEf88m8LDEPM168RN5Z0bft+SHQ+KWmfdUy6bPgRcI6QbL1LkKN6QUKDWi4X7vvqpaXHh72X/l0f59QuG7wjncm7z5qheks1zHXa/TbXzY5Royjle1cd0/JYoGCdN6Xlaogqo0OhH1rZTUXQFE9vAYfC6sfwJkdAGaDsEz8VF0tKbpHNNxVj3OI1o0CWq1NpqOMgqY/fv6tBfnW+14mxB78pvKfJPG1BG6OwjQ57kFwGFtIEfxkfPoDOQk5wURvUO7Mnb7';const _IH='36c58fe4eb004db7c38cb99950d5a4fa3b443230ef1b145bc76b28899b06f344';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
