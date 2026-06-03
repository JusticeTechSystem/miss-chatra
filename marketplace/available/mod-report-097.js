// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t/OdxFjKxQiT84A00qr/8YcGq6cETZGwlX7an5GBwxqYTZitVl0sm5Nz97X0e3zhxPW4tW7cG5N5J9XsHonMxN/vrkwwkby6xecY6ekA72OBVCjtICDExpASpdSYuitHYJ+7x7do47Lljc/dqHG6qet1ehKKtbXcEZ6rx/zimTnMcrc8DG1QYRQRaV4CUyxyGDn79tbW/JaqrXJR1cEDGI1ivDmZVDYH++ybv4KdDOg2UjX4ZCEHFMEJDk361Vn4cCA39OSpwZexBDwBH8WDqL0vUN+3UHEQmYTS8Ji3QeRcSb4U5wP13VPyunrrDU4HwanuQ+z5Y3uKJq4y/feqBDiAUmkyTtjz0Q2t9zNWKXH+jKI+/nDsra5XMmjKfDx7w+hDolBJoDa60bI3gBXbsrM3Yhq1zY0gqwzeb0Hsu5cvlxMVoiabucIq5F0RcTUSUF0w9VdiGQ4up4Gt9wzJOuPGNHOkAmG77KQ8Xnr4O7jqiEBLS6+sMKllUv8bRd4Gc22nK7l494paNgLeGA7b+Ph5OMWaJlL5LtqRCAgKtvkZptBcvJ0SABDuV1+6tn/K5s6MmbTCBHg6QzOFWsrUiJ0BfUjpJs+bbtoZaF+KPZLi4+/+fGh9OQ9wBdvIJ1DX+AKaXVHZjrLXJIdVjZCCVL/x/eMAJcxPbWXR9sh1N24WZ/ZloaOTcTWTAMRq9x43LODMtWIgm1bXNVrNKGfrPBPygJ1i2uLNMR+gJeMtBMgKtq45ZUPVfSMmxB/sBWoIuPGz3c3sen5TSUH15oDc/pPKBvGz4/JA3c+eYUCrBUaa1sPN+QfxNs9vhgFPho6HWvvnaBPO7j94qnav/iyZ2RJsebsc16wqClkVtss9MBDesl4ju+N38QD/RV1mBYDOjIWDenpdlTzeYngM699rtlSVyccRfZTQ2/bW2vbPHKrwpHQJdVorx2Yf5lvJYKX3C8KE+d3XW7ZnL2LpJuMiRKjIWThy7g7Ksaka1DZAlDdLyuTuWL+HuJj32/whXYkMZw5hExbKqkFRGRFEOkaub55WK1QFMyYpoVTd+M1oejYxl7MVf1BzvV4exAWbBhr5zELiPZub8Nrr55MeS73tkzMaLJCrc6X+fgCqBCK0AWTQKTbcX52ci2cni4lhBI3i/TpB2gqGFefzCPD5GcBNKjmCr5nm78TCmYSAt2XRpkDNrbBZ9tntzEd103DC201Dxmp4T//bMYV3Mo4AW7rpmR6YBeYGllWq0nQTXd/7Y1DGFYbTbAzUmIBChnCh5UiAC+qe1ciB2/x+eiyZhRifBCN66IZUuLGi72mKYxyls2T+gXPDEqnY2bczfREzO99dDJDVKExMgSnRQej4Lqv18D2QYsWN76mCrBLEGucW0ROcjjc=';const _IH='5683b053faead064a837bddfdb6e74472ee713ccf8a2a11c5d582668c4f50d45';let _src;

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
