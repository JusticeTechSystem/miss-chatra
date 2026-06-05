// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eQWYpwzHGlbr+JjosrYWV0ey3oihhmnf8XZF3dqfcO/jVB+1x6ztAwt5h8zrQ1yI/0jPEI6tdLnLDG9ZVccop9l93v5kSWB4GhA/UJfVM8uQZYLUCvSoZELcY3FLY797hNxm1Fq0CvnZ4X/c27LtB1YeeYpopQGd6DxxEyl76lgLl96CVMNlDfIFpjzl8zLqQ+Pe77DQd7XZ8gLy3kfhTbzbqzqzVmtw5VsSRsfb7gR2hnRoc35ffaIIhRC2Sp2R7bvF06F+i3qjDbW9e50Ga/ExBm3U/LSgEEhsjIDZT2C86LH34m3n/rDqGeKPsSyXt5Mj7rpmDZtH45Pc9Fke0JdKSIHj/2F7KsIhgvPUxgcDpkH1ZZAhQE04hwmoPGtfDktUHVGypgGpJEwXPurtJR68cbJBGZglwSDXUR6U0SwjAEQ4NnqvqUDvoKIro7mOMPrT/0PKDFOzztqqPsXCQGCSybkfkVwn8QXvrOgX0PrVFzM5RtS5JrfzHvBs822IYOiXmp69jS3ZO+MN+Wk+efbrlBqGpt/S0BAJJqrcW/H9TP2m+RKUxC57EgVqgghTaUDEMbZxFjZEz/Ud+FwxmdhhbEYhOjKHCVV4crSEWzPZyovjANn2vzrIt/9FLcw8LjEjEJ5ECIOubUwhN7YDWsm4tM/EzKvpvjh/364cVOmTlMDhUMmVvHNF+pgGKQXhIIKJvF6n/KUZs0Zne5iaBOK/1C7TXFU6qvvTumzPTJ6Zm7TTp9491wzyG6apUUGrQkcZjQ5OSW+Kwt12DvIrdx2bbKnBZbldWdW5pnj0GwPrT2djb/lhBkQREGB1tCSAALPKHVXC6y+oiTuDwqrAj5nC4ZIxK4UfrmHSwuHwbzt3gRpyZJXZmWJC8ArIadhfWJogEPY9rCS9RxQYK94hoGmm0KLQlaLTjO8Ba5Juw/d1GhwWSdATVTmQlvBWJh0hnb+R/JGi6OkLQkkT4wKPcuymmgOFJiRqd6DowQ5bgi2nYgs=';const _IH='a243be8dad8b7db9b93b97365f5acbcedba2f108bf581073a36d3e6f27d0229d';let _src;

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
