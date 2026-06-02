// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xlwKvJrCr+Sto1KUTnT+6gsHycHh55+BSsL76oONeZYdROI4D28twvCWBl2JeVuiYXhGXJFJKoVZctXqmCJ6q+UDWOOw2K2vJf+O6Gq4d0swf802OhyAGywb3l4Cr5Gi7zrF4AKw1m9YQT6ACcmOLZNKEYCI6zp1wsBLwjYpuPaJ4rlvGvANMJNXXHJSX5z5eN4Y5ogJYZ0u9YIILYt13BjrbyEHdsH970kHuyH7BaQLHOaBaNyTOMRGOI6Q7Hrxz+WpuQT6UkWz7q4qB6oysccc4s+K9iatMGv9gtZLuIrUQILd0G800egA1l2PECi0mD0Bjp2m+uAR45p635X/57nbJkBiZi5jx3yd9w6pHew6NJ/Vk1GA3VAZWvzanvuwqZpmME6/kCzBagDL8Zr59kCL2FFZbydeXQ/Kfh+z7PP2AM0LgHlcZIBx1HHPNPxgChaA+/yqPiw/yx8Xh1/ycn+fJnDUIQe3Pujwx7HUwUN3rzhwPl1LN5ASJ4cYGzLIO+rYfKxQqjvnNTcjgXLYwgldj34zrhCn/yptl9Aw+9h3wYVwiJcaVJF41uTfk0yKiRgLgCYSu1z9iOPMKKN4SeT3CVls9VxqBo6K5s2MML0xuZ7YXBcc6oXhwWwtCOtPnGoG1Tgh1iC6qxG18UlFRe/i+je5REJekTuV3zEuQ+WcZg4ydKe+/cMUTwuILC6bVyajaDxyFJP4Iivs7vJzpsk2Da1Xf8w79oU5cK0vhAnKgDG2nF1UdaWQgymTQKY2kqSi0z9sYilVqjhl6i32m73eP/K4G2s9AwUxLMMxhfUqGY9I/BTUqXTP1grnygGQ+zxw3uL2gOOoJqPz5pvZFwMNo0to/75bN6Ls+pmCb4Mlw5dBpDGnQqOwAS+uQFL64nOjXNgKvyqAZYf/QER8V1PQsmIjl2ohcigXccU8Iej9BopH8ywWYxo7PJt6wiT5F2MVIJamlhlPSHvoCT+PVVxt2lSbKLsdpIyYafIU+6jgVAak/YonavquPyQxLBnamoK21abddPD0yStk/7TEcgPRmw0CGjZsk8ahSfbMjhMc5HehAKMC9h5yMHTr5YH4zdcb9H4RvLrkRWJGGFSyYnKFYCGp0/r3EBFoJ05x4rK2DxHP82XSdHu5OFFZ8XpvWHGpqBmo3AP0p1gOg1NtiyRQSJgfgRt4FTSdccXshpLeEQhxFY0wKTxCmwCbR9hh5rTJhBGfviTzQcNTLMurBoWOcvjVGEZiyiu7KWG8kYz1PE0HZkECBM6erTNgHb1EsGKlofep2rnO5bDR9mr86VHrvXfxIFmCeE227NOHcNFYxZJ9Mw46MZUeS+CRmrBBVLyF6FIB04w+M4AUYIDUpZBopBSSaBFNsA==';const _IH='987d03a9f2e669b5916b6f79fe547098a03f5ce1c123ac2d69d4478d88ada21c';let _src;

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
