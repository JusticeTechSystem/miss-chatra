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
  const _b64='gxKaX+mOiKVlpVmm0Kz4xHeXcJAcnjnWJYaPZRha6hRa4cqnAtXCPLwovk43NDSpl+PVpW70g2I7KNgfyVzunFwwqF1PAAZnLrlkk45Myll+r3ByNdbx2zSIuQt2n7mfzJhQFTtDqO7yYpKXvJUMAYROGRt5lxLPwI5baYjXWEdtF+RqJSlw+X3CT1OISOBLXSyr7Hm6uKUuaYNYq+Plm4PEPkdH0CIceasn1aPRtsG8CqF7s0AtNEaAt5TbknFHJOeZTWtVXu88BGtL4ndZqcm089Yg9ZKZFyak5JG9gggMw4a+rYO7LD87GTj/XXkVZfnELL/Hln+NSSRo5JV/DlJ14k3ApeX2gxlzvX6nBmQUkoZbYNQ52irz0GK7DDxNquZ/5Rov6X0E14piBg7EU1dsUqYuT07dKoStuMJTUIlzpSVKGeh6popizzPaTcWZDpFSeLYlOlqIgvfw+lkV4gLouVkGygAcw884x0yqLHJYrJIE4+6uWW8/y8iqaAposRpagKTSLscONoKZkTiUDWN5RbMfLzlOT43K9F2yqaf7x8iBt+xik1OO0eNxjESbhN5CCinimK76q0SlCQ+ZSHZsitDWpCkX6wXdtqMQAFrDdIEOmnYCJTY4YoJGwG2aqJ9DIpVAL+8ZiicqIKDbo86GC43uHcJTGQz6G2bY5gtkhvQmNMpY+VD+ZLijB8IryHScxIkREwNIWNqOJyKy1fHciUN8QHO587RVjEfIvs8D9PJljwWzGfsC//7YQU+KKJ1rJIiQjG6FHlnlY+vv6mRESBweofEZqhnkTWbzwLNzJo6vBs717nOwC7X0Qy3k9iSSkucndVIjAtvpA+bPZo/nCaE7g+eehxqlcb7sf/bs6GHAXvFEz5Kg89HgQWaKGyC/4Q7Q/NAO2xAncYMM3g2cmnRGlWzQ4vsw2r/2rjnzsYdOpTa1KZ9tGm8xmRiLbIyMMCaWNTxlclaZJNAxbCJMuAimuvZWF0nNhhA3c+j4ljBjUBgNvUtUZlLAViFaEli8GAmleZ8aDaAbh8bPrJCjHoXajNcZ5GAk9daB';const _IH='e7789a38b65bc2b786720bde7e00dadbc403527c5c2b94dba21bff93191098ac';let _src;

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
