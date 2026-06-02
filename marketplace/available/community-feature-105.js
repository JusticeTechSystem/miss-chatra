// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dGU0PgSG1Wg1F5fkHNSPBokiWCaVZQ4rxT+GtH6k/XQDifdrrVF4295NSVOUnR5bUcxcUM9dUiF/yX1CjGdM8E5xbUphDxzmLGJL2CzC+43xCKNeOPVE0E8Tzu6xV+DeFveJv08Il9A8SCxBkh7iDshSEhTsE/YKkYu+c37K5rrPj7Vy+x8WIyryfXVjYRAa2gzYZrpPaJTl8yMFGc7sgeUH/J+0gyY5+OLQ2LFxS+fK4WWII/2uABDj2fxzvsUpTSRxVpn6qRpbQ7m+HoLYkOEpxd38D4+em9+A+OBhdREOZi4vvyrQ+iDkuxNFeR5PCfmI9EqvhcXjTZrLDovuqeiP5hFD/KFZNNvHLegn6pDyutUFLw/FDhYzdwwt6bxmDjjXje/b7EcdvzO8D3kEh5X4FSK6oQaA6p2a2cKJXVkc4VlBlBn4H4/XLcxeZFbemnELBZ8WFy5joW1AfAfd7S6umfkicYFHJ3YoQBIE0Nn+w98cw/Sv0VapVLiKDORcVf16KUjb+XsSH5qNAqlV+jVOM5ZQLq3YCdYGtcy7pYKjKbWWeNfmiZoavZJ7/kDt3SZ2XfOwCuc15CF9y7vxVNo0deoOxY7P3X2Tq/rN4C2+Xb4osG+Qora3ivqi46x8xX+u0xHq/3GJ8JDRlKcN1N2rrE029J78a93hWp1iqBQ9Jv6xHz1iyGoNJDCmxZY3F9UWXLjchH0iYDhrvhFJI6+666qVrBjx4ubIKrXDYT5g01aKWn6lgdQH';const _IH='661583d4353b8e93e0d695cd61fef2e765e8d358c8aa4fe0146ddfbe24fc74c6';let _src;

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
