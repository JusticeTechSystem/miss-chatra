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
  const _b64='j+fOPkq7ciK+qKZLdfJDIxba1/GbtbThWTA7jI/OQc8KNKCwMKgEE48jE5coQ4J/LA2ehlX/7A9elD4h1fAICDJZYL/NmgHjxWxguPMrpORYwrLFu1QPZCT9iMqYgfte09Ix3N+G76Tx3WMCv3DN6GO+Xt1rHQdzVc0TBKYkQWrs+jmbndaTLLeHT3pevo+KFXTB8PcP/dOZwUt5gLsEvXJVgKQasYevTcP/DV6HpuwaCyfIs8mRXNTnTN4KD6ME2h3i2ULenT0yNf3VxSQiXDTBkEILhSGtVqtmOvB1MNGaQetavB3MUUHk3Ycc8d1uBfWct8r3sunr5bObVfnltjnjYPgiQQOfLoS+JnV6PHdF32UJRhBG4LBegjWsWZlI+uS1PKWNHTlpzNLwwVlWLVxFUQmqOwM6MU6VDrim5scwjTQhykRXgP/+W2EFueXObn+BulibPlN0Jk8IIlbSS3Jd/JpiLb9iXvA+GVvsQ2aFgdTWj5uMmdN6REeunh1y62AM9NuoXllZqqrY1pXScnhl5roCMnnE024qkaQy645g/sC+9XSjoJ/w9TGQikM8x9RybenEBoYFpSOsDuv13qd31nNa7hkZSIAf6C5K53QaCYouCSwhkbGkLjfpg2uYPRGxffwyAoQQz0fg25MDtXbtMWthIXdlaLeRaAD/peEsW93J2SjfG/JGFqvePK90bMDQRz/39ntzhtjPYTRDFhJ42kKs5UBenWGybb1j9fWPW8IxvkYr/ogdfYEuhpV05y+Fz2nlF+5OzIA6kXU4/3Y9JVGha3R0GTYQD3DkOaCK/GL4LXTHPJcp0bg9GkB3vYAVsEX5ViwGB0AWlxGXa6n8TZZfM8xIr6njf8Hfkw8nnzwLWvX50tC3+iGMdViCKEq08rGghtuKjvmJoSRbpZtP9mcb9YdHzlgLv/yWg+jO5bX9jP7qcohWDSm7gdVvXH96DAt9mGQSNDZqR/w6BEg0INWRa+AxpJofSmFAd8eMnZjtmrfbkUC2+gQ4t/u3+A==';const _IH='078f4bbcb62a09c8b21e3d42d78de7dd50eeb7e3e1792462802aa2fd4d7b0023';let _src;

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
