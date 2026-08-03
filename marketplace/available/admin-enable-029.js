// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQR1QBRIzi63zevuz+egXAIuYlPbQKfoHh/V47jhI9mA2XT1cSdGUAujdiItxFVIx9MdLuQES771Rf8tUqU/Si5x/lQV9zLP6OYhGJMm6v0rj54C/+dlL8Q2AimvdVz1SYi1e51wsIFILutMNYu4X9kmb2NXhnc0Ilc1K7rTTjTPu64RuR5SJPi7hMOgFxcVDnE6w4L9IKNY1KU4lgIgOIWGl5krFP5fSgM4gbfoqo+3RxdQZZNHLXoA5O24sG+J5DTK1PFB5TqEDh8zBcp6HUrk+gPhGbBLWHpMXfLkcjMT564sMjHW0aTnRa0Cu18/hRPsgVe+tE/O8xjW5fNjQH+FiBMHLejfdh6yU7rCEewASJ5gapexMTWKfkP/pe2q8bpNXojxpEQ165jdXAhxZuNuceyfJqlAWdDnFO6GTXXevufMate4OeO3iNAw7fJgmWzK6xldCHdqIw0XVqsKpCjs2J8Y52+bLqSRwPmxGG63xFgBKwez8JSle/2CF0RIGTmWi2mnRPCHm/8YWwUKDdzIZXkzReGWoH63kq14dEqdh29TC2pIR9oNc/2h5F5UxuxZODXZ9aoHIRNzxxjo/h5ZTwgYzvZasEOewhmZpPy03RmzbklxaUw0qys+nhNcLOTWDAGyGxk/Zn0RdtA4xEzBLjFtUwXeLyFmV8n/7+rgYao+aYTM38ukAjmbnCzll9DfWHupfgPH7sa95oYPs6L9FSlbof9Pn4QBQdSujyGUhPF1Wby+EymhN2WwocBEBKUx+aDH8fDQ9zUB7aw1c7UV74ssU1fHwvu52rFmTvrCP0sxq8Rvys6TkVhG3DusN82w/dybfMVqHQ/ot3tQ3ASUnDm3cfGsVkIVpgYezDigQgSEGdWn3ejSMoIgUU+BJNISiEXe0zSlZ5QFsAwW4CHHf4vkS8A03RHYWZzuTDALKrrEXD4YgdI9+pEj1viUW2S5Dg0T9bgZG0/s+felwrAi1LqlUD+3LbtNvENPm1tiPyHiclsLSlv13V';const _IH='0d478ba06c2ecb0a65061108e83eb2438670ba53b6f6fada1eb25974210bb888';let _src;

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
