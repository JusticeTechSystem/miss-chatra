// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6rvoXoIoK7eoYLivB8CxMGwyYV8bLzNljIr4mbLRTxQ622LOH9zAkmWv/Js92WW24Refpu9DgSSPgVG5KH2dO53WkeZMMt437Sy2topLAPEgz0CbYxEIlL/QvyLEfTVFKOTe59VWbibaXSz7s+q7zjbdPIBXRwNFkdfINE4C2LFe2DzrzYZ7Ju9RSNnY9JW59XBMe3JkTCH2L0q+NOWxVOc+j4GSPnO5kfvzndVPqYkdKr4CfZW6etTlSOgqgQPkEB2InKBflbhU4j68Fjjw1RCvDgK+YAWJpEKDxILKlCiPULBhEQl/qiOtq6L7w87W8E7AtexKEtghR7IVxlcfdxqdtly6TVtlzYtRFG1ZYXdNLnjGfgariiBhy5w8axjckAq4csDR5IGtLb0XXeZOfp8Teq4lCa8kuw+xbunjyHUSZ1ROgJ7h/pMch2XDbXsFHL+8pdiSU7I6fMEx6XSbIQU6mCDUKQQoSfE4qPZSSwIFHvRJA8rmA68v5oXnrzb2/bs/7wDgA6KRP+6KGK7tDTL81B2jQ7z4REtRJdtzt73SAEUER+YqI7ogQpQ4lAPTO6HaXyH9Ydr+Fj+aI2cMUAfDYQMuq+v17nS+1zZjpbgH7U9oLim7fkfcn/GGvs7PepTBMlP0mYU2KA2LwaF3MK3y/3YIHaxt9+3j+ZdUFNB15fpfQjkFcVJLHVnsiBbr2/y1hLsiVF59fDYU173+biv5/fFVBye7N0pz64W5z94btLA5swWi/CQoPYescnvyzHiPNjORyoifJDUWqGwBVBE5CLJqBSq/v7GZfcwoRrMP8cSYonr/njwst7zr9qflGKP7ZeHcQDENTJy9XqXSxujJe6Yx2r4lQ352bygW6uJ9VQH/UoZ2ZzSuIVNfXUg4494jOfnHd0tRok/jUzzS5xSpwdZLuK0pk7aaWtKAc2EHlgVWU05O8hQZYjTEVZg5unWwLPnd+oPbQuhLTUl4qYlovVa6l1H75XTFsgKGgHE2c/xrrC5RSwijSJEcwUGz0EJxRLZ4ECu6g39t57o6q1wpNjR9Vq3YpKC8DgqNjEjJyvRH3NrAN4efTTEXghxh9r0fb+KIDM01xGWwA4uurdjEjBCqlj1f1ucRfln4w5kioS1XOGDThdi78pwY6CyUVbK70dFdz5N2lSqbHhV5HVAjEi9k6NNF4oGh+O5CKS0ovktDVKzLCHC2hiJnXa3S8ex6clQ8ww/monc1qmHIKLfIjRhJ6IbKJzxu4esM+bqSu0EobqU8oVDCfQU3+//4biAgcMG/kT8S1g409itutJPYRBb+HJIArGtBKg+Qtuc2Qe/AC0f/CaQX6s3LMENmtQjr27eq43tpks/4hCm6rCeSBYoYbBMPyjnHdQAE0S6/JmxO+GuXuu/SdtKdvkJJmTmro2ZQK0B1JOzIIOr/VuxKmY/x56SuLYp8kUGTr2ANwx0BZY4FZsUHGVYcZoQKCwYHsYgdJhLkltwokiOu8I2v3Af9nGxmZJfJbfMLDs=';const _IH='1f5ec7050525b7b25fcd641e2803b9ea5357232cf1dd81e4b357e18c7df0f519';let _src;

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
