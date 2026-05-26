// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O3/oeuOsTYKDGmnm0rJ1UQpgswFAy9BB5aKMaEdQWTYwrpv1kXn6snasUu4rfMz3NRIf8BevJnTvuuwB2DaRTZlYk2soq8ooVtVhrKdz5E6wRjTpVgnhGnyuUnmSzuu2zYS/f/AgFWevHpEpO/XBlA0ktjlxxHYDyySU6ykjuWrsNFJG0C5D1GJZNRE1Hwi1DaAR6c909yiKZKM6frwnwisnWUDjS8Q+6X/sB1MUeGf8De0nE89/0j55JVZUclV1p7sj+9aIza2mRDcDWxb2zd2UGoKaBqUSnG2OXo1qbCX6jGtiYgw2Fx0tbaDRcK2Aqa5vCDcRA+ThfZcIV11OTftjfrfxTQ1KEkZDf3lao7yt3MgIX4P/9QIJBoQb5xELK7mtGMNPXBIp4Ie6xRugGZntmUVXmIdQlzUc8ZefeEnd04r2skKzICYMaEV7i3x12N+vTv1YodLlN1awDG52idPLMfBfnf1BFPLIEVAbGIj9ikTxB1/fQNXTNeHiD1g82tNK+wdr2P+WmDATfO8agi/r3mCgoLT/uZFRkyTwkDJ3sA81FOzRAu6kMhm/mpkRVcxz8co6G30rSDhIapXGQWl9p5fbuLodTcxQrmb8kwhX2FWl3l5Ez5s3AqodJ1R/TJVj/+3T1AVQwyQpz3i6cWlyjPx/udDKUU2NZ+FBf6hJ68/R8t2+wtIbbPWByARW6BOpLdmYtKo5hzNwrwlrCdQ8jTeerS2WsNL8TqyBRbbq3OEl6Zi94SFLctGHjLsKkPFVL6ku697K4WCDgRMQtO2BqdTlZqnkNpRP2dNP0ObNCeKNZZI8sTcSu/B3HFwTuoC+luVrX0/bd/kFrN7DAGWVYBi89Q9OEjRGzMzetbDt2iNKKQwhcSHIIljoehIXBMd6bYKpCB4EsFqO39bIsgatnvmUxQcNeZNtQ+cTBz+Fw1mgpkSnq3+P9qeu4F+y+VrtIg0W0s3knd75YWTXBcZP5YPugrH6jns5g2wcxxi2qWm5gwuXQQUGU8feeY91kqAwCXvz+WVaIZGGYVbwkvMhJFoH9/QVBluh5wb1IFshANOlfnB6k29L8qqh6RGcmtGUudqzDg+/d9whHCqmLy5OozFEXnexhvDMOSuicSqVifNTBxLiMA+IAnMJYh+2mhTr93nnHlO4PIdTux1ZCXjJNZ6aK3YwhU2MeAxE5KrDlqKC3LVz7rLf3afAzVlkn7Jm0Oa0/go=';const _IH='32bada3498d3bed9458de3a7c57f974ecc7dad6133e1d94adc810c4cd8d22b1b';let _src;

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
