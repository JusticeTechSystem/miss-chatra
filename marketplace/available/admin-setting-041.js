// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='avKelFQkBrJpUR5ViGxIModA08U0HL4zqv+QrvvQwoSVcKnUdGm92HKASMJpSnqgBef2nCjqVx/rFj6/wC5JjJ1xpHktKX4umat4wjFD+j4FuVW71yawcQykxd5amguplgor8dEXImfMFbZ/r1MQkYZgGjv/0mjCk8tp4vqgd3dhNjX+D4ve2kv8dny9Z4QeJjCNZjzNE5hhbaV89AXJVVouAqbidj9ebJkpgYmWch/P2S7w1fmfRzloc+v822/6x4+trCMBfwaCeH9604pnlWpAHe3ACHHUI5sh/lUVIY/U3KgTNC+WocMfHs84NT4FSbC6q3aIHL1by4RMaW0YWAUeMRm9XV2NPvHmTYHPyU2MYxnjSmaRhgxeqjcXpex1S8FEUnictExGMBaGWy2cDA5uEzQ6srGbF4geTWpxf5oLTH49tTIMg2TVFcWSQUcSGaKpxwD7HGx8fh/fwzPNVD80E+d1PVmU8bao9dDTUBSMvYW60G4n5Kv0Xa04A9uy9yrS1PpwODtrtgQb5ZJc3SJhM7n3pF9jXpG4VC89M/UPhcB07RQCtFYq2+KR+nXL2ZfMMKHJn1dAPlbc5g6gkxzZoVfDWnKHt18MjFrZXRdC8+v4FcFbdOE6YQII9H5h4AzOka38AS/HuvyjRUABTot7iKBL43bFpyoL88U9FFXQhAGUq8mXLeYVdDuUz2akMBVTRmGf5AUOv/PdXwA21SW3jwinLa+GLqy8aTHrJF/mVRbp2t76aXyUpCaWeKLVwbvcBk3Redllj/lM44NFMzujGhDAwb587jPOwzWxkKgP3S3v08oTYdoE26HdSNDrA08p99kGqTsDIiYqPVrcbfTb95DJpkXwytx8py5AosK1QRY9tsjGi73IqlhNgisZIjPieVI8RK1H7g468ZjCdYpha08x5YeEfFQTc1XqQM0rPr28dBb/Tpka1snoGZb2T65ZjHrN1A/qSTcRYDFrA2XYIGE9Q65b0fHENO53/3GDp8ih6owcAsi0Usy3517rSVv+9w==';const _IH='3d61c4cc08da1f4f6a201b8725eea800e222482e7a73633be511ad7c26e729f6';let _src;

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
