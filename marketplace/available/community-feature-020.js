// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UdBiBbtT69vxdb0ugBR+j3k+hPg4fjob263qrL4F0oTgSXYAY75Gy1RGNugs0lL8nljl3s8oBEQ+qfNDxiBWLlv019YMfBU8K3EGFO1Lsxf9wz2GZKxT0yKc1WSgWAlGk0cBCM+y6r/d6SSMpGDSCk/ZjtWIJQOp8UbBQATRugbgGnPgMwyd71ajRwaYKsJdyL44gjvz4NM4Dz1cIX2Iakc2dOcnby5DO3PKBHsmwKLfnRcKR7NqG5cCiUnTtUGLpMDJ4c8qTykHhVZrffwWnSMI3h6BmhlPQ0tHZ5Hh1LV6Ha0xVDh3Od/X7cGiURX9FHm/+ZmXMZE5IkkyT8Q4LHM2RrgKuCUSxHAovELli2Pj/mKJnQRCJQ5iAZ7Svs9+uJSB1BhoVbv32UIyQUPPHCoWI7sEr4xs0QU76MKkeNzdqVBOTNvAG2wOCFPYQcu/IU77VDvPKOEjKJLZOKL/iZfhEDzESM5jGIPYex5AmV09uy4JwGEwdpIqyABHAsWXUVnaubW7En6mMioQeNvSdm4wV1mzveRzk7Pps5K5u6XR5ko3kFJuJXFstJR0pt9WUcpKxN5x1DW2AG8yQjR3t0pkt3S9RiH8waHMVf35upM08XdPcG9KdKEXokuQwUHT7JQN7apvtwHxg7cHx86yEtrwInZsXFy70cEEtFYLyq0heUcWW8BknlL2pis7nXD/9EyVeDhvhGwNIZLANeI7AiReBKFkJzL/cEGIztGePDVylaBngdA=';const _IH='764ff841d74327eb4924eb9369b9d2f4b3fed9477c5ec250179d7394a2c1c411';let _src;

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
