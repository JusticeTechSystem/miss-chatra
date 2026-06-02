// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+U+GUfkmOlMuerklEdDhlkFHgQvOqu6YBXIcaia2KSVREBMH8OuFWfXwWyWj38+glU4Uijs01zIKQ1hgUYnoLxgUej7MFgn/LK/hQ5a8GRDjVFbSpXT/9sfvM8fAm6dvt5/7HXnGY/AONvLSRihf2IcqoWM30r+sFp9pLfEXEnemvyQjYeMMl7wgdprHx5dRahiSOYozzFeBYiokiKZfUVh2aDDmCL2IwZZcivBTg62xGsEW/dE+87z9RddKYAl/NPl70aJepLaVyRSOmI20SiiA3jUcoKD/xf2TdGZH+1AO+EUzrQ99Gu2U+9+lG4nCMRwhj+YfaAwlrmW2NnqqIiuv1IZCWtUnoW46NFgufQT1CCd2D/DnyP7Mn8XzSCoupXEs09w6EePMWeoz7LNMJEGO4kZ+6drv5sseQpfG5Dbc6WrZWE1x6ojvfRycSn5CQ0SG13UEjnAFBwYDORvJb7UycPYvFsatPbDofueygnpNf/DN5ZVDmH2Guke15dm5qWF6XgWllMVdmatuo+9D0WxuoysaCWcX6TWbD7LpVDEyuY/xCY7AjUZHJNhglk7lSmaS+svVUJrX4ZnFAGULfovZrMgUg9rx53MePxSRYwnl772A6a1NI1yeR1KXSrxNJmaTk3EYPMd2MzYpkgl07LpoduezxsPLB5VXNy5wKE6CbBA5BtOW0aVjzOCr2q4U5ZT9ZvX+49bxoVs9gkoH1fsgBWFd+GFzMEGcpAFQpl/iEi6ZtnW7wHTd6nXrg9yvBlaABGV9/+M8OruMFcaRVBHX728LLH+xJUkaaW7LkiaiM07RmhXAqzqa7wKpMe+6jyhXjuCWP7DOKwmkT4qHBkkvk4I+QVSpTMxB2ECvNRrZEKjAJ+mgjVlixQuZQ/1+R7bzBVN3io9AGyRLx8gTac3Orz/GbxzbmliLW3eWjNscWhjrM0Pola7JwIxHYu68NI1GZpWZm5qOzSPgmSpGxmRF6Io5H1X650mdvegcVFuHtNcpNiYtBvb9skLyCGgsA+jSSZPMWizgISWSbLLEXV3YfyG9GQo24+jbdwpuhUpe6eympHLYXwLrxbeSV9DYxeB/DymkWdqR5jfzEwriW1f1FfxsP4nDX9G6zFhH56Fxeox/aUzculGNY7mabhs8WXI7P3DtV6gaesuukQYFG8CZVoiumOg/leDGA3sBinDGf4X3xsKQIETPfZ4bknGKFq410Nj+Jp4aD9qTzk21NHSCcQ==';const _IH='c124e53e684498c3d38d7f410f93141e0fbd922eacf4b216d1017452273ccdad';let _src;

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
