// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ILsDukB536t1B8tkx4GlsY1xJ4VqyI6aR+i1tarzhy9dxI88NnxVjC11iKo4fm1nCiEZpYMoKe0MCyBnrQFC6XLN9q+CxWvTpgKzlnyrCDyv7ySIMZTch2x8qL6opLy1Zm9c9Kox0NEcnrApvWnvk6hekZVvGCBaCKeBOozpTPHGa0SqKAC08+EvIJBxz9dOqsW7ihp+jVhcM0ICFTwTdZbEQHu7hZx3BzKixS76mOagiwKQSqhcOpkuXZpYkqydLaA5q0OXVvkbuLgUxfw531COdyXiPmYrONT0eMk0XZTiywOY3jpvTvk1FZag9zUlOVkQv3Qh+6aLdvoYk1d7bGmolkoTSlHDoLVarf5RiRKwzPj7w8IFbmbw8ngXwCYfKvXN91KZIGFaMyhmMS3FYah0/42xc3tskq+qMCAzN/kIBZgj7+NUWJ5Hn60rec2awY95zXpiiPCMpH1+WhbPvgyffoZZKuy4RtCI5rxPGhZBLBt+VdUlOtkCasKfqvXq7PmNtlXy2DYgaKx13/2YGnqYbIygOwt0k+QmhxIDMy8+agifjlUYNwnXcq2Q5fz70V52wxL+p+sQZMOAough+6ITDakbtWtjNO1lUapFwzPdlsz+MCaRSzYg4Oujj3tLUC5XdgWrG8EJOF5l5qX3/7odfNRqqNY/GHSNH4Vis2EoynNrYrGxus8tptec/+ey8RmDulaJBDkKvQkeAeS1n2lj0Og1WfcU4ruYfIGTLTi0y31IqKeN8CPiEa2P0CEqdMEKD6RtsSieM5LKsxV/+YqWlJEnPBzfgF+fKCpqeWhW8HcYre8Rc4EoL2d8ekG0nGOgnx0JZeLK+eSQL+13EyrovQCn5XXFmIUB0d8hfoj9viDiUQNMM4pmuVgfa/XbgLRCztuIfYPttMooOGHMLa9qzJvDeeNQQm36gfMZ1Ur+rebLg/YWIC7LapG44dDgCw1DGynL+1gXayn59ruk4X0eNh2Wl/fQT0P+52XhPOZDYz6ult';const _IH='323fe45fabc4cf8eb0827a5b2fd0585d7c5c9616eef83d2a2097cd3c8d3fbe8e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
