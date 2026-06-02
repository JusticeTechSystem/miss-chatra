// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nSC3D/bNfaaOGSa5X+5PiDcxE6uiPuSKgGvNMATjbN2UIel2dBCQSjdRU7fTZlqCveH1dBjW/lqsMCwJwuIuB6Dh5m+WH84Mtn2Hm6QW+67J2RWFjLwRrGUcFVBvTWltRLq2X15lHpIaJvMRgbD3u1V2uYmOtreMEoR8HRjNDnzi7AfNVg40VFKLieXqAhfuFH3tHspxQdFEhBuUaLh6YT33gcrCAqZiOBecrctUJtoFw2JyVGQArGsiXkRSbD/+tb7nDtODFhmlis/qNSVpgmUxSnFobYZFIS18ykDvuOsdtZPm1Nzw8/t7kAANMzta3u36iIIj1penHvI7XqxnwhMB1XNcqdHMc5ATckZoS1pvmTHgzbYTU39sapkgZuR9rbOSXdUk4T5kKl0zxoIyR+WR+dxYxHu4Pv8UifjFz7fFI6xCZky3fuw4Zd2GWlHlyEoU+foJBoyXC1UuX/qCfy/SqM9gN49i27ZyHzGhSfiuGLfe/puOrFUHy10sYizflBE66ymOYcABiYKW/34QGRG67BIQtD/3IuAReDlfnc0BZ5BnhfDcUS5je7KofrjrRxfVUm3mr5TMI9DgrMeuJ2/jQp8HT2BEpaQPdHaxntp+ws+IJbaS/bzShCcE111Y4mi5Id7z7j5zJGcCALvizOsXEAUstW6hEt5wsnxlXhhinctNO0ro+idslssGknnMI0FE9Xqt3LLrUshVYC/iUlh8ZO++NdJyPLRvgnIC1WzCos8T/2EwwNiprKhm2OB6OHlMSKXwgqZFtO/+pid95AuceaOZvXqZj/87FVnls0j66LTJLSVtX7jzmwwm7lEt/tWSrL2VQcTFhczDvWmjeh0IZ6Z9F/FSP9abhtq8HQnA9ljfISSJqnWfE7ntTyKgS2zdLyzMevzzUHyEQiFlkyf+QDQQ5yh9csZkTuwsNKz906JZK/jN7icVm9tLIgEx6kkwLrACawTUUtF373xmcbKYuMLU7cGVTOWmWgCsIHZXmSiEuKeWBqBz4Dw6CJa1sf4Gb+ldk0pH1W3s3eRX0ElWcP0lsg8xT7XgKeGv';const _IH='53bea4a3ff137436e4a94ed0bf97aff1015067611a5afc44333ce09d76e1b080';let _src;

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
