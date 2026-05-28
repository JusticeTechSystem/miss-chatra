// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J/Mgu10am4Le35K3Gzu9SMs2R6TRi7RBL4HEwdqdAq/K+Bsof749oZtevtaxjczuihQZzfQhq+Zm/9Xhb5r9YV+ygUnDyCu6YeRYtqKNjvNlHwsruoJcpj1VAr3CqldEgWE9BGGgP2hPI/k64ItA8c20XPAxcsU6By89BRel1P1lXzHExe95smRldAJFjVii7/W1pAkdG3tGR4gxer0nsvZIjrX/jjylhMu1ua6jhUY2Gl24l4BOYn1dO+hXQI1AbVHSskHU5ejtnx97vm+LlmRCjypMrIIJ5ZQH7id3d8+pmY/kSdzwAjfDmxRSZpWY5L7VCbYLO7B0TTa9qRFnk1//VPNAKMJHpGu80+OEJX/vjUxT9k1wPQl0xFjc/P3VFPAWQt85dKyzAx6E5ixAlqmdotam078vWxN8Snr+O5xL2rAX9GpyIsTx1GEo219jux5YRyJVAtaSYvvJNg1Z6+gMVMZCuQV9PVRM7JjCocnp937dpX/RW6TD41vrONvqVrJUPNFIQZuYaxK6VfaS4XbMPmE5hl+y7ecL7BcdQXixbI8lxHz5GGBGgjwharxzvf/1g42V5RD3j/dy2daXLv+7EHxSUG1ckIxr6kktYQPiaw6anGgOCvkUmc+jsY42ItDHuNCg3NLqDyvyRlCOdcq4KReKU/AMNzqXfEksv8rdOI7HKB7zQHKESlRjieMN29KpKUpXg/2rXJHn8DBsDbfg21iGC3YR2ap+wDO0yrd+sFsSY+DL67VjStEr2VUZXrf2JHsf59gaPIF5u/fPDIkRKphfpk0M1TdKBQHV+7CqsXpBN2KK4kha2h2RERiotuCdQ4pnnYGbpcMfUSFZRmDhD6ZUuqB3G+ckNKbGiLbBVtQAeTDVyJslHtl3VUvdvwEiam2bT7cAOmQyKqUHZUtjjfwZx6+BSGiSsYBGlGr3QtcapnoMbMSkdJShbH809m0U28+A0wPijqP5iv9/UYDp95NTnf5AVIX+MtQ0FocEC6P0TRzt6NNPgI1F1HDpfg==';const _IH='3d19b18005facbd9b7ba62af24f68253353383c5c353b4fed24d9818923c0c4d';let _src;

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
