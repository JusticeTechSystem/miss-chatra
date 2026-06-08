// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b1RjogKQSRdocAwZywowIIoUjhj6NLoEqcOXeReA/aiTBnAKy8Yfa6jB5Q0NqQfH3oEA0duXTl+7ZfF3U30srFKGFyZt9b10Gm9TK7nS8sPTreXTvrOslHwjWOlN35YLEkxzRznQGfHmXa99Sf1TpMyuFMoz77bZs9fR4HvhXLFb6sbR4WXid1gc6eRpsr//Cl9Y1paB4rSzuvy4nTWZ4TIn+LU3AdRs1EZLcvlDHSPqywurjoiKHpjyFaHcKC94P6GxmVwQPhH/pURIZsQZSGWH0Bzaj1F6odMR2doHiT1zA06KB/mTsn8YrLdP7fONy2JPgq8h0MTYwGQPdJQviAEYglnEUoPY5bHVYGlLgVo8eKv/WJmAnssKgt7q2C8qLj/yfqbcYpqouEeW7zjgad7nvY09ZO5Mpnj4M6yOZCY5S04B88w4xM1uVaoGZndVQxJcy8I4jkI3xJFKF8yP4ngVRa20GQ4feGMRiMJQEt5SdBb8o+G3iGBkHMj41aewV1f5QU6Pc11Gfj4l+IVs2FUXDhGkpzVqUarF7BkSchyp4ArWlQkakxlP0N5rdxtA5GOJ60tmd4nqdLlIOXTACgxEcnHxePVIDO3NP+h3kO1rBX6uGjc6JJBG0OATJSbRI0DARFhyH6WuzZ2mJ12MaDLUb2zbXuCYWJMSOlvr0FoLIhNf+rhsZ8jy38ObmGeWnmhxXEm4PyscwTZo2fKdKa7F+gfwneZB8KiXAMSLS5teSQ==';const _IH='3164046483c04c7f972836f1297ef6fe04542731feb38a94b4c75185f84eb1ba';let _src;

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
