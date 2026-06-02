// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z/CydkcbfDvHgtPlxmNs0/i1SnEZu9nrqzNeIDPDA5b5qZzxLNeuvyN3TbjMZLvz9Dj1Pf0PCwCTkByVQwVDQc3Q0luzwCjB0O2zf4xGY/Amvy0yz6qKTVXfL4XMzZqxAadYCAT8Dn8H4Gltbc3Z/wvwARAq5e1Op6PAA5vaYvC0AkHSpDy0vwZkdR7ZnfZ78eIskBF5ZcA1lsBQVpEYAV8IPsiOm0h07Fmui/OjbkLjfs65Hyo27fPirqpACSokED4/KFAWm7h83MJ/BemZemTgHntxYydVRLeUBHmEBzwalF8ov1bJgIujxCUvnYF2ig+XGHMs9hyIbrLYNzbjVgs7ipNaciuo3Hi4i6/1qh967aUyv8c2xibAdcHKk9TZj6pb8pNtmeT3KYidwAVdk+3bnQx7hAqJVU7eHgUy4sQxyrWClkILBnWwlSxE8sXzCVwIuvMh0P1fS/HBf2gep9C69xk0CDcDsm7q+pE8OVmtH9vXqvM8R4Iqc4rEgSdUZlsx/+38VEEY8jDQdYf0R+sny3aMkfhMtrh+xDDBrsRoft93pSIVn8VZ+EA3fHDNoMx5SbD4mwd0DBy3pac3Al2U8LbPFQENdahCG/Nj5QWlm4CNrATaVU806pZjpxJZZxx7XiGUoey1YljBcGNTe2CqKDNydiZTY0+463XS2VwonGiSjNxSy9sjMcg2lHaVMItRPtq0UN1/1diDM/jg0pM2v7tYU8hcqFafyewKOsEZkmhvCUIOV2vtwiLq6scffg7FRXC9qcz8U6iG6t0C8RHtU6ac8hV4XDOzUSGu5is8iEJb/rWpwZaclqsCIY0jEj8x9EUvLHIAqlGWzWqkyuKNN94AikdiGv5Xpx538woFf4UlhNNLnYwNLzybwkso9Xx0eFEzSJg6E8sex9A0aNjGvP7VZP38lQfUKrGjaXAeyZD04bICdRZrim957SyXUkmJdURe+A8lmXGUYtgpq7lShshl1yCkGY2ZuYpidR+GDakXj3KtHIoerquu3UZjJ7c+pHClMkwpM0XRZHoAq5Gx4lCq9GgAgjU8OKKtstPM62PZ2QyUZo1kGJrl5/t9cwSWwFGpUtRNP32XnRII586tDxwG2XFKcF7j94Vg3+45x3GeAFn9G8TCjrzo9V6baIPP3IjMkE8tghn73cFoGcTmefTO5g4Snp7t4ZHkTNzBmIMJxYix06eAxW/svmuaGQb6JAku5A==';const _IH='e869f89748308eb92c57a1bd2ec51f7ab981608705724071c4871ff0658208e5';let _src;

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
