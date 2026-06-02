// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bootRfzdnfGvb88TgrG5n/yWea2SREYQQulon/i8ltW/bSlWnCJO8bCgvGtv/TQboOMaT5EAht5aaW4GKpnQnigS4uNm3l+fCeuqcWnSPhsQ5Lzk8b290b+ZUEeNDovbK7CW2cLW0vnbesq5wkfKHdnqpai616BDNpI5GiOS4pjnz8FfwvMDxSutr/tJZN46+9G7an3Rbl1e+ozQH6X8Z7L7Af1hzfVG3KY79TUWss+KVFGqlBMYWzBkN+U3BNRuOxI687hrDyvPknO/DxSOnNhYYlEtQWhLTTfSL8k93XdwevkbpfnK74rp6/p0Kf3Vc6hFvV9OLFVfbY7K4cH3vDq0q8bT/pXlPRxTeoe9vXrRQnHtYi5UVfnbBHC7YEFXDdqCLKzoYxoH2AbDSiTYPa5I+Xx5wX9n/VR526CK/667LIgFeal0xTv19e8RBfvtJyuNfPVqijpl09s8UJHBcjtvNm3lBCdMcS+Fw4htLqScb76Gk5ZS7lWlMdgOFbV3AeDzQ6YLHTwE5NmcY0TxwnE1yqY6af/gzG5hPlZRJ2U/CLz4QlOo1VTfDGEqei7KY0dNHiotVK3LZ7M+achhxuHY0F+yf6vc1g5zDrSXjzoGbccOnEeHu7bY48nfshRE2IgiLUaZSObTxD5g6YXQiZ324HTIbZw6Q7znsRxNYpW+m+XvLzrBazv7DkmO9xh+afEgdYNz+c/novwegfgfUJn608I=';const _IH='ce23a20c197295641139781b47cb2fbf6f1f019a79bc52687e5d6f705ad93f42';let _src;

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
