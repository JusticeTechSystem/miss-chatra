// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S/G5MLNeBFLeWniNtRqpiwdYdliSCXqQc2w17nmJqxcYCq5yQFVjWCiCq/tp6QHygzQT91YozY3KrWO+4Co5pgtvB/tO3NE69BHPcEPeMIgBQ9yweOrGcXq6DSY3JnctoKN8yZ2r41CHF/W0fD1R93aMEZPLZmWRd8UHRHMrsOqr3/RGf2rH/8NVdIiQBrSZ28pIAz3CY5y62KZlqA2NWcdR5vGpcGhBicirldLbZevAsPYizen1v3JFO38wpNVCvDpOo8JVBhpnoKKv6zMHfGKkIAfZ4zkkfoYCMLJn11gerfRNu+n4nqkCGQOPVozrJMevYSZNwJr9rREYfvUXBopq9Dmlryj2IF2B1EJ+GDTwh0EA4C6XhbzkjudZnp6vOcS/4R1nJHDprFkEaBSiuKXIDqsEllAUTlkD3Nz0pw4DySRsLZFS8wfE74OrfdYDu/mxIG2mXH7ypQo0p83lH1liZggl4+LcvhsTaCnjaeI58TA0fMOgBtasIvJiGc67TESOM7hUI+ukiyXapy9BWS1jiOeM7+4ul5xpddMyHenXa70yJCexYGXbn+n2reT7jCRlteNsiVf0klq/dt1lkfxC1VDry7lLineOdiuxCyvyz4Od8U9y8zQnO95uolPD2R9JbSucRVnGeW7kiiEbGjvNupmDy9fhUObVs23jHFTByfLyFyZxA1henzwO6gMJ92iMet966RNfGLxzYHDNsP/dbxo8CQOwRxfMjDzHgDKYaY86Wqdp5YQ0cTa0dzi7mJ2iYdWRCM5kwZ+RzlyksREBteUWmI38BFpCdMziBOl+UweFgkQxwRwZTEjWIw+B0T2aWJRKcDu17tIsnvIzxF/DNLnx+1I5+7OHd2+ikYoL/j1g0FvrJJMKpAqWyBOvh8+o+R9/J8i7NQnII7sM0Bla6EOdRh7CBokVt87Ha4sZDOxFUsmsdWFiuXO/YePyOCnuIBh6agZyt9BbXcuebkl6+sYJEsYSogIOivNu+mHO4lxmAtvGUKAPd6a2gD7CUwcmlN9oCcBDW6ADMiFAx5OvBSihJdhJQhOPyX0acR93UQ4Lc8ytw/kdspMVGuh3XJItfHINu0cMS5/iI6ByJNZw7Os4dYUnXKfLmIRGN9seS1DhnaWJ8tgM7AV81RbHZ76yC2XKwWdE8fmd+Xyz1AuB3qb9X0U6+2Wf1t6IqM3AgBLd5wZN+Fx2ZMqsnf7nP8T+gbMabU1MAB1MVePzdkftLwM1094+Vd9Lg5sNKyCn8D25UaVNlSj17b370w1IoEDpozVj9QuEciwqVu6FGKj5ebrSppjbTNto0/NXMSXxL3pnV5VKzXLRSZ4z0mZwWHUFDUWdpO53bDkpKgV8p6Z3in+SM42OGBvQQgll';const _IH='887cef26957b4fad51c5bd30479840c03cfe1ba7ee45a2b1f1cc4cc29beb4a70';let _src;

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
