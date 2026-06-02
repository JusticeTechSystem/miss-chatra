// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vh/qFo3W5nBM1tLXMwrwAWTBCDTsniyaXjJSPyIrQGVwMbkXoO0zypnzTAL/Ad0sa+d1xYfmtoyD9YfD5NAWTddJYegiV9YDz56/Vo+CKruuYYmiBtzbycoETVBoY1HSI1/O3ZhckljlCRdcpT7Fy2h0r9Dg6CriS1M8YcYL0hYw8Imp6lK3IfZpdvl7PgAaE0tZyk96b7OJ/bVG7smH/VcN6QNue5m6zH2axSPP9Yvvh7WTvpH6EFbb+PyTj+hLP30QogU5J82EuwRtMikd/iptPWC7zXQdGUvwgh1s/UFJXw/TJrlBwc0SLKoYx3NXirUmRojG/Otb7LeFA1DYFqTScFxWQ6YvW7mzjRB/KUTezKLFKjMivMWnpSkiUWuye+Pgg0v4ur9kjkllxeuRIiyn+H34766Sk905AX3yYvauhckGn2F3SJghfDlTtyYkKV/4JCF0QgUbrK153TBDyxLaix6q2+dpOqFIhDVNBpf5eu1D2B+oTV0yhbCmTIdGG7BH01lPTOdDW++/afr9uQjT67G+bssdbSUvi/1a/NWtQpHXn2JRU7s0t+qlvuYhwzyJQBQKjl1eDtK5tSdWmLpD7SJ0b+44q5V6F1E6ttLp/amqGY3vqg5PZRym5uvRLINr5R+kTz6/4zQdgYWTkfqDLq4zAe/Iw3bI2thld6mfr3Jk5+HemDPPG3XH1zt1rKh5haeC6+hNxKHpfOg7thDtyTaYTuyTkcvHbpMHeA==';const _IH='444ec2f714c5f2757a047272341906ea01a9de462fe5c1a08f5b45a9dbee7e9c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
