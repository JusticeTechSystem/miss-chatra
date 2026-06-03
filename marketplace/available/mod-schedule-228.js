// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uJKDM+84kLdIXcgAPbtd0XtaFKiwwDy6qaf8Iai9zDkKfMYaKxdIpjobZ2OqDMZ4377O0ZrNKb3ytv+DMVujyFHqgB35NKP3fUJftdS+6m0WFXa/7FzPU990gYpZ8pkBV4SS4ZAzXjgxl4tKwbDaKlTDWYMiAe76dmVxK/TxH2EoefoTG1S/pUCpw7CfJWL3Dao/2GSZScA2ggh+ExtvGYqpv88EJjLjKRmhcWzcSZIGsF/TzT+qpPQEjIOlU5xQNJuN8PlG0Y9wfKj3o9p+F32ONZdniH7jEF+HlLkJfhyrwGDJ3cVca7+Pnocwt73FqhMznvlZhTSR2767BJzTrhH9ZXjTw4vuIqNVA+rPUjoHb8PQeHAcTDu477nLuZY87TI47ff5COuD77zx4Mwc4hjwiSPQiBkolWd2EVVRMjU8eJ1rCr5IhmakAgHqoSZZ1BsZGbqhYPq8/VwL/fhCvgB+nrvQPtNFu7b3oE7vb9t8Q+a2p3gZVcAXrTd8NZgXhOawTWLHHEWodu0F7AfgoKExbI2cxQnb5uEtmfwezGp6c9fOLYy+qOCozSMyqupoPeDBD/mTwvn/WKLVMvw2pbg4XPMHg7VixyFeS2k/NpOnHk5W3dm4B0IU7h9cqjI+76S3oypwdUDWjvYYcP0JYIpPxa4zDRvXVvSjjpqLsetojl5KF5MoilQfM9vZT5ZCxC0foQMnRST4spFo4GHDsmxooKf5d3MCs5PwDoOfmPCP4741N9Tr76KFB1JUZmRxnqF0rs9gNMkK/t5V2B3rmUs86ShPpNHiAHAqwEBx+R/HAO9mhsiyVAR4ivpG8iG+jiXZDoeXUlTXIcG2eJ+m9QZMX6K/e7rReqDOnKLWbb3RL0BJhs6pBPDX75iQiEA1/YVqJv9HkjR0UlCUOreZEtqi+QobJN9lfG82u+vVfwdCq4PgUt4mLybdcwl5/jmTyhUUJVppC30GBPG03J40wslzctoqAPymUh/uP28cmikgdx4pcFXQe9sn+cw97VUkYpfqN0SuPQ+D3/pNeFm8AXrJTjeN71SutDgUExDHELk9xnZuy4MnRcAeOov13M/eZ3c8LnwVo1YBu1BUWoxU1vAaH56i3hTcsgpMzdA7oiFPWajwPIaA4r5MKgUJ1Cogn2gQZNfYa+dTr1tzU8gGJkznyWQvS+s5ecknGvyHgGNNjXXHC+f6rKgKqEyfnXycEK9KB/oabm56kGFMk5Y/B9JtcdXdV3Rh8ugbl/1ukW+EBnzPvou0sI1h9u0dMIg2xiTiLDohPg3VxV4VaaNWg7fdSmNsSPh4FBiba42vvzHP9/BFQYgrmykVn3Qr93l9EX22FfIO+ChWrUFycpznDI5VrfZfai8oF3lnGjAYdLcMZRurHCCbe+QXGzkvbkaCFo4GMH5GbIdB52IA';const _IH='65d175bc8251298770c4dddc50ed933b86aa76ecead0777497ad24742287ccd4';let _src;

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
