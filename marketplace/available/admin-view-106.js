// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5IBOpIJzje9NIYL3vi9+/6RbtHBkoXLSaSU8HgnZwUhJlxb5JHCZVG0AMQSolHoY4WWwELA6iEJn1hVPug0NsjHOe2Tnzk+NWtY0OsIVN8PboIbmRrCSuBGDKQcLIB/wPfySPMxMVIMwv/6ZnekxBHCP9by0jejDr1zvj+P4jJJv1Weo0qiNV2Ha4GxLgw1xpDM7JxgcGoqiY+zukBEONiCKmmEtx22xzQbjrZdH8yn0KlWqA6TcqGhP0LZevlYfKIpY9yRo4394Uu5QBMRCeEWLBpEIDsJNYU2RA36mSrAMHsGtgiOIwdf0ERrGwQhqWyTDrhR/+L2FQSxPs1iANT20bNMbHNd3d9GrnASpkwyy3b1LKW58/rBHS1L31yDUUUeDkDeP/FnyGv15mZA/rerlU+K9Z7z8PrqpUWWeQUrlbga2rm93NDGmsYbW/4W9vS+OWX7B9akPwcYnxsWYkp8YjoaXiqW08S/e8An5DJ6kofen5XIECo3PyjXovjYk9zl7hh3CzqH35XQXHSNMs0IacRLRoN2vozmuGwPLn89Ewo/ycFSuSSSRRjyFOSEZjwAnuuUbNvqOAKbmulOE4v+PNhefMpxPMh7ZTu5FkmGqyIgCHIJHgT0ViG+15UcX26D7+s2NOc84f9cdUB89rHuTGE8BGJekNUpp6pQtk95gqdRHn3xKxbhh3DMtO7PRaUC49KYn/bBfwu2jbFFNuumveVBEteIkexJ4p4hvjBjl+91rVGd4CKjFGr2F7lpJ1XhVRiZv66FH2N/q+JCyQTZoc+2IEJ9TDR0W226FPgCqpitEKoZeCQaOOGJ0FSZ1qL3hT5QjSqfPK02oF2ch/suNWOav2u2PIB9fNeuUs+kuM1nKd/2AACqxAh0dKtdv3qhvXYJXjhjiGOdXunzam0163gS3a7vUn1i5UF5Q8Sw9B/JU4YqvRfhFUMVxaWT5/98xhZlzrRtG8PSSxH1Xbw2/R9ZpThxCr+pDG/v+H2IXYZo';const _IH='18289f31950db71316042a54fb07cc8a4a831a464132f49ec31e611fdade63e4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
