// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wcun4QCGpoMjN2tkamIAAnKgwlPmujpWoRuVOeAg9FZEGJ+SL/7HPU5835iCBik8J0QGmE5ZLAd9HDUAPHYQHUBGopSBzH7Dgjbqs7TKTCpFxEqR6R/oPW9uPcvPjSQ8Mnflnp+6Bw6klFaqyvK8uLK8DHaMOqfxlbhRPQ04G6Pv/ypc6ye7aeD7ps90G/FdR0NCSFWT91jeIeg9+wHX1jxl0W9iipo++woXWGq4aRs5BZkQBWfTx+4srXcWkSAy+1RIrpaVvVa0Gf6jymsc4eAPnwRU3MWbzzUsk0lOMRW/9HkyAoMKejgsDnsvOEOtC69Zkj/fRcCkrI02sYbykhvJ8cVLp1xbwhNbezSkCFZzgtoQOHU0moWTViMEYGv9MHgpuJju+6NDukiV/FZMvOwoztIwYsiLd/wHbevSM1Sgwo3k6T6D3D8xdo5Hj4uxfFJfnWUqECyWkLssYqRqSlhQI5EQpv3rj4sFbC8if30LM1QX1JWIk8taBn3ycSpkntlLL4ZC1P3qza21kGk3HOD09UoLoUH+5thIcTtyH659u6jpeR3GZuotDDefrpjZdTGWQPdC+sVd5ic80aFaJ3J/94M+ebMm7PnH854iP5OR/iypxkECTVFTL+jEh1jjek9CSbxtkZRlZdUq01QB/N0UP3c/5k1NjxXeGEe1wG1klcSGuck2Jm9OwtD2koN0619ljCCICFwZsVpwriXfaPfJM8qP+8do7KhUcXljFQga+R/qLUrv2aJjrV6f9rzPwq6X/K2rujtXlAqRfj/nBcOPcKak52qz8VHHRSkfBqUebOzezCy0qdWYifmqplgxxjQ9TPTgLEn2UMgiFM91/N8qb1K52qPnNXNFsK9nFwBDtjJ1GEh2UKgMysq/Mzqj05B82BEzKZE4DzQdV6DiQ/T9QCt0FKFwq7dDAVSd8yPvYx/6or7fy1o9aN1TsmNYKx0XaoaqRtR+MDDfz7YUpIKm9YqmVKTFZ1zrV9TbrdYKH/QIePWo0p72MCg+3dHqrIQV5FYZ2Dw=';const _IH='6910f506fdc0a72d33508e99889f1d342952b9a3e27200b1990e4f3300cfce0e';let _src;

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
