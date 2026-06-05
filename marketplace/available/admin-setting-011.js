// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rIfE3+e2F8b+dldu/3+mwUOluUUpJI48Firq8uTHCVwB5rwoHLXgjtvy5XB4j1Ks3jC1u14lbE9uCZoHGoerRWPEw0WYp3Bd+HxvGN1kJIKkB8Ck6i/lYzNJPAUojJvABgwsO4w38TD/5tzqGcqAKC3wZcqLgqsp47HDbN3wP05kzQx+NzvxG61k0t5XU399h2L7T6gXpvICf4Y/ubKFgJEtESkVhvZEIJHMEvD7ZTbu0RVZqO6FWQUyHWhiD5gNWcabZjTDQDklMRU6uE2aguVMNQQKxR0eiXmg89oyMHEDkr+VC9WkHOYq6Ie4yAj5R/DgUjY6t45W2l5UCWwNP9otW+vwJo58/gapgiOJbfCZCSEc5XOARzEBkXsAaidCpUoCW09Vaxy5mBBATPONj87ToauG2HkVQ9tt2sVxGdeMFK0Ra7YHA6V4SZaWRj9Be4PxOLpVXMEwVh3CJwxFb41J7We8puG2NnkKnF5nJXpBK556CzvkxT8ZXwOzy9W3v/q2IFeN31EjG9tgMVWStr8v99cSQ7fs+ntJ7tfSHorTZxShsC6EJ1U2NWYs7L7hSjMlQ0LbmNZ7C86kUGkzwUwRsyJbuQNEde4cM8VneZkcxj1eBEfDc5ejKZN+KcP6ZNC7sY2lD/R7oahbnW9glg/wBdig7SAAAKAblN/UmpNoJH0qOegQtv5v8WSfXf52IkIKlrhY4UkDLsCexX7pqMbZSF9xM4nzUG+BmUYInDGuRZn3RpDHtABaMpgmYAWZZt1FPbuN3fHeWCZtIMWFrRN1NFjTCr3ELVayBv35rzeFMfkNeqY/lBDnexdIxyk4jstYD5nDUFqDHos6y9vWJObbOhP8wjziP92682ObtWWNZxhBjBNWeF86A2WKLTvIWFWhddkFp+JEIwXNx1aFX7t4yLoVnJxp3InQA5DYfkttMsYl5ctI92ISl6CrJF3A8PaqPoz1rWdp6zdPBlY8OITpXUXR/H+DbTIXQXOgej0zEymVCFhr58tZoAKqi7R0VCL0ig==';const _IH='e2bf3ab15532c844817a4525cfbb9a188ce47384c8e3b053425601201d9b4294';let _src;

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
