// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vJVgxWkd7L0i/FAy62yrLoXNEn6HBEpYgW/VfaPall0e8foAovQ3lCkaLNLeQurINJYaIG+T+6QuCCF8D7hcQAR0Zlg2GL1Xcq02EymQizH58MGYzSmihamoWAb3R4lo5nfLDuGFL5tHFcQ4dWjmaDe7n9CXD8W7kDCDE1FMrGF6yQvyswUp664oxwGdAw22BP/C98NmAiuR3DWaKnqgrr9xOQoXHvKNQeVWpz5pXp5FIveWtPnYPLNAj+6tqMFoON4phSmZYduBtCqq+cHcXT8NDK55kCM8ion2sfc5y74lqCr2nHS5MYesO2kQowiPpQ0AX+O56KIChjYAqn1tbs62zPHNTMN8P9WT5CSMDoMFrky2D/ugMJprtEiQ8zPI93lFQO4P3gJk/I1FA+yo1jiYy37LovXDv+siF0R6YXW4PcNLxrrZJYOinY2xDqjPhxkjQhBlqHsMjjEN+ZJXRR6Y1+WJgX7Tw/DHrwB8OhZw9pJuD8DPS2JuQEnkdv+LXkPDXKNGXH0x9xs0D+S9tjadP51e3TCyL2Mbv6bwUcQffI1qCeB4BNzviGAyOu0PG1cblgN/kJnkJ6VOyis9Uq9ttVdsRUA1OtQVgsbyhcMfvX4zi3juJIUYFyaLFzJn8XkmLL7iBU9jp6annMO3Hp4RLkcF52oLl36PPCbqRhiSBBouzN5z2TwPNhFMn3kdHpYshgiZyb/arY3kGIlHuNNVsp8D4sS3JnDyL9Uc24YLq7pioPJ8m5FkMYvZRWizpTChb9BmH2UsRpp4Hi3VymfNY3R5WWNF3B4HGce6XWn8dWRn5O3ny8i9gPBGAZhK699YsQOOKirYdu8XgpfmY8l74AOot4nUghYZHD3ALbDVrDuJ/U5T8/u+aVyz/q3SytSWpNgPJBnYaq9BCPgAj5qD0bQSXRSR7+Xp9oHl+qS6CSkNL5jahmO3mmABemaBjqbDC8qzcOd5Tj8FKo6/ZVjV0syb97Lj2sZOsqlfqT2w8lg42sO1DA4xg1L2hU1W0U+iT2djOkDVyhOgVDhsiAVnMQf/9BXgO6okwUgl5y3MHvBsFtsU1H6ks2SSBKb56UEvVWbOVdxBebxrSEvZpMSiMobms8Ob4jZCzevQoV+0ZqVaE0CHEIeQFS5e6DvLRJQ1yYrM5XWYImxez1kfjuA4Ibv5BuBmlkmRjwLeYpnxLumJimAr1k+fb1Pz2tIe/HzESI6FqonRQ//7VDF/a3SAzhoDHczEuPRUJ0UmZau5tqBEjHva5Spaw4uWoi+VvLLyTIcf4f2GF1ioRHEsDFzrpummGfGl6S78mRNmg65x1mi13MvfrFcFUXcPvbwPNRC1L1rkj0hoAml2Jc7Cys7a7vpt+WhnQ6rbqG9+ksdNXhw=';const _IH='22977d441f0c666607006d4e0436892eabdd7715627ad01f36e4c2ed26ce5580';let _src;

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
