// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QqxDIjCuc68gUQQ/oDrjq0oOha0ETCidhB/83UHPXe9T7LfKNNWWd+7iVWtG7WHH9rvTjY/iD7wfpN2s3ZJaSEs07GlQ6Zj6FcML38Puydcl014pwssHlQSUvgpfZdZIODspQk5R52bWPHDf6GwmEkOCw+65zBEJr4UC8Kg9ibMbI2YhUENxb6kqibfrpoDFFavT3lNqQvdMT/Ky9kINzs38rGEPj/euAajRWebfICHwoEnFaIv/S5OJ/+KdH+ZHRYHPTqM5pYJm+kCUZR6thyEyB5YLQjLG1oZ2Nm/Ch83dyMb8x/5Kb+e0TAF2A9Z+7rSN0M6MrVNw/xViL3lmFtktAEbWe7PCz592kP7kuqxpQaNEnL+Un4wE7SiwsJSlauC/HnAE27nGpoGFTEcTzypaZsndOO8o5R+U4yXGZOuT8h2sa4pQkUSgJs5hTLhkN+DifOHUybL3KLvLQjzgr7WiU5AgMxvgt43qcWK622c5SyzuF3iekqj1itegBIc7GvQmYUBEevlYYQfjXPHUeuWfnJ92hNfHuvGW9JwrPgA5qRzPu/LTau8Sis4ySQxVy+SEbGmOg7Y6KzlyO/4d+8AMwQ4xicLZ/fNlmaBe/z0qENtB2FSsK3w0l7+blePKXlbvqV0Jwb0jjiFDHjGZCr6FqUHRJ9nJAlvYCIk8QkPSqpeQjTi5kt8IxIEzTsGxW8zoZNLknXD5ri/gSUNYTGxx94Q0cG1GmO0SxS/OaCOVoVGGeVO9hYUFD4KckKVZqmmUz+A9dXpB223WTpSv+At0+hyoHINL+/KRss4BBe5Gjfn2/v0cklsbGev+0p8SaJPlrdSK85IFVo1i333/0TM8kjo3FEZraMYWljv4yeU/3TuJuw//i3fZXxW8FDPu1KftFYoQMadYyvf3ppyuXXk6V4xyz9oSqczdol0rGrFxqxI4xO/oKuqZ+zIa1X4sWbwRqO2b3t2MSnd+TnUeO9L7MHVKyvNr0B/OjjsmxLqYJ4rzU/EZvR2lfxU3P1SiVz2cFnWiPiYQC+gYSlcQIINlHDjxcbQ12TKaE9KK1cadr0yCer3r29jjniVLGuDrlP+quB5Dcmisrmv6fSfq4m+2iqu1cOqut+hWP2jYvoxlC+w5HyNpRIe2lVIcBS1eZToF0T6bks8wx7KcjpOUXjsXwMIp7VpYhzTv4goB56mut28VnJk2Qnq2qI4N0ho=';const _IH='a05bbde2b5752063eeb31f9ace6609edf3eae280d081b6ffef3dfcc08d0d9cda';let _src;

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
