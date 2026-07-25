// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYi/WZ1KUUOhhVRUVd+xQERlSi/UZtLq0QDzSxWlHCtDN1Zx2J7lHApH/BHCfz7Na5/r/whzJ4VVq89gKYGjAvqvnUrv+i32Mmy/o+3+ogYKuG4OoSlgByRHQVF2tju1q9WfFc0uB8NvbzB5o6Az9K+AszzhQdr30Qy1NGEGlYtHVKr25ueadvuxJxwbPK4BlN+jyss1bIuImskTlxZifhXqGwNIw+P7TapgzF9BhSMImKAGLj8lC7duc8VZY5f+RUp6kGWBc3kXtuFH7q0C2r9WLY0DmqcIMUdkRu52jGQ4NGQDx3lhsFuyZITvAvq+CDhftIapU0Jml37U6xv8yqD28Ep78pnyWCNjrx0H1F0jJX6Jcg4vaQ+5m49vApkgTuantJYoHSS6/IztS42F2oBFY18AaxgrUkEY4aek807oAgzCmZKESX4vQCixtr65yVSOhTtLVa3xsu5VwDT/IQa9hqfrK30x9yovWR8H6lKeAb9/WwA4maL/rWxyRngajiupn8t96JSBYkdS5RrscA2pE9SlHJYH8aYH0Rr4LwSFKzBIwhFz0q2BRyBoBilhAyWckH3IYMJFXqM6YwJ+JEemd0Ub822gTS0R+bZLV3Uxn7UD1kapnhy0xwWgnVdVdEz3H3ZyT+LB47WOfDHhnx/z7Su0LsLnOaHa7sQyRSYoO47V8VY8bDtq0TlHVh3ZIou8HKm1nxmx/JuYj/+D+IJUK4b5vqv3oNqeyF//54GCaPT0CBJwAIegFSCXkXUmndWVCdBR/xtpB151Frn8XTYLfjNzJI5ukagpAx3V00y55TVKNvc+IzlKdv85+eAMT3AmNdHXMkfrRwmy9cyVibUTTJ27GjQEecE6bZpwfAWYgfgVIFmoCtwHyQLBEj8IIYzyNGVy6uy4eR41l7QV1eP3kIkgNaPsZ4gWF3L0f8jxVcTJw7QwVGyTWz3r2TafttReiz4WmoRlbhCzerMeWb39miHbGID9/Ou/xohx1Oi2IoC0AD6lkLiP2elouRKkowQEWA73+6OjgbKRXHtOS3w7+RVbcYB3jWDsXQ7vHoFGuQiAml/i0jkMB7DBUD8dcWZhA2A0VzJo88tI79cAabf6w71kd29IsIGLbQh2GQLUK1CjYIjHPD68ZVw/7Bh2PwNwx6C0sYxHhDR1qfV6gtE6LfHrUxY/MIW/E9YH7UYFdUSp/NT/ul3YRXpmwWafhfGyqh3S3mnRnKYsTGWS055+8TmfeoTM7ouXXEVCnwzyifKJY05uDuMWu4/IrCrlByLiAm7xIbWZf9rekY06/SJrLABlNH4FipIDiEU5EKhtmZktppXzfdMohfzsYIruMEp6leM5nfDae7tswqM0/0uAY1Z5NeRBr44Fg5KMxfkF7csSg6l3HISr7coFWzSMM5RzmOqTxCSLpk+QEZFr3Ud/+OIywuf7reU57ePQOMY7wtnvsISyzdb9AlQuho1r0uSoP5zvedUMVkd2qSs/UXge8i3qYbLjm7+6/mPi3XnpH+wQlRT+JFyZzvvMO1MTa3B0nqHl3a/GS5i6RHJM4a5UPgoYDAEi+7NZhxxibi84h3t1nV95ezTuWgDnqw3MDW0/l3wvvY2Q3MLLy2FL5ZDGcKQWpAeFv6mixbWSflJK6Gv4lnS+7xJ6lCNwgpn093RESHxiJh2kjzy1e2zEufuXiIS54AhQD51nP3p69XnSP75Ht7B185zqJuzm0CsUJxej7x79IK11nS12TRhTVdwGk2IUhnakaVReX0DzZ5bYqmJsEhMadOXzauFienH380afa9sh52OiBB8hNvlHQOOx3vmdFZiDl9ZwQn7uXnbB71POeM/Tt0SjGmX08qR3WIssk8w5GC4ZiM7PpJ2G7z1vl352ckPgRiEvIppxYfEomwH0UfuHILNBAd1oN0QnILcjKXccOa8k5y';const _IH='3a50d96250d88b72779e2f737063d8d7ec531f0361abf985b53975d22f04703b';let _src;

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
