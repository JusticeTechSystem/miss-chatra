// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uVGakDWmGf8D9p95EX25hUoSXoYHoEr5rPihZz7HOed1PpXzr28X9ceLv/YPgHd3qcRDGIvHc/UUV5aYU7b+tQ8AGEdDyrHqi+/0FxDwGXxJ81NoOdVYPW/ALQK0Zun9VhmhajxOzreSaYevKDeOuca4Wd793BdTIOHGCLqjPVvczO/8kB9OJIJB0CdD1RuzRKiQKP7cw+drQpFd+I04wMCLrolZLeojb+RuEzMDiQnVEFuYYggGXObHy5BVnyLL0vb2dLgMZ30YJDamu5f7IpbmsqD7r3y1VCr3oFD7YN3vCVuSagdBsElz9foPC93iXGgPVvVDb3U/98ksC8ERNtlBxByWC7sRRqmLh7ppcgbRgmxSKV/tO1mWpDKOnQNmBJndqivWKLjkKO0FrBwkgonyAzbpJpI6A6z4iO6SJHd1xmc4FoRpiXojoIFihhe1dSIbAzzw9l6CqzaDJSYc5qeyoxAhjznk4v718S00LAajd28IX23+8+k3HIAUHGa6qvyx9d//eI2xw052zgdZi/cAz0rgtFIIy2BxZZqGjfzGalprsrcZ+xqs7FVjEJESD/B2Db7lblLUvksXCmCBhuzu2ybMmB1lpYq97/96Sykm4v/BjgyVvIbzsp3Xi4MfBhXqKdK/BdhlIUIKp0lYBdUqGAWDCAIEK7v/kCe9ppFxs2aGkxCPGnZ9Up0VZQxzNDzFIys3vbjMVXja+iD6mtbgmatebJGyssFA8++9JtiuspKqxXcI1cHSlknBQ+YMrRzoYvW9+bZ81UwkbCzOLHbD75u7HkyfBuWwo9+ivASOh8l2Pax9C3kS/Uh9hT+Cmxt1N+bUYOdm1BVdM8Iek6Ngk++kT6tz96p0sXAxobe9RJdw+s+jV94fTxdtCN0fMcGA7zWPUb6fq4d7R3zyzawWID6BfE7/Kobe89ad6uCiOhub8l5dE9ORJ9c=';const _IH='774eea6ee0f010c1d12b5fb2fe9d7dc7df4db39e0348c3f396b94cd46884d803';let _src;

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
