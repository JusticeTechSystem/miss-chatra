// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ISG6PiEVNeJB5Q0iG/EYT9sUPSFPRtWIZW8NIlVyUQS1ZmW9EF24KjwbW5wgbZBmVeVnNLUrc0lukwzYc0RjOFja/nEGR4lUvyODceAr/KNnIeFAHt+Nie/oG6bP8G4s17HGzWqi8OVzfLiENxRgbvCTivqsaN8N0W2H6Q+N73v03l+++uRGD1A548h5URIFVoCgf+FF8RXVjZi0aNgkn3aLBPV6s8R7+RcVs1xObdZdM92pqNpYARujBJqQ1I5GC97aBkFLbTlmPedjeyHyigP/YT3XGoRcBwzsPI6Q9Yiie75ci9dTDn1Pn1bX4pp3BOEw6jGwHkOBdJSKLr9GvZaynx/bGi2zsH5vPIJ7Vc+wsF5CKHCF0kZ4MIsV96vuzy/5lxlKOcLw3+PI28i/+jV5532ktit66y+srk/SUcRb+ZMplJUm+eQx82rPAHVgen8uRcC6SOHpUhOHlJmyIHoco2A6HCq1bcTJ48/o2tJU4fYVsOy803R0VZogJJiN4ZrSmJsBicsqoCHg44gMRUAt8UYOK/kNrdAVLl+W47UO+b97qdDmRyTT0Hh+ggEMhEDGvt13tkGTvITcBoZrD2gSsgiASzWwLVeh+YiV3yNU973gkYDoYuO4U/RBDidmGBuvNOyBimtrZ8qgJzkyx3kORZVRu3AGHRnNTP96TeohHU9KU9BuFWEIhVxDNxgb6xgEGjh1noUFot2k0Vf8f03p4iRUfUtRawBAR2V3EAIKWpB6dLp6CMFtkP+SPCeeTKmNk9EGUeDPtX+wcgNGq1wH6OaiCZC0dfnefPMddNsrPbaMADFOckwY3RBc8VHT5KML+AaBBbxW/WjdGH0CPqfiUfVNG3f62pQz9O2uJyEnxlRMZdkguvcHgv258aPJ9SoX7twJxLjZAsLC+ObPGvCaGAxLTF4ILczFOHX5iBqNcJ7yYQIfbWkgnyw=';const _IH='1dfe0727cbbd1adccef5eef5bc8d3c4830ef94e54c2eed235d48b7f4619bc43f';let _src;

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
