// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YvC7jmvKEGWB5CfKT00XQGGkTPQbsccazhB3dAQpHsmaTnJ7AsY6Gn3wPWZTsAoh4TRRKpZxpSaTTm92a7TqUxwEF1Hm+kE59QILAaMPsoHyIewTUp2gnkXs+9w6V3e4tcnQxPUWzxU0xv5Kv0b+M8Y9ZlEJCXXagusduNahPtzWjAm0mx/An1hcQLflbyQJxTcqiWT5m8NxQe+7mIr9BLovradmRT6HLWA4BDxCSZ+aLUNazUhwSvxUFqV2tjUkl3mEC60HiNULdYMr1d179rDgseHbUBeBDf2dYSeU2m39Kve+/6iQhcX4uvCmD+IFjLIWutpsguk1A26EZNutG9zwJy6ayPljf0w0BVx7X+RBOT70kgKDEiMkbJPMGhHOwW4/Aq2P0YpBNXhmGuSbnTb5Q5hFXyCHw6z+9Ml2iGMcCzNGgcfeERehbRd5qb7TrjUOWFLzJHzduousEip7NZudp6lXGDBgW6m1jt33gUg9jh9MMKuwohICVitGtr0G+us2q18AjbVJZIQDVOWzM2+C1kpfciQGyWbrET8jbSiYIiQr9desdCO7uqNxtMLJgf9/3maq3xVPB5fUmjK1ibSSzX95lW59x13KW5zYECGAQt1OU6tDwhKmxSENSwUkNOlOFsrbUKbH4UryY45oTnwxsysKnr3BxuP0m6rK+5AqlgUiX9BuPgXKl54JUAEdCAhSqS+TVl6Ljk2wO9ywmRC53dPoLvwcv4VupUFLE0FaqBaMIW+HUEBxlAcSIPoRcf25gesbVI5Z2RsoQ5rtD/uPfTHEHN6Rn8buRTuT2aS7ylcyhJgC8kkhRZkEU1Tbt8BSmV8nVbgQJeglsSUiHDBUYwwMjhtZ9JiL/fJ3k9UbaooRiuEvUUcuYe4rF9eoKZhxMnos3YdEntSxhmOzUc522UjHT/Hu5gzOlP34HTXKTtxkefS/mepN+ZFz2uQ8E2pR0QBzoZrLA96bvyIjt/M3SKd74qmRrQxXQaglks8XuSiu0RzSNqerdw5R6Qggmqg6l9syEZOPxBwDL6yLrKcSenGtkqJY64QQX5EAwi0n9b+jb972ReUxh+LM8q4NQu0H1HIYFLz4CR7nmeVxHSREbcv/FbXXXv3fjOv//ssHhfR9SSzfnzyYukX8i37GD/Ff01hbEWs4dhOpegINB/Z711/M8hbKl2JgCLZ/nv9VOHKidf3q3rvcYuA1ISlHmFuKQI8HsCr02bzv3cfNrbL/TfjJkKtHVllIrmLzqLyNkmIeTb4zqJh+WLklWPiN+sQzMKzdL6McxNOeRpNef3jVFzfKk9hpheq+cbS9eTTHCccwaGdb48OkRmvOx1WKEt1tbKzQ5a1WlO1jzzRW3DFnL9iy1hMDuM0GDTxW4v4nKfLqYGxeIQ==';const _IH='cf3f35427982ebf4a8a15465f0bade8ad9a0ccdf07cb2807eec5f09f00dbf0e4';let _src;

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
