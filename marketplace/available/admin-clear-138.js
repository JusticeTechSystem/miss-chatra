// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hYH0QA6dOR9S4ttPPrbDw8NipZ2e6z5eGaDFoyewHTtwN9uBIDbs/2yxKe5AILG8prOBLPizdccfloccCl7Q/ymOznMDGqc8EwkoCOOwyTwkMi9P6gdRLxK1e8XBXc+55+E2rRdhBDUPLqU6gGXFUIU4GwIQXh8xP6LTgCrOiAvT7iqc1VbgLf68XMhbZdAHIu7rpvzfrSXdnZrJ6v+z6cYQ8QjTFTrbJNb825XbcpGlcSdUmS8ZXBcBybXz/tJU0T3FSEMT/z3KnCep6w5Qs26aHNrvUT/Ep5SwZ8TqzVjCFDLXqA9G6hgBncTl0GKjurK7ZzomwCq8AWsjTbvb4G4JKuOQayeMsXZS3uTz2JZ5VEGdf2dxwiRzgbgEl9sAbivgZu6Ap8zuDmXdUNygtRmv6YwvjuceChHOJx1fS/2GlxdEZ1VfsTG4yJSLKHKSs8PmjEeYbvjLdjbLCY99BSCnWSWMUy3vShToPtbImcr+5gcLbS52vBFf8BAJ1votiRnirSBn+xU8CISLuvd86TDmwSCN+U0UIU0I++OUzngUOWnENa6AXkLSkBQL3kDPvmZb5El8Qi8TJsC4JIdRtOjFwukR/9LuCgaXWbpuGqwS807CS/oKCcTQI+aiT7qt0IJIWkiYTMdUrIutYo8XnNq3hVmQxcKiAQPhP2H0xZmwt/gRUYk6msSCmelNh5WzNhmMpW2RCA9SaHgvJxu0gpDOvpdjw8uJMI8ZTrPQzthkBBQN7oDaFXWJs6OWkmi+v5kpsuU9qrlXyvfAUrLRjF+omEm76V36inOmvua5do1i6MXE8uHCC8aU/qBAtAedLtsPY3v5ldIrpr1n1Q6W6VwIDXAA4SftSxltdCk8129xCMN40J3HfFxMgkXF244Ahg3XKuRRBlcp6Xem5LEJERvR0VLSv7bcDBAynN5sQXRO/lDs8RxQfTAhzveyBZfPrBZMOChG34ACsqn7SKMNeKJhH+J/CtiF+bIOtI+rGQIo1bzbvszcE4+d';const _IH='7dadf165b4e1a51cdf72535847646d3f36fb373e51f6e8b8686178e871957f59';let _src;

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
