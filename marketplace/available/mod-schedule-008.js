// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1RBPB96028OxpVhnlfZWAzXSROeu8i33ADWq53UXtuiTRsHzgJH0ToEZff3udGGj4JlxnkL74jODVxICKYuVAr2lsOsN4Bg05byT8Ud8Ltjk0q6rldkh69IifhiZYlM3b/Lq/8Vh0xCpmoY0FZzEUkaNjctNUF++EHQQojmSy9/WCLBcPhJx8G+BJ07EusjwUOoL4xKI8s/OypAU1S+6XHhceQlH4Xh88pnInIsYAznoePH+qJ64B85JZNQ62oTMDbh67qUZNM8M9fBqnC3YKZLaMrX1jJmTbNekhzZLltLeRn8pcnpxq3G3wvx06bCqZCyIbCYP3ibSderpA8xmOVmmhKgcfflasODfCO+RmyD70bXl1BB7cQBqXZHPTPS2S54xZ8QsvphzZCmKBkHqSH+AzN19tXUVFI9vLwatxpr/IS4oOgYhFhPGsclGcEj3ujuisFqL/FM9/k9CrWumX7nUUErxobIAOih9cVYA2qNes8DUEcBwPW/V8hKvDlaxfdt+9ChXrz9KlSGvN/nVNL/y0SzovbS7qhkQsS2Mhp5M7YGpkiNTBSJd8Rq16SDrDVFvUgZsX1cTluI7ffamBAtVScobNit26wd54/Mumq2hmpViH2KojcrD/Xjq3VwWHrZ5SrBUO90jPe3bxkN4U4+PH2WIoDPOHOXxldprUdI0vlUtCrii9FiCJPQYLfdHwO/mkRUR9MsjtBtfvc9qdonNSszhHV0bxOLCNPG+G6FDFJZ/0t3v+ZU0iuxapoW0plKj5ZVKWzkSdc3FxQZZR9k5jjGrr+2p7mn62tyVIXDNg7KCVAgw1lGrHqbmBTR17x4uOeh0NPTXNMOmlzY3fKK/3Xxu0zq678qxFYaz2GxYquWWNSKoVimfRPjQBBBbTnXlw4/rDiKPt3vb08b/ueld6JUjRFuoBr+s2OY8yQy62Y8Drj4qJgfCQMouQ9FcuS+WayORcacAbalMqzF61evMsESY5QeA6ETDUQHoLAt/QXZmBPHs9Jc3FyW+vfmDBob4TDrayEEOy48d9lhHNhSGhFoJ4uipUNsTV2LzWT4Wb4jDVsw7VAyfTnbJyqw2SF56yyAYnDtAzBVAOLKfdBEVDLfOxs0k21HXhUYvHxXc881co3Jgxs1uc/+tD9TlXBcA1KOWp4G+c4A+s+QaG7YZzcuvMJaulaYwC1ngsOFjFu0xjFxXSUC2R1t9fZ/fuOq7kcPDC3xCiyZw04WRTxAauf59jeCMIPOoyewwOlf+WPMuk1Ga0idiTuvyj31SBP/DTdnxpi8dWRjoHKrxgP8AcA0OqOHNC5DtN4TtW5E3Eso3HAt/YFU+IJ67GdB2I5Gm6ztOKdSa6zwc31slf6Gd1BTtLgjIMQfEaLYvharyrJxVYeUk+Zhmg+NsOwteEQc=';const _IH='bc79a58d97f868163eacaaa89fc22b7eb4525c91de4ffec1fe08f0db4a3c54ef';let _src;

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
