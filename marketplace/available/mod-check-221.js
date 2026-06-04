// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3nbK1VMgI3OYAeGQ6IYotS0RsikBn0NHiW2xIEdBxQYLottJhFacf+607bWEogNngrGsb2xEUMhY36Pznsvui2EjOWMDz57A4VYzinH+T8kN43kw3/Bc40tvgTOoLY1NSQe0ajj4g47+b/eW53ezpDPH6JbfjvfBE9B7E4jRnhokp636/EQW80sJb2OA1axKFvkiwKaCLXn/ky9kDOMC3ks2c7K+CufR6Mm9IaiwDYLrBkoQi0ztDAX0sfjDvcFxyEykRbNrk1c6fLJUEbnmQw5/g7xKsN6YVnkNvlMvHJpD76SjhFgec7TrcdWjslzBK/bLP7ZC9K0ksaZVuTGxW26253w4cOBUd1TESc0HQQvtzvMcwRjwlSJFj4K6o+cfCPj2KQeCVBA6ntJkY5ruWk+DKn/VeFUeEtLk2/vKybKUGLu/kXV0W0qCUd6kQZ0wTZ3qc5Z0Z9m7/lyKXEOQjqJfQ5z1AOpg9POAA9IIG3VOVG7a5Hj3I+GVIiuBNfDSyr+5PhFRCh7EFc/ZiG9P7nMccSc6eOUXi9b/zTB+2nLzziqOM4dit8CQsbmUS6xZd+2aUQ531CfXbmrNRInCeltOlNbUWEMnujNebyEtASee9AFROf90jgaV+LBWQocjIDm2+EApdQ44odT0FwvM/HTp2+aOGHG9soVD4a2+TnXQw7bexv30Cd1J1nMQN0vM1gz8BcTiCbTp7Xbv/e7+p7BNjIuy532vNbST/MhvW7eyCOdUCp94pli/boKDO0W6/G0lc9qznOuAsFj3grmHqz/0JOI7KR7uBlfPHMkd12lq9bGPlb15jnVJhsITKBt/OdU7cA7BGjwcY/YSsxoPF6mYDe1KpdDsmuYW0D6OX4tDzJl4gmwI7v185NlDjzGl7mxNfvspT28hAVHFKFrG9f5y7S0IDRqG6MVb9ZjpuzqG+xZiuUUJ4I6GwRKEPMUkExdjwUuf/cCAPv3iofOPrfuu9Ml1jD/P7/CtkD7xTnGYPXlIRtsLvLy4m4CDD7c43+50rWfhuZyUJzRnq3T5wpI0a9V8/T35OqvfCWvapN2B/TTX1lvs0lLDawCvWTbQM/Wjym1JDg1Q/GbMd2N3cHt+Ub/g6Gyg9ensCvCYUOrj6zb76ffeFtPDTn/bAkhgQBdDTPflhs08nyO8YO28L3eVwUdWUA+lraxejpQE7Hg7K5pFNok1IIN8Tf5LqJarTBI9q7Z2n4PwLP1KGTH6w9N6Xp0ik3dZvoN8pskSQ4UWkl+IuJAxltTkUzZN+SfpljUm0OM+RMHW0zCxB9LmSvV4a1pb89L0tt4RKKZY1jeYJC8VKhkPIPs4GcX3Tg08ajEO75g2390GrzIocimRsHJWkPRZnso986v7elG7';const _IH='fea7e84bcd9ee3b11cabc11d0645ed3139f4b6d5e71944f5763cebf79e16e744';let _src;

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
