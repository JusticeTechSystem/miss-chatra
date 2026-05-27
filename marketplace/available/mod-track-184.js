// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bKsYpgKOYK4IMZdd8ukIYNVU3SfLs9JkNjeH5bV42Li33M+ZF2P6avUXKylG/NCCUiiUiL4f1AsbrrEiOrC2MFlrwOVwIicvqc7kjTY3FsD+J0fMfXUYCRfcHq0szy5oRYR0sEecvtRSfWqd3t5SVY/FC+uVlr949EcEohx+kHl6/JmeQoKoSlJVDGdytk236YVNHB0V02f1QRLHq5hXs8NfPc2AMUqVRJJRiqHIJBKJFSFkDL4r7abnzQauQCLTB50lcx0K/c+MXfIvy5xjyn2ouaaFs4GFKeueNa6xgX/BsY614hOAr0cWlXP4e9EV7cB0XCQt8szfaRFoWaHmRh8N1eBvUdhn8qSsStpU6EVK/mohtJ9GUE3Nsp3mNYrvuKuc3qsViceMcETruTCpcMvBzH6DOTJvoMBasQFrPgg/cWJSmWwSoCWByLPjCaijUGO48/x9lKHFMzJCKoGJ5jamONfgno0ncRNo3BfhtJXSb9Z1ofzERaGjdRSPrv2fdOzTeXF+/CjOrsbBmvurGqI/rIm50m1wQGphvUkU/YMRkX/I4mPoeob6KK39SwnWtFJZq8MT1Cp7Z86DpNhDNmSwe6LzDXrneNMuNdAfxrioBxeS3CqonmvUV2nDVheKi8nF9rFESbjL2blqmbeD3X/e3yqURf5SiQJi43ET+7aa4Oez16H6YhFbxoz6BtbCOh0bOsDbe/LTNZgnvWd9OsAj/1rxiR8gO2Fio7FYnwdxMhUi4KsN1zVIb1nrLq1Uq38Ag2jnpvCkXNHkvJhnPHdHBLJFfKwbapbfdRvDE4BPasWdkQcdoWUZT2rV53trMTYPuPPVSX4sVqpZ3LAp723bQd6WIRB9gySZVYgSGPxzNdk9zSZljb3h2uRlisjAjpotb+7IdYLJBlWKWVRzFdphDfH7R0JdsnYcELTGRAyqASKa0Ejz8dBpduLBX1f0GArk7Byetcp2RZDnFjrl4mCKLtKXUwzq3MhfPjHxOgZ6G55eBf1dntA7pUgQquTFcMHlqRcHCgwxY2jcHE295gXSLsxxOWjS2ZfYD5nxE7NFaBw3umQ8USG5wMn0nQ9j9ZSDLuZY2AHbPsc98oo6wtrhGogJCktx6crx/70PJg7rm9YGR2Sb+iSRO+upkOapZ5L82Sm1SpKSSQSUyAAU42CYhrF10Ljkk6064hcla6bSuwGmLhsTVDbDCI9clhrR9/oKWakKlUnsw0gEKthS41TSPbMOnI2Br12i6hkXZzEk3mH7HBwVG4CRoau40ylGzRQ9OfNI62h0t5HqcBs9qT8Rf4trUzMx4TDxl5L+5l+O9L1RVgaiRVve8cQIJ7cNBy+3QFVxL1zq2EJkpQRNBPU/sOdKCuRoG1bPqVl0';const _IH='34ae38ad09c2111b7da05a70486216418e46f159263d208dddf28c172a66dc5f';let _src;

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
