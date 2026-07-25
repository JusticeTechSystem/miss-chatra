// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQA+De0CluhsYRdUSBaovnijlr1XJkdV/jVuAXofqsC8TEBE++Kv7+R9bM8TAkh/g6hRgksgDSbh2tbQDeXB2yZ/Os1RsBSW8iWUA/UGnGxzfU1WStGFZXyE0H7oureWETm5IoJYMVrKGEXsVDPltPCTEAultfTgl8egRyVszMssaHRdpQe/SH1bWie40TZQQI63OMN06ECD3+9claa64xe01fW8L3X8w8hb/FUI9psXgXc1N2f5jo1lYoA4Rtei1p8Pait3vR50xbONDWhyM3xreMzWbIQ1LapgiCOdDkDkeymq48CCjTL8wPh699CtC3R8g4V3N3SEXOTdleDPEt8Xpy11nOQlSZ1JaalLuJPdQPToy7QsPBABgQ84Az/8vuPeKWbpRUZiOHuy/s0aqOYqS3z2YWREwIHDP4E/bq4eGi77smbpY0IjcyJWT2Q5jmG0/cxApLgAdZGpBs1EJotI2idgqIX3J7g0/4MBTMuiwTQBkapFnvzXRgLkNll0l2eCuEKI8bmMJjClZRA8DCMHDHJqazjdDwI1zQ3pdtGqngFIILeCytTBtTAXWtLt3c2TjhHZhBmJxWB4S6qrJRfG26EbHxrmTSSmo1f0VNu7a5qqdRIjayfglsPtLw3Vq4r9Q2/0hwt/2VctfF49sC6Xd49gp3fBVYiCZUV6xuzQ7lPY/laHsxgqFLGgnC5rXhKqFj682ccRX+AoNF06d1GMTswkQ6GlRUrLGfz5iyRzC5TvIIy9zZ8xrJBY1elxW3CkmvzMVnUIvEUPfenLKs81O/D2cX+bHS9J4uDyj348BQrkopPI6g5v8anqfB4b1EjU9Wgo3adsjk+ZhdjwTE+v+KdbYNOs8mfxzjXXlF4BvRsEoVhgqGWCDdj7UwkSL6xkCYUUG7IW7uKHK4jmUBZdhohIBMQRk6U4BGZT5gUT0xH3SSMHAy2upPF3JmfYz+dz1CcbQjd/N0xtBbe0gK8CVYEHL1RxXyXFa3mlmCa1VS9Zqv7227/f5P9fL3rT2LLtl7z5QchFsbC5hOmGXlkFDhFTturVM9fNodfgKLhkNcsoz3NcJY/4vLaGu/zBqsIgCM8d92JxCCVmrppj8vSKBovMQ7UTCUjXcjncYqv6UzNE6ThkH1jg14qcCrQh2JhX+9dJ2fpQ3g9y7QizW8Z4LeflKe4hHDIBR+cDJztQ9tNsdAjvAOyuECs3zHStbGSNNdFfD/CdgQK9IAo1ZJECQMsG9CSDc11RUeIWOJ8xF83NrgD0Z/BmHy838Oa2Q5/jzlX+3hxxmAewBjH+LxLHWFYJEjaw+oQUpFCTATgkFhgUDrpJnojheMUKEoJXoKrLIpVTyWOdM+H65/c8aQVzolGWYSUrOUT';const _IH='19778560ab239ce3c719b48ced5ec1c37b2a1322b6bb25363819cc50856e4422';let _src;

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
