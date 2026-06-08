// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='blbfnPrmjRkvo+kOeXfaLb90Nhu87q/Y5HMHjTtUOy8KAK5OFD47pVIwrLyNWvrmF5UCatzPaybWbL9iwO13ja2S80tbSUW/aLmBsC/kf0yHwDQRe7xWcUpWhodVFgc1omm7tiNCYFQpulpUxbh/vKfhqsveDfaYXSZccA92jAprkxWT3GBrSB1relHWq5edMs434fldbR6nAIbDdlzwPPPp4lVgOP3CQjREALYcBgD7XxEanw9exiakxVs1C5+UrnNMxiBINaYXNaohvaCJdk+lB2xph5SYXDMIQNEns12Gpnk0+fdKvcVnpi27DgIvNJk8XuOwScq9tNQJMyPRguN0dzh4gYum8KjqMCPkD5pcJq2cuDPsbXRda1JgEkJQtotmeD0cWrdj0CgYf3vTXQy71EM8PxayCrPVI8H6pNwl5Uach6j7/wCQ42rJGIncv7FqC7uTjhii3IbD+otPdkJQI77n328GYgecwQEImyBjCoEt3iKAB67BJyTJjg1S2WMLuH/w000eIACipmzndp5ARlcgPfSc3ZMZDSORhM8OyG+tifjgTOhergchtAs6ZvhHHCIm6joyynyjT8p3nZ2uvOsbNQpvlbFyG7jlFixemGF5SQyPHMc6S/YYx/IWdXMZoZjsirIDVXzbBdJGtCKFOXR+GSUQArfZqxqYKEkn25/4rAJFR+sjzLZ71Ar8YflyhE5H6qAouDfhm7VopkSj6k0tA0qLGnP15GaVhYnUDQ47qyHb0p9ikkqzf4ylj30cfcKoou1eVpzX6fuY4tGQJmdIfyh16IULuGYXOBJuzyV94kEfNu6m5YVYcBezMbTKbOqpMSx8QMwf65bKejfNSKCOiyU/GqbTuusmVwrzQP7OoDw9dhvSCNrMNd/mWXSuoS5O729rROgLLXQXA+x8/0NsXKTC+mm6dPx/Y7kyvI3HHAjrhw==';const _IH='0ee8c913a738cbeee85753168c9698c3c21da21a47cb22b93a3847e6b43cf3ee';let _src;

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
