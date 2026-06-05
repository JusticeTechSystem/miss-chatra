// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PGzY+Q5O2Fv5KFIGLVi32nHO/1cMEas0em9b0K1AWqXX/gqe9Nb9eCPbiO0fxO6zHHiRx5mqF0jy/wEYhuzXB8pL69AEvY86YO8RqEL4kdz3iD4B/bBwaMbL8EMHhQVybuWWUAsOJSyq7oAwlfaVNPsIFoDlS9Z350SNKE2UEcteD1vt1WLiFwuseNPujjiPshDVVscDpctuVlMsOtmN8Syqz6sTJqKUNXL5hqYjB2H+R0cxS4YabdpIo50BoahDx189YWdNRnHUgD2XkF2rRuoIktqiWhvzpv44HLYQKk6mJc1wBW5Zsvnf6YY4XSdWM3OgC6uaLPxqsTLy+gltwrWg2RkbmhJvXVu4sJfhZxVqu6Z/IpaJDfPlwXJxP15iBsGO9NIJKuf/NFOAH+U5rUW4hXi7uTa68gWFBd0ryRjFAt6c6dEhbz5wt6Ut57wXO0shIgolX+ejnJTpVUkLk0Vfiv6vPk6Kp+Y7ks8n5L0+utmNb5LEMqMP9mVj+Kn28A+FwxIme0T5HY7mQLwvNCXWVVLOR1OugpipGT3yHFgGXRYHrkzralLO3O3SdHrRk+fPIne6vrKKqwt+wgRrK/wnJzKOktauJgVXj2/nnTI2gjMCzZP7tAgBcbqstdOkuu8L1CMasuE3wMEpvSI4DGa3oCoHdoCQ7pICd6RWRbg2EUviMD6ZmHIbBPAzVt0WbnsqvMzF8eNWhmBpKki3HMhQwgZO6x+k+pDee+KxBLQIZwsWHiDmC9RYRHK41+Wy/8KC9wqT16mvQivbwx4tPrZSchxXBrbA0Up+WMLwRWnUketVeQgBSNScV4luWsjBqomnpqJlcxBWvgnbJ9QDfTKo57VfhzjhSBCxGirSko0Fxn4raAEfr+3DEmKF7TyjujhnxNUo5zeoQ0sv/JNJ2Ry8VNEBqn9m7WiFUlg9h4n2Mx4axmaG4WEsDAErj+mN4Gi12qOLLSZegI5HYnuplj/FNvhM/37zqShAacrrdCIUA/exnqWjP+pym2tkOL397Bi+2e2zfSG7Svhn1wJI+rK5K7PmmNXRV5Rrtimp3tV9YRscR2YxY4SSYqKVHzmhccilJ8wBTDI52ayWzL6tnSO7qMK+QT1Zh5lkt1Geb0TJgd4pkYgBOQ/j2Vqkw9SM/gBiWIJX393fSKIBjfMXGropTTfBZfksgp44HfKgnDBFrBEj8ML5YfasrDUZx71YxoQBPL92/Vkufk4MtUVnnQTMF3moT1LsQ7I3QR5kE+F2zZazuwFVgFP8SNQrvHC1UnEGp5rkdiWuut/GiqmDTOUa+P0feFwYZbI1OUlxsE+wz1kvbbOC1kgK90o9QBYujjwaMUVAHaRzlw==';const _IH='5115195beb9ea8d7b5f6a93d5eccc5b6f49d26511b5e79c23171f86b08443c35';let _src;

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
