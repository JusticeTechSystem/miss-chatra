// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCCsBHE4i/k4Qn+GNOHLfmd8D/O+7OK2exZ3A8LzpvIk5vzU0qziPEZlqUWr+fedeo6Thq7y9UJhRrMMKjT74sQik1/e4qOoUn8bEEUAV7Lbe2WCghrsLIX71lWD1S5pcBLGjS5XeO3FUHrTAOn0/bXJLbVLl6clJGY/f5nnr9s14IfNcPSm93+Q4fAunM1vFv5+6sr7vLAODNlJ9TZa09jOkwKkJSiDpD6UR3YpJK7MCE2cXZaMndDoChF9CjQjb0cRg2zyXIrsxOviCUW2vAmHvP9dnNwBW2mE75dOJRhqTj99JBC0E37/worEbN1DsI2b2u1Xy5obGSLGQW6z6RE770FRiWnWeR4xLsKPhfRMVYzvx20ejPExVxBk5kX1wp9FE3NY8X5W25APcTeNnnR0Kqbedv6KVTA93iqxoiGuC/n9LatcaFcXZdc06Ykrc7YwcmqoUGmE20q/j7g/F4yXQZB2QSDhcjkUZnZlzk1XAN2RhQvOpU/RBL+ni4166JGkZzxgHnzTPOZlOirBhYXcZf/iYRaPCpbGdwk8J25xnt18DU7T0vY3bsufnlrc/fkoYgRNinz22580mKWwa77lQMpUsZYgZT2YlGDZWkyo2PJdwpozaa9aVt+G8D8ipAZxHF2JudXoRkhCqGMLFqJlv3mH+DXZvhZqy7Sc1E+Fzzg3tl41fsqENYCs+E3bALNKWcq3eMo1AQUcbFM9kgbjpUbUW7m96nCOSCElBdkStKxOiP4MbhZZzyfoYenRYEbI3xDDUbtrkboeaMFIgT6r5iBSjVbNWa2U4gb+UxKNoPTgcX9D77AULIDXwr/67PwqyTvUcfSxw3hwcVW3mBzKgqXaad7vt1FSPFu+GMLgR246RATwJfXve2hQLFOPWeKz7/IbZtoIOlgOfFpSqUmqRALLR6WtnVSp/1U+YgQGo56ggw/XcN6TQu3rQ2HCHTxrjgkF2zPpVvP6DgFp+5jZxG1elImzwHt+BO1VnIQR1h7rIQyUBAFWorP5aHGaoCbevaGnJJEq7ONBpmdxpAEl2Kou16d6ytk7v4NYjxePDIP4WFk76dvzUAoU9QhvxW9jdqoddde7uU8FT+UeOPORAdIcpmgAsCwCOULbSIiuMHYOAnGWX0CKwacab2pX8sNZhI9IuuI3lu1w+FLlNUoK2lU3F5EUL0PrKWzcdG/8CjPy1aC6elxIWCDpV/3ANo7Czl8FaVOUZ1tm5ozkuN395GufsEhClDfgcwjAgtOOoxjPaQ/sh//J7B94EURR0j/yqqrO9lxSTsE6vYslcwO6VWP4QaYrO8MzmuPMagHUF+tm6OmwrxHI3X5N/pKI1kOoq81CwFtV7hFJoFdg5fI3FE9NrtzfMJlImvzlqt/k+JMGGTkwm7';const _IH='3c6cf1bc4c13efb5e862d32d52f18ce2eed36cf1a58ae1faa6629b4132ee0f48';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
