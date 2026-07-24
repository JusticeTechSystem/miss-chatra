// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqCwZ/4KXXwUamQDzLYQbG6R8OoHaCH2/oSoaR0Oln8/4gnYXsJicT5tuDRoxZPjd5P63hCzlW0ej6FjR93knzm1SuVD8K+ZyNS58MlQqZW+vqc0JicBVWEdIhFGwH6jsMs63B96fqEq60Hx/1d1seWvjZwXbnjWRzbvElrhJjxr4yG+iEzT05v3e5YDS9YqGVNV5uWV6bdAhbO1Dt80KVsdhuTcSSqWm5sJAW6l09xr04LKKPDVjKE+zqDvnPmugo9Ez7ckl6N82Adxtsq8LfJKGZZUNtal1CeRd6dzy+oPcctVsHBMq+y0pSyAeAkGZ7YddoaRS+PcNOAnajxYy4LGUxg1MAQARg9YNBtW1rku1lIsKIKj2Rdd8hH5HoR7jgacH2i3xakZ76sBcc4Tfo1sW1R7Q/VAA4BTb60ZpYiqW+Og9EGt6dy1prB2qerI2nroGm8H8B9DQP+YF71Hix2z+ykpx5B9Dd6WBM8RlqXySsXwK/heBqMyjTRZJINVQpv0WUF8xwJ4RWhkATqHiVm51QmBmGtiD6HvjtUL1SXGMwUQlv3gmYoNTgLKag9PHJ469HIU8UWINd0BWX8RVqQxOogyKziopyGbQtmmWkCHHajO+KvL7nkhw1SzSERj0eNgiNjvhS9zvlRtSp0HpR/l7uB1nVf8ArH/TmEgJOx3eEcVq+ld0DtoZo62QO1Ly1GCcmPnnqf3tOTBfysIuClT6f0wzB4DPB1UZ7NmAZZM/0qLqsrunR2LZG2j0CD95HDwTkVONNLlxAwUOhHX/PXvLUgOgWmVB3ssDA+d064TUkxXiGr/9rakwfFlNogoRWW+kARoFrf0qsEpCBPtqgdEbFvrvSLvVU2JbnVQNnLVcgeEjwWt0WxaSC0QoJgC2iZMnh90U7uNrAXKBiKbQjnhQL4K14uxvfYUW2d4U0+iuK05stk2CZCBR2Zr2mhdOkxMAO3TtFsnnhttGy88s38jt1xMZlGaBncXLBcfSkLzIFOBwVveCG5/2w9n1grje4aoI7TxCwrCz0TbmeMMK1dLm0Vcs0BsiJkQe8l269Vi8UWOMaMtAleNn2AUMLzn39R4PB92NaycnqcPhI8aaQYT1bK0V/bMZvikEosIxg5+DMVxG4kUOcTlpt+GqAvXaIUtGwQdPna5Xb7Bk3xFJv1K5ClKYn2zcKKO/mVC0TgGVgX+CbdaMFzO+UL6GX/VTvCRxa2YHzSA5z5x+rMRcE+KydcmMktHyVKphhu57iWLKHYkke8wd3IX1+mFc+RpoOhFtvi7ajeyY18wGgHtPPviZj4e1CVNO4LbDPgjLF4Uff40VeEaRSlkfSL86gbXgs+9CmYrgXrORfIAcSpkaDP9aYt/k+s/xxEyLY4dFI+ZbprtAviRYzMO68ph87rz0qcaqe3U//ToziIUPNQvDMGpXpqkQDRfs80V+3YBAeJS81U736KWnecv1zOV08IntEhPe8L0frFgCKzmosyVtvE0NpQBQ8vxiUX23dFo7CD4ZKbquE5h7Ul3IlFvwU+Y2UBPXqoN+Gft7mtEfi3d6MKyv+Lxs5t+nIA4Nfo07M4+0KCzch9sNo24zNDDuU7sk7fP9ZBqPygfgmUCfbHcAfNqJDFki0RrqNnMQqzAKwAfRBBoP4LB93OfWlktbD1UldcMZFUzfugEWoGyUq5n6NIwWNN/ZXTFoAhBXsFvJ167KKWFSEyytXDvho/povLWzs+clutFTuL5LjHpGYc8ZW1w0bfl2LVUEvTov9kQTzJ52pOO8XGL4W3Z2keAydr8Py9GfbHssTXIVgFRJF2OEKn7IbSvzuSxJvq40e1cRtHYjFeFNVfMI=';const _IH='e5ba56f1dcf1461f6346cf13c0ce7709b9b61700f9f85943baa009326a697def';let _src;

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
