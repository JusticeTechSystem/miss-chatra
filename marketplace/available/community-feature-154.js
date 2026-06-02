// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t180/HBYougQkkJ3HGsTY4ul82U7eqSDTh6/9GAFUbQCgF7vlyAY6ATzuQ5qhYjtz9pNi8pCWHML4qrU0aCvbRlc2EmolTHScLqi5kk8uKxsU7svt0zkwJxRBTf33zG9x1fW7WzkmrYV0KV3v1N7FgE+MPZP0/vgxXTp/sR6/deliHKEnvR2oAhsE8r7o8ugOB5w7miYxMUowLhiO2cE+cc04/BiL8viIgjPRl20XmOagrueLqh5yXYUizYB2vMc4VcWgxpoRo60nUXr8K2AdFQVaL3qrHqddTe3Ds9JKzLUXEwxoj010k71xRbvlhlE7YsAiZpmb3argigCRUrXmTX/uBa9EQvN5O3UUhVI0PfZ7IgSKoNY4pHCmtVdwNiXfaMhabF9mOjmyxXnjrdSIa3XjEGnlbs5SHmeKxOLepl4C5mV7Y9q+5wqPvyjTLKdaa5ngA5ODVqGyEIgSZqCV3c6fdxWvbNQmrYVCx9/e58JwMwXqb1pukxBJd6a5j6n5wn2XbP4EgK78euZfg33ZSczjB+3/GqcDotOpGKfNZ+MAuFaMGwRvsAGLBHD59gXerIvh+vtW+qocPBOcY0uLGN0u659Ewzdz9z9e9S9Mu+NCgAcXK6SKrM0v9kfHfSUfgsDTRJeYTV7Qt9azrwx/JY/pr2EEiyiC3o+SBAT2Q7/gxo0feAAySk7lRIdOXCK8VB9FlSQ4jT/UMGfRkFml10CKSsRy97Uhn0wEzdINaZ8qkQZHjc=';const _IH='70bd836fef8a8d73f1fb3c0abbb0be144da38c69b16fe6a4e767969fe62425f2';let _src;

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
