// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyrdEPxXRlheGYKGxEkaPf7Rnfg5BHZjwrEYLhcJyOMCP0EMw7TaoErvHgQTn+cAo1fYDKFAvK5rysrcdYA5FHlW6modWQ37eBDfSgZnzwdmitogK+MEPmqmL1tOvws5w4ThdohiRJIhCF7XC1JNmjROa6uVJ0Oshj4KUv7Af8bJN3Wk8JVAeMOSkmatWS2P4L7bCkX0ct7jG3RKbvdMjv9rrGhuMiZFCY/zivSGGXC4IS7CY2YJeIRhY1EzRKj5uHFnULgwMkgAjaBFHDb/W75RMvuxs0DlLm9a5+O7e3ERE5xDZXOlH0Mz62EDgU8y8bsMsHeMC4we9WmtfudIejgHR7jKbfBaBooNt1gLZZ4ALGSXuAg/d8vpqPYzV6Uw1jSqUifAErFmq+6wosB079gj0CwrH9OqMQR6Y71NmAQ/5ziPOEG0J9liaM0y5UPalXjuyEtRf+hQzmyEGU22q4qfD0tAyzohk6EgWIb0hfZFOh7RRrOo+WjDoK/WNdo08mUl2v5UGNBfoIITPgeWZouXhaceMzzgWW5LhUknx59YmrdNCAj9waW2kghoHVdrynUnUQbRXcAX1R1ZKmRRyvBZHyc+KEvTpraJTKcss6ZUHv3kKbKSIvVbF6KuZil4u4uqnz3Oo4DD1XrAJh/qOpD70XuXZirZep+QDhkcc5Ry93btJrlvmZ8iJLKa7LJgB2cOoqLJ9vGT4gmjl/3J3dj63ChxpMfO81CuwZdWIP/W897oFwNf2b+o/IDtoC6Mh0KTApTTwvjs/qcKLQV8ce3FGphEmTe7uA8biUHpdGDw+3oNCxvNfSDNCza4ZK8hB7nR5/suLd6p7zsvUDG5lCSWvDNWUvHdrRtq/dAGBgSsick9h8MWGf5FGRdT7xQxfdxsPE+eX2+ZgoakIjmn8mXbuwvkfrUlYynz7Flhp44K+FPEYBskXx5Tv2jA3+O68e1s9VBTV9DitvQ5zmC09hYSaYs5G8xEZaSRhxjCv8XOrzLktF1XMMt6c161xW3pMNQqQVQlJeLRYiLXze0T1K1qJ0XO+H9+ltQKUkGekHfudHDuubHK08DsFWF/QrpQencOkTaFddmyie2j7Fg7jflzfh2a3wURpISMZQylqxDaXoMWjsEXQz7uPORAHTtvm/MFroGQHRn75eBiHjYeVPGUWzP7dO0DQUZFiwZq77aHCFwaCaLboSTOw/3oiRdJbbAPPBOGT6oiDuyo3rpO0VYCrqPajKbgP/vF7+OCbDyezq9NV+cK3tv5oU965/Ol7dboMgZeFudGuodw0ujEyDLQ+xSK5biaxuahFuvTiF7MQxvshUJENygttNbKIYLeuikPiQ3YUsNC2cR0oqidY11eyLDRiBSV3ymTtMk5QmzSjlC6o8VOHxE=';const _IH='4d36ba074d6f990faf89d188cf409b1ac69331af4e599af73f2b71304d8b2494';let _src;

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
