// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1p7SFC2iR4o1WyC7nF4deBzE4wAmAvLdHt8cB2e349gb+qM4T3K4hZtb7W+zzxVYXUNePJgV20dtcDYJBX+a9Qui+/bBqMgoOAx6HZdZg62DW3W4f8N2QCx9TzPWfjR/R+V53OliKJYqYcuzR/fn7aygoqI5yeSlghJN3Bw9bQcil9BG1X8TibfiJ6mOiCIc7n2aM1Qmrw/nQ+iBYxWEpN42XtdpKw7CqegDHU1S+gNlOWfqQUdhiZge/NCDpApFEOatCnw/7t1qBTkuTp2NqwVMDG7G3mxXl2M/0cpV3TR6WYj6zYg9qDndrmGjCrIF3nuVwMmO5KOV7iQ8xwt7P9YzVYeDExsPew25/zI/mK4mbZzbnqrH2CtRjLv5DV7nTwHY8hYB68O9lrK0Olu7FMknvPiQi0KNoN+vPSGUL6dxr8Ctusj4RTWozm3ZV3jQspE39ceg02g35JWmcuTCePVXHn7qPYF2Sm3dRgixBQX1MBYkiJkf3gw4/NAs2B4UxEHIBUyMyi07tI5GLxOBT8Pva6Y8tgMLnB8G6xkktVzWLow5ZaHgiHOq/aN4mxbgR6b5Yos6VxQd9aLDcGXlVQAM8y6fNRnti/d/1YIxnk+7LtEk914Bga/Zndx0s30pWK91gEyozMG2bdV14PkDMZvKXBEJQO/nlL7oMbdIk/OSK8Wyta5hQIZ6sMLQusVLmy6iQTEfrqSnf1gRQ40WhlwJuoPZxCWjqBak87WJPkRBypP09Jb0OVmdi5r2nMSK3IDZS+anc0gIy7P6zc9tJl7fZmrFyWazLsC5uIujX4DsUvk28zFGflLJTXmwhmbKt28fi8Y6Nw0l0JE1iTGK88fue0b++1g2D2xTUF1AR7bOwYFPNMMk1wnvlaDtqWPgOsxwXmclmdiicOLckcDAlk0qS7PVHXvCcBuVZ/KRQPmD/3HilSmu6GNUr91eFQDlRcOoXUf9NPjYXuGbRw4OfzMwufRbBXJpdwbYR3NkPTA6HCn0yTXnXi8m9OGCDxaG/S5UbSdkt8SxXrMNn/4mZLqhaYMhDfql7EtkKIZ2oD/KD6gH3yGU+FKPOG+PcGcX36FeWzjUYGffEqrClx+rLF78bxnONgOW4rJ/prXao6IiR/Oc2sSR4x+H+KWgns8E5uq6OO+6F7jlUV7d1iegmdpe3DTczKYaU4iRik/1tCxCFwRiZd1gcVH4bhxLirDtcprvfEmPdyrL7Zecd7wjlp/tbqktRMcV3GtxYVHdMFqO5ZwTdlPIEwkwmL19RSn8P802K0FEyvzBKQNToMAMADR4j+nfr0DsZTKuxEDnn16qzc5f5m9VnoeZdxXw5YeHaXLfdPccBGfZH8mmuawrtNWYsHDPBGx6cfgtbjkLSUYlMd+7cfH7sKjBYCDGngV4P+w=';const _IH='7368987911217d6c5e536af45aa5eeb92cbbe8fde6ac05caf97a5eb9b0895aa5';let _src;

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
