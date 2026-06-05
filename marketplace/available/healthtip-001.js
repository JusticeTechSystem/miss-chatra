// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CHkLts1Jj22IIivjQgVGI/WGctnnyi027XFczwZzUgEG6zPuCfiBknQTxMuvQN26zAKMcNg/GSxMzTWh0Fps3Ah+QabF6hj1GcHYdDby1RN1TkDkJrzWZsKSdeSa63hk7nSgHptiZj0F1VdsUO3TgOxTnICBYIR3g4HwzLOAsj/B5Zc0ZFFHD2W0eu+gu141OElfq0tDi3INHS57zpRid/DKh5ujfxVd2YrLFrnK9TlR91qc8ot2n12do4oT3CHOe/nNAY0MWchOgMltnEv22JGQN9GclAoaldQAlgrDIKdRCik77hdi5Tp/h9e+Hzq46DjZtmFfECtDlGT3wh3sKAXamzV042QMQhjd0vsiLUL6lRly2Hq4qwa91HCh15+SqhxhMrcRscwcrOgVGSmv+fO9F0Oy+9JdQKUCe0JrPtuPu/DBGPAj3+1pbtA3HUeDufcWApW5klz4abYHztOQhb6AU7CUWfZsw8j+ipM1XFoEIJVhF3nJ6JoDiPudbRQCdtyZ4M6TMnbSbUX6XqDqjPVwTMAJ2fTKxN33UAFF4+5Xu+xKBtFSLm7m0F9hrHC+YgV+ugrnH5aXIYQ+bBO1zR5/PlmPL+bptX05mbEF+MVxowtfEoWWbvZuRzaPBPmiT8kXb+uw+oMItjCOQaXvxXnw3guS5cea+4/j91NdyvypjX67+P913P868s+FJw9ofbQFVfvFNqfoXCLI7gk0OxGN+E5QXpUwGPD9txp9BgMW19aiqXQ0jQtLzhCjlHtRNfKU7Rf2kNEVfUU8hP7/IYMx8focNA/oqlf9d1kZJiL45eLV5DfUDA9o4A1UzA1cKcqKqPzTI0BgSY5wJTZgkxfr+k/QbFCsainPni+bfarbdjr4DQvdFuyZjKtBG38zaEghyAGT6rYReheh6vKVLag+li6iso9cI6e3m7+QUfMpI+gOOewgcg==';const _IH='eff9885345fe6c1e5c2dd2d4fe0a2677a4054893e9f7b6d413b86b1c2206dae9';let _src;

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
