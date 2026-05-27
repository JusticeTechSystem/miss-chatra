// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wdLF6m+D6y+hkGp8+xvVkMpcBAiFHf0OXC27NXkvKVYCv8jn9IrLdJROB3qtNNJKKE9Bz3i1JqozIPoTgNJTwz9fffeCGSH/10VGveEFokj8YT/WjzykQXUqylOvFqFXBtANj0Ov3FwpHn8RaBnVLt7EzB2V200dWAE/u5l5wrVZ+aGW83UnV1G+AR4FxGRpzGJYQSZRp/u19sL7Gp8+EgvPqMVBjKwrUFtG3VPExvsXZ6Zq18wRmXWdTcWKgrTkm8LnedUthbPrnRDPSzmiwMhgWRQ5olFpsoQCYeJQQjEpIGSYYaSBGyMAUBfRxl4KYUO3EpA918EjTmDlbJjUBF9GVVJWyN78MwHI2EQ/zzp3kZNIf9YLPKc+pViS/+3P7WWEo5sWQbmzSCAotBayxjI7j5RT57LyxW9pytuagAoHL2ZNFw5gcvlFmsY4YQ3Nv4Gcg/P3UIUCvKaswms27sWktNuQ8QHkSXch3GSujDdIlYwosIon1UBHwGveTTk7Z0dFH5RPtRpdnjauMj0Box0vTAh4/eFCB+5fqq74dIh0QMdHByZPVRHxUeL3+tK2rjTL/2w0gLUyySc1FCxBMktTRekppKO2xT3ZvBsiCWC+cZsNt6K6sLAFO7rP0Y8wSPY/H7n6h+DNuHkhbRp/VMFedJIJg2KL4WBEDFFSxc2L4OpEZNvJ8BZDRtlFh8aJZgXQ4ZHdgCPFtOnNlNuI5+DWsC21e+3Brn0nAiCNwLAzEe/pLtrupNpmTDkFjaQhE3uENpQPo9B1t05T58gz/7WC5k3JLJ7LlUt4VCjoTDs3m5KLKyNTt/QQ6xlGZlPbQTAX9XL2E008+19UMGRvBpNNXQXBIBuiiHlhOQfzfukaFbAaBJ62qMJC7JlC5rTaGHSEJ9u+cPMWHZJhPo61jM6HrLSLyTT66+1BrUupNvFbOHHD4S2iXXyboSwdkGCJK2vnmOER5hCH2q2eGyiS0TsulfNOmgFj8tlHrA6wSwlbtHJ5Duk/BFsd';const _IH='60a4bfafd8922ae5fe8ea6949136bf49a075cf1b9acbafdec32d273085c3ddbc';let _src;

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
