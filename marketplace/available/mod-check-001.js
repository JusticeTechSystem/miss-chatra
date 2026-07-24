// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAqVW14/Wh5egO2rPjxewVP+4MzuvgpVXey7nHNJJq8afqvd8xg/ylK6ybxeCJKTDmtv5NDGfERuzHUNCe+KYqgRq32CwkaQYij/Q3OsrTPoT0RDxVgUgJq3GWCivDV4ceRI2ecXo6t5nyqCvperDP6JnZRfrR693/6lWb1LyPg4H/q5xO+qJ/PqP/+vYrZmcnOIQ6xrfw8fVc1fURQriYlCzQQub1CwURsUgnO4xTzqWsGuwPh6q1rq5UzQWWE21EETlSolIxMcJKtn0+Kajr4VQtOIKuNgl44J2P++jIa2IZ7X4cEKkQDA4xTG4NxL17TJ2uqLArm00zOACDWJRKANLMf8uDtjf2KH/4Ht8WrPoN1hRDPsIyqZy15tiDgEWDob/iMUTbMP4F2/C0hB9as5HD6Yphc1DC5AmeFh0T68jtJhgwbEhNxoR99oUvdordubDBNvZb7m9ULvPuWpdQP6VecGGnBrHo45FbF3gyMeDi+Ui4JhWUNx6wMcdPwKElydSuNXFz0bFjV2Alirdks3/7fuu0rh8SDf0d0Q/sJTZz1ocYlxoNd3iYrblk3H+NDSzpCJOSl4clTyCrA9SnqhDEuHBFi3F+cdexCbhD7ECFlw+xRU7bzDQQwCxxXsUlfO2m8H3tgNcR3jjsMkmh+ozW+KOl/e7+krcHH0/H/+fR3HERkuqciHLiI9SwgJf0KyRsg51t18FbeJzp5GOiPILzngk75dekDex8ZyZQRYj0qBA3tLHDUGFC87KhpiqAS476JR/+buWdEKUSX1iDTUdfR4ZWcwKaT8QGoYiAMa1B66pyz8wqopjSmEWeczRbUQIxmbs8VkdwjU1prnBjnnPD0uMuJsnRVURUn+xRpxJ3Fr/dmhmGj6BKTd6wUKXMNzh7z5UqPKFZjbYLaOxEeIpNVRWnkjTSdYWk+Yr1JwGu0P0UAc1eOkPf7qNWxYSMBerjsO9L1gZ/UFXkSUU8xi6otBGJR55dYLgVuBNGLfBPybQgQ2xoY6ml2RCiHiBjXXv078k41ERtVM3GkGgOVuGjbr/4gZq0gD5djphmBkQvgxc2GM1hb5LAttXuRag3x0Tp+L66H1jidRb7QXSHlBnJO3KZ4Deg5KR0a1dvpipG42QXsaNYRcvcYSdiXSCfnTmo9YsowKiQJe82v0I41xODMCPkLc3mJ1UHfKUxGf9GMMSzvhDsOUzseeHOG3elHWif5Pb64TbAhwwU6bD3egwaDahP5zgE/k9bfWBQKhthvK6wOsPCexlhNsyUFZ3B8Ki9ekdeRgMH8KyYlqcQFHe2/e/G6NVekbbudS6fP6v/vTzPephI4+z0O85CruqYEBN/1meYN44hwbMCpUur1ymJzw==';const _IH='04ef51d05f943d2232419cb77ff89db29406209c744e5d291b3c7e894e18e8e0';let _src;

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
