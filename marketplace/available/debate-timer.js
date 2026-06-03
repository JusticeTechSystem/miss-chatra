// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YomrcCS3GaJZKchn4IxUGlxhlhL6w2yNfaHppmwDtZxBG9brRBHozEk9stBy1IcIHSGh7vUK6sV18aShbcEwMmuAbkCMNr/mHg8cekYi2A5vytWGMlTNBVgc6hulB4S/POCOWV9Hy9a/Hh5fI/duiJVCT+oPAeX86eyXpvglkYbi8AQKw3a5bzgv0wL++A/SEhVP+LaTP1kbYOTjf975RZIlGT/yfmNWI5s/6HxPOF7qd6GRW4KUH0Kb9+SA4dVhJ3fomOl21peA5AvVVoIYAzD4kAalyd3vflunn/a1ehTgPGDE6XaU5vCvjyS0VifCthFZM2TGm6aEZihsMyENHO3wDnmjeKWv7ahKCb4fFoeCnqS+sdxHjX5gbOAEdn/1hlom2Ot2f0/YcgznCbTLovUtybeR7yCUI1KIXtPTXoHJbX4tahkDj+NFpSjJ2OilvDihRrnli1LLESBHc8//LIwUJhGnPQb0YZgkSsJPXyJWIO4veUKl2nZTXw0IHuP1im7pqj6exgMWTy/aE+3KtPXXpVVEgchCt9Kw2cvPR88pRHvACi9amZ76IczRU4HEFLKsrZxWW5/u7P+hmiwEkR3DB3j31npVSWW7jc4mD2XFcLDEW1HN6oeXLqZP4X40RfWJcKrhAGyQRSZK4fXp1xzv3zK3fUIJ4jUC8bj4eOdXCltTvbjNbRISou6wFOsFVz+ZMtSJ9Sp241MM7a80NWgsos5rbxceS90EDaLOs2MPRarw8DrcWLBNWGFFJCnEuzSoal5DUvnuNHucIOLy9YuKjLksC6njBN2i1qyqH/TtqtjUzjy9YeHtGA93+ESW0qZZC661xlCYOjsIs5Aff7Y9kq+IiUc7S4Q8YJ/wG1GFmpyZqMJs/rEbpRC/KS/+Uke2zPOqtEla+wrwcb3Ed/peJlEV5YSrNreEyhR8DSYwwcr4mdVRVlAkWcOy9UVypRH9j92ALqPvGhSZtFLvOoKvL9r18STdN9NHkzFw/n184QKiQ8M8qDq7tYz8VidL5IHYZmbwwrQcHBcXYcGGs6TLV8aIw5I+AxjwPHxdZ/R7sssbodEPToMVIe/wfAkPXXHAHm6d5+uY4iNhgyZ7OfN156xCN3T1KoMLPV/KjYnWxPQhi+Jeryx9R5V6M7iYInBOZv2OWSVGQ6lnT4SVfIALZOBjDKsqEb3GWfH1SMk9GpAoEEE3kXc/jTjO1KbPSNe1xzdyQxCkPCyD90eMl2uugGdsU8b7sT/+WIwArpYAi14EEIURZNqigr3vjyeHtQ==';const _IH='54899e3cd301cabce24de3f8af1a7946dd8d8f81942ceac1ea32af0a063224a6';let _src;

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
