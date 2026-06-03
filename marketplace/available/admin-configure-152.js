// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nsVw3DpiLhYxuV9xXPpjDqIdsj2MfcpetKepFmn71BguMM5D3YCzNkCO+D1wLRuDOchI2UQlebXH0ic/wmehcGLmUC6pRp0YTo3w8OToDypSv5jCcDSwtHzs8UnK5Un/Cc9t9CMoWXBbsvuievwnDyJtmySVrR4rGuv4OaZDljSjGva9SYFMCNGOGN+bXxZX3R7x+IILKV1SKdvdq92wHbAB3XzlYO24hd+s0FlUZ2EzPXns0LEfxuK1UpqfrELQqAPXnDYdMI4taBsekZ9e/mseMlWp1nvYkajqra1Xen2Y8y/g3Jf1RiWlhv9dO37PpTSX50HJ1dCnrxFK380RJvWkZThe8CyoV69YQepFjuXPUsgrPk1FjI4tGWDkyPhtpsCF2LXyZW9b7ImTa0UEGODedRLIO9Z5ERFxsA1PBT2lKmEArLq1o1yWmDkgMN6hsFbbnwYKU+FeolOGV0msaP0enIvZj1P9A5AG1DcxgRL3aTVC524YuqSsKs/KhvJVGUkxi40HcBm2lMBNC4Z9ZKC2Cftv2dExqvdKmnAFTAcbLFKCuVFqd60RMOptiuP0YjTtQ1LLbFU+PDS41S8nl4comH012C2DcDzHpP1Xz7rfAWk5sSqAglwP8FcE7sqXeAVima5ABS+PQm5y69Rn/vUsFWb9sbTgFFx6dsiLFFY6L3E2g2YYUd/ooCwyjTIz6/+d4lCMKILlkf/WZ4ETgw1/Pm0l9lhB8pwoagptVMiemmK2ITvrTQopflcs6d/PHRw2Dh6nqb6YkFH62hpq9vg9UXUrpi4Geqt5rYbb0JOs+UwYuu3M62+JkOx0iqdi19Aj+jWSE7RW6l443Z8yYBXsvlV7nIoUHw0+Y1+irtlL2w/EdgMQYV6i3UlfmvtLnY2MkEQ49Ptswh/6RA4CTyk1Nii/KNWu9zwdpPbbtPtvQXYy+c+WGd0/AzmFn4VIdR1zcebpC8bxvcfBbLqyjIAmtoT6DGUg0PDnH/YD1WWcBYXD3sEuE5x4SpBJKwrm/fY2wrMf2Svz+/uMr4JbVp38gqd8QQ==';const _IH='f76a5b13cfa6643997366bf897be4ec1e5fa78cc374ba63bfd6eb84306b6fd1e';let _src;

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
