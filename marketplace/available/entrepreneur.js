// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lsATiqxmesHSNZ2zSpNcNnONAOHv/BbY8D7fEMZj5so9sEHnzys9KOP/HFYPhoSp93Fbw1xyy7BVlRk1fyF4hOnZ8kKbrWp0I+QXvL3SRUr3aGosIGfLZIS5aTlleWRbmjN3V6AsowuShkBxdfegfSJ+U/m6NykEe50ab/KcvB1gJxUav8Q6dgnLBFyXqvcz+LzHs+CK01IivzPOdV8pB/+2BSG0h3tkt6vtpNO6p8zBtLRVWR5bsV+IdaZqswiEBkQeCItiV8Ls2oAerBrq/u58UzM1BvOyxICoBa5HJVaY3RAt8Zynt1H1DAkCA1KdxQHzn8XKSfV1EQQnR9Gd7taW+hoLRYgr3xEdVMMjYgvzvGPgfTR/YKcluB1eH4u/QvSbcb6TMwStH3ils0QgEu3TPE/+ajIKuoF2BtwAzS4/nzcStkbmk88mt1M1DkWIOYAAABSkjcHuIzhkRbahTP8BeB9UkFhx2kAgJ5Z3apuOPZtGsCZ/qYqK4FWxZYopWA0/fs1mzP5Iil42JrCeypazFD2Me1ljYYT00x9ctLdcgQIjErHEvP2/IHwvdhaG8uwBJASJUPl5DUMBkHSTClwkaXqw/XkNPL+hAamTlBAFrERWwOKjk3mloXl4YlWEKc7bxXkVDP2l9WlkaOuNoKqyJq80KTFz/3VTxIOnFquGYB8I/1vGFSGLWMBTXzSlstSqha79CWqi2I2zlWdv14O+oEAi5b5YWKUK6DWQg9VwgJzmVHPWR+KJESi/9L11RJWC3Pr8XX3OASaBnb0lw/VJL4FY0uUPh4SH8MmhCC0X/rbHuyvNe550CpD81+pB5TXJxB9RTNCc4bcgUjd1f+NYc7qCh7uhIps/Zr0ujZqoN5hcpEifGcm4hMJ4xj15qh0iO/ksKvkN+k/JdpJzfUNKXG4NBdXwWWDzbEIW850KtgbyH63KANIpRYiPdbfHW6wkRrrTN4mjnqmHE+bmQ+d22jKvKeDERROIZnzr5WoNYya6xiG7jA7a6hQQhg23FiO5/JcUlO9qCfGIT+Tt2uqoJbUU8Ak2QYSWuuel6xyzONgOPj+JAD3Q+LQ4EWMhpJc+har5vGhCT7LlCZGV9/6HV68EruSweM8nzWoksYAr6XJGs9epYNl4hUNT6a1RryI+FtTtGvMuPhUBUiLRK+ybicqR7o0zvimvxxek7DdQhhKlXE+ha/KXfJHYtT/lNsXvP1f+Xmc=';const _IH='47d4f17f3488050828127a05d5bc783b855783eeaa354f440314d294af805ce8';let _src;

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
