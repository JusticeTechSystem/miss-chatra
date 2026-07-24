// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDPu0HM5vht5FplsNu2Os/doF4+OW/+Tl1MGom+ku1O5m3O0XYojP51c4OSfuGq+x/7m955nuOBVeqMAetDIy+275uNru8Rt9JNVR2iif36sAPFxKLRbe15Bc1dJ5jpvHeqSNZ9FPrESOjBzF3vo1I0dQqcslPUtgw5K0G/evGhSfmZfr49Zd71w0zidTxvLqSdIAiUv7HO8rfELpb5Vwz+B+reJxkQz4Wsbwm/BDu/agbB/C3s/ZRqUme0nFB3iLA3mgy5qd89ftib+fOh07LLvIDJ4Q0E9qnmrHkyzjqqWb6OlgB9DkO34vdtwTrbDwmUVfnGUxlfqmEWBDx4X0AKaUIGv3DTGOmZPSph4RFD17UO5sqHauMzrxNcdfEd/9y6N1QnWmOfbX6brtnLi05cGRKsLuRnfpGXxS4bAHawWTVGpU4UigOOGOGyjnVdjtzCwI8wJoDst7OmWBputUiOnHfPNMvue4zKCw/UO96qbO8llOxyTVY7b8o2EMQXIviLeL2TEOoKlzodrHm4O/1sIxdGHPofYk6yOATa3hxpTrtFZiQZG3wXSTg/XapdDn7idX9eAUkfC/eZ4j3/xBNb7YMp87OWn2pGv9psqeA5Dn+0swmfH2ZwlYC4mfEEtp4W+Di/Z/CJIJa0kzsiOZw1lBCZaMpDzbFuuuGxnVx2+eDB4JC/vzMPVHYYUekd/FimqJBYS3iq7JgrcBO4qOnzLobFxlth3Gep3dX7+Bje6lZl317coTFnpebzw2mO8iWEF98qyBk6qneips65DRt73aAgG3pZ6A+FfpdBPCToInvRD6hE4xpWKmyCbreJtI2phn0CM28k5GuCdEyo9GkqEOEzviSyytlpMLC+WjFES8fUzxFC9Xf3z78QUezPTj4y2y60gpFX4vVRrYDkA/rEJRoKQlr4oFQPNuWXuBx+k9+QQ7jMQaGyHbaDoBzx94XmchbwUX/6wl4a5eAgmzmsCeyw6dSn52tPbWE3aY1fKHIQGJKs8G4ctVk1uU=';const _IH='34ea0a40de397dae9686b025442bf47d5f350f55986cf593ac887d45efa77446';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
