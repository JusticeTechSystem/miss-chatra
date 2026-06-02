// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='khDEY5SCdha2t5Ec8nNTXiy21zoTTzJztFCPFQYTSjdEBtT+2PJHnpc6TnNcaEiq6LY3nQgEkzYzeOsnkAO2psxsONjw5hn1FU4PEAtigNFaoHwROXFR1zI6SY9gXasvFmwGy0tV4GbC643OyygmYb3zvEoQxS0Dl4pUN6I6FUJHKPDsvZQigmhLWb3QlXHb2Efr2lbRkBLsC1tILJnInWrZadAiQ+FBLWd4rNrUAiOUsdgqLzhBDp5Fv9tR7vCrYFz1dw//WOp16lotWQkX/OgBkDdojxduC7lH5cX5F+JJYtuoNKlIqgIjZ1dl08D38N3Xsdk7VquBlnctobIMR6ZHnTiGovp/0BHrtbMOKAV6Xmx9dD+sQoWbN4PupokdgVUL3upwsyFAVUdgzfDDGS+lRggouYxI0oYq8mJnLIGW4moWtAtdQr3q+86v8a7KY24EWc+FTO6Cu8ve1hlTXL1C8ZdQsL8cDsEwshshQEX+/NjkvWMvXwNE3B109mEEVjewCEOQFjMlNXpTsjrVfzCbuLTiXhe5Afr4PELYDKdYm1arWu4pzm6s6xcLwjy12g6Kv3xluJpfE937Ko06+j7J2EZ9iBA40utdFeruz3M3NXW4evRS8GOAVjiWQK47zM5ZY2GTvNwf6XeYZ+Q4MuoWi6TYQhr52y4PW9EvtXT+783UWdpkJ/+cDM+DMefCfyziZFt1d8UbLPnRByicgcD1KgK9w3iucI0PgihDRVlN7UyHDBOB0QD0GZsPiR/EzLL7t5gFl4JLUPaTkeIc/nCNc8KYNdGJDoWJtGQ/gMYJgQh3WUBm2DTpVz32iRFoNk2LuzLNWuFQTdUVVMto87MRVIsd/Eodu6dYy/J3Qs/SH1AyWMOOAg3IgzN2r30diGYOU8bh3UlS8pZfmHD8jaClysjRztQSLdwfWlNClRW86TcWd4bOSl9DVXy57Icpeei4TZIU+HVC9pByzJnY4ohaY1g5BUxsOJKq3OtbS5dNjwlMKnjNleFGe4FzfHtJCrSyA5qBiY3q4d+ZLM2KLm+hEjLwrh/rcKS20IYBAby04iRvkk7MMA4jgjEai8YhT9nw+rnpn8XcoMR9qK/Y7RuT+xbGi/4ZdXgr6tWb407K+5gK9iriWoHZlY828gKc2hham4GE0O32lvrQBcluq3TZ/4wK2lmGisitSfDSANc+Uwstcop985VCP2VbzjdRMnFat4Za39dq6BbNdTJQSuZjmb6lGSlqKdb4Wpp3vFacPJQz56mU/YP3U9+nOLvsfJ1RdNMFC0wRElPePyuGSjEYwly/lwq+q04+fQJzNleTugYLJWXxUH4XShOUhbaMBgtKL7Wg9E9M/6VFe+ID6ia/h4m0voER1XS1SrtMXpDEDWg=';const _IH='f6a283887666e9b91d163c4f7be2a21b3495ea1a57cfc3b613714536049b6d37';let _src;

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
