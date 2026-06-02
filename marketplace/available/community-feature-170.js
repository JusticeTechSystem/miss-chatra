// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g070BGdT9ffF84N7yXFo1sA3eb03dTxsFafiON3ORW+f1tZMCa0tKt3QxokEXilyTfKDns3N22ESMmNuuujl7tmqYdiRUxdFC5SB7OX9iWWhTSzej8HT98X2giNmARQ7+GmRQNU61l/Y4zcbjHuR3czVa8PONvXno1cR7Du/gfK1HOnEkHz0KP197eSUKrCbnKdy+lNd7o2qbPnOEQkwgRXtP8rswVqWMh06esSrv2ifnXa/KDCNe1GWDQqQnkxeSExaCZs3pcfqybGLuWEPzY28TnNWBGLfSIQVXQrdaeE+rckjPZLz7ly1E63iPVvHlY8J36Z3qWGICl6ECtxN20uw1+hNDoKeEMm+xgwnLh82kOEOBkslnAx4fEZ3qD6ZXV86pyMmeWG2g0XldReeLce+Ld52a+K9Yclpnz0rV2oa+kUsoZjDw3E0/lolO6dsyLZaSUdnNbZ+yTAkwk02urCy3x9j9PKBlVdXuMPZ4LohL4pcfrljoXEt5wtydgDRdM4Oe0eSWGewCFBfAVREt5mhT/p9PXqJui+z3OF2Nt7hLOKP8wqXdZAqrqJhbNAVnzspX3ACUfmY+UDV2Z27ADP2vBQvhBAXRyTBPo8z4IPOnHUHyH2lUIjMuuYXKPA0HueA2YhxmhVSKMK438n/9ksiXPVLytNA0DHHpp4+dZHo5ERdHWQmCwmr7c9ReZF/lvfbYs837Vr+fsqm50M62fqOzE16koDMS/6wRqJE1crrp6/tkgoYi+im';const _IH='cbaf935ede30a73c58afccdb747388c71d8c4702faee4edbe9d48e77ded13de1';let _src;

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
