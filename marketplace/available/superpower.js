// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gYV9ykxSWiOnBcOdjxVSzUVg6z2pX8aRCcnYIcvPFxCzAXOxlANMm6bUeXV4adhsLSworwl9aAwkqnBSL4IUiWLhrTVwP8z/a5f3J7edV5Yr3spiCzaM6gmerlO1sJggm7/Cf/uQrWp6DqVlyrDkeVYE5pHjKgyaTuy8QQ2bU7MCGbBohqEba4CEkMtY7aVZsoeZcsTaqsI4yXOUz7TjpyiKw382sDY/V8E0PKEEYSh7fQxn0j4SrirplZz1IP1fm4OAIMdQXJFTluHx39eKskKJwINL88pQuMF5VTw5F6HukK4hhLWIAulZGogR2Ka4MeED/tgIM3izz08Z6VhKB9X8I1F0sMf4uPS26qUnZ6rJ2JYKUZSuTH0nUUogLQ8gFch3YR8gRKmUmdckx07KlP7dSBqNnDSzvazoprYmrdbXfPiE7u/sCxgMmHB5ra/RWk2AUXAlupTwg26Lrdzz7XvgZrMFDPPawjc2BwQiVviyBcojG66EVARyzCE9Sye6+D0WwbtrdVK4bItqaDCf8UL75TwgCA4fwVlfh60Tt73Dcj0cvzZ3RQOhxLRWDgDnWyrIi0YMldtLreV6Zy2dnAZd+0YjAMWsOYu+ngpOa/dYXiWyGH7D4tbECTIjD5cQKz+TOv8PjzVsc2fN7IOtn7y0nKoad7PZcHGjg8yT7kbgO3+KTeFzhqEcDlPLmju6PgsYdZoJncuPPj5MhNvYgvCp7hac2z3vrGnFq24NCQG3MIbg7mW6PvLK7RMFEcT08jFqZzajhWW8uJAhHXHsL6B82r8PoBR5qf8/5covgH3YBeQCR0FCB+IsmOgcIEJq5yGizbdp1+N8xEQk3ASj1R0ztJeJv9xkgzgPkfe4cch0cTGvl9kgckPaQhYOqQ8zx6FygLufoE5HVzKCBr8VLhzRmlHskC9sei9v2BIz54UoXSsMMxf7gfjZOesShhRgMR8G2A2QfBhtqkjAzZellE12n1kUM9zU/pg0fgLW3EYjSx8+zR49uOrefJHUXBw9h7ourSE9/sLsBogfhL05DXbxPJUf34xLe4KPWJjD6hX5dwF5eSy1cj5ZzyL3xf/UCvyMhxSVSS82mD9kmLvS1qnqVlE79RuEkYA0mDryYnRoBiP075QVVPG9xiSrgLHUNOQqhqkxgJ02SSdEaMyQRF8ttVKdKp/x6grr70BPdZIj25GcD2IHF4AOxXGjhqpiaTBCeF0Rnh2lJQzWNg==';const _IH='3df656c165d8a4028f6126da2c3c9c0910fc2ceaa05834e1f053ce9b3c794c3f';let _src;

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
