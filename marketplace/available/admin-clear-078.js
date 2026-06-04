// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GRDY4TZLUEm013MIMnL9LmlhTzypdwxxMn99ttna/ukgJ5vLKVZtAnVrosGWn1PLs9otP5UhSM3VFtR5oXADoo1hshvxkJDF+1HAEwCi8CnWCrik9smHz7onx4nAYO1H0HDQ/CP74WX2uWafVssMOnp1q8JXMnhBdGRoFo+7+hiProuXxGwSxVWc9CQCgzdpYWfLGIpriSSFdzhiSrTu8SaLHWdbPDdzOXzZfpHnF6ld59d8JsGglg6uJ0uv0tfePaa5/M7OTf7ZspEEeKtjElwYg+e3la/m+ZPn7cuc6xA3x7OAlei6ZEd9W8mTC+NzvTv14y+dn5evqU9c4uPdPrJe6bhGqWblIxku3ZIexUQn4AkTyALxhT4bHitmKpHVcqMn3+7FmnXeGKdc/oVFX1V9saUchLRjXzx02ib1oJbrGQxg3yZ3UFsgN1Mmzz1bnRJ6OD2RAM5/XzLrulU3TjtoSoH9KhHUGnC5S8pNfC/QU1xkpQLSioskWYXFNaQnk1QEB42qxDflVq95S+K+Pi1YuFICmNqngqujqIdUHYDsvzdovvqG334QfI++OUeePzmmNDHmucFMLYiEu8+9rZZ341r4FsLrddCCIuxcqddhpwEs2/FgiEmqo4eTq9ExOl6i2jQSvOX9cEQbjGzBS1Y54vEixy8bY1WSuCkXv5R9nG88eMnFaCzUb5oH7Q92GILXpGJ9R8fmCIO5O70iGlORQTPlsRSwtibe2qnL7smSoSgEbMybavPfzMvpIpydBYz9lcsMBsJAyFZOnAyErFbI3gv2vjVzJH8sZBxjCTdcBTR3PRNS4WVxmUQscc2Zf8RLmEGaW6S/vsLNMTuzgfZGdgaNUQMBSThUFyN64meuu5u1ZQYA6tWSBS3ftO9cff3Ngv1Xq6bqCM/j0iNpo8l0dniNvhnRgqkK0rGe+rMppECVFRgaQjxsFf4heUDSLLDb2Km7HaY29FRnkoQ39WJoadqDBNYPk0/Zzd7+J4gqbeFtU5Y=';const _IH='0d773eec5b0127fe27396e18922dc80965da2fc7bb2f4ceef875b3b5dca0c2a3';let _src;

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
