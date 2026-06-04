// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/j/qSB95T+4z9wsKwZyvWPm1bDXz63jM4+c+UhUX+lT4xJ7cKLwFRnbZx7awsUI6CEi4PB5IAtE6yzotyOteQ/pju7bFhYF9K/ccgQFIEPrvEOvTbiCABzLB/+/DB+vFnQ3oVWvWnLEsWDjsXywF4k3uJLqVfBOmotzKHE+cPlmATfyGJlm5gEHBFZVhRuLXPwa2RrHVRjPOIKF2R3Z1ehAiOqQN/6NqNL9cHh6H4/eHXVQdJsdlWpSTZO171kzVX4Jt2mLIZCQyZaCOj2ZuNRHXl9C5EtFwwdV68bTEmTc5m+PddwcdIUamzocgmUhWKQ/utWOeGUhTPHyZCYzY/v/4n2xvmVolVKgZsw5tCyEdEu0N2bxPQolTjvwUospEYfemKb6f+UbQuDVhf+rvoCekAuFqUs383MXaN5q7lHsrx3wffhTGaksitGolnmqfDr7a8AW8ltzrHJLolXT2By+ZGPsiLjTDlq4dnOLRLJbo5sr2uWvTop73LCGfpnLEQlqifCk+J7ctW/Mk9OPfCMVETEAjpNrqOZOZ2jMoI0F+/4AhhCkjULGE7JwaT0ACekNGmTqVzWHEW/ORB8Cbg/6idhW5h8cvDqe6HxwPxLEaUWEcM374WPBfe9zQQEtjS7SEor4a+f8p4nAVUCqkOPczoOmU6BmOP6S1iXamGFMPRaPKnRoZLLsLpLYZT2V56odD1tF3e+f5bKixH5/Gz8g4NojOW+4B';const _IH='9408ee382a8a6c388573805b69dd870ff1fb3cf7a2069a36c27ba7e55e882811';let _src;

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
