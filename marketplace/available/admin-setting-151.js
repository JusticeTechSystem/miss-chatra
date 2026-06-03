// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uzr5DAUkNDQxhTe7syRWxkHbrzbLdvteShUcTWzpfS+e2W+WjwTDpUX6L0ZVCQMSmGZjz0k9c3Gj6Pvo0vF+mpyqdeIrht1RnRDkpZXf68YyaYNYB3SSO0pR4l8Fe4d9J4CZUl7npeGgM5fJnQKytvGvGgllAkEFmlGHpG9JmuwcV2QDeQ6mA7mEtVUoR3SWk9CRXBWDL9HGTeKnt1um8SLMgRs4ewR7dQB3ZH0Tvx3uNfXHgzIqQk9WL9nt6c19/3mTujMgSeY5pCaqrot2pmZXs5IO0BftHh9vx8qvsggqsSXYJjaqa/rm0TVxODEDdFN7YIAcFsPZ1/vlAKIh+9xWxSIugQXTyJLF2ZiKBUMCDsz/SH9l2pqv3aKB8UkEAkoC07FkXNcCWbFJbbPN0iD4XGWG3+JKRcHBMwT8+ueMxNV/SqarKKHozMsCepKXuCWDaaNgh4xaKmuJ1ew14NrCqyPz4kiXg3yK/TWYpfvbXDiuV6Ngq8qThggxQOkf4C/sz4fALaqeMcKm8xXPGQZFiwqWskusO/IdE4ALn9Jy/6GGCeTLiH8NKDhTOOAj67p5DuE1gPPEvKs562ejUJ89Phn3eRu9Nmhpo5mUkd0P84Db//H58lSiHIv5qyq1eT0K/Ziy25LCwir8mixkUkCZ1htADLMqw3pqMFTLKelfAaOMk+Bst5FU4W7j87TGTrJm1AWhWT9wxAKPC9nv/MW2y2UTryeGiVouQJaoujhXPfOdkQnR1Bs0xImYhyVnU5tUmgVMKleA+Mkp+8KRBz7hVjM0IPTFVFuMgHLBfiTrFCDhMchg3EjjRQcdg9YYsgKF4J9JaMCAYpLVAPVOfUEZmYkfbCZZLrIGagptnRhRXOi5dzFzmaDZBXC92Uhls78R04kp00wLwfbSqXdaX6Sr0M72MccJ43NyR29zkt20/Z6LGGB7V6G5ZB4Qh3v+yfaffPRVPsrOcH8PkhuL5+QJVCdFPJsKJxmtainbWhAEHHIAo3iugUNIl7OX2QHIkigIKr16Od0=';const _IH='fc25f2260e9798367457f4ee7385d27c0703091ea132f6184239af2e63dfd469';let _src;

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
