// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zc6iMAWkQbYme0GSbwPjOCegdPeDa7+sgAO+KA8JPaqasd06xzppIaI76DxWLkrdUFz7QIY/iNMS2ozwV9GRPk12E8OvLhgbzMqP4Wsek2+IVsAie4H0kpq+XoaeujMhqQnAyG9TpQtqZd/kwn8qXKOeeYz7ZH3ahkqBn6tcGNpb12jBhgyX6BGUvqIr7Qxl59jAkAA455+5AEx20y9JhKZ4BAiN5unSXMuUTfiyA1DMjt/baovv35p+mBmwNHWwjE0mre6Id3LkvUhUmERmjK1vEvDwFbzSol4D4xUhBnEAPn7sXQNc6EXC5gmfIGxSGdoRVhEXzvN2FZiDbkBpcqKAlPJa0HvH1SkJ7FNAWtS517mj3CzYCBXUGGnTwGyVwNrij+b3BPnMvfYkB8e7P3rYuxNa7kYkMHrFSUI8gL0Duxr5qk8Ke7vNBgmrrAXTcJrAWydMHiMUD6HU+Ld81QY8f2wES+WkdM2a68txhFxbpciQ7251HlYNVkcjUHGF/BIS2R+EAQCIDR35mX9/Opahg/2WP0XJnTGHQefqam7TXyBlr3YZb3ZOy/BwfTmm7CVPJ4ADwww50l9Kwot1Mi780j9w/s/M1YsaP17+/s+GCOOl7H9FH6MHYQaRf8ihEdPCVRM=';const _IH='76c12889f673c4e330f6d80ff9bc12b35530a51eb3cabe9606225e453f49fbc4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
