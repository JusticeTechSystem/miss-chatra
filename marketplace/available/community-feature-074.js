// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X+AL6cszI1D6tByR9rRw0euYyalP6U3ldmUOP8MMP0LFNJUyZj2gFBK1IKC/fjxBehxCYb6X0ulrVxesdoq5ahyA/tEFW7Ya7UHilI3YhLUmcNYA0lkkaU13Zhe6zkpjJ9zJrAR1Io+djOBWonwiMkCg5c3aCAq8o9+Dhg1mQNwqFxIIwdMKPRlpqTzgcGif8DSRUYOQnDe8Ylnhmf4xs+o1vtctx/PeQPQ3iCKcqxHv5tixbdEkF8ZxhYGg7nezlQKHMnFP9c4SfnzOQ/GM8xddS7R7migNaLnqw4J+ig6Cd8srGNQZWxUAfjFX3oOP3HBlJg/z/L1EY06r1afVPYDKvff5DlxhI5URlImTiCQ884gqJt5ZPA7Tc6CAXowuUwIy+H/xvsmYGHZrY9kaMJnzWHXoY/w3xrdvuPCyKaf6LGsG7bAD5GXnY9UQd9BTU1tgu36BC4Tqum05aOsjoMqobNVqf6C+6iNR8m2GnsTCty7gR2+YrsRpjtyP2qARtayzfIln1vGQCcc82a9xbI6mCqQx1+aIO57RAfYPUFx3tnc0Po8i5VWbD9UvzDbtfw8UWUSsMghF3M0jjwFbl3PnLazotQ7OGW9GzPh6UyZrP7yOKcvrTiRWnxkH/V+5ME8qYLD+kyyoumz2jpUNq7ai7k85z6E+4+NJNHvcZi+T8vRHAteqPhlZRqBqLY0KwXzYSe3kyBs/+W/vl7lJzD6RZin8s+6tLMQmexDG8UIugg==';const _IH='cdfa03da4dfc5c307891b7e708cd94eca081612b966fa4aebd21c359f144926e';let _src;

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
