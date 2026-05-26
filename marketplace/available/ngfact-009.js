// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OBvq55F34dftepUsc11315j97DoM/1AK+WpC/gXjoDF7c/tb1y9SxUloHKcwHXwVeeD5dxk0r0heq3FLnmV7TvraaV32qIApxGHxHXgTj77dhh6CGht4BoEkaNCFKWQTptAZzr6FjjzmVdntfP4fyufI/g6q+ts6CVxy0Y9ZifdET9fmAQvN8NrBUjbWMC/o3W9W2JXPMDwiqf9BxhWJPgchwEG3m2cXydgbKBB7VsEJxPA51+nMejlcVy+uIZOgGeX4IK4cFYBCZPzO8Kq3rP0/mOE1av7s0uNmy8ls0/Fg0XgrhTWkW72HXlb7pXt0ycEfwJUzoAGtKoNYvjjdKomDyLO9tJra9h7DMPprQsmqTz78p5hmV0FMjycRPA3hWMLzTCyCqVnJ6f+WzW4o8g7foP0a3ZYzO27C3adD8+rDYr58KgO41JlzJW/6zEh2keW90lakTvn81UfKEREul58nwU1fJOTT+yY9SeY7ADm3hOXZ9cr7NTUn2GFa2dbKZHAh0dddnJvgtHiWexLlTK6TiWNJmEDnkfJVJx4POhJgqWEMkLKRpp8AzGYkg3VDIdzGCetu61Pg6kBfGwpu1qVv80p32+OL4ve+wO2C0u/XQCZhnL1HIZ6pIu/YS0K481RolnqhCo1AZB7lQ0W/jpIvGOV2FZgB1WpBDeKkqrP6zxi3TGSp36Z2KLTv1RDOhfSJByMkxguNCn0=';const _IH='31a14ab9b999491ed02d6fe92817be9e9d4a51198984cb9ca825c6c09628be6f';let _src;

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
