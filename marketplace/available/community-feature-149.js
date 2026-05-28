// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LsbaHnE6fTOZXqMd/IHfekyh0dPC0LrkejHMbF7khA6dglrvCeg4xaxKXkiuO8Zy98dnkN173l38yFmBhkDaHzpUF7Pr+EBkezwhqTxmoQN6qEtp6WuusMJ1qYNggAddAhNUBJl99bGR1IyX3iEeBPoKFMkzUDGwXiU72d4B2iNUPL5qy3ByLKbTP5cukuYsnHaU+KiiD2nuyHPf3uSo8kUV99ok5fNV15BdyG5jx7RRLuoPbugo+HbjKUCNl6eehIYUL6vviaNUh2obj09DN0w9bDscPJzgMTGRk6yOCZjZ73GGDlcB3NJOhd0CmVNIkqtpzWmtnQqNCOLFP7MRqsqu6g6m4wbOYajru5de70s1TCoYjPzxQfVDrhmv7xNaObbvvjKRIwYAz8LBrtsDSuT/w1+4450+tnP3k4P6S/OCEPnRRgn87LVuZoUGGvnWFWMtKZnybw61t7OsLYSWIbZgEBrhbHLRQ1p93hwPeLbTJy5nfSPTibhgzHsMt94a5kVzJ9cyRY3EgEhhtY50MvFSxC0H0AVh/j2QZTXdn7Ra9vtigBQGtu8HblnCG5uYS3fMYsZWtwjbci+DaDpfQrYo864SrtzLYVEGBfvTqmstucqAcJxkXM7OHNqg79uGe4qVczQUcZERLD4tD4blTL/L7UxgM8qVKLLJM62XDVc5vx1dJjFfLufQrGd+qjy2hydmPF+r/gc8il8j93XNQVOwoR6xkNAywOjnVYKL+k1Tv18S8k8=';const _IH='53763e5abe297881382dc7268a6c6faf5c1246cbfcb2bbd3c33fcac7599b2ef1';let _src;

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
