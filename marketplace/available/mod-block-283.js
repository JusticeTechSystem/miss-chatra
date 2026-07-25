// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4VHQbwaUdchoVCSTv0DeD4dPWvUXBFL8iY8njNBfza2e/PEKMymGmaP7Mhw4MlYOWNmuyDrmaDuGCJCZ6x4zcG85+tHglSkdE3B5VF7YvlgWDxSPkv+kwtY5YkjxEPXSg0zGhuqe5BDPqvFgJDRUt68RAl5Ul6nGSgdSpYgH8Ehxn9b/ayuF7Rjw58WJQaC6g6t3AZsHuqy0+T1XFPYb8AWTo2QoC+MmIuWGmc4uwb+4IX7IbL4ktllmg73C+JM0QWwtdZHXrNN8ny6nDjUOH1yWqi1zk3pgZQBk9/M2chDP9SXch/EhLGAZT9eINI+Wn4pxMJPJ+jcpFdjiDuewbYgqSFQzG1BLQ9GyFN4t5bkm4BQgWQGK6kE9lWdSXFtlK1zGJqbiJnsrdFTpntbNjiZNivQXoH+99rjTPwBCcOpSlDRgMs2g0Q9PpqRtBcxj5M6lJ7QCI4iCUZnx0SDckq7uo/DaqLhBqPLa/SaQQyBQmttAUuz+y2M2ZQieO+RQI6MMb+t2b5u7DMNQtdMTwG6dIT/WGlc5PtCEZ1aVyUxA9GETd+K+oBmHJjsx+gqGCnseDvlutiits4z5PrwO/qCBnskQjqy7e3Srup4H1dsNuNpNzd60YsgK0ixHGWc/xD5iYMR4oz7jASU/8FLw5moHJ1+0KqS/Y/emU06G60AgNj4rgU7ftPKJ1wfpMWeMBzd228YxT2FUneBfStLrqjSuI8wuS/WW0X/x4SxvttZ/Dn0gFcaiYwnm1nqL6ApYI794rtg/crmI3EtkiEkkj3onmUVt2ptz6d5yloGh9TVK+GoEIls6kpJO4HPhkEnwrO+VylUIjU8Z1l2ZNgPvWjCeBnEj4Z1TPhdN9+ZXM2GRQoeb+p0vHneQxzelLIA6na/gVZEUxLrzXebTZ+51RsqE6AngUEPQCuBL8ixVF2NNTRpG0oyX9wVfLAjPlyPtYLmvc+l/rk1SNueAojIrZ9IwqhM6veNP0goWthrbvArR2Jozxj3v4GwA5bD7NzkeSwf1LnX1MlZ4kGlDebuB6Yv2MGwZWOI/1vM97BIIU+ujg9KQLQQIAbxNXVFoalMPH9JE9XkqE5E/kSTU4eNNeXEJieAlMzK9NDfyHGWztNRLL8FVVEUyjTMBJLzfcsuSPpht7AvvxL6kt89ULWhomF1Jxaznyy94zO0LzrchVVQk4ifA9JRK4SuCx2NnCw5yQY1MA1DQsvvjpzUGzJsvjNz2V404MgvkIgdUbvaD9/d6/g9nWTgh9yRY8Io2+63DavGYExfaoELWTcrLryxhXiamt2T8jHc0a6EAzEUB8ZQ+KSKYu9fcCx0ie2BAurVrfrHofqG3CioV6+jFG+EevM5nppuvmtBOOU4L1StE=';const _IH='afac01d93824d69b871ff64bb0cda4cf5685857899ef9d933c48871fa0945bfc';let _src;

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
