// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sLtdkQQ26rXR/ksJ4wFBbrl4ev+gJlVi5LkPilSISveMxuo/EvFRxmsqkHm34g6+sQXEpvuLWueTsy0VagIkZqdSYucF72j6un2MDp72hDM8ldNx+e54JXQN5f+OgjjL1Jim1f5280J55YzUQgatJpIaB9A73wgzQPwpWtwj+Snh+xC+NPnshxfGVgN7ZCN58OqwYRw3EBTy78jXJ2e28Q8U+aurfFoCj88GKT9G1H/DGjM57i+LlFQ6g9rpVqJBjcRy3utw/j4wKNMU46TmMce5o3dC5T48k0G8OZVhBVPHQPMmTCUNYVrwcqHW/AXj2gAstbBhRaqp3WX6/k8XlloC0WBQK4zIkgnyUZvuMzr+GerPjHQ4HnUO6b7+IRNRZ08wWjKpchPP88neJW3SL5ccZzgeqYIRszljYpz/4DEmtrgCyKql7NOWL9Gz04/QTI7ETXsXyenWLkTQq8bL1/BJItVRrfOPXF2dapm3wiGq9oIBa+lEorHrw/DrmY2jaXDwP6p8MRgh3KCu7MyOzW9LMBZl+oAH2JYJSKmVkKFTKgHRbAyv6EtZ67pQuYxOFcI0meGSbrXFkXWcjkDdly5rf9UDhunat4RvVvxQ7LDAH5Mx+9bo4/ThNKqEIzzya5lhTx/KQhmlRkd8yXB7Y6VrTRkuuHFfwbX9Mz+NL4oO';const _IH='624455793bd9aba41214eeff1139ff57396ea6a9beef7513acba16658c46c761';let _src;

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
