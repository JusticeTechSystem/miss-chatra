// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KPLu7YC5CTeB4jYRsTospgTari5/ZSLVqLzoMACZ85Gzskm9RAm88UN8TH7MV/QazIjkRJG0/NmfRgP14iNKMmJ59STstDZUAbD0GjiGT01QgsyJjNFu1WmhadQJZl1s+T2TzPboVFJi4opW9VANxrwlguBFps05gT28C6WCPSbJrhejrCgCZjY8n86HNbzjYMaR2KwwD14wRoBk3fCp8C4ZS5ytdqBxl2vUbufTUrbbH1akXosHTYeiaKmVLUHnPs1EvXNcOImw6CRzqXHXZZDbhxPXIaxfowx2Y8Gybum4oEZUQwnDtB1D2NvPaGzsJcDV+ZzuzgeR2N78U5N6eCA/dP7anLN3ggPJtrNLUB58QM++TWk88mfZs2ScWpNuSczfcq9lWng6YR65d2o5m5BQi6PDX9VODRn2rvuWbbMwIKyFqEM0fydyneYlq9QXE3LDMh1PSPvDcInE0MZO0x4UN+PbqxoVjfyC5Gd6P63vTh9CVGVCJhYpycbnQ8fAzLPMCnzv+KDiCJ6PxqANsESP+K9DnL5KBwaUue4bq1szOhOQ7U7f/DEgutzMoxfX81LA8Hn1Xy+a8k0zN8jGplo+phSSe8UPGm1HAuFnHoklPy+579XCXvFiPP7iPUjZBuW32bPpmrYvPBVd6daK91T3iNGPp5isn1ggMooUKDcXICrGnT6FILO3TAE0ADuTAw+S2Pf7YpUoXu24/W3pB7sMiKiteiKzHBvUCVOdBBDKgOcosEZAUmZTYa4TRLCIV17x0TPATOUpAsTKuhO4s1hDIevwxTzzdM32K+DbICn9Pa7GQl/3IT6czXVJURVzp82swNb4mHWymm6nRTbWtCgjDI5ekdrdVn5AOf3izxTQndbajrCBMBdmDCvTw1oRgV0vXMy/LGAF2HGeCvB0u9h2Y2rDvR6fZQRnMf67hTj9VChwTqfQUMPFn+O/kxqk/onRmUPuV9YMQ06qmEjhE2O4LwDji3+tRrrbBXHepNrbyzWmzb5ROkaOY+NJgN/scw==';const _IH='8417beed19c36c2235f6aca0be8f05e5fbd0fe03f8d933a7d05afb4064b50020';let _src;

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
