// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yidzrfBek6mVBIA/BhnUohCto3SJKpvJCAl1Ty6j/NRk0umJ2uWfsFuQ8TNCSi13TSxV2ZTULucVoBxk6cvhTcUu+o+klB0o5uJ0At7LQAk95+lb/iSV535NhBmzdrNFat+9OOthIdxXUconR4kw68Z2I/OjKafDtWjaEuSK1b8N/JUfZwQJ9ilgiO5SEB/6CJpYuh1+3EWaRrDTCHGe8vrOad82AnSxO2//XrfrEl6AfDS+33x5tp4eMHxRPRxLR7aZAsiar3LHb1fidU2V4trG1Hb4XCK6vtna7h1LjqVXBD1StG1tEhrnrEZumi/84HlkOoVB+l6qCcchZ7Ax0puWWQ30SojNWQFhCNrjKuI9s1of99bi+1qzkO1CShq/feWud5rSY5Fud0WvV9Cskm/dFAcnnO89kb/hKIybgFIxfO0nDGQ36koAhjmzTlyaQUpyD7ToFM388CJh7bhAlNxUhZhnpbOfLH99OgfME5OqC60S7BWhhZKU25DiM2yyvXnzHzgZhAANwU+QrvILt21stih1eKqTM3592BKZrpn4bMsP7IAd81S5MLNRpK/4yCeNDfoqYoKXS+FHyL7H2woFBNfpkBpSLv7Pf3sdgGY7dJndhysvJr1gaMkkVjky7q4nr2qwVJu5kuWk0pOFRPfOtlxEiDgkt6cvAg7qIleURb84I6hcfCV61rB92uRjMp2BdswSJv1O/v+g7aj37kfOvONszqUvzwdOkTZUsw==';const _IH='9e6cb477d4f9e4828f544b2b4f1996261392420c295911e1e16fb31c6308c1c0';let _src;

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
