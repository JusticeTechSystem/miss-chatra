// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzFHyBArkdEBtOxa+Iw7l4C4y1IJZLhKDCEbbl/K2wJJhoSk4SR6pPUCyqHKFtwG1eZD4rJAln6V7ipJeWNt6iKPuKg6WrTNHbRgvp4wWC+GbRXznQIlpS1Qpq0WSr7d1LwgIkfbMlaeLmG9lWYr/tTABVvnF4dNWLZp2qLTp3CnavIYg3pslkZhV3lVy0rkHRpcrFtz9ZZ+Scb6KTRsEAXD7ZBmeuM9EDXKrbOeLjw1XtvBNm2wdsWjxiQ2dsUBIGHs2wthCC3jGAawRga9Ah4vbZ9bewlEuH3bkcz2nWYTInB3YofMmPD47qr+w53VtgI2Qgi0pVHZv8D/0wpV6AKg2qGAHNq1L7Nc1DUmnkmXTqPf8nxdjbgY7s+WOUZMq8JRF6DCrxko3brGNckz1kUsH7vHqixBhEu6FYwCf110UIvqFtM3PnywN2siYxC0n9H0NPtKLUQ0biW+GBHQI8cOlE/CZWgwyswQT/y+Bj4y45IQE6ehYQCKSvMIRbxHsBAP7QSfCPRbrCaGR07I9U8zJlsj1aqhPbNidncHcpy1KemRQjTGG1Sb76MaDc5az5GBMndSQmAaTmFA8O5Wa1uIQb8CAas3vw6ZPZrIK1X5B5C70aI4fJhTpHKrO1z2RRmOeheiM9tBJsfDVqitH97MzjaTMGkG3/+5Kr0h4qFkt4p4DzqipA7Z8nYXFdns2NeJapW4w0ybwuK5rv7yx1mmVsBAzIOeRdT3smVajcnx5sDyzd3+';const _IH='3dd28d2c31212d70fbfd40de129362a7d08a620443037c5534bf9f7fdc89fe51';let _src;

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
