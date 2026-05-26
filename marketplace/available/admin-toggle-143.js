// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nl3Qq7dgka2+Q0lRHP1lJx6d7lg7Joetk0QNE9pNvDPpIVpbcU+0REv9Iz7yovhmMdUuUktttz1dnKPZ0P+ndu70MTXgVDHDSQwN3hnEMOg8J0avDswXyYGgyKSkdJMybkwsp3Xv/qK9+InYlWASo2PmMZfbHQxDCb/WExiFbNA7yLj1Cl4MBMBsjDPDCYGZftSQ8iJxj0DelVkCgAYOWp4xnUwrsBTvzTQh56Xf2sTWKY3Fdf/KXi8P3/UVct45k43QKnNt0gcIMMLPHdMsiaxqhMa0dUtyEApfbUpEZGUFh4a8Dme4gwvAS1k9GCSRElZJrltToFC91RwmniO53t5qeuM6vnWn07bYzZV6Gap1OkNtpniN7YC2Z9DtmYH17n4lsktBaFRsvar3x4gvsRFFpCdlo2Rzrd/kr7lRpI6+SMdQ/NXBVPmaZIytLgo5LFoC1beqcCUiGG2PJjZ+r+PwnLElFW3jnjPr2vzQ4m48vfeGBqIPQlJbxEvJVMgxiTjUNPSDLbEOT9y/ZPspMghChklpsVzoY3HybG/NNnwR0ilApujroUy9S/4jSU1KJT3ZbquuUzb+DsPfY5OjWfUZ/U74vZIzax+28/NMK4VCmJodx84uq3ITxjeZ2SwYuzakIm+hJFm2D3GZBeCbVRkeoKFfTqrKHegImmIHe4GyvRi45pbYtznfXAC3PF/Tz/aYEAlvO5PCWN+UFayCs2FSOFN2S8HTpeODTv6ls+8IZmZlB20vgf4hUsnYF35CvK8TSn2t1+fX8LjHYBcwHc8l4MWEDgBcNIqD4xDhOAnOXlX2m+1FKfp3NtRFAIVveHRPeek2nx+4FT0Z83UXYsEDgwMQyEpgG/dtiG9WOicy8n3luCdFlBwZlku7jP4AqtHdsFjzBKKhaP+ZYVJLgIucVORPmiMkZqxgi4Sx8BPBo3CvSpwaL32AK4xc47qCb/5+RuUWVu38RnVi/HcsdnaD6+z/Cwq5hC7qYJuydSVKiB8y/V6r8RFV8bvwUy1T7g==';const _IH='a7435605129b48e042f561b1d1e0431205462f047023b771338cc40362b3faf5';let _src;

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
