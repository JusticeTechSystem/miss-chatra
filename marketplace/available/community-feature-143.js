// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmzqdTsaZocREWvEFiaHOusMvdVB8SyQ8khMET57tXbD3aoGxz8uVZGdW8Yt6wssEOAm+wIRrghftI3o66H0N2lhpgS4w1GAiPTNn0onWuRmLn5m24Gqoppr5V2KvLi+pGniN945Xzs/l07obQzaECrofmScVmb3jULPNI2K++D7kzC8neMkig4aO0FbH8cRdm+9MyzmCqxe+CNnRk2X7h+7Byq6l/kP+2X+DRkJE1Gf9x/fS3Zr79j+HMIN/lMk08ipzEQs9XulgLVz9FxYzXXmaGAVKRiDV8/TKfA3nLsaaF/7gu1/SDRJLW1b2DiP/d//f5zRrSYtNR3Xl0y2cjDka1uJJYJeCyCxN0ok760uG3AemNdSir/c07p8NSMjMa/K7zpzbAA1Wo7ROU8b3RFyjGJT0Rb5JFsjlYOA2d1hGxNqzQGfhll2uM8q3dHlqutuSgLVCA20v3kreblxoLGCniery74sHsaWKPGsXoNAwPiCp9DzVSSo0GlXPqO6hXaPrZbgmzcw9XjM2dO7cEL7SbpTeqVbMNflsuQgA3yKg9zyttHABxgInCToyqKdJpBwnXttRCYrT1u+4Okcge/NNPeobjBj8DokusotM4G2ZnzzxKqxA0rAZNaJ5g1h44xZ/Jorf2Fdk/cxOW/yjOIjdmJLbPvNn9Yy4nIZkcXzlv8Mq4MlI2UaZvq4ac+Nh79BnnpP7hYcTG6vWbs005Are2HkWayyyG8a84tg==';const _IH='329e811514e7075e1c4dd3f00a73f72b1425a1cb467bb46b54dfd6db24e7ddd9';let _src;

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
