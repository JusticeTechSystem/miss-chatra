// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f1WxjTHadykP0u5l5s/czB7l9a8sPqvTEIFmV6zDDarYU9CYhNacJgtIbnPSayQEGBC2hTrnYx15f2oBhBAw/OdYTR6WcxP1YD7UU+jkwOnnq30jaUEBel1R49pIN324Si86u5N+2M/4QDQNMmLIxxSQEscum5qU3rJwKHiAObkk7Zx/1oeZ1GeaNale6RSssa7x5GymFAwv/sfcYnVl52d5XPBxA+xmBC3v8KhlWneFawyj6pV6Owy5FJtLG1//h1JzJg+rNwrOU88teAG0rIUcV/6TSjUJ/tRzGGy+Uq6yt87HoVizzN1Cm0iIsu0aWuQwfrFaL1cIFtnQ+utpCOr1M/INtxoUSV5lqfN0LcIkEuRRX37Dac1Tj9+57qwxhA82B53sqqy8cgDoExpJRldW7wxLhLQPmw61gehkHO9zAMtQo2fqhoIUZ6RDxRspNr26pThRzemTiftXgp+arVuKKnixvsM8wqIyR86v/2BvapyG1Gvxostq65iqAExxvN9KpI/e2oAqkNBFpsSkBdSvPsDD5dQo/j6G+9TNeL71jKdkgrCSBnetwL9e9xYZ1n3/GATeOlTs0aK/lQxZiIfgHqxNX5A9GTmZa0DEUgRiU4WEbnobUznr50ltnoLkHUHCDh/udijVXLDbB09xE3nV7hFTNoGe+q3DVNaVkHtmCXTnOmkO6/aL0+c2OJ527jOTvvyGTkBlRY2nFGrzVt8uGk0pB4zxNMn0rUbVh1FiJUQEcKiNqmJrKwtuc63kCDOl6ExYY73+07CJ5NE+37Gay277xc/Q6YD7Z/altJvcOFBYXHRaLDJHKrjZrXaDu7zxS/6MkiIlwecJ0j4dSJbkJEGFciPVyT8bdSoBP4QX67UIhgsu2gC4OnUPwb/0YW7lknvn3F7gisM/G9sXw+QykLki6N0Z0iysgUvVhzWc/pcpvlAB5V6gXbe9Z9TwN6uJiCOVdtojzi3A2gt3mxVpwRo3LCPf3xDpoWio+uz6IpQUMt5EpKWaVIha4pyL678z12hQCb5/utnnPmXOdMNFfTd7qBCRHCoth3p9qStHZ57awqlohwPfBu98xXh98FKZYbVM/HYQn6uEr4lLallJFYEW0g83Tb7omYffT2bJPudfp1ZGflc7MjRldMn8kdcR6PEcYya73A1b6ScB/kyGra7eQsIey3rCSD7Dn/1JbXuGuCXZAK79yK2StkcWvv/f7KVbz+efdBa0lf4NKVSilNd2RZgLUGDg9UrH0sWCzJW5uCfQ83tfOoQoIrpM6pEfTNNg3N40WYvED3tjoF+fS0aWZ7DNiVHNnCLFKGWyUotwEASJfgXsZJDq6xml2Q9u5uuIVqLRBL8th/qbmOof0kObmrXBFvQCkYRoTo9euqKP9JausOgxGR/RjM1tUGY=';const _IH='49be4db071aa6266448e75ee1891cefa4202c6556103f1b386c5ed1a2a49c9a7';let _src;

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
