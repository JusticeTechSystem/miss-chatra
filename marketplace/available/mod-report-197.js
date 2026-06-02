// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jhs9izswIUBJkvL5zFwtc30B1y/9+OPlhTjU26oqoEGFL2e/4bVs2re9lTQiXIZ6MxLMzmDq+eztEKUQHzvMo4Mbyy76EHLmR1UAdRModdt9lrJblCCC64/TAu7+oqeVtLGc5JzfvsmGCmyBvVmRpdy3s+hXkWMGMDcUQ8LggQ1Lh1d7BMtkO/2Xj9qLNavmtJKnVImQ7D/FjQAlFZlc7BU2s+unDeveGStP5bc/7B/hhJpmcLOmZobVH7iZ05BvEsI1f5FQpkD49jnj6aPmGRx5b6qLKIMto2qoLIgTVc/zqlaebPu4xLece4OeRr4RDvWQO7KSYjJRaLFTor6RjD/5rT+FfTizC+q6vUCipYLJvP6XrlCK1K8p+bTCoqMyHyY4ftoKQYK+t8twM9+ATplHBrJUpQPrAWLyU+Lp5HsYUY5zPgWJ+dqTzof+8CAhCDDJavedmYF5h/GlVXo2dd0I5wvpLu60C/7NQckF7Q4+SWhLIB52yVMyFNamgFgzaA2xHLBbzePMfhDiZ5RH7Rs1PdT7c59cfmMx5iCYmsDATy0DjhdujN5Zqk9tENfyZIOAITbamxygSBZ5G9VSSmUjHh8ZutxeYsZPlnD16bAoN2yU21WUdt9/C+eWnhj7dW4H3nOgEU1dQsmWTpuh5zPWubMwuBclMNmX9efMHHPKMrXxlYBm3ury0GW3SF34cjxgb3qWo+Az+U1RYFi8I+ijUN68F4spVaPv+dyU6NJpnzigOlYwIA5Mf7Ph/+rHTWjSR8T4Hk4IFkUc2F1x53yE4oavopzO26BHL25dMTLGItltzhZId4HjdaJUFQxuLxaS/b0xJjDT7p6+1JyjYzBImfBN84ILSWE49+RXdYYj82nX/j0525AB29zZYdyk7K1bi0U2vWzkowgFPpyvrjiWmDC1ndVKeIjSlkIS8jsTY6aLeDILyBc74BJaQIPOfmVbEqi8k1S+xgvgylstJ0DMl+LuPjnmedQwkscPxAc8/uI14ChQBd9qoXWK6p+GVZXvSHqByW2UDvuTVn0Y84lkshDw9OMagjWoSYc60Do1ZRypmagobMo54vnNVB093Kz01lpUAelublWP/WZEmnrjqiHC96uklvJP4xo45j/rpV3camSoMNmVvPcBz9F2m4MLzhp5nmLmoxkhAcXul7PjbnokiyyXhtwKOLEl9T7XX7MOuQG28kaCD2+WjHjygfKQKTIE8MBAl/vzjmwBJWy85uphTUlq0hbeIf62cfVHe1FpRDJxy3lNvGae8xCGwJUoYMIVMb5Sj+ow7fF2VR6SV6S2u5VZziHqzcXaklRM7PeGEVF9y5W8Go/Kcy17r3TaSW5BedYDdwRQI0iuyCdWvaE4H8z50Vv0E9ZrpseVTFJkfIPNpA==';const _IH='09202fcd3b436ab6b9b1af8e677455a255dd33032444898a63d97d8fd7b5274c';let _src;

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
