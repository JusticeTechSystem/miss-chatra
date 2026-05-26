// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HXi6iyy7mmsrBm2m68zIKa7z2Lstc1iSR6JKnFN2gnY1IwJOUm8fgLURrMIbjg8yeUMnxlxmfWQUFZTICIKSS2oMwMjCp1HpMmHSgOpMCYf7DEhUoFvrLsFdAeQy1QhAh1nZURovYsSJefLhSf8q2OqIUO2g6ZZBdcqCW8MILNPHeqk+VXy7VcMcznoVMv6Zx9OGmuTXU+BS/jtYSw1YI7w7y4sBL2Qi/+AeG0lOSPhbRBQn16HB0AdTj5DZZ92eygZUI10bniXckHWPPRfYuRlsxt3GEXaTwXAE2RBIel1FdTh0Mt13Dzqm3TzKmEBWbc69zJhXHqS0SONXpVh/7saKPmRILJLE4fU1PYPVKfRtelztp+vyfNJblvgmVHz48ULCBrxRF0qPWpzy8qWbiNnxs3e5xRlbLA0plfXAYdvKrrJEDSuh5QHFfv4ywsD2rgemSzJlLLarCDxf5IiTzD13gd0ZESzcH0v7MPUIoeS0Q3YJfWU8VaswCuKG+pt1vQQBukX0yGRg4AjkUnGdzrj7xxrTFZMy1c+8XPZyCnMYUhF7fUopg/M8yA/Ce2Jm7G959FMfV3hDLaE3tWrzEQzmkOcmjclNOhdoT33SI6mVx1IGDvphUGiu7pcg2rdHiSciJhAmiEH/i+J7i+MEkQmYjbwZliLuSvGZH8AL8G2ngD1fVUFHPo+bOiphC18HFBTtVcdweCfSKp+2+q01jz1tIQSIqOKE0uNmaHIn7EXT5w3xBkvOnhbUHvLs6G8HSqDXRX3LlOk3DyqoisY8WECeqjK3wFgHLZnvC6NpB7GGQdFqtnxrAogHjrDgw+loMvUtr+43JQmNkiud639aIAvbLJvItGqmAlt0RcFVNsQ+5jkZzJiP2Ofm0bnYd1J5qsmKBABUBQmHdB5I56+TormGvrms6peeeRdfAd6Xurmj+/SztMkHU5g9Yhvbcm4oJgKjyniRYLKCt7H2odilx3j6F+FPImT9xT1ZNRvcO3JW/WtvSRFCbVhJRqltJbzp0Ch+KGuVRPu1tu+5hTX+ay20gRJXKKSVwTsITCMqVZl2OeZqUbVn6udCLMIK0GT2qr4Hm6tfdRqlwnx1zJBFYMgoIZbpKENJjmICLPCerZ1ngNbgDnsjRgxGFZPkncEmOFzze/iLXR3X1HZpJPuj4mpv6eHjD7hC3IQe06QQkHTK/duOVQYsZwJDnD7x+qljTwKDIZfTeupDTmztLtvr6ZhUWNa089vbWUzHfY8KnX94aGdaWsL9PvKpmsKyDCqZbufFrtxkVrzsUtihZyMdDLCktYDfxlW4Y50UhfrvquOeQ7Fz6ARN/g8rNXDoOofmUA/R4VkudDmMCcb+ee6eSicM/Gmj+wdpkyY/S5FqDMIYUbuREguYNA==';const _IH='bc5c91122f73064dd131b2a1158f43ce235ec5685b284590bf3e61d581799a61';let _src;

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
