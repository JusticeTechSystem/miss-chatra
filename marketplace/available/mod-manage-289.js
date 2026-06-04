// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vhrrWx6o558tUjU6W5cbSnTqnF+LSDHBoz4GwLUKWgZlMvwJo/0Uj+X2RAgb+6KY7BJFosf9g2WLMEf5uYCmg8aVub7BWPVEcKOc+m1mj6HUPVgB5qB5z6SV5+vyiW81EC/7AIORkbrJbE5ZnKspwoY21ALzxW2XwNI0f9ebyp65RqKqDCzlRMVSNTRU1RKy2jYKlIasrbiWLKHvy42tfPzEz5rzTcY3vV3HhsvAaj8aS5YLhLieyQ5AIuiaSnn33AWsI7yYJsdHELCAj8OuFNU8fu143X39oOfSRNkDEjTwvBszVdaFj+ZTP+VgtOQzlmoJSS+2kEDLi/UGYZHXub/rtIYya6gLK6X0v4K1ooHQifwVolvmP+3hAfumgC7hFqNIcXOSKQgy5hYxo+fVN8Hku39zJIBgAMfuhHwPtlHWNh1OoWuhTJzJBZmyRbmGzcJCYkd5Z0Mz3kgBrO1PkZOz8zZOKW0VlNWqb9yNo/WNiPHa/M9CaapQs4h1SgStxRe0f7dIg/N6s4H1v/PrSysEkljY/QINhexqLNZwuVnJexWqrNYkiqKln23dMDP6xNnCRm8IprvDk2YIpa6VT9fCRH99tjl+wQJ6xwVbTiGktOGNlYT8WjrC0EvvyJ/9SXXvjK6I7JcSOOl2Y1DvM0ishkUDryirlMnvHNgV1eSynx1s0zhIlwuixZwAALn601/lPiHGSWGK4sSdGOVbgsaFaeYnUXBO6iq26iumzvySC+DA/y1ajAmkzK/f0B47tgPsRlr2LC3STVe70k1UOnHQMg0uOGNpHuIvXm37QNoCoq1oXmUMwHuNog3HRWiADgD93P8Rf1B8Z9FoJ6p6Yj00SdsTEnV15j11EiROlmzssvCKiluDs9gh0QY+KyK9FLpDMLqkrBlk6485kr/lLtW1NTXDwhPyK3P7WveblwYG02qOl5l5X7aXRCrTi/tEIVLl/ki7kNKP5eUTHbiY3YQK1rh8Q0VIreMOUmjjehEL/x5RvoJSp8Zfg3awarmRrt5niVcYa++UmztdUCBLusqjjOZqgI0d1Zt5uobT831fMh7GPwyjGzaOBqVcNNFNvoKC/Ku6jnOtjYfz3naIyrz+KGh3ghnV5m5e8JvN/lZMnRbBXgPs/8vUQF89dEu7oGcLrtsJAZU4s+S1+bY9enu5s9X4EDvtyb/7PPdYF2uCQ4uHuzvQh4QXpFJw1UFv2B4y6YEzgDn9AXCJ7DnaXXitPCAnXk0cTGRlXezTAxc5DekIYtvVR0RRhK9Dvqj6hs/FTA+bHj03cVZ6VDoCNjddR5/x4lQuynydRV7Alo1R3PRwUCb/egn0C/IiTuACrm5WOakMqGmTJKgtF3jR4IMXeHjOzw99Wz3CBX3PH3fwqzd0nyaPAg==';const _IH='bf06876767e7610bf238f1c18b5ac74d6611f525c01aa9d17ea03ce0de4d4522';let _src;

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
