// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/Y8NMFegJKc7FrdyfWB6hdUe+Cgifm+O2RCa/KHXZ8ljCRAiYgWzjRykjgYHlAbP/fkUGYqYw8MLQ2uq0Z0U5/+yMD7VcKzZkrx4uISS6HIDM7wo0V1wIuUap3XG04m15P/LB4eAYXXyKST+/NAS+cAC4Q9+JJjuwmSERh1E8/LJ2x0ZoXfROn95XxQqfmLZFWLkGsGPc3OeMvxJ2IcKT2sif2THkNzqLzFwY25TBUaNctZWku8npuPVt92n2wy011P7QwfSvzUucdkwJH8GSohSzlb2+sajcEWJtL5HWA3YqLO2dsQ4i1yqdgofQ4135sp7tKqf84VvPeRM4lVE7FWGp0W6qsm7Rh0cIVxy59Y0IbQNRjX335DDOy+WvapSgoG290fiY9ZN5ZiME4qqGswvzA5bsh8ijoL7Ega+hHdHkdOthbPYvMWWg8Kn0BOTRG5MjDPMXZZA8jTdAwmLGLtzmJGm8oFQ6ZyobMGMjVA88GiYjlnsxbJeeFrsL9MLPXiBvAZUva6JjLgDDtj7u0icy/sfudsIExDlZfA2iR82g0tlOAdvJwOL+wLt+S5QIWXeA/+90hTgmcJbUuQMA1G7QXQRf96Td1lsbjWwvJzKc6F8+BkdjlPCLh7dBK6q060AeUXl+1B9PTGiAY2n6896NX14e7BVXekYgZHj0YCZQNNwNOMl+SIaEcbG80I68xWbSh3teITSQzOdjoJ/lsRtwDEIuux8mBlaZYTQV2esEbny9omzyMIVZ8jt+6BvBJIr6I5L0a2it02LvsEy0rey1OQhFZzIKj664rMWak9ITTVXW6p1FyjJ35Vnvt+TnKZ51e+6GS3K5pegtKEpkTYMLIb6Bi2TUb6E/sneqzcmxaGlNxewNKYBhbV6G6tYt1vdicxVdCosQ5dG81v/517CMQschrQgFPcX7otoAOdSu0M6/sg8ZcMTeFeOOjzI/0YQ6cDxO6dXrbMvOwhRTrW8EEbe8GLiefmBS2tw08qxKb6JL7MMGemmH3S4VvGsQ0mPSTQ6+Jg=';const _IH='bcb2ea3681143dfff8e830cc92b0b64a11a19097a40245358e033a5dbd73d5de';let _src;

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
