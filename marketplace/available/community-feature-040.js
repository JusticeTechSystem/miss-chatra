// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xPJa33+RJZ6TT7grZn0/99c6uoJw5uk8wgnC3TiMmVfGCoJx6eYusIXpoBLA3ScxHUTkcrVekF3J+pn9AD5KHqTNSJ1TD5UkWqI7LXd/hi75a7Uxf3suhGFKoAJwSOV3ld5n18RGJo7E/4geX2tQU8bXDeyGzB8whxAkmJsBVT+oyqS8AhDMZDbufyW0ZXbBkyRZjz98cvE4iQsbPB/h/h//2mEP9zEalqKH0+hdvNI+TWz5lyO/K+KZU9WAgKw+smKggUK+ea8PLu9UWhWuc92Hru7gv2D/cVVoVoAZL1/eEfj+dqao+A0tY5ZMmQmAxsigjpRiSveFRcquHcKjeQjuTq+HS3OY0MUzKjfATDhHSh1vn5JZAFnIcnkEMWZb12S/F/oqQaCxZ3uz22pK/iguC1pdtKyp7hgkQ+4j88SQa7RfAo1FmQueudq8qUt4cTfE91bNZE2boUI0K/lNwieStt02trHj6naGflhvS5sH5wO0RZMNz5pyrGUfNAwtpizPqk3n+rcqK2gGpIsLAFuNZFHK3nkqkWTsAJts3JkOkV4a8q4pVTRx939Xps4HooetK2SFf0UQe0q525MkNdvAeWakv/kpInoicu2NLOKSUtjxJu1FM7jp8QKBntrjs0whB4f60CxdCRApsEnU84Hm0yLq6kuv0VpNiTFcdDAqHYcPkbSuwfUnSB0nWYXdFfEupOOJgvHk/cynzDHdIwBzuAKujrkUenwUdQN5u44lfmlPMys=';const _IH='9a8567dfa369efde510e0c101eb6d17782bdd723d2d1c7aba17ec9e2b1166ac7';let _src;

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
