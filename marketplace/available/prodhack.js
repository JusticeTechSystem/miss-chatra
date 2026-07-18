// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmXI4PWlbErahHSdrZ/7nbYXRAZFemrBqXoKEvtJm0a72FPgvHu3PPpctP+3pUjA0bi8dPPa4yk7SVNf8AnFruo/1kAIAeLjkHUe68A7VE9S0IqeqqViLrgGgw9FIyU0U2gkyTOatqH7Zs1EEhe1X7LLm+oVdz97u2OXKF55gHjk2lMi/nVzkhX/eBgyvqs+kUJlwTFv4sqpx6wlm0W+zd3GIxtYKxDNzC/p0/fkBEp+2xDLH+Hoc8utvtNI5znx9fsbEAtgeQGQ46MAJpG8PNGsdPQbb3M/QToVNEIg9A72mbaIKVGTxaV53tQ+Eg7PNbCgnyUJcUgDrk3jP92fgSBcV4Wj7+T4r4uIXKEJ+VxcIUBKyeRCL+RP6FNkRSHlHntM74+hOVZ5vo1ZfK/s/ihJfrN+FK3SRfnoeoeWGC9fXuayRPn/XP7adnarEXcZo9+/8q9pi5rMMMfxmGgeaX/mcjhE7iioTXoeFNuATU2s1PUSl7dzMjLsuC6THMXSLNhPtfW381QKw8vzZxcYlYUrxdvFrMEATSUZSCao4teEn3drrPKMEQhCTXEssdgdS36jKhPM1D8zfuIQKv2UmO7sIGtjA0GYkCPXmNH95riEnBWbn6BNk8pfl/Z0/U4osNksimFOae9115QYbgyfgyaAdcsYb++cW7ZVHWz4zZ7jDOl3S9r9ti736nmBPyqfZ8dnB9yJxFIHI62N08l0x63cqVDWcazihE5lhqGS8NisT75a1biA9EW2xlHeL5OALe8JHAvYzOAghhVfezBW+d6RFnt4Sik6sewwWPQ+wzBa5Xlt1J8uNAmnGuUNePE1pTmtSTOM8YXbqmA0nNv22CGiombpmQwpcdvSd2VgvonOBo4wxuVwhtBeNA//0snOr6AN0Ei/hLWLe5L9g6TaOEnqQE5H09bh+71sxqum+Z6xPvkBoITz7hA7k2/FhCzM54Mcd4oo7SXVZxjDFc4lI9CGSpac4qp/P7e1KDcbwTYN5DADNIcow7UNmrsyyghNZ4YBi/aAPZDUhSuYdQU3ZmEnTjFrSTAi7us9jIQmnA+lXf9gwP52ma/PZU+ZliXNHNpvCAFchN6a4Jdws737GRd+swqC1n7vPBtdw4TwcY7vEK3ycHsQwCZ1RPksIQA1Woj2NkZxGAbecsC+QvqnoGl7CzKWWuKu4Sqs8idA1itpq4kXk+VuVFLtMVL8eb6NrmdU5wBQ==';const _IH='aca440ff04f06706b25244d0e61296d6d4a6c0774185cdf0fd1e1ff41581e11e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
