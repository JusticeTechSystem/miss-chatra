// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aCWGJ0sD5CrMH88kYLUH+sIZdBw/H6ZNmZt1YHVytpMMbJqfZUucd3wf0Kt2kuuKYmuDjmK8djjTkp708WTAK4vFNHNT19i2gPDEzDfm8hHlRA34tIxCF2ZSnfpsYPn5/GHZ3IyPq3c2M8xhsFjvnRfDrOMeOnRxZ/OukJ0QKyF+CK0bPa637JgouZM/rHFIdk+7FsXN+7FAUsjZyFgCIuXmg5Kk+EDM7VYrYQSQS+2t161NNnpWHIcvIvVJVuiADDWMZSubgo9bJ+c7pnHhv9ySG+JfvAmcaGDooCDv5ratdOF0WP5CbU2LrJqnnqEOBbdWTNgZyAE6g58LwDvjIdZeibrTWIZWUs1LrULY+EkLszRr+qY4ehjoBl7v/YXK1FgbF5yNjV35MF0j5Nezuv4eVeHJP5WUEUEeceLJ+8WHjtwkoqoLD4Ae1rIccTcr8n6USWc/hdXJmjuEbI0h+iXuDBOEuzcW4Tknit288CBLxk0Mm6YJ0lgJc20hogB/CulW9Tkg3DSC78CvIJ+T0d1Hve6RMKBsIHzqawleQGQzZNxEZWW2gF1E8EHgePE4kMtn6IyyD2VAB7tmIwmd6OcvXF9gipRnuor5zGdpxT3bS/js042G36wA7utJW/rYddeA/WPZhYJweKaGWystaP/TRuzD4BI2NZKjLWv21xtJzB2Y/PeePtn5e7Q8bPr6z+UeJIaTy4r3MBak2NWOgbdprpabKfZdxg==';const _IH='9f3f32c6af7a0a450a950fdd26099cab645a6b92183cdd78cc01c233c8255395';let _src;

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
