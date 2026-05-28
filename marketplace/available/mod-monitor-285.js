// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W7f3z5S9zl3za/VgTS6phGCaIz8vdJNSX7rdEZz0GArxXO9TRXb2hXmCZIRgEyReoH2xO4kw3acOjSSKVcOztgvLZTW8gRLFn3T7UiQZpRmh1o18BFsov9RiK7QboSP+0WPFrfwr/g1MwcoWawwvn717CJ39lcvJ79Ku09pNkiunir52yHgoY3hxMEdgojZMyizFzO25lp5FNMNoD0TOjkPsmXprXrR3r4/F9+Uf/uSooIU4XI+7MOKZNuKNcLCaoSta6m7EvPTaOXdnLFFsuEWFduhU2gSsCRhk5YfIUBjCZuuuk8PLc1CNB02rXMlsu8whefN6Dt4gGYFnhLcf7JpfKwTRdhqbjRh+qWQgMd/Ir3xQc3YNih+3oV6d1Io13A8tFh8q/8gE26AOOpt9I0IuHDLe3r43hYuArgkevcFpynFeS/oY8pYFsoozGmtdfjD3Z4ICOTmj7jZRUdjEVT5yBSzdtqCyyYH+3MULkNhTsR55zqutBLGVpojTTWRTXwnm5bqkcdXJvau/T3xOBe0JE5Eg5iOVHHjiTnyWy+n6SK/L05pl/LSJSKnRWGU5F/iNJxPpcReB+CWWqd4PiyFZOu2cj1wIN5d4p2Y77hI1q8Ke+78mTLrorOI3D6dGeOCwpie37MosAOq+jPMFD1aq9u/reUyrY9RitQ3t0O4qRx8hjYWuMs5rFRVORgbscgttQxEdRJGPERQ3m7sk1uOYwP2C/UcIWCAg+rvoCv8P0XyI78zKqjtbwKg0flwPqqOcKDNBX60STl64Ypk1H33Ude8GTXOF0XCsNRcqH4NEPDjwhRkK2fm1vuQT9o58n0hitEilVsOEV/xtr+K+ZXg217y0y1uCMAygSSulW9Bn0EQzw+Em8gL8QZRiUPHzZpZ9aBQZ6ITMMXCLRHHUtYhaZAShHxzRPJ9mqaO8EagJpjrJJEv2eWJY/7qlIuMDNF+Tknfb0Qn4dDVOOeNMoUM3QKDNP2PBo5SDGOjn83tVz1MxTfaligOZRYvoLzgDfmBnINZy2OGYCD6tJQtYqmrtHZL26IltK0kkCfo1nN5k1i0BH1Y84VyggGTmOxfedZiXSeQVQ9FkK4ygtqm83YXEBhGajxNcaqFsZ1AnroCRQGGsdeJNWHXezHI/B4hETzfGRqpWHH3FeJHKwq0i4VIbs66oTtWDhqIHTGgjFwr3zwpxjVd5SKJ9Y5jYXQ2yp/GawJYr0GfsEjc537vAvefCLZEg17aRN+1o9Rftzr5O4cS8avvVgUiBMjLIVVdiIeCgUvk9wlWalOdmlzeYcwtSQQyQWvycYnK3dWGndm5oGqsMJQOhVBPirnE/nDQZr3h60+6Q5+KciVN2C3SojL6pRlsmZQZIQPRyqq8WrHOUCyHAiiapkJguExZByVTuAAo=';const _IH='602015c0cd2f9f1d6803de6e543410f40c47598cc3704c1acfad5063a6258311';let _src;

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
