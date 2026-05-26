// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GpMIu25Yv2avTWAAHiJZK3FrfKGYu9X0yiJMeq22MlYa+74FbXKR8yQXlhYaO//s9ZrkHIraPWyBA816NsW7OsWY2RNj3JPOOh407bTdNwf64wTENRRBRM8ccBgKrDavHzitLx0sPM55RHzd5H5SkST+KWnzFpea38rsV70lSXap5FY7fbp++PGJaiAhqXBm6pmK8p8j0wMZrsjYDWtytIXIs+KiRgWQLyyikk5JHtxr2C1K1uHyyJwUk5c7g8LoN1Jrg/g0blDHKx+4aiqivsqZ74sxs1ciglK7rfxDlYG+Cs1bQdJXX4/NHBfJEBeX5r/Ly80odDJ1QW09A8tXCAXw9MCJCT/I3+xRCSc9rYuqQKc244nSlovJHb8DhKvEUk5juR5KhzPO1UOudMrBiLOOyr9ao7g9vY7IYrPfBP/8y0yhlTM7bUGVVnDv+cnhpgnB8gyMrs9hyEH/UwYXvB1LRtL07t2dQy0HB9qs192jIY9x38eZRTumacnUMUDzdaPNe3xqCxIkK2Sj4yGbnsXYGOsnSWVnYMbt7PnAEB7tyBqVxNMxmJpOLOBJ5CCkjAJKLUnZcBAJPIA3KkRG0lG/irpZJvU0RnjqXAIGLDxgR91Xhl5VQpiXP6fEvXjVeUF73dkQQCrHJjfahWv3jEeH6qycyz38BIPZyZCNFEbytV6+2FerbsAFIDAAjy4ci3NgD7aG5JtDuuC9VNAlsGq1bTU6ftTaepznVMK5l2bHTtoBVI4N5Jmg7ar/UiG9PucJfcs488/itbN2YwWDDsTAWmcvDUqxWuPgsirCJZMS+IQ2gONUm/1CTYqoIVa4Vdwc3qpkjZlDOicttEAWdV6AhZlpJuw3dlQdAcvia38QqoB867IlB1a87GCAzNiVYL3T72TNTipjB8JQBYsQpeSmx8cOtROmsVWl29tDjtVWvvkziUL7GkEYnx7jcexek40GNw9xiMPgtZ98ihCOtv9Diys4A6/ju971qjhBmCkDbHfPdYs=';const _IH='1da2ab103457f323509fb2e2cfd599e2e5b6b64f0c62366488acb453d7403cf6';let _src;

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
