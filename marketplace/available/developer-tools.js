// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkHPHxfrCA9dYToG6YF5Dy54YFVHFwQd6iyybNzIFFXPhm81t2Mk+RK3G+yzcIPZL/4uyq1yigH/Es9tvr/GJ+5fFhw3elA3PIWdy58v430o86sMCRp/pYjW3ifkHBMZZ396ZhnbUYOa33Tfr0cA9yDzoglLWUmOv9ojT3VPqjIgYmCzZOssOFVdSTkfFMCUUSGvDUWNVwEkJs52kkBZeYCjbpRKSHPxr+GWhUSqqD09vhUlzEarQly+Hkg88V6glyHSr+8bVFiOyes/9YtCV0kG0Oim3lR/4GkLyPEMeGSeyEdTDlFGL2DGvTQ5gpE6QMFHknYhGUcosKffMivxci1YU7AYdLpn8oaWXEa/BlmtiTIohiWd9uMUMRlig+e9ESxmOfiiDE9GfczS5iNjtQs71G/5P3PV/z1XV+opXUFTYAHhsjHxV/ixRfyvb7HTaajtPbMteDfJtBsVChbWv+dvXCKDACgyQizAZP0c5WZg9R8q4k8idciWWi0PrTNBmqmCstZ4jmLgExm5ZUcE4HM/R9tPU5WkGNTPz6FnFZvJYOXfktc5EJqOiVDofIw3431FW7xbyvu5iBm9mLtI0mQLIEq4edM3L5fI8U07KSrMoMzvjsmA5CEGbdh/zK9Aq5+kImnpk+y1vnxBD2mgj4y8iJH4e+xoGd4KBFcfGcxygpJDqFm/dOg719xCj+SFDAG7vULBlT/r4niLn6A0GoN6UlEgQbUGB2m4/HzpkLdyrInHI7FmkYveKof9FD1H0rIFxR0I1idgk4CRaVJsbz3E7pkgc7pMKKkfVf5HQjduv1kzibBk2TJdtpvHmluSlR5s6PwzWid4e4rRRtLsBV/T4F0k9ezJ42WEmdKZi0dPrmFBch9PVlTnCYjpo4jr6PCDUYWvQF6SLUlvcluNdNwQod4ykwriBNJZLGPPXOqr6cYj2z0Eiq2i5Ws2zRI17MN+2sfcW0Y9ps7eKb243CYeWxqcvU9JQ1wQ807xXXYbrehNMpuPZ8sqvxbGU7t3BLKqO5/2SbYEmQETNDrg1j1kLvmHOu5QjACahfBf3F3WNqweRwJ1PlmLEyAxBweEuBMvoAsRLT/MJaNjVJMEx+n1QIPb1Eri8lymc9le55QfZPBcHPZGvaJOi+hEALrR1CZI/MuZ2dP8QDr5pyrwKXa1u9gGQYrJVIPUVdrlEqsrwtVvVncBo8HTpcoY/SWYYvrPg9JSrH+wMc5LEgE50RH6g+J7Xx/LEkkU+L+c2ugfXFNyZB/k9C8AL/DDfhAPgpQmg2iVIk8uO1Zon7QxZpgx4z+UhmsnnbS14NNrdnytRtsA5kOxuzJiMFQkyG1U4Wutf/g9pi1NMUGehy/njhZQcJ0t9iK2xYk9aFqthzfZ585XsnJiGpGD+QSn4Z4O0PbUcD5j0kAImX0OdTPwAKV7MZ8Bn/J0K0PQh+Qg3J513iES47DMTvYf+rUqrMj6q7UjgfUhJUybgSD97iT/wZuvRxxJUlARf6b8RChc84ySdN6hy/a/+sPyVzILUaA7SmzaaSThPuzlTDa2gwLguBr+8Pr7ulonhxtrrC8D8cuWsTxgjYosNOEDkYcSX8cfEfucuTdkLbieXj0EW7kNcWJnoytnQhqqdjwo1dHwkbTIidoRV5pRjJCnQVrp2r+V3psReH75B1C8wK';const _IH='f360db42a5cbfee51b682ec741f70711234e93f3b75bd2ed00f82fb8bbbdeb30';let _src;

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
