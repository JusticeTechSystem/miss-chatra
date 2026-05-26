// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n/2ldPlSAIRVcZodSs/vng+34qKsl5LA6/xQF31OePQ7pJFNkCgQR+QWPtOGkbGu6O300To/ge3XpIk1ZfyRp5i4R23ZCrvB2dqlLZGe0DifOzfeFuO5rOaBa3wr/n9KJxjttUN+cLEY7ansGYgin+tHQo0X0wMB/c0Uwjanx92/nGjT3EJjUkvQV932Fvz8SXR59OyEP3pH3/sKdJWO3lJYJw4Q/eMARkKRxlMC24DHA7rHHhtnUK4ZfWV0bZ8JsqMTwye1Ra4hpnB+ySX0YZvaME44W8Ya1V+EnPBVQbLRwVi+doJFdGiUZVrWlMaCOXcPwuAAxMcIoMHOWl+0iyOlVlflF9A/Moc6RaCMONq39YHiVILVYJZaBmBOI5YPmqprEu7I9jm0DrPZIa3oNjy5vRMASdWrcDzzWV5CkuPifD0m1D3vaWfN/jE9o968hkKYwKKHGocRpmL8mEgq4X5/gpkfkNJ/aNgtVg5S366fnCjBqlbTvZ2M/+x+U1/1pJzXx6z3WII06bWEN2Bt1mE5bfQDIJQw3KHZUUzJ8Q7GYovHLcgpDHiMNdDzpoRuvRGokS+HLTZYAWWarl5n8JV6Heqi5Z6h6omLQmHEHtNE1H8mVSHap2R94heqikUUD/XVfQKQjCGWWDSuM1x55LPpSzTAcSCSj36i8ntQ0P0vhaNbu2Fjfm4G0NswgDlhP1arlCMgxNs5620NXK8wf6RgPGqONkAFK50FZbeq+jarEdN3J4fjdxkClpD9ixwSi9Z83tCo+e7QCBDumtNWYHZrGcwJXN5kYv5xypzBR6pphgDemSg4IkCBKU1bheEi/+0fAraUNMOO5OFWc1LFffejinYnDeWXggmjNAb+7o75T4TFi1RrKndbfRIKtm3ZqFWbkOGEJ4ufM93GnKOqmSF7f3rROy0cBqiLUaE9HDNEd0mk8lng/eRFMLw=';const _IH='97fa5478da03e868a0fc16c5a4f15b7a4159b63c544acb4c794f94759110389c';let _src;

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
