// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q9qEBSzbANFd1DyqnZDMQq3e9WV+hAxo3VdjL7dnrnIsPlGlyMRNkPZEF7qKkikF1DL/jkTWjHrLbgmuxnjox2YQVabQUGq5xY/ot673FtFoK5EWx9pPB5SWm8HM+bu69trVRg/81SPxnRcIhZajl7bPtJ0+uJBoZf9v87awxVTBoVyGUYd88i5PbiSC037+DMOHQ9JZGAdEa8FXAQA9twjI0C385thk/GDIgc/HUtIxjL+ZC8QfFIb1GCO8xX+v2eTt2oGFWR50xaAlQ6KrLwk7SFURrQ8A1Ib1YyaQP9cdx1HChAkT3wxdwuTWM7RIskRGoBtpVq7XF7XEnF5URmL7qPb4IKQ+XwrApTsnL7htivXSd7KEbiorKTC228ZwvcfFSEPXG+Y+blz4jQJodx/eU64VO2XEoPZkcNVIV/GE1tAewlhcspaLVNBsNPDknxF06LtUpZaociGotQ7LUsEAN/26ebcYWC1RPee8aMHEffAMV4xrFW9OceZf5RPBLNxtMJ1NJ1Z6d2BgfxHmQjFJFs4l9MtrurIBWnxfH6MoVlR4HbmvZk7Ej1tfa2Km3r3X3yCYzceM5wN1IzbXMUL9LhoAffQASYhIuDvpi4OXtMq0dhMyx2550JQscfQHbjlV0d9QwqmJ+H8bda4IANNcq4ETMnnMq58xdw9PmqHNhaB4cKvps+EltZD9sah90wBekFeBaELZL8m9AqNjbnRxluhrWo2TWnjvSaHPddKtNGdQdkUiMDF4/hjjXqZiKLHs0ZjZ14ORjJqdaHvXH37rr8hn6Da421vEnrbXMcjaqyXXuRtv/g8itwRnV26VOMX3rXYsXVZ3svQ4YL0WJGlaRfKSLSxJZl4o8bUNCI7HrNo4kGqGJfsqwCwqHzm+PnON38jvMwTsNjnI6otiqzgOBWV3bqg6dH2Io/uAmpxDJNVLFqri9ZqA6Ctv6PWfbPUzPxJsjYbR6fepFsJKP51PB8NfrjQZvGonBI4kChZZE7kTFZikNvao3k22MDE0UsuYi4EPpaaeNG2dy7OgY3qkWzCb1tfMLEFBGGUubMgtC9T3qz5cjYRd88t4b5emI4FSSmLisqBG9GThz9uS6tAkLlU9qCUf1yvYrxMa/DYh6TdQPp6Tvfg70D6TmNqjKm1eZ86jcJa91YLhqI60hP86hW2kLjTt2yuhTVfeww6w8oH28v6zyV9LcqzMbn+JXXVXommIjq3TMOPw4VztaNUPiqNDNarE1DjjIPJow9WA5FHd6erFhB/lsCJh784MuLuQ0MQ5ePZzGzGDPr44XCipiB3KJTjp2arr4N/wDPtDwzq7rPEoFArUnUzpXGZuM4fTReYW/vHVQgA8ddQol+J8z5rKgqcFgzWZ+IIsY6aOU3UviBeb05Sz8m3umdYwBcyw0udAwl82yjaaQofPVvTP0Cyr17LpfrKy6+rmI81VJb/1Pm9gGQ==';const _IH='a2199c113f55bbc34d3523f9fddbd1600c8d09a932335fc8fc8b63417b766f35';let _src;

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
