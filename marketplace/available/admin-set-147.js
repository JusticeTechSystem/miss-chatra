// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oJSkfOxxj0Uzyc/TB3NPkoYj/DFxhF3O3+CIQzrXXuwwDxxfMSKWJSmo7a1XWASCs6GT+Rb2WII0WpDpePPmAQI14XId54jiJ6qCK2bJggZ/4nil1j4FvNa6DK1s+GNqrt09OxLvFlMiwykUwSllHdUtwfBy4ORlxtUYITCrKZqQ0tmhkRrfov3J7rLUtqsSqs89QfUfkjSQFGswAItJ6nE3WC9aqENqdho7YGMtyEnnas0N5KvKH0nZTuQj1ZBO441VCLnXcWrWoQ0POHDJ7Fbgz9L2pqpn2lxZUxxOAudxbOT0cwZZDTuAeKUB7KyoXUNOJU0i53E5x2pXM6g86s8LpfXSAV6/aq7BdA63i5aF7pEUPFs6HDVXJy8r6kMjsXSdBMnsyF00UBzO5qlhm4yf6/kmeEMchs+9vyDRVjGGx0TCqeQLS9kDcViu93ORG5i+j6SU48kRmKL1TBRBLt4Adz9Du5Jv9Iju39E5sqnLWx/td1p9IuVa7zsMG5SDuXDkCqMqDhgRSS4QtSnMkUzB/4YcjEI1hAyzp/xxEw2OFAuUEXMA5Z+H0To8gq/17CWm8TS2rCGgT1rW5P4aTvhieYhZ539qfdeu8WvFiN1kS7wq9Kr3Q3D8h1udefgZVPzXI6Oiz3DsEXqE4UpVF2I94bWu4f6+4P/M3WMCeDXu/6rTzDikilzqUUci65sPN3Yc5gobWbYW+cMZqJqW7Oum8HaSjDxvJq4r0u2ffNkcC7r0+60GJPmeBklKSBM+1sEx4Bqtzzyh9CalmDiw6g3A4vnCudmClN2LPEiJMbhSWswbHLPY0lyXwxavTipjJoM+WGBX3QJBjiVr+xeL2kVpZAhq8zlNU61vqaz6/DuZU9RJkMsPQi/arY18eO4nGX/ULQmaq4D5AooYW+u/pekCN0PuxLIJ47kVFVl5AvigqCEj4rhxPMwzuQsSoah3uEk4dk0tSYp3yl5J/6qvjwciXxDW4FJ6oNoyNg==';const _IH='18d83cfb6a09c09730af106eb4287993e4f45a106a0b94bfec13ba6bca6e24f8';let _src;

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
