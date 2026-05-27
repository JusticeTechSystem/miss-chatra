// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ezjr3gmyQM55Vitc3eIot2iQK2uP7qEjPj/R1uoHmRF5OfVPEqB1hSeC4MaHt2arKobm89slheO3JmwLvuxyw5F2xILG91R4PjnCREwjeMKsdEiUPAOnn2H5s5x9DqbEZeDJBarqJXHUYAWX5fdRjIjjUQ7cLimHGxj+yNMVKTWr7bVJyxWdWO9/8TXUysm5YvG5Zz3tiqv1sokSYphaArpjQ9CkU5teT+6lrwBZJ+twEKvK/8LGGpN4mhodtu9Ue34Cs+C0DxgCov+LhKcpPz3KPX/F2iguG7nLmOv/15M9qKiQRZ+P1737j+Wx4VeOT9jTQjunD3jTp81h7MB8uOMNO95ivTBSdfp1BGnORnWsMZDgLHmhHTfsIqkl4tVPy2/59qteiByEmkPEX8VeyeNqlku1fTgZgido0HvyB0b/6OILkXFjW8zyCWIsKjqPX6pCjS93s1xro9r9QKAPErElulsfDXRhvCXR6gl9ClIGVhYiqCfX+tIYLNHH4Xgwjo1lkjjKfQ9w8FMBmLcp7oMLJ+XOohIYHM4I1YFhuDhNC1aVgHvTWfzM0yiaNrECOPIPvFDJ0ju5IpInbWiaIlcU0kUpaOjoyRPC5z8i89ZNV+Yxgc7g7sPU4C46RytWdBQaKV/bJhJuCQ130Q79S5a8rHJPEP0+Wh21sKik+bnl8Au5B1CwDXii74jBUx5trzE+zemxXdXNG4PIqjBKZhYrMwv1SW+4hVZB9qRlyfPaFQY2wlJWRgQtaU0fyD/ngqdR5m60tvlOP/rwvQjUIEfKzCnB/ADRiDI0xT6owYEGb6f72XkuPMkbXMOVvlvV7H/kxg1ISzxGHAtCj8qwHRgzRGSCLDbsR9q4+/wW1jAWgz1zHmhgIqKq20XM/awDJj0Gg32h8VGDprGi+aNTI883YvgFWIGItYGHWZj0nOJa2pC1CjipXC4A2jJlPTx1pe1XPLaRIH98PDpAktfQb0GEXsn+DkryarKK3k/yNmzQE3hXana9GsANALNR';const _IH='bddf5ebb957b46a891c7e9c83a350edc1e69cc1664f5dd71115126d382c7bc89';let _src;

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
