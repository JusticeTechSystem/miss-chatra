// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4vOeeJ26tGRqLfDXETFce72rcxVPjn9NTl70KCNKdtMsFjrgEDl08iuYooT+rK42Ptf83db1mW2my2nLJ++rOnRJSwfiXG6GMDNygt7pW1CTLPlgT3bCKCsLu6oOIBKRUiuOiEOPP01aeYEqHO/YxL+Jcr2jFDJiUBfSFqwFwwyYIStfiY9gc2emkySShvoI0TvZ3FHtaquFcAd0P8/YGNrmiR29CfHEh2ncpEavf1KpX50UAZcFxs2eF857RAdLhxE8QlZiExhXzLb9zk/kSVauCzciXVyCkcxfZOoLEmBUh1rezg3tZFCgj+QQ7T0zPwOm6/U3GCQPYM3CP8Fww224Y4mYlEi0Uwhs+7HHnaKNHZZeiGSfXBrzIThpO9ETpC6ddi8ZW+SshrFB3rsRvHsGJThPo8QHsUS1EmyEfEL/sWO15RD5q1rlvbCcGpEChPXlSiJBKgbvlpXPr5hE3VXWPbVlEUZmgCLkXOrx4j7Hr34e1fCSaQTAcJMYJjnmRqaKpzeDQZ/PSz4UrXYaz7uV9iBPj4vjwGEETL1AvR6KQGFIrv5QtgvrkhvScVnc70RJlu1ZGyGYcHn3ea0fh4VnW4Kx0tk7qpm0Xr4sq+qUTgCGnUB+SfOEyilevELmJLvS5rkhTNcSX0oYppYyNXRm80nOITku8kVvB+stT4tABXVMTT4rlHzhg4/lYOmolZqdr3vR9K0a2pszR9PjSYi2lWcESZPb9xVhZd26+d75SQ8KjSsne/N0RBc5RIc+EmFIkdo2aMvEklARGjs5/rfsnZljalx2qtI/n6dHA1yB2uGd95wVMVWkL3tO4vhqrnpM54zOE77SdjsM5KinrdB4iz1kNIVXgJAd0MJ1Ta80xanIpvlu5jGBE3crF9k564MVdyYpFyorQiYaeYhZJ2WKubLlawnCKF1Fx+zVYEVIeE66C/8dwHxQzz/pxf3byr/fasO9UUz0ONQdtun+mxPAVi/Q59dbOpLokyJwQJ61kOoJjiPUFH8AdNI1YMG1oryNkAe+fIscWKXLIGZIULHEE9zO3+WKmyb5lA2mafHOU8SfTx6e3K6C2H0C/FYqJul1J5nF9QmCOYevF8DM2DDzK2ho4IUlqmvxqe75v3bvB8NFZqywNng68d6H+D5163kbqSf4nrTMAWe1VcBQ37Wl1czqJDAZDz2IIDClf7NI79W5U4JIvXY/BEMkGCaEa8uCkBDrb7sTDpW3xKZb8g3yQ9OpCGQJyNMskrwdzskGN9ckMhD/M9S+t8+vXp9o+K/3323tLOAWHxgogL8o3FCf8UjbJgpZL8EDAhJXGps53JTk4jzGeoGr/DUK5EdyPybc91lrbVu5GIEHA5xQFXE8qGlEVy2/X7pha0a4=';const _IH='d43548bef2503586d5a6fca82a4ae5abb81a0e9f48fb7685a205cbc5b7b4f9ed';let _src;

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
