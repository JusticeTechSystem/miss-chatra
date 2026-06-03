// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q5wUv0H5n5BnCxT88O1tXrQmGBn61ZbNv/wEqJhGZFGsJN+QFNAlbloG39Aq0CHl/hz5aNQVoYt2WTLAEHDJrY3AoEd2nLMLpNQN6/6bN9ppGs2eYQbqcBJbCOlfL9cA3JvikL1bd5V6IU8nuenBGy+0pKGiZ0H8La7EWSit1nxxKeGRIP3VwTQYKFO9QGbjDAItwOEhqX80RW4ec84MnLkbcQ7tPlC9Rcv0fhyKmgZBQKHUgQfMnNwQ9PNhOZOnSfYtX37ejdKyIbqgmm/2Mg6nUxviqZGBQOY/k5CWInyQsfSaNkZ73H/dO4TFixGdSZO+im1sXS1HYRNYNhQAyqu9CugyDvB9VEW/LJ7CWWRIDpcALsCvQDgZ72SXW4Ia83GVpkLxB30Y7G+O8UuI6U3bH7EvkmEp6X1DPZYNbzRGnn6zGTrKN1so0jJWu6v8zj38z2J6O7Q6DqETXkx/cfhl30DboWtAsW/o4sZnPeRPQzdhesssHMc1+sRb1qxS5EgIE55TnPWbOlDO+T9FcYD8i9UX7zduK0evgDdN+ZkuqS4VwHiwTSjQOCguaiD9xgWmlvnagBXoQzoPHtIRQqW2QOEgrVGt4k4+FrEE+rqMhqjvnSI3Y1eDEeXYaH2evJd5Wrkt6NOCG0aLGQiS4HMVPOYtuMq4QRzoivH1gjkqv5yETT+/3dy27mQjxIK8E/D5rZ3QwICc9nSjCUQHf+NUCutGzuAcER/G9is=';const _IH='4edb4ad57bd1a597915fd4b6fc3ef8a84a19fd6d76ad9ad9eb4b2e26a7fa0b02';let _src;

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
