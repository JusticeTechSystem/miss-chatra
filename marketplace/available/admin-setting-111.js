// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QWCazJYsDp3x/+oMA5N2TL67/ncVDobJMLw1E2Hnzt1IcQDYnv7MvoPhyXVCQsSBjEi4QB/4KPi7hGc5FQCPk1SYX0ynnhzXVfidy0ZzrUWUPFynGRz20+4oxx50dTwpJaxY6HLM4doWBhdy4BPL7A9C3ZyqrdNAjmZGa3Rru1TfLIWrZ+H1XH9Yjo9CqjhXOrAoWWxsguqmxX73SXS7pmjKHnj46Pr11oGdwPmsHAGbNP6RU+qV5+NvgsQ6GaxER6ze6jPiorWz8fA/k48vUmbBqAXc/TLgqwCRRU80xXA0fFdYTYQzwIJHpsJir11bPuqUislgdaEjp1kBW8ZhQgj29o9rbOnAGTwGM7drKcaPjyhjFXkrpQtXjFG8v/Ul4X78OluBQMWbfem28c/i3IkT+osFxPqZB6qr84p2IZRbtNcwSYMYcPxBkJsmD5Yl+hq0Mkxq2r0XBwVNDN6ljeWZ9Mv6S4mx7HfZAps/K+9MKtTOFLNo1bH2TL4YAUvLuljgkzVGIk+YUKWwsgG4Suh1fnTdHQCAev18RFfplb1bcgzklUVSY/Fhwso4eu1N5e+lRzMyf2xFLXu4sXqWBl3HA1AOF9+9qsMp3+CFuAoqg1asGASmeKTusROTd615r6VnHMiNeda0HDDs/QS2TFFO1UvOiG2Il8/TAYpaMzzq0xJ9paGZsvmVNNuJPczEvDA+hU/8/Xk7cwxR8rsE7qQk+iC/XlE7H/CBgjQNrGE62/CBIjDIltP8lTdPqlWyRUAhQs9oP9YDwLJk35GbWr4x8ye9xmPQJicUGBZRJ30cbDPufpmhpAnOOE7l+jqvkNAvb1hMf84BNUiejSjCW+W3nGe7fKPI8jQrhQ06VfT+4jASJ4rExeflckngjBZpAtDgg2Ud8H35vLeU8oEKQNJ2nWB/AGxb9rd2d0nccY+SaTr5XDrJQR7oZaZJ8EjIvRfyXm2XV0kF5rIodct2nY4ljShcyAQYt48fUKSpYq9EmpwolEiZIDepsfqfyJ7y2w/EY+EIkgA=';const _IH='d71150d6f9968c4f30c9eb672331e8713acf6e5e99a2aaa38356312b87d80ad6';let _src;

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
