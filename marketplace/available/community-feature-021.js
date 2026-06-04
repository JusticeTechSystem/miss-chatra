// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YcLJ6VbKldudRWJ8mhetWPyE6+uoXB+8aEcEEnBCKfLUHUQJSNs4eKA6PyNeowZJvAEWHjox5FE5Ydf4WK9yhVYJbo6YD3cbm2RTFbAijo+nY8/qUix5yqts3EKHNw3sx9QZV4I/9JAJO7cKmV6XNvqUhvMarNbbAsEzGX/YKCTvEQDWeQEol8irFf9VbxJuS8YST14daCW7cp0Mo2flSqvxOkGJgcBuqF//S+iuWccSNuhz0vv5C9MeYq6IXGJoskqeaovrLpj0bhNxH64nAmGlk3g4L6E0oJteBuFsfC8HcBmSY6iNP/7/6ajRNAWs7iAHzzteC7OE6uPO+TuULuidTOfLiepn78+c4I6MR5h+N+XGy4XfZytKkjyhIbDH6vjmFoypT17BwKaOtycDWgSvF6Zk+inDhKWuLRKZJc0mfHtWeVCKS6ssHPyJ+DaAtGlbcfCi2+DX0xL8CdxvJbc1v+7WLEy20UqOp5/hId4o87KnId8AGfwH558OeM2FkeLU2jZF0I0xY+QQbdcLQ6D9dflZfZZ/pBLAeodDjBEpBKUWotGavcUO20kFC69rlNpo81FmgGaLQF5AMA7fyE1Va8t3b+FE5FoTDOloePI2rBFNY1J3N6hZ+8Z5UgBUUGKAnlRMB1SEQKC3k6FnNKsasK9iDxB1bLA9+5bvYyRIuT6NM6bJpe642YtX2sopdi0dJcgG/QryyUg5qY7rhMeTJq8=';const _IH='467da3d9b634783a8ff3b410a5883b496ade9f78751f9dcb1964d82cb995198a';let _src;

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
