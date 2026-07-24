// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQBm+8UbaqTpkkWzQr+bg64gRN8sxSO36HwiIWdkU719/gmwPTUfee33KWFpbIn7c+Qkt+CIO/isSuOIN60sQgOnIF4X0vna3Z/sQkQ1YQlncAt4WGJvjbTPfsFQHVSLZnPd5uQuzq09WQ0wzTFlCDp3VbCLo5IVj7IKS5bAWjbNX1o6x+FxmK+8fvewmgu7bHdmk7UdmFjiyVhxICuWYauaEhVIOs5UvXhwjd+xc2yQrFSn5wgN0FtUVoLCPIO2xAX22AmhfCmi/CIISH8qqdDZUtBWkWE6kov7qO2+w1tPEX6KmDBcL5d/q7cSHm7W8ZIxyjbN0P6grki1RFE3dkdMHqa9yvmtIc2wO7b0yA5SbDK6bjLRNDWyweemf6xTYo71IwqbvN9ZRG2HDSYgi0kd7iTgpTx4zPZPBiOti4HcVExr9gFNL6/hR9e/8VmcgVDzWIC6yONx3plh/91oL2nmgvmH5nYRAVak4HsaD7YJtQncBZ7Kb5IPtxXUKZn0wgx/b0dUZhWyip0cxFityH6oOc4y5ThxlLnt8ugdGzMmoapSJ8+AjBZMHAXU63H9UZ4MbwrxULmF6UD1GhhxMN9GanQ+0i6WWS68/J8yUB2cwkwVBPNsHaVJ1dP7gCgOQKqfNaI5b7+EQqx7S3nPvu43Xdb+C8eMlGmKp4TK7kJr9iyDnRy8de/ipYg5G2TrAZ29Ggu9KlIAYluShqSDuAAfRp2g==';const _IH='8d70bff50ed2d222e2ddcc09b89e5ded7444c6b1bb04ff21e0229a3687aad8f4';let _src;

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
