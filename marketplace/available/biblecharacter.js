// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kKifRPblbdYbh+iRD953RQwYqMwPRC2keja7+aHa70i5rCcLqg4xY+1fpjXTET5/2ZmVsZWdmxSkvNQW0lb8+RERHYBWgrM+Yz0iYur+eULhvayK2/YxxMxHW6K3i97gsrIAarlGpFMUluoS1QmyOWoRmOXXgbw/DJtVG0+XuP9AnB2woCo+Z0wSwvbYXTfnrzpF3Z8yOdAAG3BBCHY+yh14ufxE/ssh6m4auJUHOmYsqzoO6bQQFasI7lGGmkR2YNKMhYy/9OqHu+P174E7NBZG5JczgFrG9jSP6+k38AZ8ua9VY1Kr0tFABo3ZOblTH1z2MCbxQHV1H7Q5wdqv03QaOUWpjQf+4T97VtKwOA9QkEpM+UFZ7UuqB5xO5tTqe3LF+PTV8IJF4ZCGlgaD4nqzF9yS6kZgK08B5BoblWDPvQia96IF8VmUuC1EsE/4ObXbS+BQdUvqRWyd6saaMHcsBnRM7sQzW65LO+v0Ebz6Xei/w/ibqreiUncHVD1nkGW77GGp0ClyppXOLsKt4aV/Y/yUletfeWytNZreAoGp5tdKoEHLDFgBUQBXK1N6Dh8xPN5p1aaBJwTF/e4MeaWQ7h5gupaFufLhwplHtzijdc3sdJ2/6F7J7T8WqGSdj0FmjQW6zWl+HO+Ht0dbss93r7HR2X/z8ok86HNNgwyW3610ymJjnWIdcMimHWg7axRHftfswAp8V2W34MY3eZkLhEXl8dZCP41yv6jNOtSjgJOpjtfSV0X1tCjnz6iHoTLFoAKgSXFeulbFdWsA/1jDR52x0U2SS+kraMgTb/NnAYF7VmNqsY0mASV+an4mPgikqy17uDMVWp2BcyCNh38ac9bHDwxrQrGj56cy6YsXun61lMNLPWiBvPvP77QfodDyMVGmpc6SYooXquv3hbcY9xSgD8+BXgvRgN+eJNh7T8wGphqub/hsxBM7ZY4CC3wO6WfVLO9cw5dt3YjcwmeAkkYsznG3Z4Pf3+K8ofGvZPxLAMYPT9ZjynZkHsm8+opLO85olPF5oWPtpCisqxE5Ocz/nPwqJOu2SfKIYyXOGXYOtclFPqw2Uy8A78SfFUSbxPLV0vJDmnf6koQcV16TS/tKAIDb6E6Ek5Ef3/JMKQAd7bL2oAZ/QxWSN5jA9tr0IQwyZeeT2oUuVBKn2jVZyKY58fdJzeurL6FHWqztzINIAVNNXIfPnDXTN5o5/rBQYfnlhSByfmi3Fg==';const _IH='870272b715df520291de495acb31fcee072c567e4d4369aeb45dd8f6b8480000';let _src;

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
