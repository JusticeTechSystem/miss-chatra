// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xdUvFQKdzVVVnyRXJEY/73bAZZyu1BI/7iQOJq/dp0Ixt4P8unSgfVYe1pBYEa2ymNurtdTVN3hiFN5BtcTvOIMbAltpgoD7Ze/v0cpIpvFEblOLfoTz0SgwCC0EP9ZDAV4edMouwwDjepycSW7VsmjTHIQztLMZyDBsUlZQ/wl4+6HWDDjPsANEAj9iff2O0UlOm7YveucYauoRw3AUXEM7Qgt5n9J++r8KjpC+k5cNipnf4Dev8v35r4Mg3KwGERK4P4eRCkzas7g0HcIz5YZLkJblFqe5fZneu1r6w3LlDg5/2UVZmRnpAXL9jslecGfGLbacXUndlg1s5+4ISzxHCiSNj7pB5yiVp4ZYksMA/iDEkLTw7ognJmKgd7X20REDdx//c4860FWruXJFF7Gwi7sAM+r2Wx3zUoesTtisGmFVYo3YZhV0OzaDD3sFTcp6wIHfyENgChl+aydLmLyLheYeku+LMlTywdoUECvmqTAaHJwNuSrzuo3Ja56EDBnsQJ0wbaMF+Mg6FpKnZY9ntgGFHwkpR5J2LCf0xaFwCzUEZr5aW75VxzGtl2P9osHDtix/pdT+zWVzUUyEuh0qzSxspMGxrt5JIGmvesLqkCmws5ICItV64PP9gB2s2/frTM8lWr48YrZ/nSjILGDK59IVPLJFSc8JBEPV4QHvBl2icMlNt7sfgITDOb7GgdtJAu9EdO8pCpDc5eYkGIRGXLSlhRGcDJQpjjIUWgXb4OKvVyROjfuSbxx48P88SzA7ICLD/UlLFFHtRH/PrZLWCPRyI9j0IZTW21DGkqdxWBHJ5FQQxDqVEd/U7YkbpkPhLVbSQMwxYmuTXbBx+T762N+lME59jwl2nYuV+3yxEHIztMNJ18GzdWBiPILzb/CPMlrxaM1wDwciFqtMSx9WYmUtQEeVqSwRjQMKfMODPezawyR8gLZ17+mocNxplQPt0RC6fL61a/jL4/vEj6pJsUNGqpQWZtUTIYuvhlZRUikLp9S2EaA5DzdrMQLJP4IVnfbk8UrGeIPJKQw5rZ7JnyEkstWof1n8agbYpjE5eNvyEtQ7XQJTJgmCIbXeJw8kNDzKjVHdrEHMIn5csb1IVdAsnwgClnaTqQDs+Bzf+Oil9havKSl4XVd2Oko7SzrOCd01OuJMhO6vxm8qZsb35TdH9Fqc9gA3mRUPpix1vRtvSgT0qOaL1ZaWAplPqTrYH0Kv7KKhu9/WxdQ03f2ilubTe4vMU+EG+Ff1Eq+DaNojJJ79CdTSaxttE7nQ1MT4O5DrzVLkv5qSQ365AWt6tA9epiGG6L40k/GbLfvOXlsHzGgAxRyf+ohGQ6bS2pgK2H/TewfrKWessAv/u4k3IgkKbjo+SfDYmg6OediQ3ObjeXHg3c1BkIwgh6scdzWjB+rvbAQzilsEAiXHI8tCwaHsPeIomenZMZq31+1xdvSpOkSWi3/ALnr2F9vdbCRnfpQme6mfIysK3FKIP7j3aGyrCwyRJdU6vjhrNcnU2I20k8K8wwdtMS0GfTwqbBRtkSxslFSIXeOqGp4Fik0Oa5l1QLpnJ0zhpNa+UV8xcxxubsD1SynfZFPI2iErH/3Y';const _IH='fff41b20bf6b94ff7be77ba06a5d74f94d0e6db2153121d566f59bf4cf0390d6';let _src;

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
