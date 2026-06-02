// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+zBNKaGyG7Px00PH4VuLzoXVFqMseS0PfPAME2WKHFMGmmabWzDjzaaHMywtcQDLUy0bjeW+HnSrbu1zYO5jhtl2au4sOtapG8g+nIdc5JmxQ6cakoKi7YrAVD5iR1znP+F9LzQbxHT1WBo1d8D6P4J8dsBUhHjjdE5SuJ3SbKytVyBiTpqlqUzwumV/Ntv8rFoE5yOrqihRAtyyrEhPFXf6EA7S8L4kGkRVLkh2r4WgdQ8ednFDopNCCBpLZIt2wxKTioePZNLZCMxpQU0LaZyPHQ9BY8YXtgN8v8ljG6CwdwZ8GrboLy7fJNNkYED4WeZ35F0mM3g6VhRXMdbS1JUtBRNecRBqzGmplPcbBGGJCLAWR+CoO1MHUgsXOytHA1MdF7XRiHkKjjvLgPznx8byQv6PqxwkNCZYJpSP7gcCfhJXUZpJk/l3TtdIzHKXFokc0QygIM+OSme9FEaeweO5d3720NpYMY0V+NYG1sqQKrLJi4Gsr3I8aFuqoAAtzC7wFoXBylsh+i+Siz88GfWolsZmpfbMEmqwesyLCFB3Ba4gHL9GjTl7dHJtHPUx5Hn7E/4a74Lcp58uNYRPtFPCYrUluESB/m+h4dEDOrwziaSV/f6eF9yWOlZiGqPem7D9pUWVz7al1Gu0JvvSW81qhQoGGUTwRdkLWar5oau9Rl2nKuN914MxEmJ7XY9Zze8KYJR151n9DXUko13bcXeibPXiq6nBGtazRWDidY/jUuVF8Ends0WG5JbBrMeimbDyxniOESUB5tbNEIkBxvhSEGazpbTvFw9WGAr3GzoS9nO65iT5FwaXFBWXe44ukz1AB2YmVu2aN6vUGb1c6hT+tEnevHHEU4c5Q2rYVtBkhxqsj9UqwIhPWpFoC0/QUsNB7FELAo3afnR8KKFQh+REhzEcUZCymGn7DfY1ELN/ubtekb3kATsxd+9fOecqcgoZGHqyckDKDnDe8Z3kafDaVEuJ/KaH1EYUU0P12CKtIGtrjCa7NZAoJADWRmPGxCSEi/j4p8PkYipA/jx+FWyAW7t9ZFA6QX2DBdMfD1ypQkn8rurWKol3BkBqkd+dhO5M1hEsVPv4fABxAu2P6QXaTANpd0Moo/jXrdP/V1peP0ge7K5xy5Pha2uUiepBYHBcFya+pMwO2BN+ox6NGV8L56FxbPYFtjFjy51GDfXOybpKI4vtUCVhHX029GsbToYkzlhcjguPh/R8IhOBuiBbpKwIXjG/lEPxpAWYtcGmLIRcCJLqxMoCAWCPvN8QeoOLMxkRkGN1rGJMytta9g0/bLbB995kE0MlqoihHznw63FHWflR8atntJ8sQv5dfdxjenYFQnFeyrVCXeU0Vq84eOBPA93a74ZXEcqC';const _IH='c0011bc4cf54156f8601f874f48ae66aea1a025194486d64081779d04ceea66a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
