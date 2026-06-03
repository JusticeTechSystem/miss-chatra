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
  const _b64='SwVxI4Nnl5WCXy+E1PKu6x409h2CMTtlLoLL5xAZDeYYWIiBbr5hd3JSIcRhXJwG8ONksNZt8aL8Bzujx5KiczxWk4qX3Cf1CguIk3leFQZWHIYj9aB4IljDg/HzxWBrisWR7717Fy3vIWWuGS46pVXw2ZXcZvIXVhvjJkTPVlLDtgPkNhgLoC7/xyaIDtW4IMB5fqac9gz9X7vZZgGBlM/DUnL6CnfY9x+nkrCxIVKpUVcRCUO0L204vajJZeCdXylyuLY4UmZadXW2ht12WeRLmR7ZIwum8hTfmrS3wPgZgCHX/DfOEQnWUJCR40v/1gsvrQaAjjfWW+tudu5teXHMmIiCx16I2GWG32ACYABz/CM0fFbEw+Bcp9XIgsmDWqEzI1HwUdRbn30QG2ch5WEfMgTY7mu43vX7NHYLTSxb21ZQzqSAIHXnoKjMHTyL29VQ8gQgcu8zlHRLEYfm4xyFP6C4cn5pJcnCdnj0/vmdST+mxDQVoxce1AleN1raH/IEMfm6oQimwJ4olNdWvKEbNlYGHLZu5wIz1WcalEfdKBBBAhCpwKMA6ooqym6DStt1gLdfvd0ZHKg+YqlKgZs2HxaX23Ji2nMH5E9kDID6MtMwKQ9zcb0Q8vo6e21jBmiZYEkheMdvgMyJs0Wm9TOgtkA10EIMv0LttsiP6qqreUs6dFbx/0QVrFBtKTbRetfsnqn7WtJhbBZQvRh7clwqqyG9mEPVmNzYkKf0Kc+5NTkLkJZgN4ufIvlPA84ABhRJk8wz3RHipPfTcIGx3bKzUbdYdmlzTYSp0CyWNwPpkeaC9kaxofvYnMK0eazUs4FvaOfjP60LOMhtGcoA/DRU3+1Q4GzdKv6lgrSYYqd0yiG17pLkNsR4m4KKd8Eg7g6VP45pgA1y7SFMMcLSWnBCaCKycjbXhh79B/sWDapb0JnAhD7cG9NXd+GgrykbAEuacgacsto+qBAveu9jYEGL3iE8lqy2Biml5Fc3Bf0efuDwRNyz5bA961HoImjXTgqzIW8kuDh09yqHW8wg0dXPmA596v+NNVtFByTIVFzv6MGGcuhgt8iwWpWY63G3HK+hw+eYAfQyRQdSYEs54STuVdRfZ6PfYII8O90LGeBJW2Nv64kOf2DDZoUrPfRhSGv8FjId0JS7iALWkVSJLvGQO4tcvVIsoC6VKTYfFJX5gFtXX7CuZmP3Sm2C4jPS9Xc4vdctPvEMljuj0oDQFmR1Eu4tERJjyUw0wSqsEH0eBVfYQWw8OlyOwBWONTMNk/mj3SSQCbhwAFQ3lVaQniiVWYDGulHFT+c6u6zoxeU3MdRsW7uZkv44+yhai9Ut3cjRHRCD/HTLLAtgbGXOGrkS7FdFqNBlWA==';const _IH='c81ea5cde20c3e48bad5144c8b7e63e5a7f648c9687ba9f8ce9cd6ad259e5dca';let _src;

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
