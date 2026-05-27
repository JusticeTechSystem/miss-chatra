// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OCuinFVrF4Lc0U94g4RBItBpj3e+0EzEZ7yXobicrjVivcDNDPKIiRolACnb77T6An4UaBbmDKPosvcHyfYdPDvCZ5IdOjeJ6YWPrL33OR13NpUXeDGOG7TDvGaxKiLRn0oqSoetRwcLRoWcypZokLNuP7J48YGHBZXZH0YAv0bUC+zrI2gPSmzI4rNK5QflSvAYJ/mkDwBBuUnLDFW1sCSxhRTrmt9Q7BQOhJeYIMkcox5iYZU16q/VZsfLDOd1atKWUrNo/dIH48XAdwJDrO2DQ8vZ11r4VRaJs8Y1xQHN9pp93BhAqXC8T280WmML1XECEyZU67Po6+bQGpy0O43BMpzzI1cipbYoFA3jfQnSFlThYXCJQ7tbLOIPsrT6nIW5F/7kqwrf7DqjD3NS3ttHPlIgfn45JIlKl9e3iPXSZbAWm7/3t2BnwIIqaZxbKmr8itvVa2Ac+0QPzbegl9wmqb0vl5gemFTbQMRhkUVxYlk2p/CAd7AeExrY8BvSDXOmy5LicZr6QdEiylSP6dLw997Bz90QUnCsSbc5UES9v/qY0rqa7pKDAJJmJNnHEj0nR3bvFL7WiBjlz2mQRjXx7OhHJ360lsxgsblfkd8piYKykMw+g/N6A8a27GjZJy3tn4e877I18BJZR04sL8gh7R7T/ydwoHXwPlEPp9u07OLPgf6idU+KHeJwJC/Adci58gaR1S4/Hj186rHjPhez6udu+AL9nZYxCAoV5Fw2NMEaoAbyTvm+EG/VsnTA8wUXAzqSbtG8l7mqy6ZRCLCwqTYKxjez+ZPguyhmR4udpvYE3JoH62ezbHnVlVDdm7fMC93Z3bhgp4NrFcgB2wcmtbmoxHz4WJ3Lh69m6QBKCOxJip4tawyh4gRO8hvHV4PIeeQZcWN0m5yOptjdQGUiHrz0MATZCG2vSSgDRm9F+smdZtCCPEQtnIgmlISSz559O/aLzzQFpqHvK0TRVF14MeZRMx3Vg5VSCmL2jJPOt05R/cqwtHu+GvXaM6LGZbZdSeZbdTvLzxAFvWO+QhF4eH0tt+K/OuR8Yu2YiwZ+3n8M6HSHqevuTP3s+l7Wm0VfcshnXOwtS3tAnJXq0KiHNzvJUc7uZWpJmx/zGwFKCZ6EKWhLH9nJmjhwFUuNOesCW6T8GFRDv1dG9IYa+OsTMdIaVlDIWnhhgjQIcL72m/gW/61deogbORzsLuGJVFzi2D0jv3KHCoGYSMiJvT9Pw3bDTnz3SAI62/UfzieXeItxatzj6FMYh8enDZHOMcz3UpmcEp4SjJ6LuDqSOwlbU1F28P2gj5Bw9XHn6D1QUu57PKlNqrFCyOK1xtS97WUAiHI=';const _IH='c907524d712fd99b5222dc2da1db5a49bab0b173e6add70cf787381a69d15a6f';let _src;

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
