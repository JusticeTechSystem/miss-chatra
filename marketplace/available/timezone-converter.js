// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jN2myPOb1uy1C1DOjZPuAYq0iwmnsyN5qDsDOGIzTs2Mgi47pqH2Ws5VN+ccRdqy2w8pcES3yG956A43maB3zb4kT7eB3QbbuivbV7hEUCqEqJ9AKUyIWtCSH85s09tEKo0tIdtDPukakVkakad2mlMhD3l1/jMwPjKESNvBRZTXwDPWdovfeoQmdklOyIMBM7HGP+0TPzjuYZ4HsQC6HsZXqxDcWjXNTbU/IrtiQvGV8rwb8JWuckhjsH9slfJawd6C85LZbHfrCyyZhxzfS+nPWTBa5rQl/wDeKgMWfX6PRN0cu3jS48j3yiDkjW7VvKkONHITFxPnFM0faZJWFMX8Bi1NPnx6mgDtDFOksq0bgx87nCcV/15YDUn3Hej1v9MyOFCop0OE1SS/k81/2LWqnI9QAIYLfOMFfm5x/VPzrjpX5kWVlWvGnWuR1EFLGbKPv/EHh3mK/7pIUrhQxFcPCbF1h3M4cpRcmHx1/o+bkGT0jDTfos31jg2cp2dkiP76qo3IZT4FxKVSo7kdhJG2swmAEKTb2dmmk9b/jiPBePR4FUgrmD7C+wHFN2injkRja66Fsc/jyffURU2YoUE+kcnPW8mSiySk';const _IH='32fd2e949066b9e93bd932fb168b5292b6e9e7b868f0a366902532578d1196aa';let _src;

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
