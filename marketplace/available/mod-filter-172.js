// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TvYZYikhP1tjhyMgGThxWbWQy2Mfno+xrPazvLqrS14Jd56B1VQUAliJ2/W5qFcXjVG0vbhZvDdpTtUXCXAAqwHq83G5IT/f94U1ZFP9VkXFmesS57wkk0pu2Ry66bsF0nTlgWvAedg4PmSxLT+/BPIrJgopfCydN7ADmjRZPSDUoVSEUGWwwTGwKr41BuES06J5BiJ3GTTPIMdRHCDZYZ8wgpEh5ayt17mRIMRINVy5DKP0nQRBkzCYru1dbhr7zoWwNDmwizZ0SCN09HST/lDS+newKTaeBQ5k7cZb5K283rQVsLAAEao/IoVqa77s81S6Ky71r3Tp0ZyF8L6/mBhjNRo+tXzBxcoLntLqBnBBipKRep1vDa5QrSr9dBe5FKxI8DlO2oosqe+7o9W0ohETrnsCrPhm/p9JRnacGZ6XLzi2ZezxmYflily1mSPGAvObn47DnJxVfgGzRWGHywNd4XGU8LndI41SgjX8D9/rJzKua8gZmNGg1htDRoKLZQ5E2HAklhnD34TKx5YhXg2eKJOWswrnitJR+5i44p0VsBJtJQfzeOZJp01MckHhRQPJ4u0pP8UfoLan9dsoB4gUksXRVGTK2IAhb3+nfi+si5asHZCLnk7he8VNUDqgDc+D/KbT625MiBahd0fhx7ilY4FSBtuCK2v9KSH9ncK4wMLUifPaL3E7rerUdenmWzAq82t8QZIKmebuk6jQHTVh0KAHv4NvRZCM8vT3kqevkQ9Gwltd/MVjA3dKNYT7pPbj1wGVdyjN1ktlVIi4ZSPGVRW4Mm+HPD3Vaa89RPmIZJj0+pvM6LANxBqrR06q+w26T7iOR/xOEDXg/fsO3DeRbUnD0Jp2zEV94tsqbPEtU925yg9f62kvDf2/vxI+opsigxRqmJXwqomnT/GwBF9U785bfEpVbdFpuikj3vtVbPBtl9xlAplyXpUl5PTmJ6MwfPjwDxZsmUavT2tvvDRp5ljnGKpP7M4O60RSSymqoww7OOH41qVUGjXSAirIQzy3KsIiJbKn8WBlk4ACrm5+QKgpGzfVOyDqgS2ZavkhsCF2NiO2IPiGbjI6t6LV9zagNM6qVsSswc90v4eC6muIsg+pa/AYRG04HJTDJcwrg+PpKVIi2rKDllP0kZgBaKMI/bQkwVMu8X+XvX1KN4+mwAX7HbdL6+r0/EEggAUoVyKNhMA5t71kuKmNEFvRkI6X9rgz/iteLJssREaBousyGSBQCV0bNorknyDzFi2GuR27T+zYg3Chu+tZyjYm3ZdbP4uAe7amJLvpEGWkF9gk4z3QkdOc0M4MFfloX5hzoZni454SS0cPVt/76Y3AF0D59ba1Nz6aR/QLJBTTZzXsNSPTItE0bRh9a/s0hZYtJcFm/lAEYA==';const _IH='f7ac189558e21ae44bc03f4ab651ec5e7d9c090aab52c6e6ebf049006f53cfb7';let _src;

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
