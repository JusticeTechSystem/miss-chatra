// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0e/GXB5arOfZHsoXb3oZ0ty2074Z885P0EdmLiKZ4zcSaEWqS/NKZ7ep5dHCIVlpCpronx9z17oUzi9a2aNfXQ2OsYliVeaHoY0tG050KtRH63PoV5LzWv8T0V9QWLA3W5zRGJFj66Geg513Uf1/q0+0pCa2CPBinqYuXKT7ZXAFZZ8BAnQ63b4JGGBZgf3iAWyrkH0Ghb2J/0WiKlUs4rQ2EB+yj03SVoZN+bXx3N26+hrNJGeIFsoTbpVUkGqRsd5aDUYEz/fITkakw9m79BB7bdpqB5XPT2poZikSm8ho8zRAkV0WdI5OiU8iBw3+0e0yEI+A8kPYAstvHZh3CIHHQbVQyUM7eU/Ne2HVRxysRfNIcMHja3PVByTEdm7omU71yGavRH7Dv7vMZ9dteMZGzyCAAcGOnZiIhvXupuna/m0sGajXsCK8A8RD9RmDmoBZKFQS7Dc798Y+nE3seX4RtdA36NIKKD8DaDBIOL18fi9axKxI6Zx4aLgsTVZvioYFSzlCbw5Fj2/io+QlWkvjGwaJXQDXt4pq15xlDS4tEm0Bdfobj3JgNBC1JbbvdLIn8/BiYiRQW8eIqiMZ65io8b30G6BA20tkyRt4WvE+RWersWRkQRiNKNaZL+nyCBautLU9c/1xNmDGgTbKQdlspD/sT/eOcoNnAHZfwMHttdIts8yIXHGJjEpWk3UTX5Orq/XttpR4tV0ngI5OHpB+TYxh8wgIZYobBVo4n608Ay1FcTBGsinVbOGp2p1VWQcMTzu2VFfdIi2t6ae9sKpsbNiQa3xL/DEs1C/YLtKMMadwTfNocpLZur0LjqFsBvERNy2ZPrMMaaoGIMn4YWkCzC4FyoJnqePLS/THtrJ7b03Xv1oKsNX9VBdbVyxYVOIhJ1SXV/zur1qa1ahy4XCUNsRx49+bmqRrD4RX4Flqzfs07iKNNTx7h31ehvt7uBGc2yHKkZL/XzzblTyURBbLeO8CQe1RssRe/kqIjNWx/HxuCCM=';const _IH='29c1dd78f83583d57b8cd91a6fab0ae04e0c7863d93b20a5b525fee6c28fb529';let _src;

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
