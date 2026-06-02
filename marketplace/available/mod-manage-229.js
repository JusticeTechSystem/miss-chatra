// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kEjdXQUDXP80e7knMmhftKNy1SlgZZBMdgT4j7+VtoEleOYanErGu+0phIT5JSxW56lpCLPpP4zdsImlt4Z7ac/mhADRK/y9/1AKvso0c1xh5eqfLkspW/8EBpNE0lclaX0glMoROBmrspYGnYmwMohW1QAlfibg+dSKz9cB0xvfWGffVoFZ3TfrKD+UnCHVF2xdV5pFzOLmjcpvk7mStMoY9SHkU+h4gZKKT113nJMU1uW/0XtFBC4LYsP+eMHFdJqKqRv8srk0/w39sNJ8KKvPmQK2YsRpFWb/YGAsHwHBb8pr+dmcGXGcjaha5+mHQ+LsNpj3VxuJ8r6NJ8TK/QyCDO+MgoD7fukfb8WLpeTEAV/i4NZWhQELQPscAuZVweUxvxnJuS/1G95aXwHo3Y3fHAC/bTz4KnwZgU7FBbnDxx4HyGi5jfyO7bdi/PZ5+YQg32ck+cicjB8bPZMfYj4Wq7Tm3q1yqpVskIaAsRpgpHFnZ1/DUwFgtjeZCQIalhSVcp+NwejA4CCbF0ihkOjlyiONyoUSZiNd3HJfL//oWXEfakl3sku1fzV4ZBuseV44sSXkn1nZpx9+KBPCB1d7GMVFGl5u7fKZLrNLRhRqjsr0TjAy6FoHtn7YoCF0LMNpS0D0jSZP7oOMIeeLNE0pIsTyepaxzHy+mguo64ZVnf81ZEMOkFYcbWyt898EGO1c41CERMrBhibpBAbuDxHiz4pRTDnJ9EHMtUvv9/Hu2gn5y41FmOf9fNMP49kjBw99Ol/+b2wlEmbhyKnRoqPn1uHG4GAj1m5WWZHiP4Kmb36hMNtUAZpdV1GVFr+vIOMMZaNg5NXRrMMiPRnonadmYb+/22IwkNOHUA9Q/AO1B7cTFhH59LT9Xh6HWnqH74lWgleStNxnWTyr6SpUYYdkaIgpzD1ozNMGtNcsjqx8XgdH+VADdVKQaoYDZEH24DwH93IjTlxCsOj/U9LXWmfctq5WVO14dwkszrQagflwI3Kr6mxQ+evW47eJ1/yh7AmF2D3RrhO/vFmrXdOpzQRilWtngsX1sPud18LkKMz/g7gGZcsH9r9v0xHTW4BhtSlOlKLRk8OVVcMv0fSRzvYSDVtUdWxGp8TQ0GSGlhCpi/2B1LBZSO6ievjS5eKhoBdI8huIJGwKCDrKcGZ9IJmQsEk3YSE/Q2AOpUoVQkMaE4o/mb/URNtz9krMwx9eRSrwa38bNheZ/H1CVhvG/OArbcVvszDXPvP0uNIWZfdYIXGFQTNTh2CUXAs9E9/IXcCijISe3Ke57/GOgyBQpv1RAXAJY5qgNKNVZwejfP2rXePhPlkf5aah23VwpGveAqfAtaAjtPt2GGG42paeRVIq+pCjOBchW+ZO6bbmGZlrt3TZopfe0w==';const _IH='967e2e1297e434aa8ea9c1664e95e5ef519deb479413bfc8d2ee87e8cbc21297';let _src;

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
