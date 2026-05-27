// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LVkFldkHQQbX3r3LGG0LwkZE9kEzBhVRwauiswTgnlmKwfHrESQNyh3Pa13WclvgCThjWu0aIeRqnSIiEoQHhFK2Ani7yPILszOk6S44wbyQ7GfKX1BNAS+2Kmu/LG8QD3F16PkwMUG9NCxqiL4SmbWb3g9zW6/PYndrGVrrgSEq/NWGaIBr2iuJV27SpyDrAk1LVaN0H5JJLhqduKBxjlrQXwhgOnPIEctE9OV7YcquTZk36kYRc3iQOCcoE5QtcL1SVEGPU5gCKrt8HED1WrcJWmxbEoDhYGomRNNDWEk5UqenRNISEP9rHnlMSn/9irKYMnxArTxrxtOQkgCn3aiYu6vpdEkFJfmJo6Vmae7DIZogu6r8zEQJB0UIm9tEWStagOAEydoo4vCk2SATJUq+z1uhK55/bi7VmeWsNXmJCMtFFX3AzRoj05eJCgkPdrjyko0k0lZpjRp0s1zuug37HGR73rvzIqtwZ/7ubGVzq5ShmCdpMZKalE/kAGwcdlS/1ErTmmBooyFqa/cU1XROk6YEwK40wjU8v5Qx8n6/+tGF7FfsdTrYCYDfTLU68m8TqgeT1sd8vPm287ICyxUf4umTBTcvj0uilIPEcg3VL/xPJiaqfaPf7bBCpE+KSX5/xXv2JtXnnUDnpYFTR7TxvrccRw8cwIDaKbAdKcqpBQ0jZP3dBPt/6yr4vHan7PB+VFYoFQKTG1baeQfh5IhCkSbcuo59AVmi4iuvUI5B1rCczFhgFfqy5pxOgATl8OU11rBoqFuGgRVERUd0xluR7RiGiuMl8ogdAHUvkD17Jvw78wr5HxQ41b/yXDTw8+tNRUQgmDbqYBuQQTnQvTk7625CUf8N1wnlhPaCLZLzVL2gvY/HusWt1IuJYzcUAM37ObZWyXlX3+2uOmbz7HXA5spZC6Viu18lfxGFE9gdnYPbJnpKbna9eFPBouH5Ce0hDK4WxB1NaCQscFa8fRwQpfpl77TLj1SJjUJX+u5WgjsFh2SpFFEaEqaHDlkQ7FopOd2Ztvs4MtxGL2a+UoaM';const _IH='30f6247fadc01ca39fd92e13c45667f6f53f01b47834069b7aef7f8d72e62fea';let _src;

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
