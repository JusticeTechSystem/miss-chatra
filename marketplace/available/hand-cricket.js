// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5lL7isLqNfTMLhEfm01uRRyVB3/a1cf38lUGmu54wTso3YThcQm1rKGXC8iuOBJ1xJ1uGxEjIIki70yT6/du3uVIJOF+WjI5XuOWgo3865I4erkPHojEsByEf9MIVnIHw9oD4xjw1t6kpuMqLx0iP0nZJsHgn+BxAg9VfTouDGglDAWERgN6IwyCoYLQwgA04qX7sbxPQsqTeiuxpvc5SA6F6bxxPerTFkgnuQv0MJJKNtAfyRisEGYDEwMSnanS5iRgIi7Ulh2N5M84W4Lqs121V/3Z0UiqOSWt6O7RJO0WJJTQS3rlePvUxbpCOR1180vVfRG646YcTyLrw5SHeNGjFHA4wlcb+wee05Ru8cDZd82/+fXFaW5mwZiddSyJLy29nzgRrhTARqf17Rex1ga4zlm+YAwUUuwJ9ookvNpbnvlh2genuGYFNWzSiTYa2EaVlWGKxfDzGSRu7qKZwV1CQZEAidmepLFXSx1iAfdyCLn47G1hl2ptV70tU5l3IJweyUrpmWqPU1I90pSF+pId5Y5Hw+EiWafoohqu805s2RUEt1F8pWs2W+hh8wxdKefwQL1vS+8u6URBhg/JrmkjgAMGyvqY9oeJHBpMMw1FENPaWf0NV+6KYHfsODxiEH8QmMNCaE/ChUp7itVSY/+XV6vX9ustEKeoinJhf89YKgGYtKajMJN52ch0GzcJqwA0PtpPKAc9k00ktwnXel6SKzbNl5mxAiBrDcNhVtLdWu6o6vsyAEESF8waVhDUN0y0QbsF4umcTGGuZsQxz1fERw4GhQpOwJFBM5YGg688RawLhgWafU52i3RnOi9YzB56XKmCUShFH1rtFCEEi1ui7uskUW+U2r4vUpw4w8Gap5BRmmtaoeSJY9scw0H4NLavTED3Bqm9P6QbFjAwhO6DxdbwumjhNe2GvnSG5Px0A3PuyemIr0zj44ejLXeVPEZc9uwz4qwh11k/TX9ZzyB6u+FVsibIlBrwIJ2gkFOp4yitGZN4wgggTh2kgd1WSmRupUnu89P5Li0Mvf3mURCgM1Q9gG3RLYOyYpj8nkSVTvYa9dS5Czm5xIIaNG7K1DC2P8XIyqmAg2MKrDWcjOEww7N2pap50FYxL69xciTQoS+lUWTKsveGcwtBOujM8n1JoyHsXbRAb0FsKgfy+GRp2unu9TEUsG58USYVuhnxJDgFb4ZVHY3msxc8OPYlCPE9236GgDrMzGa3I7L0iM7h4n4VNrG+p9mlG0kk6Wh1tQesoPm8rjsPJ3Ynw4Ihwdtg8s+m7tfPD0VV2Wj7gtcTcqMbEsZuglCvNiyAwoNsBDMLokxwDhV1JK6Esbs00OIkGow16HSu4r973BS0pH3OFBG15jF8ZMyYydo1fb2VvvTve9+DIrEDi+fpXYwduGvye8vdVU9uanFn1oLxBFvZh5oYzWZXSpdK9xwxTQlN7y64HvCCT90ZQnlGc1ky26xKEyx+t22GoL5aEq8z8bcQjaPRqCK+yh0+ON9LtjgO/EgPLPSr565iqVs/hgMZEt7mVs+91tqRTTBPn2f9+ngxBS1cFvFjh6j/Ea2wVIczALlyujUMYc69Hjk0PXwhxaoQY783Jo2rJoivo3FUck/550NfrKzIBdyLwFpZh7ITMbP9/C14QKFHo5MyzmOOGoPUD0rp1Jeb/tPWn+88t1Wl6hi/D3qIvXO3Wa4J873jtPw=';const _IH='8b91068258865e69c46815d0edb02d3a537963a9424e693fd5de3e7379232f3e';let _src;

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
