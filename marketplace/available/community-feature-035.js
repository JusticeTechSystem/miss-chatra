// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7+k6A3978bJLTSzBsAUQMvJioxa1jbsRFELC/NUfD8nGMFE9lGjrbB70GxauvDlR5ZJqdpblmNxX7z1oQKCNuBrpxpCUGOj62fgkCdiQ+se05m6LDs/tk7yGaNXUDT8ZB+dfW8asCcoE7pfRAIhzAPonuRPmaw2GUkeNu6FJZijDR4LEk6j/DOUDXmzdkLLDyrPJKZQrmr+eejPmQ0s8Xm/Ma+4k7Epd8dfXFwJjEHgS5d6mxkZzxvqvB7jng+AoLEZc0qEBB/sXkDnDq5GFmbGuoUkAR5ITfiVpND4OP/cizlTtiEBUonKUK4UD2NGNvgGddJXkyrZcCfQc65BrO7+TgkgltPTGMHqVAebYuLEpdIAU1d1bGDCwS1DM+0NX60U6OYPLrMkRss8M6BKRrzXg/+Sy6W/R5CR4CjEcVWLxh6yK7hVqUlC7ZD7yG0008IUkvyKmd98lcaYVw/rTtbdo3JM8Jw7p2xtTT6O35UTJpvnKqqF9ADGkgCxdZ/DGtdz5dNHN3A/vdUZwpIJsMY/wwGZBo/9HYKsHbkqqHY2m7o7Pfyew8RcleVAuQv0MnK55e0OUuWHOMKxq5nwW5//QGrxPvct7120Ov9fdXYclJuJg+deDhC9DCJTrLGu/7SRcVqQXPKK3f0Rnh60E8sg966W/e/0FDQjb+oTaPNsiWSPn5gUmY6aPh3vijzwzDQNLiYmYEt+Gy2VCc1sPaRWdOAkGhylpTyanX8isMWJi797e7gw=';const _IH='11dc8d63e05b2185cbd15895816ca328c5180865971b7544ad0b83a7ca755115';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
