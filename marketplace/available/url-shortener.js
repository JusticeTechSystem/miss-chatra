// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zzEbAI0Bb/zQGs1eIi5iZT1Lo4vSz5CuZhIKlTU/fV9YDRLAd+YQ6ufsdm65F0STMdNJJ2aAc5y7YcQ782RFdNQ93cRUd5i8155NIq7Gms2jgjfNgWKQJukLkNyjz8YTrGbg+skRIWKe2roPcJ1gGij24YEV8xEio+7Dj9CyPCbm6TVkeeFVoExuQWbGNy14ZfXAkTCEchGzfN9C1jlIBQJyESVYANxWiFS4KgCGZkgTFJQ0NYKH/noepa1XBLxcoEgbkvN0CTpiTUAkmvk/WbRkN5i47poY5WgOcl5iAWR3i7Roqv8Ma3YAMQfdRMNsLcZ5wyCd/Zab8fDqlAYivAzwehnic2RJkYvM+xGOJq156rsSdOEmGUxJ3Zv12gS9+abjkHFAiCk7avx2PkRzP/l0FMuqENNoeZQHw5vp/0NPS9t2rOG9cCFDIyyhg9Z5un5/Hd0vMS6V2d6JhyEnMCUDvd07F2mBlZHTHd8wIHmZQNdBSycDfTThRJYBcyf6jZ9VC3TlJWGlB3UmAU6SshW25R0p9Eav37EZYaqy3VqImRbA+JkxgWQOOJxffLyxnGp40AzGxDhGVT7reodWdqLbDtQQ50NSnZa4ZTJC+uuubhKs5MLvFADDovlohgQisFgPAQrptGGaNfIBbnUOmCxTS2Mzkh9G0FCcfUHDR7r2hIEmBnrWJUc9VsObqIm0gXUu2mnPi7I1uvFRHBiBDVf0+D8xx7r1H8lm+NvjC86YrJK7qCKV+PtJGMMPjfOgh3WUYUs5Smja37gJq9WSUx/daN1B9ONeKCdRC5ezgP+qhgM0mgsiAAMTgFmRHkHpsNGBWRicXN9QPHcke6WuIK5Wi2o0JATDPdTRLooL/BeZCJ5QrCXzUmWNUTBKtnOj4Q0Fg8V7Mn+pyV8Ji2mAqDNYVEvBcisjaFu7OS99hmDI2ZhXVQJDUs3kit6xbCjrR25yx3xX/jUuOBbOHhYXYOjtix6TEGF9PApnqwU4ULj6IkL3bsAYXl2+TUMIsmcfLPa4qsAdxVD9nyTVdC2kdp/QegmT3POrMiDtTnKZ99qCcI3+BbcL5i2ezLzLktfcBe4bdOJ/CoXpido0efcG+RBbT5DcGjKk1jz7H8jlWPVOuCcwgHRQP6sqL0u95ykLOvbgWGL3684cft21G4cTWXUSi/NBAYMWE9RI10FEjsxartQXTYjv1mbbtwY6uDUoe/V8S4B15L7us9gGl0Za2tAj3fXAijKDIg==';const _IH='df7c8d153b5563c76b16122b03ea62c7411f021f7281bba6ef7b58f05a629392';let _src;

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
