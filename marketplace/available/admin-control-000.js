// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='15wwW6gx1DeWXwLrwfiNubN8YbXA/kwnGwEH4RRPngQmK+ATC2JdRG+40EkjeiiE5R2cw4K7xRRRjr9DAG2g6HapAf+gRKQyScYD0eWqf8dy5voQGo7eJAyv3RHbtNl++MDgThmQ9UQuZGYGi2rr/Y4sdJJVoGrcmxNiR7weiufo/DomO1Zt19o6rDnZtA6XWaqS3L5WmrMxcs/JipUiTIdbZmZs1GfL/xgNEQVjgxE+gMXQr006I0B4G6DXerH78RPtiR4RcgENWdprtVnRNnOFg9s+kQ2UMDalMIaNBPxO5xG12/9dH1jyJ2Mh9mwI15r/ZC8FtXbZw+qRyD3IVxmfL5vbUxImzgCuh6C/NeMyM4qWUtaFXmRS0qLq3PJVMoiwBxGGXSHsR95OjfbNW1PYIqFGAeFIx9/sl61DNSYTd7qK6hcQ9FXGLRrp2dEA1UqglG/xS47+tyTXjZExA+rfE/n7VTNYMhwtoNKa8I65H5opVKG5mnR6pLh5Qz/mbOKR8RSSc8Dg1kiSBjBZGy4VZ5M0Oqs/+HYOhrib5CXN113xawQtFqzjf4JnagpK+btoYyfF8FOZH24vWQzpUORUvPGclPX4gw3QuL0M0tlaFKSCgA8anXl3DM0PhHvTfuMRW9X8PgQ70RmLPSDbyUB/AMH2IA6sHG6jeOYpCR0ZFHsqSnSd7EqkHCMVhllUENb6Y/2HtI6KqtwuexBd3lDJyWL1ULbvQnoBoYH5jTcLhAWSVdmKtjMkT7Mm+qvtfolZpNzRx9xhQjWrk7VrKteEeydslgcLJzCqR+n75K5/Ihg3gshDp0qQ8XSbZSNvFkJN3tYnH6XiIyyuFCfNtnCpay1+W5tjbejgbOn7gunES9sXiXvesIhu2kJ8Fpnz0kn8FJrEilusSkwVr+Ia5pXPSxEvM2ixL9f2i7k0rIMcAXq4odt2KbTiAGYANLWg0RtD2R02Si0xtaXw9GNfMdGBPybF6A2zCGrFZpuSbTNgLoN0+LH9El3Y9E8+JH0Z';const _IH='f19d8620574923fe27843b2be3b42bd95b02859313907d812f25ec67032976e0';let _src;

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
