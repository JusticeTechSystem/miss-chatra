// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pSkmD/kYJgbNIHJ+MDx2UHsPgr6hR5rhJ2k3UVZBCeVknBxxXAjVjWILvNxV0l1VuAKEF5hS/19VNkeek+1UlxzCmfIgviGImJCn6IH0vCLumavzsyudwhwqyMHbMgWMtO+/sDG4adb/iuvzD3OIk33Iagp9HPvzpcNjvTQNMCRkOhvK8KUNzmCzdue5/cRcW3AjTbedGTGdP2QVY+vq3qe8eplYoJPdvspRawKs6LRAOKf0DmL2id7S4MIv2QLY3RI5qP01FFTSoLy7rRddzprQIcPTW7/x690W/sP6SkQxkkDbIU4fA9ajcAIYNdSqydwQk1ODE1HpKCzvvQbZkTsZMMlyClLKAn/wiY6N89bKmZqaj/bZVmSe4cLsdofE7zqhd2Op/do+9/MWRHc+pZPNCl5jtMoFGtMNPq9iVTNBEgL23g3y1vKnsFE4VdzxXuuidYAy+KzxIVdV8N4X23XLii5wDQ1Xalg6a57s0mY672cVcQiGWHhGaI8Wp/ta8lkC9LJGrS61X+5P6NlekPJYDmUUogG/8XteSVz6/LZGHCkb+N48m/PLeWJJ7bnPPa9IlfaXkdgprZeXsTohWR/q70V0p7UugX+ROCWZulwyg38MkOGvixf0Xq6mE84=';const _IH='fa4c0e3db6b638645f02ae96156ff30e91152f8e967e765d9d34b3d212bb08eb';let _src;

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
