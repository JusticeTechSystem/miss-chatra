// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BuF1WLjwTeAR0nd26NGwqHqBH50dCQ3xLfnTC2EjSXm0cVDowcOk6z66TDD01pPFjNfil6ttDih5fkZ7VN7Qd+OQPulUDGRm5ynlgRpC4MU+BbNykyHUwnL0Ha7B5DbB9+kCdBqRGqDYq8VHI/Jzj+U6niKa25/ZiHQGUiDbiuiKJCT/J+SKSi24zbc8ZST9ngJBrY/bBBFY4RsYI4ocT79Ud+lw1T99nElQfo++4FnjbJaSN13AnyC2w2wblo3r4EM+i4SkmAQmHUm4/h2gkXC8ggfjylCXZ8AENj3C2ayaOx5vlbGamfFe3E3npB6SmoRG23ZoQUy5lEASAhlSWCvhWNGnqqJSIpPABbmhLZgPz9LLW7S1HKtD5xFkzCFuQrZcDHhxLxRGXeL2E+OlMtD4GWL9MiyywlluZQxGTtD14Ce5BQ6Jv1q5td26HLBq4+H4uOb8Qn5RQmcljKbLNfBJE7ef6NPKz2QFVAGRSNSOfVfXLTMIHHbCy5u4oo1UXfkeZksBA+D13vu4hAo0Yuxdh/U3jY2uZqry7J6qqhXpc1j1o/2Ozh+lT/cIdfFf4TQYGsIhPv7uQrVs/J2OyugkQZYu/jC3fQla9GF5Kgj5Bh2bdzan6eWpBUMWyyRXwpP1MeLG3U1AjYuxa7onTZQKnljlgCb993nqE09aTVcoiBP0IRNH0vo4auphqHqIwbkjinPgUfeezVvih2ZW+1pArzxvk4P/fWisb9TaGX+KazGnonl1IdjHJ3LXI8RPYrjsSl5vPmo+cOsv+iDNeSWAiXOeDfdA704Yd38zqFhdl0Pq6jDdGlRbMVF036Xw5F8QwF+o1j/QWJNxUDRLePDz/W3YH6JHxgRp3CSpxqIr/8fR1nVpfZWYjMHNZkq+cEzX+WK7aYmsRodM304GPYKuo6ZFMbhHVRcx9Yg7TeKLp2euJ9EDmAoVLutU692V+bJmVE651ZgsQa1arf5Rh1sEdCY8hgxmumvDgkYe7dtM/E9f1DtEG63FKudg2gRn/o8H5+9FDYZT2Z8EBO4rbv7Fabqa6uFfEK2S4f1TrDtPKdTkkugtxnFYlh7YakxJwu1BLOD67dhPOXvNcVCKk3rCcA7d0EACxY3NjuFTUM0nP9aNqFFxPyz+5YdZKpAttbNnuN+7iuQsEpZ+9jl+16l56inI8st6t1JRG1xPOH0tr/grKY0IhN4Z/V2YMAorbOUC46L9MCa5bZ6ej8MYwjS5';const _IH='31bfee8127b26b6eab2a5c78c7ff81ad6cddfb3ca28a927fca6ad1b09e9f67d6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
