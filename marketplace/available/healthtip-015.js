// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iWfAHWFwu4X46pi5vAM6WDawYIhfgEX8VDFipUxr9MjLz2x5UMfULXXrXw0YCFRjGSXrJeKrFWL9jRY26/nUw3t7FsEYxdjwMEZYh/g43h795SMu+cEb/6LcqWu5QcaYs0zo81ssutktn/TU3FyeSOFAqnzJgN3dZKwz7PYxc8viUm3796xTOjUKUbs9Nis6P3+2f+wDWPnHO8v/uxgBqTLvW/DsHrzaLI+C6QcKcvVpnhobsaJnBkeMYKkCgfUYuVFHfFftQf2A6riLVhSLQ82su3G14ZFSNw2aQm1Qqkg0EPjgDsq/6RduL8qU/2AUJ7AT/kf9YjZNJ1bBNecf7OMJVn28ecTTRdcrRxntZ7SaDThWCxhsBXCSOPvO7LNEVQ7TmUzA28J2bXd9LsN9XLiWn0/5F1vUFGIPm8vU8/kh1W1b/BN+wDGiDCuDr63rFlUDnDnok20uDBKTByijrZsE1SzJroC9Gq7+uZqpeVllkTDeH+zWq+mtDPiQSByQOvq08GaxKaBJmLXZxGVxA/bfoOV0GIqOOd543PRfkUbA81R2Vzrp2XXW0lvS1k3N3p6r1KPT21X6V78kn7biEyEw+mty3GnnuIK3/T9QHQEe0bRmAhP4quK+v7WC0ibMJj4jzTAzs0wITk4Ht5rw6z3yce5ucZT0i/Bix+4gtC3Gi4oYMHqtAbQUZwSaVTUMuxkzacyKP6U0McFJrbP7lyXxU8umaXoyuNlnMF92zG+ZBzQd+cMMQQajhokwWlfv7LeLiEgXKVMVdfTt7wKK2TmWVYo8BxjgdtuN+jsni9KKCaNQ/dwfCqyoWOluO/i2i2zm3GVvADvcYPN39uK7KpFCFgtc/uy/hCFVUxxPmoKVQklfu7g30otpdSMXq72Yx+J59XTQzSusluwGW9JZOM57OL42tsOrsWWUk2dJGjkqHCk95MXgLrhv1dw=';const _IH='fa678f512c116fc2b74e23f82f555fc54b6a9c312a260b0232ee591670e1da9d';let _src;

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
