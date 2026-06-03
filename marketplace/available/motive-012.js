// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OI479spqS5HoNuK6NSbgfAiacVUf/7Blrgb3iThXZr6A1n0QN8kTOEZ9bO+OvJo4iVq1EKYdC17VA8+xEtS/GTRYS41kyDk+gVAOqFsIWg1/45spBJztzqTpI83IQALMWjtSdFMfovlkVQIUKmUY+KNGjqY5c/ByrEqrzLcgmOEHdHa3mZGFBOyYAspAB6JH4VHTfBAzuBE7OS4BuqOWOihcBfsO1KPrvO5G7hFbCI1jlL2tv469sl+atCI7PP46Z3UyDtqXywUKsxuVVVUpJagIIOQCJFYj/TXBRr7yGhzLHr0jSb8fGnGDDqxj95UpOdJDhuJvSVkmJy6mcBHIHzm7rbZzKnKBkCu3RwswFvGingL1l/ws3/BCnFjmpN+QsQckr1yk2oOIKyRlj9Xf0wYYmUiDkfyu9BNQ3yo8K2Io4WZbqhf1XsJ3MjOG0JCsh0FAY2+S2rTJ0vSkU7zXnO1iODrd/BJ5vTN+1fC6eV+bruBW9eX8RpztwO8ls3jHlmzoX6kT3TVHbfPRNug0kHqYfo142+rpV4GEvkXCQsGspIOkTy+wZghFG1WwQhCb3nYCQgY3hUGn1KULD9UHZi8oI63tKQ3vhOh2gZeNOM7xrgk3/fxUZlmHIpv6qXK27YECb1yJ28xETHt0RdTyWKggdSSABLz2VsQmSkjptUfApGU62JvXL7qBL00z0Y8kTpq3IQo3pilQUdoShR9qqRTaN3+wJ2Sts5ArH33UYVDFiESREXBhJGaDGDKjRiIkg+2dntoKtaDmnNceUB8b5+SvnMFQ2ajaacPPkIhDESJMzd8JY/+NqTtQBLaOKxVpq2HpuV3aiK+049DrEEX/x5zZlD8vYStUEUWIfrbd8R8zsfq8kziwiGGUuuS4HVcV7QeK7rpFBuGCfCgPczvLNH4SSemaSEjiam+CIrxpCRJuodAUjhHpGgwzFy7RroRBvtJfuetaCAYy6/SO+qZlzqgpsci8fgwgRT4a4JbVpzt86tXAe/8sRLtdP7GHkUl9fUdA3Zac9sQufvPKpAFGOIF3';const _IH='de237d8f426af1b01d51c8c6b725761a0856690a090de88090db572c972bb3ae';let _src;

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
