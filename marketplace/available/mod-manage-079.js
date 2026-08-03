// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjgJPw+TbEnypUOsGg7OjoUkXNlpGquHKDqRN5DMzLWcYlhVs9qRjwB6kpH5YFKV4roATkguDGueZEulsggmtCROGAsS0CBfo33NmrbzRhGPO0jL7//lmhczKeXpVRL8UMDIdH6YAupTwoAyIFeGBa2Jfmm+wFvLfJ8WXjQUeNXQtBV1xPh8JkXQwesX74JJB804/kqkS0Bb3h3S6cqtWssVTMUqEOrpOwv6jbC6uF1S/Y79YAYizbYxdNCqxiya8MiTg0HCSVhPbzvHHPqkuomoQ/qIV/n/3CVQjXv72nCKREc4dB10YAmBAEBfuKWocT2VYhqquFL1KFxR3t833GHn5jLn82iNURdfd0Az8hNKmfuFvW7PBYNSnDsIJnbpCPIOw7ZVS9XeEPnTX24iSoS3BWpA6muCpTcm+tklybZ3HFxAHjX9uEsU1SKcMyeHLiFEVYqFs880tOGdEZB2fr2OevcTmE7ZCrLnvTtAWT/khTBI1K6SZuMywHEY/2HXPEIl2i0ZNXwCZjJFf1p1PrXh1WPAl6ailDSejadRkFZ+wP1LkA982JmRTBd+6MFmwNr3nFb7YBCatxBrILva87jPNXvgPCRAMLMSNyKzugYVDnhJbVzuX3JcopkT8v2UkwIAZ523BI3JTdUBEZInjDnOQ+SWKnu9VsFWDqtiWYtU6sXMDS/ePicJo1102E3u9A925s9VviWWRW4LyXSS5k3fjk9bCrryVAGjqk1BysU4f0gJbN9YTtf4hgJyDSxwQlsUNZ4RM3VuwwzONerxFwbJUsVhKYIq+O5tVbwn8g4FRs2jyb6L0ili4mF9/vxwHXLs52keg8TZB7/Y4nNljxES0lDDWamNNmw7a2Fxlqb+WMsCuQjAth5VuxUIYykPj6e07Qrg7+k5DeIF/kdFKuTssIOmTP/JaCwUwejnSucsExuay80Yb2/j4XBvqsO3okiMxvwpZoyzUxeseQecvaAKx+JS/tTYL9HdqRQLfq11XVkK24CPQPrnrY8F4KMPWyGTWGEk3JsQeNJ+xsQiupyjkheOS9NdZtyrMeUDOpYpPyjACyKeJYhb2GhbJ0jopRh8vRNeTX9fUvkzN7Nta1QSjvu56Z1frlKSv/QGN6lRWFgMbwQ6FjE+3/+A46JwecVNi7xjt4vM2sL4M1h95qCfIXXG2+hMW0xbtKGMQLYkuDUaKe5bqrztNOjnA9Frl3BSncNuPu7t0zK2AmhJHK9JVl5OXjKD/ESDWr5vqTA1tRU0GPliLqcZRNxcebYDWSdCI1vgEF7vqTxVLkx15RnvoY9je1iSmjRye1qNE0xSRKdc0uEXEU7sfv8OI/eqiw6qo927G9zFIWc3mMwFIuq+szFugaFpDd5TJuafKL9w==';const _IH='d7163edea9d5b1e0431bcddb9769e11d9334bcfeda85c5bee9688d9ecd695037';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
