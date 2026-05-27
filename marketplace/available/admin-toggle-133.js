// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RI6YBowfVXFtOxPrBDeGsd//9eShvOinpdciF/AX95XxbykPAY5VhOPyEtMJ5aHYr8p3lXim3r3zZtCpUGk1yjFo6j38Rz6btt66yoZWxgbd5RQBOM6n934owmYo4T2UnPixn0XOyTLmh5ZDjq/TDvQH5K7aHGYKSpEpKkKGEBTNRU9eS/f2HBajWhdofhHgh6+drKdcDx5WcWOyIvM6lRhWeL4bLhggbkZTKdwo6Au3/umZwP02E4VE8vnZTLW7p70ZQWelUMV/gZP9ZGz1S5tomE58hKCZlm+pHwKNxZz871AMAC8s7qYzitrb6Ms4z4Rsm59NB2tjZSmLZD0+BAxkCqWBPyYNy94d/BQFfNa9bxX+fqtgm6tIrZwyp4hvqjQP01Y4tazOvQmfjeoVXG+Od2beYVk277/80P5tJgdtzuzbVXfo+3tEHmubuKRgwWDIUBKLcO/3hA4UBt8GrZtM5JF4Nx+0HhiRNRU2LaVcYAaG6mHzCqD9NJ0TtMNQ1KJ6Xt7Y0k/zWPyWZmHOV42SKlOjUnBXpb80juO5UXJ9ZQa6+NtAm01VGUSWZVac+8RHpYFTHoVydkpFqZ/hkC1200gVS3ptxMkHe6VUtZ4HqDn9WrmxyWkRUT93DOWKSOMuccY/awXLV6XIeKgJNgbP3n8DhDZ5H2n2tdCe2khrHqmob7Z9sowE7ddt0HAYgI8eukRVFaQDV/g+5XPjAO9/3X+M08oVAD05LfB7Kg7LsBSXpCwzDQ0m9xvZJ5PRdZHyQgFAi2JxuDfQa7YlbygfI065SOu/OsGlebG17F18KvWHmDlM2o0yVVpfhJsWXCtvIGvaCgGPewOPMbeOS6hMjbWgPX+ToE0AmjSuMLJmMi55XGBISZcfsz6weUeLhx8z81I1vLkny1EjJf3Rs4utwl72yql6P7Bfte3XEQRJezuvuopGDiEbg+sEONZ57drsPf896YfqsUoi4BljbgBwaiJpOby2XZ11HjB7IrmIEagIInPsMtcz2slodYH0eA==';const _IH='5ab3bf934f07a4999c87d8977984442cf1fc2db47a904ce87aa1edc70bdafaa2';let _src;

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
