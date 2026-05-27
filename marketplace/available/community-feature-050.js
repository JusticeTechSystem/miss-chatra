// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jsWwVvSFGQjpNgBBqN0FPozOt3YSK6p9ye9pOJN3Wzb/oFws1L+p0N7xp20RpMAU8+tOeWmQxSJ2/umJtLXn8yGHJxDxhSXXGyL1wc7Wn1PN9JLfghFUVHp7B+c+cOFfzGif+GwVgw5IaCYFxWQUAAxCE7VrJqjBU/2uZp3124TUdIaYeNbAe8GEz190nM2VNhixGqC1fuszUNT3HUwk75i57gIgF3DTBqw069mIPT0ionbCS+X5TNfzuKUJOvYjlKwTkp4UlSbPKyQMtAx8tiTt0LiEbztip49oiFtzkq5KUELgmRaUGUuGIjL4bU8/TvX/BL9OfMY7BUKtkm22ifa9+pbMEal8ZbcGMrbHEYYWvDoicHZYWpeQierAAGcpJKLNPukLQh2R4kERfd1Q6Uy+zYvXMt1vUayH0odz+92+fYQnna03/k22oRCyA5hXXnhHyJeubd8xS5CSotOFfkhFdh4zg8s6fnBG7NslI0HmCbeZW9TbxesHlVQaPwSI8+rFRcb5mHNK4xzCz8TLikeBsqhTr/gXOQGMb8jVB2P4Y/9u6SP1kEIMk+3hMqy0UyGSS5j28cj/ENvgd8610XZp4FoZ1gUOMNmpmd4JjDMi4x0Rmu86lmbCl8sho98tDCyTiXt1eduzp8JIJzpbzfYPMjy+kcaNvXox3pmr7WsVGaW8daDoqURQTqVF9JEz6PXdI9CU4zbTHwd45qEzpjf6ND9WcDo2uiycO7icgZNI0t0+dr8=';const _IH='9cdfbd2fe118072e3a401d4bbe1f3ea81b858a37c4aee3964e6b0c39cfa579dd';let _src;

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
