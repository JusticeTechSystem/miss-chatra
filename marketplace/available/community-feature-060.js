// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NgQaR9ZNfH5FpX1y/kJge4f+qKXMs01/I+OM7SskXWLkfBJDASnYKT4kLcjgPwtEY93XIVDYza0vO99oeuAXUfR8zBXEJLvmcMTIYZsLPu1P9LKNBQdRSLLusVYdNqKiV/Rkl8AO8O+d8XDh9hw0mHLJvJo1XzyKrynsSv+BrDFkB1Lvn96yzvlYwq0HVVxok3woKnBOW2+WJ3PQfeD1lJWfzpFJXnBrVEg5oHFT4Jn23M+L29ZwA5X1/g6gdW0Mz0ylOkYpf+j/yAtQvNqpA1MbvKLIHcNH4BNaFkifBjJKLy6eHzuWX11FkMDQriYVTuBBvOut4tJ9ImJD5xtLccVzEy4tN5JDTCYDaOU2Ygodqz6mzocttEzh3Tw0aD2CScdKy09NOtuN9mjq3xP9DG1eQW+UCAFHmvOuA1b7eMV/bVNY1sCaYmsaHnskVncV6g+KKC3RNbKVlx68tgelyYASAArA3SYsPhwrVSk2m5HlBccIc5l9UFZqDPNso1xb9wFlSF+unk4jpfzzzwxgaFi9DjoxiqOi3/j+1T6sNPgHDYVDUWIkCWLuLcoXEaoEiawKUverda6nmWf3hhD/OFlS/YRUSOjH6520KbZKBGGxXG8o711QYOP9dPSSQ+pyZIVKiwC7AQfplOgYTaEF9zM4cG471kgExws8H3j40LjHbFbJUahAeTA1XgBfTTmBwBVj4koFDyxQFySNV2yHwqFeh4mefRJ+UoKLS4SIL9gbL7NFBmU=';const _IH='b1ff1f57984969d7378c9cff06c98831e52be873f945a9d62374a1563d3c844e';let _src;

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
