// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S6uda54CoH3eV1VnorWcz4x7wtot9nydtpeJjceBvskJV8iYts2GEFwUzJA9nuDPdjnFeQ0hKhVXtcb+/KOJyI48BRuiVv+01+JBk+qJD0YWRBunj3prGCqvRNu9gEQ2QTWv5iT1JgsspafabbtdNbhszJdgD/x/b0rOMnzqDwi7b/lveglFeKhOR5hh5t88C/21sFOILcnuNAT7voytk2DIdjfbMwKz0PMJTtizH8Cza/CSK09eCZ53coE4oxxMMD2EGzmzJriX9bEAV8qoGJOniLrh9Y3e3SO6JZfdAy1qAssxZhVL1EEAluDYGDQ/ZjgvqlkEf8r8KYw1cEejWefQpzSlupGhMXcwO311a6crEHjNczrjMzf+mP1NSJr/f2/2/8ZKvanuazQIUx27K+5O8JCOiVk9aJcZAY80lgiwEsdtJzrizCcQ0MI8UIg8QKZu+wqOa8RBk+yNObHgrthLpoRpADHAqBg9q83yosBsEEoSxLzuKihSOtIxWxJ/CSC2k+BDuCFJOyhMApxYZmfgrgiOMUvo6giMV92TgDzetplw2XSXSV7Q4EGDho/roBFol/SWnGpcdeXHQ2lzPvJxYKdwECOLL21ZcfecAgoJp9X4H17jQiMUjUIAaLnAqxbDNZLEIsECXYHghNqdaqNHyp7F0eoq4hpfpS0iKZHbHa06BgMCRGpCRnMQe+uFHyZGZZ9cLvZxItg3p81weDE9W09DS2zZVhGk+UkDRLXzFg==';const _IH='727f2d90e363e16dc0a686528636fef14f06efbc7611b492cda367393ef9245d';let _src;

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
