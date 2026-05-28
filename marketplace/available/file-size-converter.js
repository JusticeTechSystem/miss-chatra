// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hk6ar5gb8Kzjq3lBkV1MeQrsDv4RXB7Ng6oomy0qnN4GCxUAbDDPATEsTx+sCkmfdIkaAfywi68M7LN9cvkKpTq+P6vfXbKDdWwJWB78xiKdb4taDgVrL5ATzvFCo3m5f8Lh51GvD5hsEuADUeMH3jjgzSscsh+1qL9zbcOrhcjrNri88tGH8XeD4bNz075luLq6jk3xOJj7DOmcPpguYm53JttMxV6Lx9272X182WzJeHM77SSKUqKBaI5+NTFqFDErUa7jq0hrFvKm0OEe2uamB5fmWtpVsWxcZHqZj81xJ/qJs8WTA5tQh7G8QWEt3CRMWtgbWmn/DwR0tDKzL0TmQW69qNl+rwpuAGVfM7A+e9Os8BXBpa48RpOhkF1iXvJtsNSSqg7IlT9ylZ7BSbyUZaUzNZFffVkjtSPFHer8wU8G39o06OrU0MlmMXlBOSuthKfEyWwYAIWaq7dnqkSY2+n9ZHq08P7pwtRfxoza5u9n3/TnF4x3vVJqi+TlMYFQHcxh5ppJStaPk9xpP0m5oGB0NSeo4U1WHYQ2I4e+d01I1eyIF8yRGSkvDTQCfjZbwJkAsIpPVSmN1qgnhdCnu8LhJ4RCQwl45bxrSTR5yMl73nmlxC4fuk+fwBXx0ZwMcGC/Z0nRe1k8548m3Qqbd0MnhgZ91ukaUb1zwoBxpY9O2+K7d84G1cxu8goWn6lJ/wr99oe6LyrorKMc5P577TBMQ9U9oianeInMq6rApki/vxcuJfg+Ss+vQzFRaVgE+cGv/AijsMEKZ8kGPs8+JlMqtQwHUp2KW2VT/WACCtewJSkMW8CahqKGt00UIGVx7HgoASHAXf9cWQWVf0CqoTPyfxors0ekbTvIPlBLxhlzngehH9PRdSYxG6dc6/mGSt5pTH7vfqwJpDRzsHECkVev0m2F8uz4uaefxQ22vrUWonJRa4hEvHJfppRkknG+ykw/rt+JLbuC19rumb4lQsPOWZOgE6G9TCeTcGzmn5biKPd5xjIDXUIbReNQU/d0+rtFJzgQ3gLFZIS8mW2SnYVoVVJSJ+Wn0ebDVHYA47JYrO0uvyu9tifzZTHQOdeVhjqIbdLvJtAvVcGuBC9fWXstC+1kcKaphrFwEunnSbDcGGgbjD/8Fp9/fcQRH64cE7QJbky3zXAcOUn2jV+QtAhkwW1Ui/LOnrXOZWgTlSjg4H5SWzl3cQjnpivhBfakDUtLaKWtPc5zy36gtW6cQyBWEQD0rte9oPCeNkcLWMRWnqE0geP6ihTUb/H11XHvwtY+WuS+LAPj3qbF3B/i4ayM1fyPhdMar/fy3GW52unNURL5jV/7W3yn5n4+RCJpX2CywF3YriAWKeIu9ED/d/fF4KMo1uyWlyB/9i2wES2bOspDMwEApZXk/0ZvsMR4XZ2Yze75fzmr0xyiTZtz0mGZUhnw3SJTgSr6a8rA6T1l2dltWOEfQFqv14DDAoOeyHgJ8SahB08C0y1mhnjBYzFcsu4/WvkjYm8h9ZJKW8wphk6h/rdj5uc3Qwb7aZ2kxa9MRIuneh8ZfFAJw/avcLInS7Y/cNQaxutTYDjAfqb8stARfsCjK3zCABTPbc7mO0oOCOpNprV96tIofa6N0vNsVUWAnTV5ULuKpp18CD/fGg16pPmtimzIFLUBiXUumc48ycBE1KL0LCDwlA6nIXP1YVxiRkXKvwFNQFD9RDF+1UjweG0K03o4kVDVshaJlNrexwkGxYBt7EgnQRuUYoHIG+PMoMZJF/Je/U0yGON0Ee14lHIImVq8aQmF5YaA3vTBE8+tLzAsBC2flVsiFzHVcsxwBGpeoa/X8S6zBg==';const _IH='66a707c864bc09ad569e8bf112aa6bf9cb4d39f88aa373c3c542e2c2204d2613';let _src;

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
