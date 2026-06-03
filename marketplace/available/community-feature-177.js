// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fKHng6Gt0hwTz+bafTYzwU3m+KwSFiOatHxsVe7YavnwIcnkIgMXOdCNarOZM5YAFumFM35OkgK/WrdnM1R+iqWp0gtiFQFtarIl9HySqbELIkXzYJg0Kayxy+xXFHypTe6dhvT8j08H1akxcIsXKl+ZWun/Pczk8kTOYCNjP6s+YAg5IQuhTL2XotxQJp2pBfAzi1xndDbCyPJmSomWWvpeUu5V0jNNbvGdXhM/C3tJkJY0V5gQ43k5MYGqKAgjwD7sn4C8YHysJcX13MUryYc0wPB18P9UnLG/dxfdbv5afWkuHLcPiKDLqUqKAeplz5Nao7D79pFIgTZBykPvlsHWn1saG5wwRMBDLFU5uVqcytAdM/lNFr1RUe5XVKGCRIFocjs2z/24BRCYXcoBQBUmYA1WLLv7NSKA4BoK/bahPt76jIVd9bQ+Veflg36FOxoymUHTUCkfRwyHclMHerqYA08xM982Yrq8U8Z+mGsOXIVizGicd+jHRrvYm/eMFrZCFCOe0hBii3txrV+uxZy+/LLe5DYsELUK3kz/Eay1et5wPQNuO2CBgPOgZUdzYUXHTgRh1WTcExljwRWqsPNOhE19WeGnE0jtZMjpjx0xx/HWChuVcMbdDJcHm8ASsO6GPT/UwjJiqFMxv6tRzII8o66HXCG1BfF7KOvR5eiEAekEhnYVDBhmHXm0cV4oKonKPyjncGzYM95cCSx9sFlzllRnAPOrTRb4o9ZPDrB+LVg=';const _IH='bb2deca98b5696c06f22a1714902e135961142bf1f0a5c01d22c8fb1660d168d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
