// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EapQWKGXuYU+rXqXUQkxufwe9rD6/+Zmk7hJxCpN5yWI31p1ge4HvPmA9Xzj1OSo1HrigqbUCTYZVVoyPI+A7s9Bbf0DRapv/3EtMuUl2+2ro25E5qMxs8qKJ7KDoI/EcNDQYMouHmypX9dNGAtahAd1+7zWoFuYrq1A1bkxp3ih7Qa5ejCTUkGIw89xks7ywWc3ftM3nDHb8r4yJvA4F3Y8BLg710mi9osiLkRvk3X3Xq2bLCp0ORYTSmM64Y3Sa2Ow3RppZh78x7yVV0clOFh5NYg7OypkaQ8sDXgHQcBJy7wYfnAakBDINYftBmR/zH5B0qtTGhucMqnJI1si7l67OH0fu7C4sEbdDgn+kTzvrU/LlkKw5qWPtr/JChycDwTJxtuUQ34kMrl1H1KxKSsJM9R7kZFD6Ov+lSnKglytd2MvdPdViu2WPIwCIRmvIwbFOnO/f6W/IoGjvzyy7HsRhh36TmXrpf8yH51bc+CU5Rz1t2WynB+QrYoucHjCtapg0Nb66FUEWixL3CFuCKspFiA8+D5wtgD/4tSM4p9GyOkJow+Q+NT8T7H1rKA6u60WDvM4FZfMmw4fWwJ+1ldVZagQJ03r1D27Df9Bz6PX0KaHeigoK5VEr6tApOXWxgC3o7PsIIn7xX7ISWVioZA+WbnnYZ1CZbCb8jlcEBdpBtAv5cLiAA9x2E0TGDsOq+csVR/Jb3krNN8eVGeDOk/HqIVbr5GLRtYrWYTdBPBzTKIcf0gK6ZRJPMiaIx4wsRRTf8PhjdIUe7kyLgUgPDCF0a14e3GXZeZRZNnx3KwZdpb4zBP+o3PL4voS5s4ORruC/npsm0Iv8kK0+mEuyEoBaxT63Xi3/tdCfoDHEt332GSNJNsEL2F7RkMwP06hvZMzujNVCBLeQ83txNDbiWnZtHJ1sZU1z+0d3/IJGeHP4KHEBqohEYi0dUPSQcoocaycmeRJ89sui6+2ssvSlRDh3BgABLPne/VoM5v/NOQ03Fe4PYlUUIs2X3DBw6ci+YFDkqAY/lGv4dAcN2uPG6XQ7CMiRKNZmZRGy/+iom90jVaoLFmn9mIDU1XJTOEZlNTtSKPP6FtA6moJCzKE7EctKIoupuNnRWIamjYm0+MJ8jGyNFIj2X4/5nIysB/AOHeKHMv33drpHJfFPn1IPdh44BoZX4FqT7YDHy8ROrvsK7T9bDWvIPrLT32urgC09jac4Q==';const _IH='8ef3eadb6f7176d274376b0c0c70632e053ee890a9982c314c934c19ce5a847e';let _src;

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
