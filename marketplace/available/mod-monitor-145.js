// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JKfVtPDDHqehtmCKrGdP1bACsBPM3AWvWprjyTu6MDJu8ItuaLtWA4NWF9NYLiUePvPpRJcSd+WQmfyg2Z9oYc92InH56L/osvnyq13oK71EfI2eZPz8zK4xNbn6DCnDe6ytPDdbounRe6OtN4Xcg0orhSA5S+RNEVVDO8aKIoVBX0KJrrkAv79xVX9nY4CGKtU20uU0fgvG4J7iSaPFRxNqUktAucx/OZFJGeHE+WEMNPNraHjuzERLNOLBUrNcI0GG4XWeS70cG/6bCadqZF28zfIDBiOcwefbEJhvkVFubhAT2W9+wAYXlfQopr4FRHVxzjU1ANhNC3NfwG+MUj1LBQrDxOkXcqfaPMscrnKFmw2xCc1NZ4WzHPOZj5f3BDAf5iGKdv82orrR6Xrv0Y7+lXg+qt9BhNTs/i9Wr6wXZt31OEOl/A0s4rOtVh9dNj2m8OFfZfOW9rb8wPEibpCcugkQ73/FgsAV7PPTXNfik/YmR1Z+PkNhrcrI8BioecQ1lyySPQT2cukmikFHa0hcVd5wp8MDcjzW7NP4XZ86k5rExFeuCTj1nPZaKvG7FJ4QC0HydXzvCXALBxX5a/KfRvJibTvCnyq4BffvMqtGaS8saiIlnGhekCWdcwSRxh5Uxpo259VpOj+5uIbWP1aMxgojB396pIRmKdYCo6Ozelm0+YSMtbr/PH+i88ISBiIW2OJK6EzN7Ttgkly0qqhe7wHPz+vpIth0C1eYrzUSO9NsFwKtqwX1xofnWBrJvV4oQEg6RSQFp75AsjYdqCduA/f/ZpReAV0kRSDaEHcee+C5UsttMEbt/0OKVWEb7OEOPYIpQoWt9pD4Ic9g9bM7dGjdHb1Ct+eyWDsjimZaWEHxytxRZGtx54DzTXTqLbk5KJL6WO8nQ2ks1s3F7n1y4DdKBuczGL2zAI0Uko5icq6OlV9BtNZ97sYmrmVU6r4Z/0IcklU1K5FoEIdTGhS/ywSxsIkk95YJZjMn12P+jC+BowGpy0keo+Nr2U+Cf4fP/yCGYJU13k7AtV8DpFpoV131mzFigLo85QpS2g4BVRnMs1k3XouPJ5hPc6z40HuvtlnGV3p52zLEWMwuyzSRpJ+NVoJLGRwrjjzrXphr94/k+jTxBeDEhVSqEnf7/070W7Bh9jsv18UxdrBnbsMEueA+2zmwWNnozxGeBPNF2sFzsH2hWEfwOkaeMGbgB50n81kBCkjwFyo7sGHfH1c6XBE+wLJwL7KofzqlWmmtj6XoPspXxjONstxcsiu1q+uB8oElofzsnlxpi5SnvGAiYqTs6/A3Snm9s2pxl/PzQA4QuQyVrKGw6a/RXLtaP2OjNV/8a6uSWOiJkHCi/J+E8etBh7L7pSJrXTthe8emvtMBwvU2mbiFh/+4ZVF/TrM=';const _IH='7a11a4c111401b06ff7893622d0368b43cbc0d62fb2b192f1168422660f86997';let _src;

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
