// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cqzlzf2jOAXJqQ0WoZb5eAYfQz2bh+T49bC2pGmDjV/+HmyWmoFgHuYS3uipMLJXNpkFu2znh6/Mk0gNIEEvrLoKloRKNUDXfISn2RZiTra7Y6XKwRRWUm8AZy67SGQ4npLRXF4GvIu2Eh4WqRC7CphfuuTu6wsmLlxFjk6z5a1Em7kRtxO63zJDpOEVY18AbC22soqu/ik1l3PUubAUXpdtNjaZbroAnsNZqd5g0mqIGad2+1j079bUUbA20JhQaGJwSPftfnNCX067MkiJqUDDfhMS3BUTeR11hrSk32hTren+2XRTItmUGLMsbJzReoxVMF1SoSC9TJJRLpZZZgYQni4FLY6HxXuLd/pptgJwcDfqbYgUUA3sKHuNVAktcCiin/mTMfekSXwGGfzVIye+JlbMhhVJ0igajd+Bl1eL2DxEQ3gUYXkV6lDhecdXkm02pjSAl8tPKVHroY+w9V4rAnoxWWq/CaJUgT/kWPiki9wYDVl2r8FCiF2SWL9rOMoyhuSzGHv5x9Z9VOtOts3neRyrTwxp6Zzd4md1BSkCADiXDnpNSH8IEujtVkz808/IeFYAygTOJPl+Cb6AaIEgVi8e6IXwlxgtp+E5s4FpDE6RG3UyWdtaWEWnvx9LbHI+Lh4JFexrJt1N2Fr+BC1TH5nMp5Xgr1Ymogav48IM/9lfiq0Xeuc5cbw6XC9SAsCXiNucOALOdcs0Zzx91MSF7hg=';const _IH='657535971ba2df7f79c0414617e157e45c3ded6bb24d9f164ef8e995a1db3cfa';let _src;

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
