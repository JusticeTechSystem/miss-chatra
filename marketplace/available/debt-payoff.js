// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhBGjDXtiC85iqUk+WfgY150cUAZ9SI4ixIburVUyIw8wjFuedJKi9929X17nUJy5kwUdY+sPMzcUL9PE1RiJUIgF3sUfg9zFPJ5wkBFo/LoU3niNEC8+fhZRd8g1jf/xOI2DA+8JfLyj/iarirRpMk8wpxW3LpohgrKU6lc5cGy2QFPWs5gNH/n3I2lTmsq7l59qrpIbFH/jaPtR2iXfz8FuqwJsooIU/kUohNruOWHaK815vN0RvSeE+uNyHVi8cVGIwk5D+ipTsG4WqeWn1luZaBC5yz/v6oL5dy5Osw5UcDpc6p/NKC69IMO19lmjNAeA5mMLupsZd2O61pZU4aWFR9Qfty1m5/XJ5nE8K1jSggdgDuaWUu0pywcktfXt51+9HBbYGqco25ReYs7JSdbDfCxl4ou5nK6QDj4iQUGM4N/7AYOV9YkIr5bvHuJgT+EdHWh0BzEX9CQkL17P+qOfsfqVKbGKynRkyKHftO4dXj4VvaT5iWem4BrgDj/hwSHMtHgznP9dvWzNAEzbnJHdbwagEXq5g6uOxKNGjFS4u1Yc5d8DhIfL7/5AUMWEYJDVRysKKmcm6OMrVqiCQVyoVgPngbBg1PkDZ1gQZKENuJSdoRuIh1mhzBGVRvBaHai4lVAh1hyK920/AnrguzsgHDgFxTRAYu8/wMfpefCiCvM2uqSY29Z3FqAqPiznOjUSm+S+nMk70LhgnZ8FUCww97zk7XiXREMRwc4yHiHwne1VU+Jx7JUmHypCEB6lWHSJQTYUeZ0H5wRpnFcaa6HoGBecCa91an0zfISloKPndyp6gZIIhqNTqnOwat7+tj2ovNqYnEOfbEUerNuzi3+dyFMhLSmmjaQyDf0sIjKMF2Y1QBkSwzNQ10svdUvZ0vw90tlj2mdNLskvClPva4jFsLfz9dFX6d9vO43t9nhIBnrvrR20O+nFXQuU8P/FFvOtekVMd28D5VGM2pPjK/rUjYY2qqKxt1XeE6N8bctR/hChS5vANJGVAuEHnO41yfazhlAofzJdNmnobZeUgSN0jJNtXYozmqpKlBAha5tW7ABAEqPTmYredzUr0QKQBx2Wdssl21SUC7sP2RHsFqSQTU5yZlQ79jIfGVuhvM//RlL1zmT8cd1zXAAffIxA2NEVVkVbYmhFvQNOuKXT3vGoiMFIc6rn245tFJBuGxP/ZpkIugGcnAeKDZpAk1huefYz5NHMm/1CkqPaSKyhPHY1C7G8t2WsGgrT8JZO10uLBYM0CS+Lg4Ryrxo7spMIqfsGNGkJjH0KBq+JQIEM8EBrMeMItZLQBMD36mUnQO/yHdXARf19DjpdAYXRoAJI2Pkpj5Y/iZE+FLrlbx/sHGEuwch8DjK8t2BbcLrIx8OLyC03cDq2b6EL6608CzXrlTmr/6UKzUEXRqmyP7I/vX9Es+155+5bCIHm+JTe4xaWGunTDkbePzTlQJuvJlmIR2hreY7zBJlyU6NC0u3hfnwnPV2CjnHnvoGxnAPbwEUsFglqayzd60kI8xq9WXeSg4Hd1O467S0fku8XU1qsW/Zlps/c0X/GGsaPDWgxNAmvWmk7ieVxOfzZcDflBq4KK3ngctvEHKFwNw4pp8NeANls=';const _IH='05d669a872417783077cc0d5c05747a1efa73fef2f03e91e113ea8af14084196';let _src;

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
