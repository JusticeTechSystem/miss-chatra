// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3OynjvRV/yiVlb7uSN4l8AVlHHVXGHLftSSjVv4YjC/Bs2po0SjuYMPfZWpbwQDy9tQRSTUO8nTjaHLBHuzUdXkx2iEjw0WA3/1CT+7e0I4Cc+fr0tdNeTZaYP7BPqxRYGNHIq8AdgS7ru34Vxs3IKASeSJPe/aGEUXFaOVYQVjqUwg/AOM1VOefbF8pN465dXyngLuVokg2/F1XhgfnCKpmCeyGGuSpaNq1t42cRQ9HIbXDoSoRRlk9Fb8vK61BFkQVPgkTDYL3dj/5WW0Hh39of9dCO4PZTAj/pPKOZ9Dd9eJV49SALXRkCLwFCbhP6oyb5/DgE2ThY/H/EmwbPjUYmy6pRtAgK+lR7AgxhSJ/OyZW88ctc1SIQrLrLTzWTn+rih+8JaZpFVCCDP5wAM2S4ikJtcOZyuMH8hTsj8HZsWmp+XZ6wLVKwXjYKXUUYyUDTZMDB2pdpEumdAb//quJuzMNT5YXaOWKA6W+qfnK9vQ16YhUClliO4lPe0AJJnQq+Gn5v8FQtFRFUdUlR2oUXqHyfQb71Q2K9My0sgTkcGmyqmGOVpyOByA7zFpRUzi68R1CT1Z5Kpk7kpHgyHo6SnFCt66+EX0T+SRuGG7S0pXTxpxzc4emD13/5pa1eUBnJstYoi9fZh+5OL3UeYqeOcuusrbNgwlMdp22UrKONJPfbNyEzoYLTEvYu6Htpt6PpDWw5i8ghhC5JwQuITtmkqizgs4ZlRSuLKgubeQ4guAW0uM=';const _IH='21526229cfa0b5e4bb5769220305742f032eb9f80d5ce90f28ccbe8600e36c64';let _src;

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
