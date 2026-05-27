// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KksjeIRzV7haBUAuj+PsQxDl5z9GGLbGVgH1dlmUMBDNRjc6U6NVTjRc30S1KbHubLnOCRS6lHyKzKev+R4oj+ET/lWNdiWXO34WhT2Gtf+lZgV1NrAgIKXT4HTFe7aXiYdZEpKQVKDyfZWppJdls9D5X6gxqfzA0UkzNZwflcMxXOEqZ5vTO3P1U+/WE8ZXBMb/uEYems+5zGunxdEZ5bowzGCc4S/7IYMVPAIFv0MLrk7bgBZZr328ogrCwdiv5R5ZPYTCBOBt5P545hJ97RUtZ4MQ8UkDPnnIZSt9WWtly9eptvvukkGDcm6urhwySCvtGZ91inzhIfyA8v22fCKK4945DFnnG2oH+gbBZcoufak7+D6+E+rXw9LnQdyTpxjJ0EzY4o2gGGmcx/xGyzYqc4MiSQ9vVMJPtqihnYgfwLw0b0fJG/ehaATSOOwD568wkRov9yhfwi3+sM5GpBTbG4JmVirt9/0vZ87e0CP8tTUOnJq8MkBQ6mPLfp6Vd8gi71W8cUwcWHvGpc6maPFWR6Tmtg2Hak8LVqZ4F7ZfkR4HhVnlJDF5FtfbYBcCTa5Wv1i0h8Kg5Qx5/L1PplHhinjbK1cwEDO9kKCifeExmi6bqlYOKJtfmqDyPZSp/YJbhwhfOcThHWNg6q9ufo3K7ydRUtCSG8BM4uPUJUvG8btyUXk4Te6ssWAVi1SVMiMeBny0b1nFHqYhAO8/10NRp+Q4gcsAVWqbdOykR6A4MXEDxOnqqhnhGNdA6YKxXdLB0+TAzEIB2xx4teg6FXFYhl3PMLlsVK+xKp2Je4tuECgSkJ3c2BQkke7G9im0OVNJaHrFd38eemPYNpd0Hu5pb1IwXgdwO4Z60tFeaTn0O1D0lEHhF5FU5gCdOyE8o4II4RzX5GAbDKS8eonJB7EJEqVYRWt9Z0BywrDJ0GagbChERF9GPMmhOoUcUrnVSrI1S78dU22kQ3QzOXRfROiojwMbunTYm4+PLucVQGpHcq+ib/gyJxrROPn3F/WkYdtZaSsixcVUkOJTYby4jJOvlCqjakOPAv8qFsFy6/ytHc4e1EwfxGgmZbtSU1XiHOwjpuu0mKFEoXqXPePGjJzvb0Meu82rT8FIIdlM+lI+pKSoKzClqh7QNVX7yucONBWOCpWrso25GYnMZk/ofAiuhnckFO3+eR1BBEMC77h9kinLPLkSPVaK7fJexW5NJYwMB8GPK0qDcuwbYaM=';const _IH='1fa7d3bb5b76a171c892e85c65e77f22b2ac64e6d2d71b6b28606e87d82446b5';let _src;

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
