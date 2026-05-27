// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p+cLypUk8Em6VnCRPa4yC39qqPjs8kd83C/LXcang/5iczTqFtKqxAuiicQ7ISPzpZUKRAPG66+0/yRleZTfQqibzwGfRkFm/tIFsUI4SpesQpRtdGemI7siMsUIMxZxSz0WL2Ckd2UW3kjfaOFPNapDt0hsnutsm7P4+ftfbg9WqhxDXmmTgLt9h/FHJKOl+pjJIZ6wwJ0Dne8ESOh2SF2Nks3Sk91iCg0lLuIGMC816rRFNGXOmd7ASii5dk1kxJS4/3iPuFnkS2zhlez5oRljF9oC0Xmcw8J+exHSe67C+Af26YN8z4v9ACBSSB/2Tg90bWAJmi9Nj6c5pcycGLiCb2x4teI0e2xdcKImcsP1PxF9U4McMhvCtMtWgyDfOezsGYEXI2Put9Fr4SUQCIHmoDOag5y84UbQuLnBgDh3pP+PbqqkxUAPNsM7sXQC36Enx6GPmtIPYEjW8ze/ah9e/xYqOokVzQ0IKEeQ/5N8N0rIL3uwLkJpLL/EJqX4kXfbzIKgUbuvGRxnyOBRFugP/69ot28wldTkoIDsDgZJe39zIgpSI7XQIC8q2rNB2pM4kz+INWdkzz4365yV5Bwm//1wYTjSr+7UHL0dNtZlQZDVRRehh5rtwKRkGh/HmawJ0WUPKukLPLpmAlk0Lf25+LYEXb2enBptlNvYMp8nOfu+2pr1KFpf2GXS5b6Yift6qEqaVquJH+ZAH9bZviuWu90oyj/R6wqMXi7XHbnCEIsx9yhbubiFu1KzENPmWzz/Fi6IgF7f/RcpsWtmt37lY5Db+Djn91GEt8mBCpCUnexowBs+VbHrjmGuWwkuDLeQd/N1SQtDJ+qlYDdaCVbK5KqAViM4BpJGgKcqWC5ccBt2pix06jV4FqT2XI4b5phAPUkF1NCuZ8PSMPVW+c/C++N40IWRGPw+4RHp6eX/GvOVsID7hDibzCeOxzXykkd2Db6QC0O85p/9UMjLu10q/iOnOgww6/peM/cacIelFKzvlOg3bvNSb4Fqwn/bPiNEQG0jvvPhfjVrdVRVOtDVaattDuQVpfE6vnUN8qQ79/XIJWumLyJHUx9I3TLkI93j+YgopWKtKu5pXBYvhAy0JIjFV8bXvwSmjOUnFYjRSjBlg9l/OaMIJpSFu+sOI70gL00TNVAy9kLvgdRahhnf3EHbkYOIlLOGRvrVgyq7kbAgZC1C9LHcpn647i+HxcT+kytTxfQNl31hNtFm8LVYsJwEwKdXywr5lXSpyVySxy3OoRXh3mV/lHIHh4eeT9GV7HyNAu7QptfUbbXZzh0RWCAuPcx+1r4qVDJbLJaml2fyoyTVj8Tvibf5PMQt96DWTf1F6hA/4lG8M4QWrlmF3xuu9tTMRDd1cUC1qYy97O9AmN2iEzeVX055GPa2ra/XVO3pPQVmT0iTViFCkEe7KfXpNhcddRPKgDiekTYkXpQfAMi2bL7ZP3njzCg2pKDmRU7NuaGrTzY3aAL8bPf/+E57xLJZhtxWpXarKAZzKmoxX8GlNTcpgs7RknQlFaw00IIF1M6BTZXGEQmvgmZ6/x2bXKnmh7sn49bvPe0Knwfd1Lw1f9jmprkzFmeQ7N5o4sWQLSSfGrYHBFwWLZILYTuylLtlxgrt4HYnkdoSz2eHmysul6CV3nPiYi33pJBGI4wyhl8gX5Y1DifjTYVdH+sXQJ156azIBsePJye2DA==';const _IH='a06e2425f99b3eefaaa5050232d85ae56ed293809fc6bdd7e7423dabf975fd4a';let _src;

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
