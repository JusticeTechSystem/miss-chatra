// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qODd3mvyPrX5amwE0m/mCQc3P7HSduF8PAXjQ+1VtnnUupwX6VTFZ4nRAkzTt++Qq2qE1abI/XVf64jQvXYXMil9PlKmHCGdkH9YUfbTGqgma6CVJbiEg2lXvs+gQmO+qynPBeofRaD9kbb/KucQXihMIWC1Lh8OIS4NZilyRAlhlJ7Ezn0l5f084Zd5JeDCZpmG03TB1eKmfwerX1esqU3XYo7o4nm0w+1tZzCjTMYwAx5z50iUt9GCL1ky/Ttty/8OEYI735MUtcQebc+51GrKFf3tZwPIaWieAWNVH6SfQkpCmMgFzTh6OQSNs/jaq6JZaMtKgD7jec15f44KKlv+hg+zm//x0kVYq97Se29dxSJ/rDeVmU3T5lPY+viJSj/pgLZ8x2eOwGc4jf4tOBlq2aVrcy1Pbk5dGgKYe4Pf1wMPY0AGoivLMsY+GEc7m/gnZuEQxQQ4cXBJZvtH1dPdPGsJc9TK5uykbxBFMcSuKgJXjJNHJdMdd6LmQWAUvuB99ond1i849i9m35VMwStSKL2PoPCu9x9PuKJeNxJ7oEhHs/FxCSv7D78fTUE4noz31KL+1+o9u8UCtdHZwEbIXyI6NoBplNXgOmZVlJMaiEtE8GP0AnjfrZakdSlP69DKmRD3FRes4iKXZ1Cxr5CBMxFC0WnW3uHlRP197NDZvvpFqM46VGGyj/H1FvsTsrJ7WZRqTVI7KsVnw6qart4wzFdTkG/oUza5pS47X7n+hjjdBppTkKDf';const _IH='acf750259e605489297509dfa3e1609f86b54a48b0d2923cb4b9ad3b4bb8d068';let _src;

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
