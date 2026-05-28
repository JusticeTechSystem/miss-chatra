// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cahEMmZKGuK6Zc3NsLyN+trAmRyBOWQz3G2/3ieK7Sdb+QveW2LujiAkvQWaKt711Qh7Ex8hgSkXHvjGuQydk+ouCyoQNLR0uxXGKvKnfsUcabwi49KZb9d2cI+vCTbxFx0eZYOQvsCcGL+2HhY5ZA0skjlsHDR/IaODRDLgb8SKBmPoKw0g6jv10M49wUgx5hcUMqdHuAo5vESUK6QY5luDs5S3JA1tg0LJqxhMqumwEJLojJ58gNXAeleMy3FNrpb+DfKspPGy9HzZjQuSW4cskv6+C8P39Pml/rohQBXEPXV7vSZzbvxINDCLjztTytxj25up/LAc7WUs69jB7jhWgUQNPbGgBwcpO0wI0DI33gvkXa2h5eL5cMb2R0xv4Ae61VAVt/QCPojnGjUsDNR9w2zqoKUS5KEvKIFbDCmbYNT+QyVcixznCnpVWmCO6NrBsQp+gZMzi0Q9oJYF8gLTsF3c9DfBhuGqIH8uwGsifVVQbh59ijUzfmNBNcPaWbxiGdZkgn0HzmH12Lk9VwiHlJlCar4tMYjOQes6pOmBZHED6zhEPwrveCV7vm52+MiQZCxJZJzH7IoAsmdKoLkl0dmdUx1m++KgQKHsikl+v2Zh0z2o+UwVjyLJpFVxSZogvSc1f4N8T2YOd6IHyZLwQ8kvFNAZkgkCLY2XCdPa4cGQg+kC4fIysgqiY3F31tUJInOrg3iHO46GINfNNJQnEpTMeaDd8QZws1uFdAOxUYUx0D1YJ/qS78UswDvgx8XhKYiFSaPAibHEKv0eFOShrTzIq3gqpCtG6HOVSjK57sru99T8m7YKL9ix+048o/Xg0E9WHMIJM+J8K3HQieNNq7AwZQJPxgM1AOBqX8Fdga6FCCwn2eB+hozrUxRGmd2LxFIBzZUB+xzhiVBCoan/EIs3c05Tn9BxGwMPI3TLhsxlFqN88mH1YmEyKPSg2thalzYE9BDP4WkRpU6BFYBzOXo+QPC/w5vD+5efCA==';const _IH='d8dd77125578b36fdf0d118d31847fb5a338908bdee8c980e31e23edb8f70ef4';let _src;

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
