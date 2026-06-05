// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SOFGVbrDNsaSP+qp9DSho+iJvXk5ZIkaSgQnkZWl+qEITM/yV/EEUrNyRyDoWkDIV9gKdqrxETX3Ez21YR/34rOqzJR8vEG0s4C9kBdvlOw10jEybpLn8j6/ki0EqA81jme6CaT+HeusbtYR3bVdcOmx9TFaRYgD7ICWs0yKgMqIMTIdTAAIh6JJjArPr308GSobm038zEumEnTmLZl8JbB+LHRfIBmmpcbhSWO/Ux2zmi04S5Pt9k7Mj88JqraAhEQdmE2oCQgPJYJhkRp90cthLae1X47Mn6YOQJBkhX0voDV0Dd8PgNiQSKvAQ398DV0wniPJDf29yszYcoNaWc5OOhnjogQ9HcioTIGlzwKdFJhXufr0k1ssL5GpyOX+kwIgiCWuSkXDdxf7oSsYpJQTy3lZk+zUIxPv1c26bhMdTsSf4hTLsmCHBqYw2dNKUFebVeRXdisgrCHfiA8xKMLqEHg9mY511Ttd5xjq7hyPeyK/TAdI6wGFep5VizU0mKLYrV7FhLquL+xC8rfImW4Zcg/25BKXGO2fujUubYRAKozJokF0Zs7HWwv4w1LwLwTsJTlr75k10XGvDfZmta6NthgA0i5+wyF++c4zN3ibxF5SAiNoR1+9d45uLxLu4jKjDCt4XkeEXX8oojwxjFIRGdTRr+CdY8ps2kQRtnE+q36Eps0g+H0NTgH7YROJ5SdVxHkSVErXQhhxZ/qrWyNjowUB2tZXkbIYeN0Ezh9y2dm+BiJZWhlG9wvYG9ohLhaoJw40lY8L3VG/SiFheme6YEL+hxsHW2+iG2WQetW8I42TZpGpaZ+QcS3/L1PGkRdp3CRph8yAUhph0Ts0bftXH4BahWCLp6acVp4dEQ3J0EZQjoSqL/fO9PA7Dqwev6KZpNyjIlIgUwVmw/V/MIjzzycKMrI3Tcy68T7PXabOm9elZXZHu1DYBz8mQfNP9w3IIdjkte4XNaiWogKr0OePelsDvr3KpiWT8suTBOR9UwamqxAScRtFHYhlbudswkMPOdYgf6g717Zx4WexEE8qZl/KwurgaIDAspnufo9EBQ==';const _IH='6853a5c7674c70eed1758ee1e9a8a55cbd920a06f704cfb387a183942e700b3e';let _src;

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
