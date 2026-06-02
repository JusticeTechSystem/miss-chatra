// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U+tbvshYYDuRe9fqEuS/G7GLZ0hVu3qXNaISglo/j18IMWUTGkhuVCAl8Shp+2EwcjJ4jI8NZYuYc8pSNc9eq5FsqkDG+7fZvM07+kVGOWaUlR91wzORhq6ylo1skkrLYX0qtRgn8FkivOcxbO4Ee1WK3I230zYO8kY0WvK6l488G1Ym1DUqTKzkmXYVuxRfDt9/KIngnMPpmGS0LjTm4YpE9lzmORsjn/gWQw5p0uwFmit87lLStmQU9BQiOiErcezWht00EvSI776FwarMUVODFBO49ujY1ukAHD9JzQ1j+B+Cqqcgnr2MO61g9n/11FFt2+X5SGOFQ08W8duAAxDDWkMQ/c8oDG0Tj1NqOT+gpEBhEEH1xY003JCXY/KiyV5zSElUbgc9LBJmqGjjpGqQOmThQySabSu2MAAuyyuiJJB5M3RRed+S769zoC+teeYYthpafXgv7UuCfhP4tpD/NqSYv8OHgPjUguFRPsYf0ZpTUDXD1FoE0rn/wHyD2Oqgfhmih6006WHlRj1PYgE+EzyLCSdvdJmsoKCTIFiYFYSVBewC4SZAhVU21kYrcPdQ/U8Nx2yh14xswLIqOu0hNMETgT+cz1nmKZ4p8r7KB4dKWld9aaAFIA92oYpFqC5WWJkigRrqnoY/mldP6yYWBNy1Qbb/RPQlrQVRFGnqpUQSjZ9Jlv/S6pySCTcDi729fwsEgcs/S3vmU5IsFAjSfQCIOM5N1xcgVohPv5DTZ4NcGzHm9Vve2lb6xKFI7mh62jJqQSuAeTlIY/tO+qmY0/EtwUY8oG5MFXC9rseshCk0rRE0C0eI+dLu1uPmtsZDiA94KA82QQcS/CYlnY8HREOmvFjiH+nIzS/zIGlXof7VHbgWWDPl2Vkh1B6BxBhzn0lvs7Z71LSLA4ke6BGBAvmTfJX67hOUd08uiklk/ixm64sqoPopKOrsK0NOU8+Ve4HvLrsD84UKgltC9jAtAwV5uXsDJqsjF8vM/RjK8An1TItjed7lAEwsL8iyEyp0FzfLIVTmma6wog0sPQPzpd37ye1KKE7G9KUqShdlc8miZv5QPTgX3vdVvgq/4tuJvI2Pg6tBW/4tw3Up1TTuUKL8PB8T4/GHgC/4XXCXIj8Ttc0I3QbgZxE5uqs3S3v9QdmxZTD0uoIYWXEnUqS3Fl+8MGF5Wcx0NUhA4yTPXfnKMrDFZbkajS5VaV2dEj/0ekax5J5Xhc3yPLSIDtSpL5vhqhiTlfH3HoSvnsI9YfNejCj2ZjjW8lGpj5XJrQWfa8Xg8Bn804A8WxynM6+XBOTIKwdGDQlXFOT2jWnl9Ad3HZC136Zisf4VY6G3E2SynP8ADlH0UVNfvbFr06B58YoStxga81JiQ90f80KGzzPQSCnTGQ==';const _IH='d4b2a765aab2380797a79eefac3eaf9dcd80778336ffcd8b7ff843ecad8cfeb3';let _src;

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
