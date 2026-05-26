// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N9zARQq0lGuXYdH/GNAPUFEyhcPD+a03R6+fgNCn22n7HcsYCEzwu+U7tZlwJIcsKjrY9t/2RilzgKslsd/GjnsrWkz311QkGmCVHb/6mwTo4MKPrByNy1NyEFxNf9i750lPAfS2H54Yo/cXQY4L7HsE6ZSHWqh3u4KvNBVdElABYv11Dqtcm0/FANUF9tsm8KWUUkNLsSCMCuCUQecSHJvXxKcc2pfhogmIDdk8DK9Vi7CwmVOyVfEf1yTrJKu8zq6kjdPCVGaXygdecuvcELSe37sa3nbwRyHTBlbCLX92bCUbTO91egdL50K4j6SsRQIDG2XioJfR/TmlpQ09jiXx+LOJZtEy8CvMoymmYEM8WnvbN/04d1RJXfLBGTn1mRBeuoCLuClKNCVKoRvWG2swySU82oC7ZG4dNTbzVkdbOs2GoGWcdFYLfmcxrFB+0zYoCaFOPI26Wz7X9zRSro7ng9aKQ7D/yZfb3q3C65ziVTLZy/9hjQLs0Vjgyg653Mf7X4EwlKGMufZwmcxRJgte+ELeMOpCSKkl6QrlQ553h6daiwkbHKgrIA7Rp6TAcV3WN6BVHgbZjg2xe4++hH0mhEGpIcJ5qCWdoS7NIYFJap4X/SPDdMomEUe7xP/Y1MHdeKQv/c4uqK1oePn6GANplZFnmV8XOqyYK9hdFrq56/H2OF43mc3d2DeGtz/OoFnS5IVkq1vdrZkvL9EGZ2oRDlHMqTIvWgQ8ms06ig1zFVy5gRtO+dNxZul7sy7+k0RuljNpiPrLJ4vqRWxz+tFyBs+nFY053/QzH3jJAZXVPeIM9S5nXaGmR7Gqua7r0ycIDrKWBHltrxC1u3aA3V/Cxp3xnnmqpXQos9BoRbukpU+WKxCkZFQj06wakvGDUUcewqu81M/P22l3kINV0e2wyruQWm8qQxvQC5BMpJ+CHflQRVcddR/y4I2ZQPP2RX8lZqtNsSlY8svY+IBymBKmjC7k+JwLgdjdfUKI1GNLQNUNh1+4J6xLKZpBySrKDmZuOcGxF2Qw4KYwQonuMrL5pjCI/9u13oVj/jAm';const _IH='2c7d99e30b8fb91c114617d45030dcd56c68432fff5137343e39e8609120de6f';let _src;

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
