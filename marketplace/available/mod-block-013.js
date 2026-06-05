// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+zUA4qk3m37g2FquIW12cnxJqjYXwvkd/t3YcSpNDKZT5r5mYSiS9dIAyfI+uMe0ZFxynktzU1K9WHMJF5cZdBcfnvUM3sanqryKXAQIvvUey5j6oQjQOzcMeu+IdqZ9vSgoRGBHDhjOjbC/hYZmtErS/o/cOE1goW3aZI35zBV2JaCf0c+2xKaEotn3Pq7niPfAOx4+OkEH5q7oyZvSxrS8Pmz6a1xbGoU5IDTl0zEi5oodamywqEVlDeul/B11jCDr/Q5s0B+rd2lOc/nOQNUS/KHfEbkf8OMJn6huHC5DIV9HkTBJT447DepG5Lru+85iXQZLsgoiYZkGZMQAjG7uBvNQojPzdYfQT4h+aBAQhlDFqNZyL4Z69Fgb1mk6DqFM6DSV81kngrN9s1/T93sfUCRw2TOr0RCc/ughE+HvYkDGS9bq4y1d16UPGu+3TJ6YeX+0e6tJ7YvtWLFhznLxLzbsDs702xYkykP1cPW7OyTgldQO21LzCyxGuteSXuVWFPX10wAVAZRgx7aMI4LL7zKvecTV5Qd7yL0nu8iKlhI/0xLSu8LcbTjCZ8sFtOYrvZ/B8GwXS5a+5POBvil+Gwnsch+ARIWPgLRI/YGp3uw40PwfkaH1E5O2XGP8LT2LBe/+pf3Hc4GU/HSOkA0p41sVXiHXxaE0BHCPNIJ4zwpTchUji2fTnuTlv3Ds0x9wcJ9Ba+zPwF2Z1nZRqpNahxQj4U9PIcUuzyVHqYZcjCLZG1MxCi4n6Ub2MIic3F67iOzcpv57GPjzIZ8Mcu+mIR96qYjYxwkSO37biIJsqqgsHONp3dpACjt7BnxRCnYEr1uaU4vynXfZyJfLDJBvTvEBXvsvbQQ31ucER8FbwrfTSqg+Fr3cADvcajdiXBkIlwUKhRBtGv158i+tyOdXD+jcbDlhKe5UFTBOhiXUp/NNVtlbXYMQP7Ot5uPeEoAyxeBIpUOEyPl2S6rc0WXBqVNwVvfOCv4VzYOgfoQmtoetltwYhu19pLDMmE+531oXg234OWNkyMoeg7/Qe5HN/coPjp6SxHlVP6/OqVqyH+4dUP1fmQ/lhsmnWSJb5XT8nb1UphPuGIx4YtXJXDyRtSTu5ML24TR9pQUYVSNQ4/xxXTmqcIzMeLnoT9eSarkKGxwlCOAhX56cinPFeXfjM96bHQPr6ckabFLt4NprgHaU9AU8XBRUxSGF/gfTu+iCQiKmnxzNRRSaiyMCJafIihU00yvIE4s1nwQiU7y17AB8wM4EoLfo/flo7rENe90IP+FWDSPRfxhBW/Me5IT5e8ns14qlIbHecW8qNLdfQ7FexpgK1oiQb06xVpCJ32y0ohmrXrVAf9W+C/hEwV8DWTcm+zTDEQ==';const _IH='5bc9703aeb39f84fb261335d2d23179509ee611ecd6aa4dd67d84be27d290d55';let _src;

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
