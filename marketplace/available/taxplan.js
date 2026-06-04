// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N0LFB/VZomSiLnnaUMhGWhtAJN3tJ/8fHLwU8Y6PiOnbdpomCSu4YMWucha3tQzhbCzqf1+INmJFhrTsSnn7/o4F+6Pl+QQD3VHp3Ofb7nK7GN9QkeBQ184VfUy2RdlT38CQnHPqgOlWmrpxs/GrjVLah477oACZnw8Tsz4Efke6IyLwis2nvtKSwZfRZzmbSzBdh7C9HTMyOMQUhE4/VcIlH+neNp05x43/ia+TnHWzsW7VdXfkc/BR01yb750ULTYL4zpNDgrnE7Xt2B5dLvyjq+FonYMfkci/H5R6EIZalnypEd+kU9u2jqPfrLRsFRCpBjkZRHA8wUHm9wYD0DgdEl/uL+u/szWQJQdBDpQGOhX1+M4Yen/dxHpFyQlPMUnhysXJMm/W7vQYNXXWIoIRsX1M/aS2GhyXxvL/Pd3fPx1Bp8HGQw4gqybDR14YQPLFSDtfm8lft+uwpXVURzFBVBaq6S7nW0LJU+o9RGEwL4UiAkGAFp1dG+YKB3EX59YCx0hMhQVSb+Sbuw5Aa90x01U7ATh8ohQhczI2Bi6I3EN8Ju3aOpA7Bk0Nh1I+1THF+ueIeAipVNWP40TY6R6X7nmwSvXNIGso3F+TVPxrWHjRrceZgAC2OwgAGmCtU7Qb0YjQcy7Ezpy+Bjr3bFTA9x6ZR3/tknZ/mu1v71Cjm83CIVSEj0Js5ETMF5qHtoiFMPsjrTMeCy+ID/tw0tRVtwuLxrHZbssuHQ2PGdSPI4KaDDR1jFwBgkyI86Ld0BEGXrt360KOqqYxOgae1PUQ+aGStJwti8d6HKAUxx0xw8VA/biqKawMSvq1Mhb8XdBQCyaTCQJEcgRIKZE2GyCw5/GWba3NkHZUS7cBdZR1R/LOtPlBmnXzsUCA9Nr301dLEcptwOhCadvPz35Sa1BCE2nHdUZqdh8ey/ZuyKADAtF2vbOdFLS1vWgL+aePDWzQEPsixzbg1mxd/trKOuHLAWlawBaDlMeCCHEg7gvTgQq3kSX55Ge6x4RDnfvHc4ftEFviI1jE8EcYUBEy1VSPhWjgrmj3x/L5Vg35OVzbVNNuQE5Afrj+N9PGOB7XjJpse2SWV02ZxgCejPhQVsmIcTL0HnR7v0zxEoZ+jbcgWu/XBzkNJwxfLL7oROOySsxub766Un7tW2Aai2MLeM2W6UdDU4nJ6la9b+JNnBpE8KgBLK4XaVfBapbbNUSN9g==';const _IH='7dc7a8dfa597ff7f27bb8d2735fcc857bbb360f81c424d2f3640b674bc13ecc9';let _src;

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
