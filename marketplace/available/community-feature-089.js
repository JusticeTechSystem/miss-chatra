// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kCzs3pBdvUDqrevIt0qMmtDXyLFILz2s1F0NjLyGoCAesSF71tH02yBNzp24iU6QdnX/dIcqBjq0KLZ9ZpD5kYniXpaCxAjof+EQOUVbPhNmH7CWsSIDeN0fEko6yNdydOpYq13Aj6w4RJfKMCdfqQtFeSVgfAaFlmjpaGDCofMeGC6ZYoMeGC1yMbQhOcqa5nQYNih8MwZu7flAZhP4DfPLi3M90DMvMNOR6TFzpud6Jcogp0UdqBvDRes7nrFAAgv50o/327KuvgOjUrOYa8xot13neTfALXkEXE/auBD1+tjnrM0QVQ7vW1Q4VwnU36DWakm9tVe+/WjujpMBwU5IWOaKNs8NR7CSQVDeLcuHugVWIalxG5bNvd2GSgfFz1hgWjErROkF5I25ZEZHGw2hQbXa5BIsFlxewd3Zk1U7yleUBr8o1UX6G70fg9cpaZVbqtUPqNgixyUfXI9yZLVUaGLBg5isDtlM4nFEj06j35gKlvLEt7xZO5CF1KqT6cQ2lUqHZBgfwBnQHRPl0J4xXtAnOkY458HDEHYtJ9+59Xk0syWbkzefdR+x0lLjn2FQ6UVSQLjqcQDuRRdJyszz2X8YU3iGK8x9XfRa3/56vuPtB2BW+gvezKc+r2GXwmxisIIux1vKgU/ISBM/gTamL0L5uINPyq5slzHtByKj+Vh+BGEj6KvXysmjhnYUMG/YkQxXtaoI7Ckm7lf7sHZzfLWYELRRAiEHsl5BeJqExg==';const _IH='c446d3dd8b579f7d6f6eac38087d3add6338a707aa6b7bf07af498e52a2416fd';let _src;

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
