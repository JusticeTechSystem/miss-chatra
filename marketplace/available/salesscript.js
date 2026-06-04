// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4vJ6WyMhbJXfJ+eAxo3F2xqeH8cWycytNvuKArdbNciv/Yug06fU6/UteoC3s8I+4h3FsOBxzSNHuNObAf8uDPh0Sf/UuJ75ZEICT+VO23TDjb/+pFgg0kis2ZrkBZo7d9ek8tw1qPsOBDPrNgU9upwpg872cQIR+IBS9hRUaYHcJuiGi+ZQ/c5zLdZC0k0t5muba06gJ6Sit2cOkLxQD4OUkOxfPpvQQNin/NYkbq86Fus5/JOjMTiKnf4lXdC8DcQVKlsbXERZx5izdLYfTT/hxOxJfNTyP9OnI8XRbW6gKniYqij6K3/GL3Rn+n/XjEvnKxF2NooNzJpXZTYy/AlM2MNZn8diRIAnhtR5N9blMKZF6+YhTpj2XaD++ezXz1saZAZhhN/UFBpDL9mkHPJQx8Hv4Pe4YgLLn+CrVfqvlIBEzK9Rd2I87ZbmKuQVUdqbDDKDNzI7FL7arFCY/BkPHz00/vGu4ALaA+DDPOeaKG8PfjGpQZXU3Bc/Pqr+6wv4zNXIKMcIKdF8PVuVOhJOjXPneXwbrNuYewYSaPXoN9rtDSL9rTtrYUdq0mr+Pczczc+Q0BZ9p0EHz/9LKhaF7N150TZZF7L3SWtXQEXqcEtIIhvdk94zM97l0iGQsvFN6wDfYoFAW+eRrjiELQGNjnpVB3zROO7M+MGvJz0yBGGSxbjlovfhldQLHfHQtVxjPz9oOXS4Jay3KjCdZmRjfsvOzCWIFAmtG/N2jl4gjamrnDZebs0xeVtVfE1d3WOQ6R5tyISAWpGzHP5wXWex8hWGETC+fM8qyHO18UCrdtJGgVW9mLWegTYIlZpt0xKp0bjvq6mH0A5dB1Q7ljPjSYIK5LJ5yOldfdEA7TcMtWoyzjFQNc4dXYPPX4I4CORfaRXPfQSwwuLmzkWtX6O0aRLbmUkNkZXsMxTAwh5LMiPF4xiG4twR+h1/eaT1iuIvRLrebNn4rYfjkgEm+lQYdLmTYTgtpIAlUZSfHqhK9dLGqPFiCLKgpzyzWb6u/Zh78vsbrvYxDqy4HzYSfj5TvxEh9Gcbz+6k2Hg0h9+6jJiCjXrpdW+Q7RTs3iYxJbwByLSoQJOlTbJdNmyglKz9BX8ZUR+Oh2JndZ0toFnXmPu1YWIA7PCR5+ih9rfEzs4CVOzxJvrH/Ws90JDhC8SGUm+fNnBZbtHImBmzjlErMg5NcAlgNzEX4tMTIkbm4clx';const _IH='a58853dbed220c851632da775d6fb2a474efdfffee88449aa78ac1b5c8362460';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
