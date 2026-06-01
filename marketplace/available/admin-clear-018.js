// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwhZiOEXCZ+23VfzR5T2Bg8a87NqMm8dCjr7XAfoz/5eEr5OmnE/Yzv6D0SWIBFea/AKsLcnKDegOqlLRJtYoFJZ9p5OMgkN9arXIT03Q2mXLwRoL3WPiLEyZe8O7AoVIwhy45mGpGISS3b+yt/ma0zh2A0XBX0MLmanh7T6DUgx5Ezcm9nuD4i/klFDIWpntHw7V74xwXUJNXzR7uXAo4qY5NnFJbJva/lwAn2fdAmoavPBG+7XgbOc2L116GDPkh7hDFAelIOWYkRkGIprhk20Ut08aKq11vX59OpOOG0nwnqTp7Dwc/ZyvgRBbGZ1nd/FPqvthtgEy9dJS9N6o6j6kjn6CW2qhyG9f8VNhCQQCs5bpc7tES5QC9VlVtEb6xz/gfQhAFsbf1JgVgI5ECX8vTCXKKq1q9gPhEHjmXuGa0mSP9Iq7J85b6PSjQ9Y6z43E/rhPgLHT0sFFPnCGoHhIYPRXf+PwKbYEPIXFEZ1ZCN8kHev+to7juRCi6pynUGQtLQxOaIcrDy6039VxLf7/84h8M0ycIxvZsQIxXcdKa4HanpL8AZiYho8+z0ON6ZaHujUQGRjhNM7oqehlZnniODdacIMJkFqIJRP2uRuq7nW3hbKwWU6wv6vNxJjMeVJ/wX9caKhm9niSEcLCFHQuardkvyqTYUCG9DgsyZgk9tTeZcNoqYXape0Q24mi2lzlaS09io9RJ87fPZ5CMRgll/pc8rDGr2LjScCL4sB5ai0scYB3s554ObKTsG8TKoOrGKb1lVm6ojbXeqBryyDeglbwo0+K+t/63LT3PTtBmFhSVI2xR8p72a+NdJJyKqS5bLCXuup5idTJLAbPc0RjZIUpEtexG5419wpYnYyeMB7LMFIpDnqq8itMkxuiTR4m+RGmrP6VxcuTpTq0uogV2Q6CZnOkeZydrgFsoLXkbx/blcoM6QLBX+tlwzaRCfnDhPpihTMBTQvlpZ5LClHlK6gaFTzN/Ukt+/jfPdcZpY3krVz';const _IH='c35640caeec68b75a2df58c03e7b43ddcd9f4c7c71377e79054b63ad64ffdd53';let _src;

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
