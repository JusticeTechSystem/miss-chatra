// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy+W6xLYLfP213Pf8xlT6IKhYSe5406C75Ap3jWYtv8BjIZPzy8rUwno6G83tBaAJ7L1xGHwlk8Zf1oREbXzwNPAbK80suhF7wnPCWV5HD1tkyr9IoLmj4AeA/UUguBVQAskHgjUKwbU6rZgmEsX4wot5s40z7zPjmKWHSTC1eOwY057AGajChhHxwyaOX26n56qAyL2LkcXV43SWcuusBkNmfuWFBSTOjBn4KEbfqJOQGckYrBAdq33OlN9PN+ddrVmYDBc97PyAgLv5qMi29c19M9A3Gc6uPNZqlV3NAoyBZ2ZOznc7eI7mXrxrUV9xjwiTDaRV+MGe1cuv/ZeQxinnLK3d5xamt1nA9I+rp/Xp1AjjbOJVJYubCiN0HKUplqEEWkCweTTRyuETbIW6X3XxrdeTGN7eiGXTz6gffPOVjpp9fKFETkIhK/TC7GXdkAzpj5524akLl9tYDX0P1kcOMVg0a7RTIMY+cEjWKse4flaVVwXANSVnZ/BeOFaMK0YdCpuKrinKvVaygF6lO3io9HS3u0sNiRTToZKJcBN5wD12O90Ut0Q2amh1A4j3MIsL05K+6sOjJY67cnsunf0qjWbVSU48OXTcKuGVegzDMRnZ2rGnoc/HcQwKVZTPk1mj/wcsLn7kz4iFfnv7OO6XJfFvh6bpUGYI2soBXOAa4HUFKJI/Q18alM4TBwA6HidDY7qv+ecTngE+bCGYNLRswTJyWPZM0rhN3EGZZLdkSC9XSXnIpc6s4Zh3bvp/2TS1qjKcbMMZqlKYBOx6f/lpTpznYWe16n6JlmQXf9bdv7LBG56bBbYiQwYG54HD/LHkC4Ov2/jmglrHoE+n3sBYG5UpdFdc4Rn2QSFIhrZIk1D+byFySBoDmnWSFL+kNNk00yj0d/8HqYax+Dd+0D0SDw8UsEs2Nj8EXVre0n1Yywq6WVf7+RTrfCAoeHQexWrUDG1okSZe3hfTSu8RVqNZ4dInmSH6gTZAauVrqREBC6MJdBQZ/b4bAuhIQMlmNkJX4/Oi+grKO7LqzgKTt8+Pfhmt/KJvEFeL0MlYW5W/+xAtmpylYw3X3Qna4ZWkXqmjMzIkC+I/BkYfAAoL+e3MPe7eC2oyVNlfpPgdKjh89oJ0UyFbcPwIvuU+BovHiaif6BCB8b4570MQMlUGtQsERPVN004c/QO5LjL4HEj7kzj5T8MtczXziQwPSGrW3xWr27ftXKUal2bz4LRNOM5S1h9oKYAkIevbUmnisDCzKGsyhJM+rGNutvKl7OJdRi29+y79c2Ef6zTBaqWePQWJeFojWexpNuGvStPlJOFVxFKES/KVEmi1f/IkxDqINBypud7BNZm0WzzonVhatjcSCr7KQw/2nNTvTuh2QYd3gjqfRuEsJ4=';const _IH='6f19b217bd4c7cffe9ca146eb6c447ad0d187d18a40164ad52ae2fc324a2f609';let _src;

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
