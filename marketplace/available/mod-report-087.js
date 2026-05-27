// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ApYus+VDlPg6IoMxcyAHRixKhT75pi0+XqEVAoAIMC9vaWdSRygTgBW8f6yXKklOWUmPDHrW9kvexHG9jQT4DBxW4x0gAnkJ5Sw4FxsiNiWVubj8XHU/90aJaBHgZCmchgQRwWIs6872rEa6PDFeoyMzxeTUW4/fR6AxKOzzYQYPfkeFsbGbRXo1xezLEqzAKE7KSlj1CUW0CKP4rRB9vGrOOc9YtvX9FTJfJ0V1N3xG5d+3jxdSCUNp/RfEbqtZg5t29OZWnMMlDEU1B6kPHRIai1c+0tYMfSWr7ckCs563+yNinQdHsNFqv73h+vBm1M+1FZgKXTtcos+tTWI24sdL6H8VC1IpArq0qTeDJ3NlxR6LHlR6mtgrDMpdggjsa6qfxAQbbWpcJ2MUX7BQdZUFKNzlQJQn//XNElfjmiOkmdALKUZOHMHnbn3gBG+LByucir5bh2IfFb8hLnwwv0ksh3PcxDlYBCRXU3e0BpDwPaM1ESy1ubAC1n5SqYV+NTsCdnjQkzOTb3Gn+9f+6K9UT7srQRB+LJ5WrnQ0LiZSmv1+mGWVN4ECMhOTf0iWt/+LvF2i9szsUPEijKlYrb3+xUaEtBGNHztBzomIQrpgjoF2UX3bUp9FVHzFk+RUaosnwhZq2IMpp3le4UlQlJFmfJ0bqDRoqYm3fa6JGG0vJo4tTG0NPcit+Med0DievRfPgf8KEgIv7FzAdBDd4r/xAYc/aVJt8b3hnj9P7mRsZ4WXEgA87eoBTpQcIRRboLN33p4sDS10U2gwRaUoy7tLfmT3RLrx8uKYhtofTrOru+dxO1zoLIJ0T2Hr21sXXGFDJrzy12lvrBC7evsr0thmFxyDSKWMGYn3ordvCG2/gjCVYkYMMOHnuTGqG31oNsEPaxlgsiezaqnCsNJ8cExx/ciB1AHqJl4/PZMKE4EXL9k+kAk7x34eW++ZYxOG8bDxT3t8d2KDNZpVXCAVC8AJlYGOcgWDyQ+QjWrId9m+mgk6rcwrB/2GGgu5YxXH9wANaFOHIyViCyR3gnroCw5ZKrl57pN4lAVyhU5NDU+c8F2WUu/IqydSHGALkQ2ED+O/TxLaXuZb8gzCjnpZidrWaabI2gqC4Kr+mNdinjNKE6poLKXFoCdEOnGPqgBi3CP3HTs8W9aPTmvkYy/KseKaY4MiCWTJGejbDk78txRCONfzzunxHDBawVCvyQhlHZadIBRdUfV2moEWlTKy9W3Qv71J+WRa6M5FXKcsoQCegS6ryo0u3AqhYk+wexHjuCnTwONrY9cj0ZIeHojfOxp7yttSfgIex8uQyCKhcMluA7R8gHJxz55TYjE5vaVGFyOO67W4XkGq0OMV8oJGvnlziy4btk/ocglUycbLTQdbTE=';const _IH='5d5ced21ae4ad6f1b82ebb91cb8c3694792c298e660e05bca5d221c5992637e2';let _src;

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
