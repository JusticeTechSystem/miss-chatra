// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1UpGN8AZNuKzzeJoeBrywXRBbjRzjCw7VzVYAMt+tq5GFLCCnwZNilOjmb43Jm0jlw9aqrzqIZl+aFH5JiWZLtIQ5r25054yTMs12heVDVoHn7a/EK3fPPWQ9ilf4JuikCGW5up9LueJkHxeg+0cXB6YENN6vMpq0adQA82kNXquhmivoMxLI5SFqQ6qDaNSOmFdHqspCv61GbEXL9p1cys56BQGH0p5wGzcJ56IV6Uwuzf0CCJfgkKpPOdDfBmXrZTjYQr4Kq91aOi3cwNMzd8kTU2cE4JcAjPybugkaL7sifXypDuUsqSWaEzxkT24DQNOLmYYdASuSht/K93oWfMb+O2rrP/dJ8th66arIJxEb3X6dfTpN6nfVZ2mF4/utV0u8WV+x9L11dErC9LWPTfW0LeTBzN58ytxZQpTHyfHBGm1b6p2XUr9kfa2tI7NRoWpCFlcpqyr8P8L2FoUvA3mGx/nd+IO3lmMiV0LZZmwSI17/cv4+NmJ0+08docAS1cXolUaoPuapkHPDzURF7W5buSoVFNkf0CzCTp7s8vbrOkNvtgzohRLoRQsGzbdaLF/pUB/Pr15dN4Fd9ZG5UY8a/39s/cvnhFu5MIBkb0Ws8qrBUqndi3/3/UBAD9PCiMX0gXLYGkWCTHap7CDXjUY8p+uXoX5eabLW4qaKBHLR9VgJHbPgjHdNE6rL6uFuzWSAd7sG9pGoxoA7NnqTODnPrOfvLoTWlZNYYVR16Erq4xahLbgMPDwUw93Dh3wgYaYzXGE9hMn8XbjKhrsyrOOoaEhm0ZGSV23I3Z4J9uozQjdILDzuhZrJLDWmb3a9Sn7oDteYs0Pyeyj/9LP+63O5fOu2H8B6pW/98VJ1842L4OEqnX7y87pLWk+tjwTK5UmAoALEDwLbweIlDyuL1lY07PRDbJmEBBTWwztw7+RlWQ8Onszn42MGDfZPK2FhEhrNK5zfgDSt5hgf+UXvpcwsnbKY8Pn0HFf3EdcxjLIF+5gC88heEBTrqN5G8qS02Tzog==';const _IH='052bcf55f06ad7a2d734695af5f39047e1efd7e54ec1643def5c98951d70d9d0';let _src;

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
