// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IC2FPDNI9ScWvZFQZGdBJcM3+UlHDDbTkyfcn+v3683/25be41rBo16OuLvFLFACS66EDg+z7MJ1EXP9vPsYWD+68Ki6EWZUdxpBjelCWYdhzaygqVpryrruMXGH7ZVqMj+KAFTXdgsZEWCwRIpErAo6Z8XVqVQtrniCOPIneE7HJ7FtX2YYZza0kVXNptBAr20SXR7ak+nB3vbcODrbRUHbXzcT6enIQbrLZOkE0vZlbzzIMtYoKuS6AHuoel7DWGBVpKAdArx7EX6mI1fpsksXcaw75AyY4F4f00YZwpbuolNwRQC4XJ4SJyNhOO2SBYhXfZfboVujUlqmu3bMwQPu0XIw7xIHvz8JWhtMeCKJ7O0zWovwTUe1V3kzbfI+S+JrA6+jkyY8mJ082eA6y5Koaezyjo9oGPXfSboImluWhGudhhaPvBmsLO0YvvLcqB5hh9oQxoM30Zh/tPy3RKl+fL0WBQXcST3fxeuokdfz8QXSHKgRRN2aoM+gUcHVIGoxPSJQkhktWi5tKiKmZqotflcZLn26TXYNKac1iSzeCeArh3bPTBkbOUwYgQ12qtlf1pcwPVgazVHooqJ1/oAMyDi/JQAV72Ww16bGIkBo2m2Od3Re9s1laNr8jug+zEjlcXa17kZQdL92Mogix41io7DJr89kcD9IvAknv7Vh7USqtPpTM7Iw0309YYg7unkc8VfQwtU6Udhb792lSYThHxMUuX0O4viIFfKgyfj6GU+7/IdZcsFdN/T3ng/sAy8qXsp4hFo0999NF4XwVdim/0nByr+lZgpbSxNkcKQT95ATraoNctwEOjDuQFexywV3riUROGCCKbQB4car4C5ut3FmNKYymZ+3pOvKh88pAgpZB0Fpis9qcl6hPUT+/KQjf+k00LkvjVdkwM3hPjf4mPzCp1QEU1+tSXQWUdZ+cMc1dZVET7XLDXVgDf1wxA==';const _IH='1db9fe526037f8e54e3bbf63e639faf0f16b87262a8ffee7d2fe3c5c94ceecff';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
