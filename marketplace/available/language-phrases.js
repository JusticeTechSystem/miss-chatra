// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlb6t09BpO6PWSOokUuv5EhFc49dI3ulL565EFyuMCm+HHVxXUqy9qutVoT5JqGgZrjmcZYt1jhzMghwqSaeHKCkxZ4cy+EIiEdUOWPWUo/mU5xWW9/p+bIbXVHl/X638ROPKdylBbztxb9Lo9BgdBbv3bgICUr/9f1uUl3ddKcwP17jrqugCCFEYpf7vIslBfVNYVHNNNxdW7aMVxMYymy5v//gGIV86ewRLOdH1MRxpLFaUvkBsm5zNA2XxYn4yR9l7Z7l8CKa1djDGWiESb9rMgE1mIlukOj9W8ZBr1cwGqPEqzG76hYKDQM4AQ3NBbDSwnB08s0mPCuaJkGSUM0J1qtgQXDH0Dm0KIhvsRg65pC3dLpYfRXU+9gX/pmMqOMEucqdZ7wDUC0dyaHsxa7a4Xy822QpundgYXEoMCxZiPccSeK1W0wDr9/4agwFBQYNmnZNj01jpRNH31AXPPRh0PgzavrCayL78ztP8eedpNBzLZkwlT0AYTO84ABPhdFuFts9MSqOARH2gdcsJGD8vztXwVTp7Jm6wjJzSxugzG70SM+feLbAzUHwzVNK7AwWNTTmT/2DyQQNKM/YO4yuhL4X2bVucmk5Gla8Ntwj+KAVQWjdXKVMYHeE1NHckW1tOq82Tlc4q18lEsdYriqAeEwQa0IAXHjyCDNt1pa2XM8w9zBI9Pq+iMQVZ2mBuAtANkR2+3fAdJuaLpcVynWVdzBtA553JNdq+VDzBp88HWmDXDaS96KYpnfk6MDsrYHabddCtQmE+KGxiwk1KaU/9MUkZM1pC0H4N6prLHTDDe92g8zvarW7bqh5E+cXE0Hfuy9vnJdQaWIpXo/YbzPcT3N/jTkdVxmuEixK/cOrk/Iog+kR1nmKqYhdf8Lj7ZhYS6fz/cR5Ok7td63uQn47fotRDUk8zCM4V9fksKJ28etgSVsqHPwy2c3xv/OFPIeBCJmbJWyuKlfGY3B54bIaJepB+FNLlwyrilRQb4QFXo9lzUoYT3LhjOQtbWosRJOOs4onEzzI3QS7l2IVwmOimIHudiQer0FwMbyzl3Gw7q/pCcECUAc4N/Hw1XWowIYowTI6Qmcctk+Q+P/DvkF4dvh9vmCeKbHafIj0WRUydtUbd+RQYjKxemaadYYAe8ogo53TUzo8EZqLtUWR2GN//ZDiRxdu6dHpuLc7y9xEjlvz6TSIy1y3poh64BMA+KIbA3xLj5PLmWgBW6n2gHNp9qyH+OPJsIsoBFAOP0rzdjRuCgNbkKKheFeVlEZ5zeq1nx0kVOadyEE2f3mXsxJeZysOVbRPv2qhHOm2Iy+NIFD5ZqE4ugwlYY47B2XI0eeGoIfvO9xjMUP4V+qMEatPUjd9VeHy2T7QZVbvNnmPZYnhxiZ3gtbjMbx+5fVJAe7vPNfKbeBexELogCt/Gqy2yON6lgMFU5w6NbxZMkVKPb4mxsSMZuQB3EtXPHVhHAHRZMuiFLJjxbUwhrdaa0NfxHtNigzir9re2/cSvnLXNiRelcnU699GnG7OLxb0sgCLxJzqVaDeFPLWEyF4Clr2T8T/+8DU2baYphQ7TRuKK31dlqFl7mBGyQxYz0kcXdNJfJcQGiFLLaBnOwkW1KmDLskXhJJB0p9pLCy7I=';const _IH='9eef7447be76ad6bca4699281cfdb0645a06e9ae5b58bcafd11b472578de650a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
