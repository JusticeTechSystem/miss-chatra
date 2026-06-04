// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wslyCX1uqIyddfJrvBcV2PytiyZ2Xj04pZMDS0CXLWWBvOjM7JCaqOoiy3sVa+wZAEUu7A4XXAiyhswajYv7wYXxkEuNVo9Q9WTDlHGK18EqC48OnwkhPNU6AKNKfO/iJ+qFIs3Duu5roPoa+zKMUALtll3WtvOz+h+EtKa2lwMHUGy6XgGgzShKE8kdEEFLAuNUskZrMPKJykNsy6bTu/6MSouLNKve87FOSK4dw+kp+1QQqeinBXDhKsjzqFzUblEfiXZFbI+51J2F/Cthxl5pHMPw+EDd+v54yS/OQkQM/tbhtThYogoYJq8qaoA7/XBAYPp4tgXJ4xxOMWyIn2uwoLWL7k9SagkcJ+JMcuO5JRjAuZw9cfAhQmCg+IIt5cFgJznuGBPhzkbceuJJGne0z6eCbCQSoUKkmkF+aaJTWq7Fax1pLQHob617ebEUVUmHOS6l8nx2vPJqNZOXx/hNSXWEV68ybM4mjaXWmjlpIUm8GfiGQzxEdXkV9cQLPqHYWQXDRL5wsaUEMLeV+dqGvQx8exqFLFQZqoDDDeqC/Zln/ATBaVDdK4OSx+ltt0R3qF41jgReDW9+1IgvaS0m84OAvAvf9bj645923kae+97iehzl5PkSE+KwvkAILziJYJRIde+5CWad2Ve9xruWBbyZ1ySPg4AcsMhuMjSBnkZwQZuTWtH6REQnen8J9me1NduLD4NejJbUDbr/akTvNMJRIzXZXXy4wifp4tWQ8ZT6HyPbQz1/mi9syGYVsz7i5+1iCnTZAjjOBKnMA/n1fxVD+rDDys8cMuCK1/fy9RdBG5svTaDpXYaGGvrbZ2tKf7BfiqSgiaLr4bCfULfMljk6hTNdzPyQD0wTp0whfLyCKiRZDSON4NGyaWP56rpLx4YfTDCBbiKmEgYlOPXO3g8eRTgbbW1x3m4spRUxzIDVyLXE5P2E/BUumfHmUYWYzNg9ap5FYC1AfQJ8BKhCoxRG24Iugyqfc/FS6vNSkIUILPPqOZncN9KI';const _IH='7b281e749f957cdd33d8b15a9f3177331dbcf6fdc5b61c8f1e0aa7c362500827';let _src;

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
