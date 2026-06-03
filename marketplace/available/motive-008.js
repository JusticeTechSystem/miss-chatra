// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wWDBkiGf/EO2sUAZx18ZMUGJioeX+JEQVKtQQBXbj2Cuf6ZbIhzhQfcg0OmNELJo7QWgkRVBJfLlM4pRAgQ/wQDfRrE0XscBwIG7Yhn9lc02J52uhjygUS7TEleQCM+PlDke87yiO0vjzN7t0bgGONJ81/1hP3sRwDZODTAdTN94o5qoWo3MIibhLQSrnHSUC4xYKw7LD9nvVwG92POmsWyejcwRwlJTEYarCLTS4AvZZ2e6o9o1/Tp/m38kwj2j/ltShXHeb/JVT1Glq4vzGhv1WGL2T902xNv2eZ0OfNbPZKiH9QC10BC5MGW6N7os/jlam+kWzuuFd0Q8B69FbNGAkvINnMrA5E/xGSrJdlBJD+ICcsqn1NnQ+wzzFBVgZCvWBNFhWviiHLtDZ1NW+8QId57hO58/p64FXn/pcJi8KOoCtESc3WtXIwZZB/l2d4Qps4mk7OWi9e7OoryQffaJ6fQxaB5z/pzkrzRsyTBpPYZ5f1Nmuyf0VEdzPXDVcsyUmeNBPwiOSHVNgVAIbsa4HicaScfP9Nv+udbUWMQ4XQamscILr0jq2I0vUH0r2egvsWW0m8EsNfqoH2DhTmWPA4GTgwbkZi8l2WTwaJjH55Wf+KfhdBdoea4XpdfmvGsfHVoAoHlDdvMnNMwcjJGXwQc3LpD4Lac+sjJvnRytuY2zjUs8mhNqMOekqyDnmR1+EvnH5szqyKmDxBKYfoyGzOn6auMbSpjv5Uxe7nCHIz4tidRUgT5gGZhQQz/TfYThbHKc+ikRh+AF0WckNC4lbwMwdqcIakYXKST05j1l/GkLnG+N+1nXdHnc28XBkMVFQVswe/OczzF0/xpCLVLDST+yCed040vHFJjuEdDczzLPeXlxoXf1IM4CSNm16E+Z/hmED8U5JWgeJysyxJLaumsKEZoE2wXNtOmEdfDQ2THnSIX6mc522aHl1aPcfH8MxSltoigOODJeLRAUSsJgXPZHYmmIo6LjYkt20ymetsaNKmUv7wIOcdf0kFj1NfQqz+Aw4s7Vmiotbgk=';const _IH='56a7ef14e9de127a3c470f1d4d4497506627f7bf16e3bbacbb5222fb9327e1a7';let _src;

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
