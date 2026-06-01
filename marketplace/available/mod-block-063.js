// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8uOm3+pxAhs+okHoQZJ+AhJqCiSeKdsXe+WLJ68Lh/u+FWBZ62GgjMu/DRJITxB3sTCI1yYd9jlsx6AF/rvl0X/cNawgzWlZiZow21Jx/onq79eKYQro0B1q6oKfYSYGiHegvY+KAj2r9ch4Ks8FY+0lSm4vJ+3hf1KTWX/pDM6eXj4YIJvLeWCs0vZvEmMvTu1tSufBFyJb2ANfjomxMJ6r9w3mII69nPxuoFblyxZfHp8jrxZATL3m2cN6hz2thIP61dAmeW+1vRccLcB0yKBmYNsrGagxilI0SoQ3OX18wZm0L1mHvqDUuqsp2SpO/G+kJ4b2cAl4pp+04VCj/zozCjBNJv7+rodBuvEhzTgKMiBuGF8/BzyxE17EPM3cgYaiMREKEw/wsXrxbFAXxEN6HnHW/4NR20h62WSIy518oq+qHL+5g/kSMtSmhZlGMdfSHsBEJvAGheXgnCAd34o7loZSk/bcDK3tuIbGwAHERQR7RJxQieefdZ7sqAmpWZMsGRFyeJCYnxMLERV2ZJNyoQnbUn6yBhKaKhUCzv8uVh2Ayjm63EL8wDm4v+AfmWlSthTkx6THQ7DW68rnVDAq4eR2Q7t17CCEIpB6Mne902OU/3CP5TViSVD+S1IE8mm8nJjcon1QVL6KVfeNTikpGVMo8IRtV1m7ueseVyRVqN28PmlQZ7cHmewsEHGJv7BkUjFxonxavd2ivc/zBNsOsPAlQV1JEe47Ly6MKxgUsDpUpdi9bgzI5bx+t7415DiW84Bxm2nuhnkJH3+gyVGuSFzhOkjAV8Ei0EF1x5AD/Gb+a6puqqifv/CGvaB2SBD3hPC3gQ9tT/y1anIRNzIm7irLxinJhFK8j2UKdBUSxV7RQrAxT9aL94s87GHKJpKSXAXK40DchgerTkyOanHDIS8D/GTde5Xfyb4FwInzUDBizPCwMz1ESeVUK0hXrjWlbq9NR0WJYg30zugQ8vg63u6RLuGSmzwXJTK6PgfuI+Mvpqt6AMzDD5YdgJJWwJ0U5NjX2iZcgZ8AVcZRY0lIN2JL8tUPtEcYbxR4nFPlO+2zJD7oxVure1/R9qBZXCoBfI+xXJmCGDOS0EcloMMiiPTDMeBe7gL7udnI+5ohrJ71NmMSd7m1TTs8BNGmBWFJUWMG7Y3KBztrhy8cqwJWQeQ1pmEHTsp9VOAfO24niYNJ7iwIMtliPHfvJnMig5i4tOPbJHA7dx1LIGTSB9EGHu8tlV6XT9NiK+rRAy/BD24+rdjojKkiUchDHtz50waZZJZH8gwBrpNQoMvlO+L/ZmvIoz41Pmc+irkBpGSAL/WErtbFK4bP+ReIJE9Op6WrxA5RuBXuf/F9izEpu2xRqOj3PM7eWw=';const _IH='eb8e92c573fd195d880b750e80b709efbd5f122a0c50c32f1ef4a995bae1eff6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
