// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UoisUbCg8gf/CaUS9ECRRzdNhBVdGekkO6IudxeViRHB2uzw1PRBQRa6U5zKVpV9YpOvZAqzAUDMwIn1MnWQVbiixRMVkREuXNLpzuf0YRL7fOPftXTeAFKRI7kRSxaaJGIpy2bQ6PiO5tfy3wF3W6jY/VOnzGuUkxPiFOcXuK5licE/bqfWo9+le7GLwed3jCj/7mRqm8YkfJd0E1JRwsEGWiWcbgk2WL4fix+zERcCO76ITfO41EmN4255JcW3obGljbTp21ipIyPq8/XU9iTuh4fmyUY0CPCXLNvRRGeAnN10UAekF6iMg3mH3NGca+Tg8c8onyNp2HmKmHhQh9qq6IS1xlcPKXdFiRdxop01HqNTOwk8/cQU9ClSQEK5OT7BMrxVLJGB25DkLIj5MaTCCQAeA+2NheiHvZOQAkSLxtWZO+Idz28o7ZfdecVnItlvWW40MHuihIF2QxWDk0kbdC/FuAznHQLF4jG24aUKktg/+FaN4UHcGIJ52z+gayO+udiFFyfjS5QFXtQL/DTdSTt4sh0uuqSebZCcCMWYchG4vJ3TP0IgwqEoK8RkZ9ZGVWhg3n24BOVYfRD7a70SpsKziauqB/lgEOLUhUYykUGrFfJAA8R1GPOkf5nc6aWd10TMBWhrEAQfhT8/vzuKNH0mSPTKjFZaMmSC8zmns9zVZJ7+XKiX5ruAhGYaD1swZHcGaEUyiXrEJkl3523mcLVMHhlC9ILUy9Z6jUCyFHTGkI5xq057a84kgKNb+R6+Q7HPe9G8AVliUDsXgzL9wYwxiJStrkaSIEvs6ud0su0LwvhhTdDJYrdgmb6tlgIbtbDP2xBOVWhUcuOcrjx/P+V7jxgs+Ji5A74/wk48LJjyFtG9Ae2YzBocPgBFgt7jYyDik+sKbx1C4bmsp6BC8fy+i6WO9WyVgsnN+eceXchGkz1/RGPWqZNEeVXMMOMoUx+UiVOluRvflcmmk+Fkvs4rSoBoKFHgInEwTUckG5KYMBuVgYM4GHnnfqZJ5oMFrHc1MgDDUZoO2pI=';const _IH='376d0764a71fe7d3b970af1818e4e2373c8b513f5a5233e4005bdbf458ec3db6';let _src;

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
