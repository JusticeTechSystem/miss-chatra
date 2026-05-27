// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='osaIrb2qdxrmM+nzEHFskl8ju4OJz9gQ5DefGPvCyOjrkJkt/xDf5VnkZyDCoEoWJlqPK9/cy2l+ZZlwe/RQVxEaszRGGMi3c8byX5KK4/UZwmf46wSNDIb/N6TbTQxTMXkqgL0NUum3odZ6J4zo0w0JpUO56vHINXLoahxcp5ohasBui11BuiUpWNKxYaDjb4MMiNb7NyXJEqe8zgPVd6DUiiQTwewqz8addPZcDhfaJ8RBzlIXZm9qZku81JxY0AcFo/hLCxWdKpVyPTLXclrcQx2pJ+QCNVaJNTntNcYjr/i9MSA1Ynums+nQNAweaZUK+PM/JkXZ6s8bxxoz7yCaNBEEU4bTFk0S4KZz1mT7DdzxySMx1SwTJD/D46xye8B1+FhjB53cozVDBKxnK7MOm24i6KuEun69LuiJ1ZvCw1IuTxrv/1Ik21V6k2yO92LKPmerqmAiNX+Wvu2U0nxJzr+nSqHBC1Sjd8YUzV7ssYVIQpO4F7hhIz6MQQ7WXapWAXiVUFtmnubBT8nnfObGivI3bhLREVFwDiXeBkj+50h4Oelm3zYUjFKrSrs2+znNEgaLPJKfY8XY2w85LyOX1x1KAjO1mAASrCYFWRuAdx0dvKuyD9djIbvkdNmEDnqsUcjmJDs+fJ3jqxIU6uJjgIfGMCQxB0nEERW5cLDpbAjnJUoLCGhnC6BSuPYTVS2uuBm9BshgL+98Qbx7zzc+HDZWtBuSsSMh04Om1r4e/oll0Hk28VHlCyuUco5neY10tKWTw3Tm/U13JLaW/BIxrjIcgx3GphxxJYWhVkNLA7V6Ro8mlLouuWMSyfJATigp9NTDJ9V9RfoWIcsoStjyo+3A3Bs2+y6CM0WslKOZkHifCTR3frW+wXxvYRQOXiwNewQVtSOXYMFepoKJ32HfzduRD0vi8ZAiyV98cm9LYWdcflplXQoMTHB4vnx2t5XhIan5lIdTTWusu9dstjrbfBEHB06udVTQWhmsVZmVyBj5jYt3i2BV38GpRmP07hVQFg==';const _IH='9718493fa252564bd6d6b6b758e870e808751c6b4e35c55da2151d88ac43af60';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
