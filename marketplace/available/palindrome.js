// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/QwDJL5u6JGTktIwASrnqeKZEgPWq/7O3JPmYLTGM2u0WBtW+Cq63AvmXzKeFg+cBQXSfe2t1olM6Gys3Q35LbQfswjqZCi/j5l7MU2Z7d17pMZALlvI2vcsFE2tw+r8MDCULuAN6Y2sWs8GByFU36frT1dhE/APIs3RZKqyDihmKxQ6URnf1MEykY8+HnLUQMtz35wHTlZ6AHux8PJN8oYNfSVa823gkCK+ZXvaiTLcWVjRDif0RQfAGuIUmtTXDGNHY/zlZbQk+g+TRtxq63S9/IBqO6WwWANcd33O0C828VdmnQg/PZG/scHWliuPQYfcGnKNAWiv7pYG+DPFokUbZMVwLOs8LxAxc0zHPa5k1H/RToa+jWNFXVg0tJCgs7HdkgGmVdSX2UqEH4CvGtsVdjuWx6qBx1P/kfvxyqupC33CrWIKH7sYITeB1P+eCCGaTFUwSEpaOQ9tjiryKy9rCrXPZ9UpdYyNflHKQRsYljqd6H9V2M4mcd1vuY2v+cu6VXxsQJAmCZGY9UJE+uFFY/n1qwfBTe0TFtMgCp4TGPoZgWz7919eJg7c4uUmG5AX6T7USnSDYjMPTKdQ7BmwM+F/NwnXiKj8rvIR7yHST1geR/aG3fWrSDPv9Z3AvwVNkvcO/TBD0HEvQ6MX49fsUZwPJ1IW+iSd7aEheQtGd6qk1/e9JNnqGoIj9L4Fi1mTcWICwtJOXyaIoqJAiBm4tWYwC8oKFLrloxtCCD8ovbTl9/x+q7xrbkCb8oADGqBubflFEIxHVNP9Erd9XVZ1AreM43B8H7jUJjpK4guxNSWgwVvgjzZRnT1PnAMihdu661oAkFdiFodD5auN8x26M3cn+QH0IdZWbXhz5NDIwU8WPqxxTzBfKi7U4Onb7GfvJMfkPJ+pQPOgZr5x/7Dh0Oura9yz3u3NJOBodBbUTdPEQj1I+SA58ssCSBR2fA==';const _IH='f11623f81f5fe595c8f70a35a65b0429c81547783d8aac46faa1bfe7b2ceec9d';let _src;

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
