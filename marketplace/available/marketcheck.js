// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IU4vrk4Clu3oKtIs8M16t1i7oNerlRy5fZSmBY23hsEmMnzlp81UmvFDbENriSznZZwJ/6SefSAYRI6duRbrCsGZQZPOFLkjPQDf3AilSVO5iTGxQLcQUCF0WOfJqiweOBUghJE/mak+kaMdCqrTHjWxQC2t/3DKkJCI7xtYsJ1X9MtOsWxz/KuHHm8IOp5Eqr/XKXFpjvG766eotQlBVMdVJL+jcAd6K2iwbEczc2eJaLgiH3qypYo5ghw2xZ3eR4zPghyEBhhCLG8BWPCREbzTMpIVZIVthPvbpZF/G42rrfDeJuFJ6gaYUwpPgcz7oUxdOe9AFMxeheRGFyvMiW17sEww6AisXPIHtfLn4DZWsknRRGiYTmUPr/RasYh3vtzl/ToJPiGY1lM2YJZX/Fl6OdymoEWaJTT95GSHX3NbTTmGwQK9GofnHHp8lun9sZF+xNzLAzNa4XZEfOGZNOdmJzzkOEg2rqZMxDISK0X/+NuXjx6H4i+VpAkltdYDNdN96VPmAUzVwplsUeyrkYGs8656O357R5zHAjLaQBRSxt9eRh25vl1x9JQFyunrA5RIRLH2+YuGwA0AI9AaAZYMduo0z9tKc2okW5gB99msT/A6shpifscyAuO0uHonyNi5txI0EkN8qxM3zx1SESsWHyqQxRDpcvSsHnwzMtMUPQcgJWw/SOaQ0aj6XRt13+2/3iORWUXkj8Nz4zDVAMI6MWDyCg+hynEQ0sfmzfSnS5/Funlj5D9sFwIJpsX9nauMlYCaRAjO8IGxt0gbAtmkcvfwVcfF+AqLGDNVinmaUPcdJTPS4JVZnLuMyDRGqTwv8K1FM5JozauiEzcU9tjzQ7cxNvPYSGAXcwGeC6PKMVF7QFSp/mlZ4ZbY/WNEtI/mIUVA6s97Wa4tPXmk4IApaemyAsmmWjOgEQFeoz8UEB830p8y2UcYetU9bKGYtX6vEpzkIor07aLrwisp6GpkiUlQru5P08OcFP2pslRAKgkNSwwAObAHxcYytgNd6Y/pjEBoPKO0IgRCXKrrg4YZbdFghfJ4ou5hbZj+WSIkuk53kJddQAeidEMcjxm5rj7Srn04gP4XrttIAVxqmB8k7OrE58pRZsjsKCw1jDWHD6zOC5N/nWwoJShEymUangtCweRQ5pwQuBI4sjob/zB7/jQvoK2vX7aQOwUDS+BdnwiHZtQi1E52qyhuULeb/sJa';const _IH='89bf08577074800fc2339d14a56e5756b789207a95e4735f99036cbce9ac458b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
