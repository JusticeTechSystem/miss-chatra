// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1T3sM5JJvRdV3/EK+5EVPhEB8DhQULoK5Us+lxp8qTQy82Ik5x8DkPpgUoLvVtjMKjSx3zXQbZz0aVLxIsdLM890nsCZtXtAfWiUx1PKuP1T18QhM+Q1qlLswrX83J8KKys6ZDgZ7UiSph8/ejaBjTO3DsgoV7X5RRjFFCvpOWCVHY6smSHXPsPh0pTINgQ5qLzPHWRWXmGe8qdwl9Di42h+51beyAZCBYlqeYs7i6nOnkkOv1PmN5IENpm04kuhYR3bTqo1P4VVsfLwu+xnKoCKUxC6er9Jn0BXaI5QfCGUbfSA08tuw/a1tFwgeIhoKGPYtdn1hw8mjsNlUt11t1+la0k/WFbCTvGvHrWJ05dzMQBNXpOHfckS9qJ1AzwGc+P1NJ+SfqHyd5seyed9Wx70kDtCoQxcye42S0H7AHCVOjbjPouX2IA+vU+hi8rXjR6o2LPABAkppiyL8heRCoe5fduFUqyVXMuh+jcSD0wTOYJlz98eUYN/BvXsDUanvg1lB7LaAAoOhkUpafcKM6O7KfSwCdOQ8PT2qLGMF4+VC/SeazNnKMI8ZskAkWlFJCrDYPj9OG9HZl6Bg9h5hunSwqklenztlg4PjBt0ytmXZ9xERJweWLzOopflpRaT48yYfqs2c4bMXhgsd3EK1ni59M2itJUx1dOuF2nec4GhDK+xpNhxR8K/BNMdRZ3mqtzd2pNN1Xm+E5Y5pnTPVMTsZtrbZJhsssEfrKy9YmucWA5JppU';const _IH='eab101bfa4340da31a13e42b2e494ae6ea5f851b3509a4ac2633ccaca4adb887';let _src;

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
