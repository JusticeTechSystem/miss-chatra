// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwdD7jGCgylk2R+TVTrdfAkPVYZtdntT8/Xu8ESp6A38pJ6iE9isPjNE+CKiDoKJIskXbXBwLeduLkWjn0oSt/2Xtr4eyHjldobCJidMXSZyO13lgp6nmsyJuyDP8uL5gv4PZyt3Q5dFRI5Qf0o2KOx3ElKdhtAXLV8VrwDwXEwvZyOmAmVOMB1h00R7FNZIBKoLCt6O154aLiDmJ2CmFMO/DCEBtfQGgvrfMD+uR25WxllglSRmmqZVSq8py1TqAeLDaowiyshrtQHiOLU30ThJwIrvP3gniIN53E8ZzDHo/baSSLLx9frfdCslzfG+n36MOoxG0fCZLJQ8lpdXTvsMJ/awLHm2lX1fydba3Zx3GcI3cjfSpu64EqYzlUO5s0yh37mAO5Ggv7TmDlDBtazN/OrocVI81vetRmCdoGE8sKD2CpkXcjRJqhuO9+5xzOnwn+emtOqi5hM1gxlE2cjTe2L0+8tF+IwbdJnWTbtV6Dcbo0IqiYxU1uohs+ZrnTVq0fSVHSWQxjxHqoejrBAY+/lBLZzlJ6b0Gl/P+4pmBO2ukRdTNwHeyd8VradvdgvfAVIgR1XeY69kt9okPTfPPNKyLwjP182xFNnv8V1Z6vtRkkCS474cVAdSuaHTduifYv3qg/Uv8hyVQDN2BfmnoeEgu1aNqN+2vNiGqSkDNe7QswI84ZWyS5HrRKuAlkYzSkSSAXek3pnbHBSGLtbHB2KLU/B/j//eBFeS5g5DZ5Md1TG/T5uckcDUXBU1+ORLzky4JeBh7jW0CC5m5/nvOAM+9b9otvm/SbwqqzRkEEPnrQepxsg1/oduHBCDO5dXFuCE7UyWdiGj/yeimTs+2HACJxgiYgDSFokVo3GGJr5ft/R+Idejr2qGDWSyxPDKWrSLAI6C0KEOTpjjrXkcJRcJcxP3qu1okeqy521+u4yrXPDwPJEfXurmWYC4OFrIfml+DmSQFquTDwDT6HKcBHSNWrkdsoolEXmOk5K6eWkqTYurgOCRPXrPzubJFchdXYkQzDeh3ztKPR3KeHiSgOcNTDiRGdyR5Vp4d/ozXlzNzaQ+OHTJuLz+nr1mzDY3gjvxxRj/xdVsZCaomztw9ZRVlq+DAwZ1CW4l50lHpvt27pc2utANYPJtLHxL2fyDXdeJOhGtJF0EMtLtVm/SvxqHgf0j+Xl8+ADR7K1LHizLg5Giigx0UJrsrlwCJWJU3D';const _IH='e6ec877c546bf45fdb8c112449c9fde67f21ca667e07de1c748de7eb5f4ab7d2';let _src;

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
