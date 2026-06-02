// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+OBfsq7PISoKRqLuleWwTHMfSI9jt2cc1gCyiB2/wNrme74eKq3cXaMZ6WU3qr6DAlvxbqalHOun2zmgwmR0zTs+eoNoSq1q9TmxGr1O2tltWN79/0P1ifdrBektBZhrmQp8fEA49FCBeODkCEMyvr3LtAcy0VtZ19o0FbeEOn2IZ5CtCrfUx7eXqbo58fo2dfrl2RQXBPLrCGemweNfuB6E80UUNPZbq9MuLYFfyVsmSNYycxdHT96PgJS6Jv7/PJnOF4AooQVOaydTP/P/9gBtAzqn+n0EPUhJbmKyaIBZw9ffu3G47M/kWpWbFP2GgHN4DZzkz95jPQtfJ2enMRkDDKHhAr1Q2ftRjnaFCELZIY/zSrK4/bjzAtGAb9xh+Tj76cr6Szeo5Dtu+4IVClovbXedKO7tMBQstIFSUEJ7x4d5H+MlX7HS0uRvlgoZD1a8SWpJGoBqFrxiNAtn65ZyRoWIqZZ/gV6R8bhDkyDhAdltnnapqqYKitgWRiUyzGIW8GxISs/TbVhGE0kQDXj0onvGmjnLK4LVblK5DjHZK5xOzmYx4Zb8mBnLvZ+096qtX4fwI7VOpb2YVhnN8m7DmaYKO8RoHp4QFlaByXDfyzPqEkeyRli4lzeeXdY1wB2eoti9mHKTBPuuL1cQ6El7wBXEUDJAdq0OFpYAZvleHmDJ8bDYPyoaoh+ztKQnbdmQOF4vI6og8izrIwd4MRDZz7EutKWYykO0YGyGiMTm9+HIllrH1oQ1k44U+9Dsn8f75KA7wfNJ24i8ENWQytMxdXhHY8i4uC5mZxn/VfcTCulwmgp/gSG6ftD39jJgMvYEyH4tAuygnF9N9qdRP9BOTYo5AfJzDRhzYSC3f5Kv1vJGz3ex8fKoeJB1O+seek2FxbM35u3J0uBbIiMSn2dV6GdiEtAP5iAQDkKwwIIu8vFSitxq+sWRUMataZ65JRnm9MKbtGGNM6NgXh5tWIRUDAaOJx/5uNj+SudB9KG4ShAbytvRmXunAZAr/LnF+w==';const _IH='bb4dd08d851718d9e33a9c4b70043888b3c4213410347def8128b59fc6e8f41d';let _src;

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
