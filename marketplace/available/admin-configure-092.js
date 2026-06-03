// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9EDm2edt3jKTGUCghQs60K2W+Ezp+eCgtvoZRE+Xv3T5joLnLVj+m8XJ3oXFsSackIEszKZ6/2Ed6tv8i/fL3L01+r36xfaZQKGUv3fOhPK5fDuJcRy6B82BEw/zH0fuxubDFV0weAwogdrfwHz5ImgKrvK255UZOGtGxmQi5PE7tvmDLFV/iBVeQbj1LQYNZ+we/XZCFai/JGxaNP5/xNiEssa/x4wfPlEUbP4PmWsqVVrAhpKCpw9wcGSLTPW69cK19wGKszgn6h2iwpy2g2eqkodh49Kwd6Fp6Zs3co+UXWHtaZgb0QIA2k333UCuKqFA1sKIGl59E3bt1VlUTiwyPPRq5YfC6ExC6Vk4RaWexJeZ+PdvKMUeX2NXXhd+Zt/lNB0GCs2dhw+BO5hYpQB8XVdylTKqi+2GELw+eebZPjF1cYHhQ21PmnPX4b8IzFmbauBWxM4EUPUk7X+I1QpTpBU9zIX2WfkJ03yISz1jNb1UQozKG3Jnwkajn4wxW7hdz3oFQlZJsXCZh3oiuMDTah51E649f1OEVKdC/ln7YGv7ybt1tCw2kg7BThIYKO7bI+s0RA2gczcsOgL+RCA14YdXsgyCty/fWQZqspDaPiomk4SMyS1RFC/o6evdGXq0yeP7i/JNR32C2wIjyg2mFUBSmwnolt1J2pAQ6+BOWr1UrV9N0162oNgzrFPB6A/QNPjgDsb4Ey29fOty/ZgsFWyQzqWV+9mLhzX0+4EGU6MjeYaWcYqygOa0T2HPzi3TGmDGZ8TGPSbxwrM+unch8nXnF89xVZU0SsyFuZS6jPLn2niAlhdbUYsmEZU+ce071NsRVnPwgEKx8Clia2m7L5Vlse0qKiQluYnGoCvScUix2p9OhwynLyK0UKH3PPA2DKAOp6oxVe4lgJk+FT6IEcJpNmjEv4JLtDskkHTkhMUSYaXQJ0bc12NBFQlG8Rh3ATmfwKdfpiHpF29HmEe5miA6jLVjSo0mk3xeQJXi7dml9Z+WTTrMq3Epl5L55N3LkuPSoE6nCAVr1z+VzL/o';const _IH='1c3d53f6c93370b8371e89c96d9fbae1195514834536e0deab82f19b603cf88a';let _src;

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
