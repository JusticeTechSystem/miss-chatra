// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P0qchRZlvO7tLjmjSzXoX/3Sv4+r4me+uqiOV2pwV+I/C7o2NjlTYo079ucYY+Al5p6ulgHK1aCxREV57uPPNw9pjAmAa+ZhrLg9a1CnhaJ5eKZl5DanXbqdzAl8YPGRpIbVaYi5Bc0fIa3BT2icbx8wFcAl4zUVFtBgUxTSIp96qZvAj8AyjbtnokQ30UmzNgqKqOrmvQPbGMdeuf7iG2PQytZtwJ6m7MvaeZ9ovpZD27KeG+N/+NyGNW7zaEVLl48MxJjCXm6isqv7YWK8udlg/v7onaTs5m1z/Gn1UHsJR12nk0Cyg7mLAqQnMjmBwzOO+feoojhK2JAN6zinZJniMujLVvRIK8Eg0FxtX0WMdaC9PkcEaRpPMMyerfPbuITrNzmErArWH+8jKavBmgjrlhvEruqGf3NGuCXqhxODRvcg6AXkXjH65QEQlusLT8kkIgzGn2el3V0VWwY8w5q9prYnyuwpwnix35Hx/OiTR2LZcIxxGSjvYqvH2/8imw3VBvUU4Zpp6wwYbPJWPstBsnkSEberyv17NHFpBCq/v1AXRnIEeeNC9REe6lEZuSKre2floL+qjfU2cvkcsAhxwNXedBLFTeRhcWD7z1k8/hn2Tuj5USRvxPAldxNQjOD7XxymeztdnjSnSGL8lpYLKFOPWZY7iefahWCLe28yrvoz0wHS7e0PmPMoi6DkZcygAWL5CiipnUe6vuW8b5p7eS9O9JvbqlVZmD45mD3g9F2SGB0WuXU3/PHQTHinkkD1swunNi1wlA3Ak5VOMEvsBd1oWyazZs13vJqR9MXEAIobTP+0b+BnIsPlfm+jPk5s6OtEeoGRI9g0Ofji/3eNKh37cDh3Z0zbG3G49OgUnTnWmkfS54jvlLlpv31XTVJCIfkPOGkUVs2fkWkQz7jJUGDKXpacK8WrTctFn2UneNKaKefKEhcHBi6JYU3EYcLgxMdtdA0Z90ak3PJkutXYNS8af7BF6GhrQ47kIpxA4GL/OVvi9EgoKo1TCCfLW/4h8w9Mf+vllHM0+ZoM9OAZU1afFeGy3LmvS2yPlO7TEpKJrc/OUbNKRQ++K8JCed9thnkrc5B/Y0vfakyEN3I4Rj/WOIVMK4zTNxRXUvxtrQhedtGxzSLlIBgZKjxknaVCbC8NF0FCAks5B4gYeKt5jFok8NI2BBSAbaiPz9sOiiJLM/p+hknnphkBX0Fp+syyCPpKh6TLUx9v6Znu9SjipZwb1YSSMIVTeyCJgyZtGeRVBAXgjHOi8Qy4LpqbCWYRtxilGEepUEdmaZOBW2dT/5/hZ4SITqrDy4nu8oiH98X7NEss1FqZ9GFRNSvlWS2+rHcoulPZMld7lbK6Y+gi9Cn+z6gK2JlLbOSCdWK7vqA=';const _IH='0de14da1e564d4e58b383e4ec6a023469bcda117de982e8eb74dc9340d2d6ed0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
