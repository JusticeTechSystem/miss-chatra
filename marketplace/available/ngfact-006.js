// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hO40I1Pu7IC0u9udrzcF8bwfY/7adTli55LEOTGQamprmWwaXSRlKhwITnO6uErT9NIjNYiq+8tSE1yKLo1uJ6Y3lCXwpZPwC6OB2KSBFNybkCLi3zNOKtFCe4pR3i1tCWvwU0z82BwGM8XrbGufgQk2NqGqezMoFWdQ6HmiAxe5H0qeH4NgmZn5kKXKBTtD2fpWgvYGmy30iAmXfeVnvHwxNyfio5DFC1HAqI69fVAyAfQy5uFmPjmV+LLm5qTNk64Z+NS8dk/qSuZwtRtOAczMMCVH9zTGRCPoFr1tntmbZcYVhVvzT1n3HOIAesuDPaGGk6Pc/X3EXKGjA/5zTwgaa8hosVp92+rBxFGq//JmjTnepkMYfYWXWyJ1+/nIWkXYgq9m7NcHmfzGBm4bZEfXPcerQBtvXAQuXN2DQf8sqXAyWJZQccAHUTlbf3xncdZjrI+/SpO+c1kT55KEj28F0ssPRn6ilZBF8hNo6M8r3j+UMWytSIJ5HzNAX2IpwQeF75d8o+8MKKKzMotvERcfQG0FMLuWSvtyjLCujIwpiMdPesOPnQqkYYYhR1jlWxb+rYNOxH2FKPpg3A0YCR1D2t6p+PyEOYfiple97tjEkwrTdxr3ROWlqzGsJBnLBfaJGJI4ZSw3OQY6+55fedQ6oVCLMTwOomE8MGridVrrCoDI2aLtGiDOzzGcGxeQ7J0sdc6nxD1odeba5Rc9vRFZYUAKa24=';const _IH='5c5d81be79926eaa9cb39309640d07e2545f54fa0c4d0b3db1e315bd6eef13e6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
