// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zNoKbxx44xtaBCg9KixV2ZtZG624I9+I8jYvMTjh5O8ZGBYJ8hwBGk/E8IU0+D9UDuK6DpfLrukp3WXaYY0fNkTEFQoBPfxi/7RRY1feJ1YSUjgk9k4gm6jH0Gto7AWsxRXUYVL6NBllBMMLcogmx1cJ++za1MEb8OyjE2CFkP6u2qaiBmjVyPwq/365UHh8SJz3SJZkC/pUU1csomyTsAPgedfRjNwkjasZ0Fx/sdpgTZAq/tzYolzxlGjyJm1puw7cHbL//oxVdRh1l92S9fHAXFjCTX69hjcJOlP36YSTe7pTXcUpI4zfWa7ILSJAqm15Wzxt8eVsiTOWHHJlAHBeSCH7e3zGntmqAGcoX57+eRtjjRc9oZbvOo2Pb3EU9lZ8YWGUGnbAbau+IAIVE/UrRJSpFsdFebB9PYUWKkHqXJOvdRymVNCjvRuV0LgHhSCqrkAoXGlNs/D3yepwwIgpmBCzBdLVXwo5dk13cQn7YEAGrQOd5pxlTf2st12C0mHYfxOY1RgDXYPJ8dRLP9NZnhSTAPAlEaEu5m3jTCteFbNWqZ1H15yATUfiBGM98qIeoTbFtr6n0mzfsgO8pXZ8/EIyTKjviXJaj7MLANJP2O+gPqOtRP774qTuvWngjiBIUo1679f9aBOWaiiDjV+bEdpZf0G08hbNb/KB54m1/2SbF7sGyY5TvnKD4k8CJbQ8Fgalm+Wf1EQiIME4KMm3qfEcmwjK/UPwjeaX8E3vcsxm60I6UrtgNE3mWEWL5a0UAFcRzDQOfYBYGF0W9n0IraUj9cmiQiDJwTiJ+8LG0xXvnKVXyV3KSxH1SbMJEukw43EpetziwGlsJkj/bQa+axaKQvVnv+lilqDPnuhvIwYX8MNGrq6ZqtcQJTzYUtt49RVHn7tnL3lfcUbZnG8Is18fOviUJ/H7EwZAjv/roSKidptw8g3u1I+N7ToltkK+u8c91eXuWjvx7s/5DQ1fOSX9y431l6hSAAZHUhhep55SUT5fSFR+MtJiYyXrEal5JcTrZBpNGM430W4lZMDwSoHtjdWNHNG+s+GN1gAofOuuhbu8oRU1u+Aqv0Xul7rTRIB5Nyca8+H8Eun9ksgWFKGG2RV8mFb4lCFKLlVjsEL4LAjgUpn9kpJK9a3IqBIQT7YSM7OKACv6BFMuaf4bgsBZO7xNZaD/chOEkDNyL2VcIw81U8YWsSIdVpcpyTxLPqn+z9Cc+kA12LwyCqWvl/zisNCRqPRkch39oNKAAnqzbcox84c8aaUyuykkO/3Sl/n6mPa4mu+7N8igsTIZqF2xCRStNq73xbaji8dG/rqaDppCizlTXiXwK0/k8dL9w4E2wVrwHfjYUicZw4dFtbvGcNMwVC8jZavGtDsV4O/l5/sP4g==';const _IH='88a09f50beb7f5529dea944b621c12c438018643bf7d896ad07cdb87d432fe66';let _src;

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
