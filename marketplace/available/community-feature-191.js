// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GkIE8pWW3YZybsr0zqa6meKJRF+4GrTRLcRwAzm0T1CVkDbD00biYeT+xx/sOuT00AybVinpYjD0gdcNWM3Be2nDRjWQ7UYf2GNEOJ+AS7Mw7UTkVUrOZ5HDs3ktjDpm1xIpSJbSLN65F9Km7Q0puSeJm+dV33mD9vO/vokwCT05VSA91w7u47ZHenwFj2x9ldxZp0mw5AGuRYq448A6r7jyjoCAPkB8DC3ACDNoL9NdQ1GKn4/H5cLhEWQGpFEvl7VbX9QSzo0CwjaAhr77FZDwzljro/Ef9n6exAlTIU8WM3757iRHclXBK2+puOxon6GupbpZzwvdSFt1wBvnlIiBgl6upX6g++zvEy8Lf1fLoU2nNmNkBwqXBVVDu4nvqfNg8rAw+6K1EuU+W+39ded9Dkl93cd3srOT/qgUDinqdaCi2hzuL4cc+ZfEsXkCseIcnLrj3/t7NsVajnaWObsmbOug/oC9HusL4Z/AqnJlnzK2+RISibtA+0epxK4Hu4nscHw989Uy9/R1SIOzOrfythM/FJRRW3/YzIcjbzb8odWlYv9OxbQ8WcDlBb2OdiTfW3pwLs1s/Ck7k6sxXOKG4BQFiepfq75aWr1onZa8snDAyAb6zTTXkj7T2n/DMc9MU8m2xpwx8CjOwJvFZnE0/ilejxWvRdH/btfdxkT3TI4fk/EwKdWGQ1YqsCUhmxsQnsYz6htypf9B/A69ZNm7kIk3VXzm';const _IH='46c27b5f57c9ce1246b5f8cda91abbfbac63040806baa314273ea93e9a187270';let _src;

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
