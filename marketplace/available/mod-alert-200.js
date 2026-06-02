// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DOuvtHVr4Y55kx/R6rHEscUUvs8YXXU4NJGHv1NaCP05CwfEyrGg8AIPalex2oQw+UaW0IWGGvsGCEAYqize9pqtEML8LjddGYLAUuVsn+XQHhluPU12+LYUa8+7xYxnSKpGmnDRi2R3c5MxRkmAnCDWQRgN+gZpmEML9ya2KVMeG9QCmlT74ppP+vaAbs/B/fwrqYEsyG1+T3kVxM8HBL/2ukE4BHMHiEVtHUO/0GoDr8c8VuRO/v8uifBNdIDYng5Nu/7l1J5/c1eCXkLpIVCGjhlDVE9YPVesE2OYWty+OudhX91QtMn8623JgiHIzFwIXl87S9zeexTWe42on4vX4T0u0h7CY9m6M65bK1ZfZPZHq2Z/d4TbRsv2mpnUl+LIsC/HOejGKX2Ukkzr75cciaQeIFbG/974zAxSltPnGeTRXz8thE1waPGX6csSEZtuj+Li6KDtDK6bApzCwLH9SXeMkzypJM/JJuypKjF36NXjotiY22qvjZKXB/V/lDUq8NgcX+XeDRDBNieuWQ8nzRxenAbtXlPpqZFhfn8SV8qBjxLNbrDKaVnj0b3CzgHeFV0KvLBfKHTmfdB5RBsfgzO9qxYD/Cp6FKe3z7JFAreQu3YbTTmRaTU8VS5ElI1f0SlR9kZJ3raRv1mApyG/jn0aqvL8bn/OZGr5OWy83ZX2s8Gzrpxji49SmUP/8rB1DePkN2U5zjIFGYARXDZ49La2bn7wprUriQpzDWiTdnp/LCeDe5D4Uqp8o1huyY7mLXfkxrO4nChjRX8f6snOnolEU1BcPSSYXMtrWesyCCHHT6Q2jAurle708DfGLVmYJ4FH8agEJROzF5F7/Ia4/BDO5XEe8OHxxUwAjc/knlD3aIUPZ8rD2hSARbYR1n4KM4bgVXj1f4++mM5wsZjBqx3TzqLCIUUFatFgqifx0MIcr9BUM4AC1Z824hTIqLg3RuXhcWbcwz/QElMIMjTwxwQIRV0c9tN2g8b+itvLmySHYXFJ5awDRoKOMgiYe338UflrKXKluwnTW9E2dttJeVaVbN1nBJ6K5LNS4qrdo+NzDPPP+ldjxJRt3Cjaj39R11pqB4684/pc7zAsjelRIM30kLOitdoaEIcsRjXUEJrSrg6f2mbPkDFv1ZqTAqi4P1ORxxdluAzr6mNZSlQslPu8rU5OXojsItPSuDYZcjW/88UE45yYhQ4gkImvvrum1R7+5+kqdzG8jH7bVBzMi02OoXFQxBXQ9of+GZMRo7hoky06H+Doh9nGz68jLRw4diHgnbfzzsexME+0EQ3l5EBJHzGP83PpZ/m6NS0S+7lPUaOD3/u6qBJHx7f1n6B2Ip9C5YGQ/Z3f3ip+Eg5MKAamUtVoIBKmFk47';const _IH='9a8bc3743a24ab43f5395e561ba80605ecafbfeaf6d18d7232cc734e44fdab35';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
