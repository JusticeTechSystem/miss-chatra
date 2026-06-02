// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UYGpGWSFS+jNLL0HBRsIWu8L9z+zjQyQZHmT+tY1c9QV4zmrKGHlF2gCJslNGtEp1r0WVZqmyM0ptgrXpGTurv7mZKfiWEBvIaX2aiM1D3Vqu65FCH939gqzNCv9M9qcuP2DoxU+1nmPXq6dLB/UbQyDhaKhQcewzavrAGEJLFJPeSfRzLS8P8+g2o9swKuohPrwlHwA5mHjirLhUYtJOAVWoyqNlXOTmasf2Rg1hrWiHYvHVa63sDJiOqhEC0JnBXrw9+vUF65ygEGhblL+IEQBFtNukY0AqIPQtLZC2lvSwU0FObcZ1ldzMan1dtwxRjl0wYMF2BfnzTILXCZQsTBXeougmywBkgNMXcmTUk1dlog3gzHmgb8tpx0xdromJDdXr86ebdqccJMhx5x++pOJgx0F0dRMg9b/XjgO+t8MclXjg7aRqNieMVSuDIcw9jnWebjN3wEDz56tsaDFCOIi3X6qLawtCsUUxKy/lesdLbGKVoEjLfvDijnggm/aTCGlSkgpF2kSaTBvWXpzpX/7oSpMpigPMgZXir0437Or/RsT5d1lzo/wXq3FayAITsy6FiSv9z9dYxmslquv4GaaGVP6tRYi/6eMjOSWrURIiFR4k9UaTfXUD69q+tPWSE14gEJNE4201cclZtmQD7uuEbL70PvPsGkDhYOKdcdZZLyT3SPoEUKYs7fbPperqkxvE8BO4SGEo1NYMjqDZuAlTEoTJl2R+OGJbjPN30kcP3yjL1cY/gP+Dgb3HXc4oGovxhcDzeeEY1Yc6yPqRcUdkECbksgEaFyWQpzzD8Mj+SgxGDLWSa8UGxBR0bjkgO8oLL4598KWs0ipB5E=';const _IH='0d3e19f1a0ad00e7e26e0218d90d3228c5d1234421cdd2b36882004438e06b68';let _src;

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
