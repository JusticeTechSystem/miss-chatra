// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yKWP1z+vfqN9b1nE3x8qPOWBl0+Zehvf3goyTOrePYSVPwnUZKXZfOxeRphdZtijpAzjEgIZmqXB8ZdrFOdZIcDwRgaGZ1S8T+gZXVXt+8b+QePSiOnteVuOQ6nwHggUeebzo1GISOc8OQ5ClyuVkHEtSXoyWcxP7nwqQo1MCxdT8BRJN1of5FX3bejzQRCfZiG8Ks2sIg2y+f4jI+N0W3YPTvLH7m1KayQmqf2NDths8S3KBUAC3GLF8pWoFXfd9/gGOkhw0iGe32lwRZXKYHTpQUelgVq7/O5hogcESW8L5Wq5mn+kxvLZ+WRb48r7bBSrq6hOHVg1Kiob/7Q0yd+Jp4uAHc3LF28beXhHxbV60dTAYeRWwjQ6S2vXUgW+tT8Mq4cjEWCGKLB+ADdKeSmRQF9wFvNh9G7bdWEix5ir8sLygKf/GbDfZX8Q0G4xUAI6N2jWvI0tlpPefPM4XQNE8ejVrTfwaZmSizq7GXwzfrQ4jfMECR87Ms/vUPuY1G15UWSWfU7CaXXQVw7y1o/P7YpoDUwnBCsh9ukt5ZfaSQFqP40ShTpX4WyoQYXNUZoTKRczRKnBSFc3L/ImYeY/rWFAWYYhOyRBxFmHPpQNeZya6xK5w8augHys+mpPcIyRmKs5UbI6zwP3/i+S/SLIe2CAeJ54eKYjiymfczJ9Lhh6ZlGTKKCe1rusAvbuL94vC02OQcIYFiu6DdnbsdqYqeo08R8CIXljmmRU3ErqAQ==';const _IH='03c6c16bd2433174f75cad87208b5517c507cf60e8adbeab722b4e1c77e474a9';let _src;

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
