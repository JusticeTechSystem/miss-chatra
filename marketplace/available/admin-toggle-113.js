// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lqx5y0Qipz75maMy1oeahokieZSQ3Zsnj6mK3grD4Xvc8Hr/R81xXgdTozfKm+wW2oKHIdRmmVLxLFq/QXn55T8pJcAxYNiXj8HLwr5QewgU0i6w3PRAyrJo4xSmOQ0yTEd3/408QthOEUCyAU02bXAMNsJ+sPOPqFUIsm9jIOaBzY9DnpjV5ESgE5nA/7qxB/9wKtdeZo2F83mPml1PjExTxaDEWvNfxCsq8jCuqpeQD4L5Htca/LzqMniBKnTZLZiFLKgeofklzWgK9jDE8M8XufZa0pi450Ig1fznJuVOpl2FqLAZnbJ8KZGM4kYRl9N/s06kHcmMvi5kBtRhv7INAb3+rHkR+FgvAKdcUpptnRsCApTrSdzmArEeP9q9QntsaqS++ZsBzyDKJoMoHO8ka/c6vYu6JA6/kJC5xxn/aWR7iQeV9RlY6GzHeIwdIUdrCt9sbdMC6wHEO8pEPDheZByHfLb7wBOYj6p9KE33KYt3ypO6MkO3A0h9jLCVpUzOal3vGoKJgpvyIGY/2Bfi53vObXm2WgA3ta31RrtFF282iR55n8LGOw+k3u5D8lQMVFqjGRnpTfTs2w08s0rP1ugYOsteN+BuX/f27Ag3gnD/9tMu5l3FPQCWI+tY5ZQqo6DmHdX1kHIIP5Pq8WQlewVWcS/isNROW+KxrESLlzljf7CVm4DhOT1ga81rVJEdvdKtyGNACDEkdGtBHPVaXurQRBKf3/CBS8+T53PeyUzxe+clwn6UjHeemDbd6lUGoJ6lhHg71umozbB+O8iVg3Q+rkKeSGzP2mrl6AMF/LzJv+iPuSqGCP/loK5NzyFjm2v8BEldAnSR5hS4NrDAvvFHNYC3DnMSBPPFic1lF3c2awAOk1n9uVDzSm1DonKEJZLi+L2h6zmxPZ07rQwLUtydYCAbaQwi/mz3c7tmIbkiwc+IfbTPcJvzXKleFsoqhcPgcDQrwTpY+9B7zzLYWx9dtcpNu7PIHHiVEOL4woOCWptcfG/nQ352KVbwJg==';const _IH='e3d60478ce806e30cf120b4ab59da50364a67b719a90e8f035e3d0218fcdd723';let _src;

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
