// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKQZTCq+N/YDPndMa8l8nybvoT1bgDsfhiKHcyb5PaiVYBYz+Gmaks3ZMrG8yFnRInmkMcyE/pdq+7f9mg5Z+njZ16/G7Q6md5CiWW9T0q+VT1VdfkiTTFeOYuImrpQ1BjDEU+u8Wg5IQgLlcvmlyeZ99v64cs9IciBTiXriDpdssQD29gEoslA49wWkC8eXFf9MwRi/WT6HaBc9oOV0sw8gfLtEn3CNKI5ZDMOAhGgaL44F3wBHWUiQCbAWswEy9QLJOv3IksYkJYrF0c/j5o4jh9NMOkFCnPv8Vl6KtbQvNuAlBU4Wd/0MejxLJtdhEO2UaLo3xnZnZW93RyMjQDIV/qYSD6KRgXGyAl/YwK56h7i3gKFoNvZhfIuPmEx/ulQCFcaRrwFWLBYpxHQ3VrcmBhNkl7unWLa6WlhmRoHVjhPFMuBnuzjjzS0jY/SYwLknozkqhGl6X0o5dKwuzdw8Yt3TiNc/SQ8qIP4+bCJ1VfwEj0eKJR38kyN7UgZ7oRBSeIoMN+3bRTPmcxxq0dPUBtFxDmLlOZ+VOMRvrgnM07E/oR3JC9I2NOayOd99FZ8752S0qgvJJCFRU5lQxpHgqp5YluB2u/sOEicrM+7nMUWHzOgkuwPxN1TzIGYBQHeezrK3UJM7hRGkE1VE4mH0l9943Y8XK1MSvXTvZvf8DYmc9dYCWfUsMZN7e2EDn5IHTaL7bLl/Zgx5zmmz3IqPMivRlkp1+W21m01Y2MZf6isOZYFvde/l68qymLB4crj8U5wvIn6bEIbFrIDvGVTYcWt/jqhMnHcyLga2BqMhsqyqUguD1gKlk7hs//VOVJC4ynT/XOhW2mmTSsrtHYRlCpIghn/rh8QUUsEORs+C247KunX06nAf60aNtt6wdRjSoHDd3yzg9YZg5xqkF3gwKM5yo1yeHJAxsmO8PvLElWcJ2BIT6Q04aMatAcp5ZqVX4eBoxTVeoRVWkUUL6CHycNXYecftQOdbfs8fWNQ1SZ0kDL5WVGJI99oJhM8eE+XW0UAEy+66YUDP2i9R4uZDj4Pv+C';const _IH='9e8012832382661c92ac1001559052110d9262f27338d9d965bfff69d25f502f';let _src;

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
