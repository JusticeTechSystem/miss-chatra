// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZGDcppddphZ2evbHN/fajJZJq/TdPdef5o/A8dTa5YbbRp3klQVi+jp+edPwu4GLBFPczoPZ4VOUtfNRZgYJNHpzfEu5mT5887lYb7EudkdJRnZKLFiKPq7bL0yPp2Rau8xuHDHTbV8fLbBMqiYP1w7gtHnnmH0Nuv9GtDsC0i35sYqh8pMH7SJwgF5sqRh/hjyiP59bZZttioQH07eJBRm1co6zmnrUvJXhd6l4kfv7IfefFc87m+g3SJ/vH1xxfEymdR0a2UJJIxf21kDiOxycYfVDrj6yXsxwneqa3YWnsAqYxK4RETTX1+U0tAIJuSvox4YwRq40ew0my+iJeMwZnlgn44BgZ8lafsZH/RGDBVzvgtTQVLrk9LnqlmMzBK8KGMtH6GsxqxbZrsChJy7UGE6mVTtlQFzRaUG28glO+zyRFGDMtvBOE4BFG7mChK0kmnMrb9ct/3TUtPcHBpFLIFYuAGRKBZuuL7iv2cXbSKVg0GEpfipJFYaw44nAt7przuoKZP69MnlZKODV5R3zxBsGDpJBRd1D7o8LkamLbvJEuj+s80+Rzlzna+jOdqTfpoK3tmXj3L4tejNWPtf8voxfCRmOmC0TgJ0XgGgk/c0gunYSUNlWtYnlWyhxbZrC8XagT3zLVVNQqpnLSKTQNGbmgu/t2GEC5knNECyog5K2s3jza4oVAFDvwQWXRzhHHBMtiwSOb/MYQhd/U+ud77HWQF3wXKZlCS7bunigD+pMVRQYusmBCzRCXSL+IhG98MZXPBedwzSprnD9JpCgi73asnoHt/SsDp83PQAPlrYswlIXmFQ/dj9mUDiFG9jKqtv3yhNZM5tygTbN4GQhBUGI7slYRkpE6jgktkH7ds9kIdA1kgRcE+oQB0+cmXA73k3F/XaN/GaJnqvjVGGP6DXuh/zGKq0AoWhMouaEpvZfnRyl2xFI1rJ1wb56uOwykrv+NbcBqaND/OJ9a6nG9OFcMNEraIX7k+XuFVm5N0SRZjLX+zcustv1FZVJM5XMO7NErW98Ct2IF67/QZBAFAykNzE30Der3xiR91gj3A==';const _IH='6c5db868d9e46ef9f5b068bd2c71f8d88517afe8677d57cee2d3ce81a68d644c';let _src;

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
