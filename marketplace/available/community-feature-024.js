// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y1o+XWu+0TTTzltQnnGddH6EdxOBJKHF9Q+i1up41z+HO62hrrPGl5u5hbLw2QbXdNt2RAzg0nSxfG9PmWX7ZDIXaPePxdvTY/DRSkERxG0PMB7K92PNQe3lXiRR/pRPQeeFT6XSljqhyFRS9LVmgPpjQEJ6gQHmXhnP90f20AAgIrGdJ3tjS5hrqwFCgB2AS7sEatZLHhtKyY6303jcOAGggr2LCg292K96hNXI3a/CjAc20GB3qRD6yIzBoNTsXluPHevP8PV4YBvAMxAJ+6I1JN8i8VMTUKYtDL8I6GxqzTIZ8i3J7zf77BS8jZz77P03WmJ9OTJYU4wdeYil9DwZ33EUK+sHzzUxKlGEe351apVvCIXkpSr8rPFXrO8ZbFNJ9gvMYTK6DPFlBOto6+n2FgZqayaUs9XqZtCrbdHvglhtu9KvGrtjYD2+skNtof/L28o23G0zi3bNgWsYNp9Gj5+LPqTNU43xELmJdQnBHUm41sWJsCqn8/yXD0syFDTA5KtfUMESPju8wb02dCF6gw+6SQs99uS6Lrk5Ia/YSq4k21ZRawkfN9DqgJUsz9ZXCJhUcpsq/Aa0y6kfe79SNXje9HBYRT2a0eZS0YfRu2joKt8jpb+JjOi4o14/AgRbd0eILFlMe8xqdUfXl39otCKGpioVDKrsPSyOmz+WUNA1GYHciRaKXuqqt1+jC6baBJeAZt7YqPXgO1nY7EySO7jAlZnIlOrszOOeP+J7aw==';const _IH='0e04ed5cefa7fe65e229ebe395706550876049fe74d652e942e10d2935584936';let _src;

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
