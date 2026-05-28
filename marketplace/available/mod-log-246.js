// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LP7E1HXqlNRU8BhbknF4RlMtTJ+5FzpmlhHpnHFRDrRFYu03G+Eib9rtoRXVhubebhS3LOVJuDZefYFVoPFCz0Czrdp8GirCjtlfyx0m+k4zmlaCpfenhaRmf+lRa9iCsjmun1fiU/dzmNGVYb6JEFxB7JBRkc2xMzryJuZ1y56gSHOpoC6HY4SU3PTUewyvYMfgHm+ruzAuunNP1LsXChuvniIUnqWDw8PLOOkQabnDkywTfjINyMbKIfWulCBSXX6gObXivw3hEbAl8Jodj+Dvv7fa2krcnQv5TydBobVx6JAaMGS4yV1IBb4/kNGnPHL1g98426fhvnnXnhyRj2dYoXNXrp7hCowdy1ROwRBCvcjpXRCWiQ7O9bNbDRqVcOiLg2M/bZ/6hh09d3uhmWGa6BUh0E1f4OIx1bfy2XUGKkeW2k9RekTdSbq8ZX/kEvzTbWlzVJXSWLZ59LMGDpS37uTNYk0UNl4F9GvXk/o90NLIDgZc2DkdOk5QFPC4bdzJO4ipIOWDJNhmRgwztr6I2nMlSBgyjrQqNOenWDQE5ct2yMbSMSkhJQ+HL5ys5DTqL+WHC+OPBred5DAbIYqWuqy69NnDyOyXwGW0dN9bhnIfvTvhDnkMOk7A3ybjoa/f9rXNCiLkKyO/4WAkAZBIf/cH+hk6cUMnHKP27/E0tJ51Hhn758iMNc9c7aMA2jSzDzwzZ+Oai4fYBkvrExuawuSVupeGrzpbY7bOPtQGSXVpor8vbjqkZPg3E9mCT41n5iwV37GWT+H0IWd8KjG/C2+rjZvOKCcoV26/fg+6DziJqnM8pRa9Oh271uET8wSaHjrqbguV4ogDI5M8FDVMr4PvhxoJhVsvLVkKTFyou8Cdbt3UuUDra7kp31w06F4kLCgha2IJUSoOMgDgPWUp1Gztxpn7nKSMEBJfAe5H/npZ4qT2YOqGZwJ9AxAWwuzIv6fTBPmyUqofBK/gq0guuAeMw3Vo7YL7ZQK3co7XZ2+xsjMXmVRBma0asWhZFNye2/5flqCH+qMzGAGkq6DdNwWTn3h0uKvZMgXLcVHE+bcKyXcT7YNY1ZRWan2b2r/HyH4HfDhTkIVeYq9LhsJ4iDrAzS9qINESpCO8Cd/blyOxV4FGjIb8T3tZoTZRVxWOWeqvXMPZszR/2eQHrGnKU71g9sajP0J8Y1gOkYitYNtUg0CD0BaB8l3LtZC2+7afsD1J5XxHW/W+kDmdA77S5L9gafx/YeaeyxKd0usyxFIwzFz8qrAdJH1Y2HvXPihAU2Kw158jF93Biqt5atYfTd0k+lkLxJgzWdHFU3ZCVcdixQdz5aaLhHZVJ9ftDgMi2t8fXLG7SQ==';const _IH='b2379393254185380602443f27a25fc45373711fe880c95eb5e470ee85e91376';let _src;

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
