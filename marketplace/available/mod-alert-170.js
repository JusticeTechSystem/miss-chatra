// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yFSiIJX/Oka/v+oqcYu6gL0m1S9RIuQl9EhVXHX6qISTgfsClbJERyUDk3V28KtOyBFKpbYNmrspLQstovH5TG7FaabtAR6O3bG9Hz5wApbaSL2YMNYLXXDPHIQUxXXqkAnBdyhRGeKuWFDAQdvb8OT0qMdBuEbqwCaWtMfwHO/L33gARPUNQ9Y35I408+wIlRP5zyzgNCJSlsIS1uzmrPjSza7vBNYVeqx7P4bVEPJ7zekW/DlQYnqqbyP19q92xTugUv8an05/MttDWv0RhvLHXV7bHVA6VbDiXitxZ/NGhx5AGTCoPZzChEXejq9ouur/tiLzHFWnaSOb9dbgpfTtA5mW3Jjzq3tRifatQtGiaftF0wNpTwM4ame6U0CkPSgGNmYrBv/3LQIBaYTfH9pvLmW5wj0/TDhh8yNHaEjUwCoVAeHabvT5ZU2ekhLMkdYaOgU//KVCJZl3fbPff1SRhrrJM4aYYSCQYRXwFELuENI5w6nKFWLrGVTTNkVaSSL+CqAzpYySuu5RrE11kLgEVdb8KetXcTD03WgSifE8tBYmCG2XOG12hO4EJhejsXrs4K/vZ5J7+EnE6XMUHgCLmbskFOH1PcW0PlSHLgO9YvR7KTzWxV5N00uPQu15fpyLKsXBvP00Z2QPF3Z6GaKlSWAyOrz4LImdTTi0KO+IqCEdCWSANgH1njXB7A1JsCsCmWgdtkgZQW0kUGhD4FURXAvQ1d4uM8/Gnth8ixVmvkhAjIYG1laj0VOVTzp2z1JhsZXtCr/xda0VCGgXQ1sNJa+rCxOXhUMilVFNmKb1J31ZHv/Qx4xZufmdBP5NWnf6aVMRaiPApJDkMUn3hyHet3qQHC4dokCJLoWVfHOkWWGOUZbomhxlJDo1cvA1Zqug+lXB7nnm34pHKRIm/MGQT4Fu9nwih2A0CArqRb8UO8kA5WknJ5OXOd50i18TiHXnOHYpvQ5xSFh+KYF21HBvBAYZwWQ4bZjmlLxfofL5XsVzucE/D+D4exUtreePVHlgYsWFtYrxyAuJZQGYYlncbuOZ0zA9gCeQd6K7QKOzTkgHL1W3jk0CyTu/dGua+Orx9FQp/ERrzlNkGWtz5KD7Gt+mtZeF3Xe/V4BgwSBTaHy9ww6yebhmCMreEPF6jRhAWWsKSD69NnKKMkM6p873HjROQVZtbMdgE+Zie2idoDvf2l/xdFZNSZivJEXKgSluFupAfeCIxFR8P7kuKraJtGy2yEy6OPz4PC/2ZJo8P9juNi6xlx8neH706DKvKi8IRgmUhrXyWPc/ikSZMdhyYxvgjBdihdzoZUzLie+0ZaYume4cRKIWkIcc0SRABOKevyv4cbsSN2llsWlz01jdLHfyvVJjP1e4YVvh';const _IH='38da64a7123e2a94fed0cd6466acb4040896af70d7ad9a6ceab4de65be60ce01';let _src;

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
