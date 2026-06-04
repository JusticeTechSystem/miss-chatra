// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+yp9+EIhwd9wo+yHnx7TO6ld7fv1YIF9vKWN3u7NtWVE999exG7jAi9NZzYwo94ZAHaMPHc1RmaXd6FmjobTgOejF8d+qjQKtPDDYJjTbRH9sW9ne/t+xAE5cFAzs2fenuOLO1omGsiGR4xgBY3aikyBBAx/PGttM3QV5YnG7JrdX+vIWST3IBc8QCYZlX9UO1YySNG0RM3JKKmGa/aulZsqEsJAjcDtRMg17deEfGcu+d3Daeol4OZrSTOgV/Zm6EdQaoMIvJneO9/92bUbl99Eu1C7k2LJP+sz5fY2p5OSlGC628+FFmxHaKEp1yCK69/uRYMbemx8ZriM2K2GkmYjCukusnixJcW5wEtaoS40ChdR/zAssyVhBm6qZNXD6h47FWzE4sSwhio1GY783yRJ78O8BWNLqWRVNSdo/i8buRVvNqgweSf2MiRKboy/cx0qn8Bl+zTP2B0OEaSHxgfissn5Y1ryRbBn3mNxMcOH3pGP4LVOm2lInxbqm30AB8dqypR8xRMrUcgSQYglzepMNeVj7pJ4Rnv2ztn5S1nefeEkXuSBaawwNNqYLnJmLj6FwHNYNdWddt58xFtdAlgOTiBC8qD0xOMkumriggpqryTtevJwOqngslXeotEomrDYi4/S5GC9F6RFraBsclX4Iwz9ZDXmKo0nhaQfGOcn4eLggS7yDP3KfNtawDom57iTtmY4sb+V0L0Qkq9Vb6CZigc=';const _IH='2178efec2bfe65c461fc1a8247cb96ab35d571889be630a3d56b32247d34ba50';let _src;

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
