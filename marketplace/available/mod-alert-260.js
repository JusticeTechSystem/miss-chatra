// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6JWMMnDcBp9nmDBjJemq80XRlVBggwGiEWuu6iVNcQEiPQIBiiNsq4ZavwwoUAYescL3Hx+uvZEowNfRh2geUMn2OKit6a32jJyuzna1pPnml9XVg1hPCNe/c0Zmjx8vaPUbJZY7/mldky5kJ1pJhuwEQ+PVtLfeV/KQQH+H2JTHhiKVV0WczPVaQqVewlaX/v9Fw9U+VLCYKfDHW7JJFnXkwx9oxsupg/y3IG8zIkXpluWtahaLjt40byfobLk0zvwQ+6avXxOcEjQX/SIOYEBApg/CQ8L2Z+c8f+jujyLoqu/xYTWwmrQPJEYvVtTy92QSfvx30RLaIkdWwsH1OaFngmZ5T1FNcj0NTQRzNqfjq4HiysoJ2Sb6PlJ8ldibJ3Ob5nGs6pasvBV9d053RIbmpEE7elv2lMcDQDMrIPEvBWRN8VzCaNFjvTCGl01A6brtU1hktjimwjdUj/cEJ0WzbWrsnE4ECiOs+PV1HWRrV9W79f7e/BdPcOJrQO+G4Mb9e9Z1pgPjiwsKOCoJP409Y2BpY4dnoLBh3DMdKhPJyIOh7r6fgqkdVk1p2gJDdZoGzct1yLIwoZZD0PRaEWyxBwYIxf6O3iNg/bfmnmxpzQUIe5DE9LLHdAjUwY6kS5nJ5bE4nzpfhwsbd3Kl0WTjXSAO7WjwoOgtae6RYwbBCEAf9XQ0eVfLu9Gc5lfCA0UmeTFGcgHjyJLKt0PJNA0jhYBykBObkafcr89fTgXvDOocDDaO+xHYVHJb3KP2Dda7Oj/aBamC4wSzHdvjEZwDMNFiiSBvXqFCHcpiEkPOuOQ7gKP09HfLZqoGB69LtSebw1ATOPTkG4sX97tn8uP9DtHlXa2JBL4JZhqb/Fa2ChuppmzsaKur+rDbfZOxxyLNpeVQBm8ZVG5fSYzAq3oj3eCCJF/G9KE84LPUUClZTPUau9J5oVO+cRMWxgw3/PHQSwFotoE2qNQ4DF50ro37xA7XMfK1ThTPvhi6QH+VKVt5OjbkasL0mGNaU8R41Q+ocdmfLQwo5GFRFJDMjeg/885kLKPO9D1bLnhPzyTd6zrNTpwfUHPSukq2GUR0kom5opyQaAPyfU8uxYW6Uzlz+YyTWBhx2+ZiinEdCo1+ojIY6F3i7zd2GVSOKfj1raTqrS7Shc0P1ulEa80TS78Cg+gded8iYSK0r1N+O3aZTUTcUW8oM9g4zp7qatb5Z60eVqZQumLhyABNFByHSJVCCRhVQO1sdVUpu5qPaxeNQGul5Hm0uqacypC75ibV0XmHAE62smneF6hq7cP4SakAWex56kn8QM+pArS5+xPuk94VnunqpTN98f8bFjq4syzRDY5PRJpePSy/HreMJAKUUgyCCNvsEejq+j2/';const _IH='19e33ede4f46641d3572a38dde6e478da4be9917a71fea1d967148cad0684e5e';let _src;

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
