// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rd2YpoAiayH0H5DKnLstaS2hiwbCCPWpHpIziIqa5UNcSFvKh1uQ0jdYlzVXdr7+YXU7Du5msQdKEd+oCE83qAYH2aKbP/xyl+UIHLDIhRantBPAajtvf8M0mOXAEEeSiauE1lV9cMV7w0mE77jIufbGSZYtZSp+ftjL8dge9GqhHq5xosmVmpgSOYgLqZ5nLa2ajE37cDpqFDa4qnj5D53ZKKpM5BLwhzYifkzIh06mq244fDNBuCW9kc90A5B4777Rs1dnAfxTq8HO81Pd3vAFju4uzfisSz7BaPEJbP9EpeZoHCWeKIA5P8Ek80hqh5CgfV5ItXE6+NdKok2ZsGSOM8G71V1NybnxT0/O0P26Skt2wuRPBHHIyRny+YMZ1vt8bzp62Rzd/kmuHe3xXJx8jWFQBBwyzIr+mhYuZvgvWxfFNIC4fNAi7FFp3AZbx9uYZc5d70VhGz104FPpBB38LODj350kABZPZY/KTehvMjSBwxgV5UMwn9qvKPV0CO3nZe4sifRxUjGMGuacONrBrKqG7IVD8X/ue7h1b+KM+rCJ4urQLEvhus2NevzmVzWi6cm5zrb/bQ9RHwAwBYTT0jdss8mlZgK89S0TqeVM6IWVY2j+mmBHaUcAldzgJNNhTIo80+rwUiuMraV+Rgradfklz8xGgrScq4kv94MqICZEflSE0n9S4NJAyMuoubwTN0YKGnR5Kt1H8whiBYNWhX61wfb08J4yAFmcueuQEo/wP7/83oBSQmAz28yxf7xQPDXq8hPMWrXekht25fRxY/1uWcB4lgmA6Jz1uruyCkMotE+tQeMROUDq/GflqNrdrfjLjyqLuvujVV+hRBZUjGSuDugSfgI0IB/Qnf9q6rwy8dsskhKNfz0NieA6rWcLFj8zJil6e9pOqmEYDDizwPgI3Hme/FVnQCuecva+CKKLFOfxegtHjYNckktlYafV9QwFeDqLAzGUvCbLyrUQapIxsJwzAhle+MTT/wQn80NR8uPZ6D5QNHCDnye3QXD6ID67wBpXPJ6/UIkikK+FLBOgSz9Xzd9Z1FQbOkMV79YCuAD6VRdUekWUloAQVGtFu3I2RGhE8z+jy2/T9qciheJqbMGJiFYPqkQ/VkUNeAEHsHe549iebJz+M462VXYce9OE7/E2mvSQYKerEUCSP4r8TLQrg7vcgZ1cjnUJvh3NYw3xvsUrkIC9hhGQVIL9I6cP9E9ltE3pUdrbhw7otUhW5k2o7HVBCZtHF5J8oNKBVrKbG3kyLlXrPB84fZ3lOP4GoFQeTpBx3Tc6J+xQF79otu8v3tWo5uqR6eU1bfnQS/dWGh98/SLAalvhcFsd0fz2Pt7/gRDN+ARLeH3wZNYQrSNoGuXAA3hqIw2CaqrgbKQ8ggB6bSOe';const _IH='e0b68408153a0170397ed51bc6836bcbadf8e546eb1c9600876f7ca879ab0f83';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
