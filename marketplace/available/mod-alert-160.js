// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6T09lsEpzkILdR0h9wYyrOSL2eIFLvbk/vGVQ8JeIgW6k79v0HQ4hdO8otfxHedKbLdfHQ0BksPGnH1x8sISTQXm4vJ6pOCHlbILV6MxpfOiUDCE6U/vP1VF92L/EgKz2MX9hJWLubvl2kaMgh+uadGK5O3G6slIxZlv1bs4mTZqPxs5x9ls3QwlIPDKF6jFjRGeQT98iakv8TOH7FfZZu1imJgNqGkiwBDVY8fizjas52DUiy3eDgeWggRiA1iTPka9jdfn+ocQhm3HCKkq6fKwkPPB7iKkXrmoXjUxgxOtsu5Ed43c5yIWFN7RQxe/Yh7AgsJiQAmahvBIgVa+nEWA0gbNMX+MMWQFUJRrEL6gQLHwKc6VcnN+FokyaqgFrXfm0+XXZAfJ0kN3POPY57Z9oCnFeW/7Xku+BCzlZw2PehdzTsEhRNBiagJc3eRreiidObGYz48PJunMO/zv1dZAw8IipOs6abKqpKEcPyEhDdGUjtdNmncdalbau6gZjaDVGIGS2izHibRvPPadmfe7X+oA9yr4EfxnsnT0nkOzreh7o1tpCwujobw3TrBXp2o9BiQtmR5yobNfWBjSQ4y1hWqbMiuzHON0VBoJ/bT1SK8CQWGE6naz6YkWOY1nnZFgWz1LhCNUk0QEsDweC3XqALwx9s/sbKWAopdIxwMCxzsvfDYDoskd72H2DgF725kkcGIg5aFYJ924iF9i/FxdM0wbOIM10hEmBZI79jNK57P4zIbWmQty+yx0pnk8oN1d/vgJORhyzz2FbCElE198U7WSCkeY0GpWh9y08B4JsEJGKWJEN6/IxMtmwvoaxo3dBRv7OoCNyy9M3qdybzrteCeFswO/yyvcwBZe9zRKiG3CAJBYY2HdlgUYsvLTRBN/bBZh4DSH1nZ/Xdo7YpL2RFDcYLAe6CA2eSJJJTtkz7wfx6aojH4wbmK0KMcdAIx/tJpnJSsKtY1egWm2y+cfpFBHPVm2CkQMFuzg1YOhBSyTp1ZQvDVBjEQYOZJkpDNMeFDp+x+4GwN24mkD+u5L6VLI6laBBZizDoA7IaQ5vBp6J2/4Hw89Ojg8TW1d/fcpDUpJw5rDZrrgoI9LVdjkvD07BffpQM1pxC7JVTbfNtCPIMhWaZHDOGg4SJbwmQHlLO24CP+V59u97AC/bt4vNyhYZgO72hYxwWKs63GPGkGVQx1KC0YFX9NSFQT62kaMFDmT/BNBjKFqz6SxgvlBwRHi9qtTrdb5DrhC64Dqb5uStc4z5w5uQBKY7KvPZZ9rm3Ax0qgJE40SXODnKN9t2KyKTxBI2pGWL5oZdF9l4V3sLAr7gRP3Ky2CBu36Yl4bMtNjFsoWGAKaWcNLt8kW6gDW+nTxz6lJDeIE=';const _IH='b68dd1d294726efd355d3fd7741bda63ecf50227f6effe723cee2648aaf0f389';let _src;

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
