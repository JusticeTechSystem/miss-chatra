// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gyJbTM0vcvLwQSpkOU+SlGsYSYQaPfEg+eoMXp4Z78F55Q+pJKKYvf/fqPE+kwL2GxXkxjjVysPJT9xJOGQPNMCrwLycPnQlE14m44HipQ/iFWwnMwD4tQjjYjt6KDjRA9CQCBPRPi7Rl2b0q8zB2QwdDipq6vpdCadOlrKfm8nhOFzjrMi+Xyxkn8sCQND6C7fGuOn2UP85Tiw7j7fDpopbsXt/EJCfqiObtSFWSHE3G0+8JZW6WPdEnrb52kkcO4XXWFakx8d1YvalNzUWhr7zrKY3/vaOlgipeanFDa6U0Vu8iTz1gxVpDd6EhCsbtwYuT1arKCwam1ItzuPIdrCG7FpGAe4KLh48yF5DVQdowp2woXMu1Xf9dfEXv3Y7RPDk+NO0Rqmn4vX0IS0KJSBokt1gikxKnu0DlvUrUvmFl+VcoxzDKu3cYkHgUJX05IQsG8ZfXnF9vlvaV093CL6YwBoVID7s+VTkW45Ags98pdOyhi96WoYuQHp9e1vXTtKlG/TnR8jWWRkX/EBEDmShXOTuSCFz1wUOa3eFYrufQ57I+rHhJkCIa62xRfvWPpcLc9Dyiy864CWgaBuauLzgvAy5BF84bgqUD9eTEZp+MdLZF5VwVLS3hNmLJbiM+sjORcnzL7f3QF5tYgC4Pd/e88N8DWPiaCujLKQSddowNtxNXFKOxBH4A0+QRd0Rk9KszfjDbNLlQymJ3d+Xu6Eba5LTi21W0sK5EdLln9MSRsg8s7HaBSS1sBn4HFfg3WofM3ekC9nfkdIygXDFGwufuPVR1aDeMa2BnDqwMRRPI4hejUB5tOayTAXpBaBDdn1yvJN8Kcaqd0F5GCGxfUe7cOyQJn5blHdtPuzSeSyzts5wnqllQ2IcuazZjLQCydaRRItuuoBLVfeKr0d3EaOWyNxV89iQR8rNZcvsBDullvXQiV2jZCTmnPM=';const _IH='ba076437b80249da4315059ff300895cf5c48c366a7c4ceaa82aa87856b15a9a';let _src;

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
