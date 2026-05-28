// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l+FnqgC/M4hR7HSAFhWN+KMnKiiwwHxyrb1c8J3rkDPHLafVKAyj2FDO6Ecrq+U7IGkvF9txSw+p50Bo0IypZj2/f74AyMVklnlqmArsVwBlFZJzbk6qzBLc1PRc2hS27FJ5uVGy6GGc/T22MUxevGDjUwfPUpFGpvGAgsHUhnrJfudFdJRO5cqxZUdfiVJh9VlLJY/qLYqxjU1foXWS7pf8BUt/Joa6ljl3MD9RVpXvmrTxLtVpq3mbWXiP6YvbEicxrZJy5i4KLDP9yJo8r/RGJpSEdkpxvUwxjReDTxJ2l2Vwcbdt7rAeEdEyg6wSQOhEQF4gu+SlETwc0d3U0hFUoBNyqOEJYy/QzrfqxopYVQSlTStmoAy28R3CicDWpCzPranHY7wtCawZFNgJt1I5NliqguayzenbdP91Dhx2cq2tZl9oQmWkNs6SbmqHL9aPMDu19kakI9o/gM15zyWpccgYt66fhStZNbQBquKJ+CAufZZcAtJiYFIY/8HVloo6l/GzaI1FMPgpVmk1v6ekIvmzhYX2b32Mz/n9uTj5J5OW41cbdGNBSSSM7qge2aZYXhnAYgrr0F19C9WB3LIWVYs56vvRHJjAouojq3rXyb9bkDrjFlc9RZcUQA4aR1BwjZGqhxrG0mOMi/MEIEDhE0v7ck5DTZ+EAM+hpfGI8NvWRBiLMlRAmdIoTqHsGsNbd5L1YJXBogjcUbg9GNmpmomQYjfxqzVa7YlCOTNR2A==';const _IH='0a40014ef227f06e07f7850e8f87cb7543918c1513e7e2e839a6c4da792ddcd5';let _src;

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
