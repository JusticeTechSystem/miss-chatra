// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qIdYfIRgiodVsFKXkdPL1+4vD35AXngb402e8JyLJzMC1H6U7H3fjG+77Qy4z981oJPZQM6IhShCNsJwxm/ERCL+S7Nf0B4jjdjVOUzbjJU8tssEM3xqzU3mcQJl64aNpvO+d/jReAJlrJRa50wLD93GLjuszXQZ8RNU3mpgoXxibx+M56uP4jRCOuCvOfHN2H7vLrGDbGocB8Q4lu3dQ/Y3ApVU61avHQU+tSzRXCe9wpj7RLhMkHffUymks6hKpmn4r49Ii7XerrRJwmdgJ3s80ohhF7uBmnO+cA9fhlzvGbVMqBnrz42u1WW1lj02ybQkyrqsAs153hE2apZLDMQ8+xwLO2XaoywiMPlYoFjGVEQjnEfW71iG1QKP949PFFiAfqrjHtKu2uHUqcpiAHBr/gZQNnTbyjdtprkCS1GNJCeo2umTS4ROCuhP0bgrn0xWaw6XogQW/AFDnWDg9y/QG75eQb68fwBMtRkC/st8wD9hp2C5CpKma7iu8IN+hF+Wua+ZTxLH7G/4lq7JpD7IYAlslvPIdtCN26Ahkr2WyPhFuUlsPGAYbnQXdDW/N4zoA6YwzP7Gr0/+VMaRxsTb61J9IEF6VgNCz2AFWP8m8dGpNhqmO1WyPmP2R7GKGlGbgF90wQVBqACjvRtG/s2lptNSx2MRUArJl6FsLwHv3sgB359BgYdN6l32AKs9ZcyAwzLUN/9KTrbbdsWItV4pIAFDoZETCna1RURVdIIqQGpUqvuScYQCz9tlxghuw7Apn3XIVHKDD9wvB2+E5XAzGb/6vXxP7QtZJsxD/S8VE1gOv4iFd35zAzJ6T80wBx7D0O3NZWUePFMAu+50egtTvRcS1rzTeWOm2LmyNDxp+AP2JVnzOtaIaGxQw/qkyELqqFoRrnNxEmeUwdhjmCdnFr0DdnW7t/NbpGVRZyf4AydN0uss/SiWUz587F+01j+sDAfsJTN945WPg7t8AAIZy21APQHI';const _IH='8dc745b8378a8c9fc3fd53b9333a7ea22834631e9e882a838a999fce4356ceb6';let _src;

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
