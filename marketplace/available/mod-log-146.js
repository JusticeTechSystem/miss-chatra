// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R4j1bMdiw2q1I+vnQmjsOmCeJpsj2L2EgVNnVciSTmCKxbu3+n1I/ZTeItOptvzVTF9M5aqz5cX6hPq50t6/IQK0tkMBmhD6p1XkrYV06YupSFLfmYfADCejBGGQHjUdjKpGy3PuS6k8K792FayxQIGF1mk/UB3o9ir0t+pBFVTETWvfab6ERdc29CJ7+1exAqq/dD9qc8sEVN5tFgukUJdqexojiY9Bszo+eDHwRCXv7209nTVRPLxbMky9HjFQFsvqbeDAO13PtMXHUDGGzmWkN2TUArG/vP45NrsKl5xISWGZqq2d49wjYBGF9Ik6uRxwZz+NeqKrIYfcBEgJFWx1pr7BkxfXMn8dE/CpwgSjXFWiuIjTJpywRiZHtPnt9QLTi+m2st2uhgeZ3mPp3vloQ1aQy+6PIN5MPLXjnxpu36vQeeNzxoRhV5IH9mr3dAe6I/I17ukv3T65Ewh4wQkJlZrQOY5LQBMmAXrWcQ1KSIoYgGD74Jovls3/XkGjeqPNPfHdl+p/dd/H/+jCQCtP/mTopSYbHUWgYKUFrnnLbahM4YQD/C8y2kby5bdRayV2tGjuEck1KjARRGpBlsRW/7Bsc5sgqRaYERBzEcS5KUASGnm8jdkgNd2rOXRDt86mb0xaVtGwc6Himb6O5aaWMF5Yf3AmN5v9U2Aa6TWcxHRwqfTTuo1R2mTkfDi/Y/spMoGUvGP6XSGDRuJ1G44YotrimCPRqTIwcpQl/z84zVXkUGqBPV2mn5JrwTnLzxkvT7N81Hg4h7ABEMebaEPlCqKgr3mm1YlNZSTTWBhLfCGdsQjT0rzZVahIzvFZEXBPDsRPvjg6qt/pPLGkStj1nm9erpMokDj49bo+SwE1NeMQlntrC1vq8c8IwHLtY/mX4qYaDcUe+8iGwpPF9yr98+MUfvNOrSeyPZ9LeigFNyeiCJXjBgsbznjlB9oz8jZ3kT7HFesRHbAiE2u/j066ooJseB1CqfNAZPZXdv7yYu1J7QWMOwWTLK6Ed6SOIbEi0OqlputnGRImaweDaUhNSQfabgIAUaBxQ8y4R0Ry/hNrfcpgJgePgaBZfQSVvY995KiUHTUUTbG6hsPpyyFC2GTjtUMS1Y5/9Kzp1uHSb7RdhTzHVdilQ8GKwpa7A3WIuW7TnsGXe4Gk3kY/bLJuU3FMfRdfPBOIGqtlNNA9TUZCZ3M0Es8oFLidFDKa/JWUncFh6s10NeuaHYu1DrYEpalBCIwKbDVwhJAZmKywFguwScnBzlDHerGTw9TlOc63OYUt62oz+VWkf8bcR1Q/4VM3mq38c1EpZthzl4oBU8xyZiNIbo0S3zzZqYp+MRKTcH2sWGBTlg==';const _IH='49b91ec313c66f82469329ed5f00291fc92dc1720820ae4b7d4431ac14c9658b';let _src;

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
