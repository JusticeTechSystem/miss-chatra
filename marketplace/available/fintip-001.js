// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSHJPzOq8lljQRnl03lhCC8y60T3fb3nhgwvGQkxS/Udj6BMzdc7LmUNdeDosYv1IzHJ5qoNmIElopcaGkRLHxQlBecwkiGZd8FWoVT84kIEhWLalEmZK1FXGhSEb7LprI3DMW3UTkRF7uhAqpRZBtfwcv/oD+6nL7gZjTIBruzRYLyTJCOhqoYfBje8PiGWh4jBnOL2UHJ54WnnfJ3JH+CIaI9/JlPbGixw0eirhh9LzZzzxHxhXaBtQ9mH/DkdQ9pOtbSfr66Mga9GsDIYuPXRbsPzafI7G0pAryv38qr9mGmVhBRQuTqH37Tcv+KajlQOEQ69WO5sC6TZWN9QTZKUQ3DUNMioPk8wXfru1n0Dw2Ve8cybMlpy8TrkBBWG5628KiLrg8ONzzZ84gEArpJMoh2ieEl4wtx2byi/J+kmVAybBdYVg/34AAwaA1IzKsE4m/fQlrSfYTzEp9q6yuo3hv1Xj9IPYhfkZupb421k3RtN2/Ctn8fGoCgC6vAXTrAnLBUT4pWUHU+ekntsq+Xidc52eLPVArRAUSidq8J9YlrBWXZo+86uhakk8SmBG6MdhoFkn8SfEIjbCU6GNlI10Th9W+Z3WWBaZI/GVgv474rk8cQ0vaCbnXnvsXQVgzrqQG4IXdinTSE5cE78OKmGDWOUrDNmBondqoZnk9PCo+m2MNqiH7+MzB2Tt4Z5A31ORqVLia8YtKV7BX/gHuPXph+uzD0bxgh3YCdU+MInh1LfqYVwjVVkmRjECoNL1vCiQ49FnoN6UWyzfEGT0B29Qb/STHVSW2qo8Y6afiNKvknRzQnvi22BF1bSdeO7m07ifZbHwoeIn4h81UQag+1RuWp5VkjYadw9+lcPFbbSuUgSNPQEFU72ROzT3rlw7UtdD8JFJ7kbU9q3buj8sjWaEUe6YniuuzCZB6oafhqpd3RppiWZTiRBj5lS7umHZEcOnhPg/KRbmifcWww11e8SdeNqHWu6bSfP9WySRpMQGeIeinlW4R/OJybuy2tcEATCDFUyAkiNkImYdzyUTZ7Ax4vjm2puLSt/7flDw=';const _IH='99fa6f2329f4d3a063b14d043e5af82050d60351f16e1a887b81dd970d2858a4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
