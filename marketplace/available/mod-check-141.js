// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sPAD/xlp7xm+HcMc2IY1C3FLNSSuvCLp89hTOZ57b3uOO5bPn83OFrqbFGZcTi059c0rKyREJDyFj2oKpbyaZbLCfVZHkj87RUK1ixe8/n2TpvQqS6DWYFstBCVmvaTvS7AJOAmnPYidiS2Dzan2DjKapJvBsik/dLczcE1nGhnItbRqFE1+xQtN6pL2pnDpv9YVSJGZhAdzK/wIOZqQLpTSigPkbzaIcH1qthOw1KGIN5ArLjrCGTpQXs3/N12jiRaWZOgEKPcZjMK8eQBroh145rEuC3qlG6tyLqfQWQRyYZXSBWPcOJrMeyMTDYa1ToH2q8+jCYQSXtp2CaPt83kLhyl5wSOleRjngUYDjq3fJvVKu21ijVXTWRwwkYgY+SrJ/8cP7txmndyHRuU7j9DytFWQdFJscXfZSpud1Ci2+EM7ht6mTb3ycTSOGH9eIS7ulyjspazPwEcODRaip5ylJOT4mA6jotEgjF+6dgm/aMRJRMgcwZR8PA5+sq1S2sb6PRE1oFJkqdifMUUfLYW45AVkEv1dzhIqMO/7Y17zxSPD3jfi6PY2kt5NQStFB+0mwwbwmsjzyhFqImbZr6PuH15C9NdNQrfJApjKD2eHGB8kvRft37rzLS1InfTZ4+rxZ8MNYsBUeF62M6RhLPuphzrIP3CCtVf6Rho7RQZ4B3ZzyXC6veHv8BtSI7OlTEx1AlgUbdeKxoyPhL/lQPrNjJg+C8JWOzsWn2ojHQsQAx3EwomoPc7CwvInDg5E6yBwpwy8AAKeX6DyoyTA3owXnrC/SXKoQLJ+QcH1AuHevFXbygub8lvZtVr8UvL/F0joG8pGTNBJkIBhSFmv2e8cNT1qc92gsRDl0i31vq9EHp+9/2jFGFhBlxlvyQOcoEMC6/u7au31gGr9SO36mYpISWx+s1TOf1xULrMzNouj24nkb8qTzn064g/H/f72BnhE9EWQZS/4AwNlHu/VQeYA4GxPDLGPjGAY0jzOoZXXhwTW2xcHwTE7+ZJ2oVstUiorYjr0ueulOpY95qvXd1hJJqqVoFhanS8h33VAh/j8J0eWd1ve0LEZw8ShCSBDNuPL4OUD2tdTnqnHkSmn8BfqnqOZSoUjoEva1Smn+SmhQqujFzU+oxiDQCEOtmWd+XdxbvFexmJvfkO8qki0tMVJha+KPmLkGG70a/0P//LXvWDJDbD64tySIgvFySxJFlFOi+AZ3TxrkhJgo+uzPWoZ78VwreyWHuKAmd7x+VV46Q4tPEqNChdLAZrZtUxEWpYYJ1si//uKoOCsXIy54plYslmaU3FMlM9CNsKQxEs0IqAxXLgCzncEvVN/hF/6RnTGNDnFhksZioWyGJSRhY370ZGTFX16jq7X1bDZ';const _IH='b872e1aa69b30eb31e217301cf23e4b8ecb965290f993408a5fa7cbb24292240';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
