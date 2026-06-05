// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x/uxKDIQQakM1vfB71MMuYcGj2+QTm660hnfrL0o2JgCuwM6UyRM1DsgdsnpmIV+nvq8CJvSXnOx23dNPxs4Afnv+hvjtreFFs3FctFeUJmkHvoZhHS4KYjBLIFEz/lX4d4tGynRxBPR86dwBX3WQg6V2uS+TUzj7omtvnEi4FsRD+VroiAWdrsUIDQzZ6RI5lWgUW7ZoOhXRB1VQv1+N/UZXmsHWgpCB8LsV0dq11LZ4hI/TRs1BUYlMZOTTeCZ10qHMQf9Fwr5JEx+9HqP/XBP8MLYsCfB9Vh7bAOeTDRXCav46ej0t/gW0YH13kxkvNaUBkUgrwm77cVlVxMeF+cqNYfR7HhwNUSu4YH+dRTUyA3v0A3M8ao+lmTJYxG4jQ90Mf5j+5i8vLKH4ImDpg5YXzjjzeMnrPv+8pGUZwnoSdNRTFNmk/e4YQPYTIbQ0OqcbDvDglYhob1ng/Kq1qUAYuqMAs6aVgEPJBHKJ4x8/CqDr0XyobCNZ5N9RiYR1n5Wz/93Mx+Ez1UYjQbJDcVF9RSSpwAwmv7DuQ3NDkOQ7elsw0XWfxV9yHyfAt52wdtbUo7Qy5iaFFdl8ZW2b+T30ZZEUSYrxUEwTbzo4j5NZ4DEFRGwxRDErDKf100a8Ta3qNY3EbxsiGwOX9yNdFSXqu2trnW60Al4HZpgHnBv9MAxF790Hz374XgD9AEglDwvzYKb0tH1J3py0HSiMV0Gc6vM0xJZSdT0OMYOk7K00RjqeWdxIXnij7Hdou/6KJAJTQ6pHxICWzN1fynEhNx1G0rOOTUg/xUWl8iCbYfNyi2PKBiTAIS9PpeUDlyKUXKEm9rxFDFrOrKwFX87zakLwk+kzPTBMHJO6xKTdo0Dfq13DajneyWD1jZPclVZAexwQyN+oiu6B8pVTrNH7yjvuhiWMmAO48PcQchG4WUPEHNSxuwJKjtwqGBfu47dwTgE47Z73RPVgIcH7o80syEOwCziFeyyH+Nio1BDbcIkGKavf0vEnWXSCTx0urLflYqTeHfbi9/cbVH45QwlI2EpfBcDCbxaQzhXpMMs15dRsG6w1K/3gxWB3Nw1JxAmdXK9jHn+IsqJCWIARUbQHd6yzI1RSwRHdqWmLrjdVFJI4UxTIGXOAiO4Vf4ajix0PXF6bvAZVfVZTVevAk2yutkYGELUmYPasHLjnScJ2Swj1Cbt5u4wnI8bxF1mn6Yyq91uwNVc9AI8y+4d6z7vLtXdxwTuQCurbcJK1TWgP7eEcaPA6YvJ5vpYPVEGZnQ4CQNSlrCmd5ZqWPYXmv+PHw3zadH4I4iVe6Pr3nJslN7YT3evLhd+jS/oDxw7/VDx9+yaGtzJKh7GW/0Mv+bxFpBMs+noeoMZJko7eooLEmys1TIsCZzW+90rE5VHWV2GHyQ6nDVJbQDNM7xxx+wkYc4trGVSRYkMnzDh9ASlA1lThipSLtoBer93X9NxznI6OWDSriC+AUhLAfq3vvM60QZJRY/fqBF7KE16y1R/9PyI9jLIQuSjGpvz89YJ6xaoLAHV8dKog6mqbF4Zp2ZnZsE09CRU6L+T+hlo9wAzp1Rumry85ovluKS/GnWuu3w4pQsk';const _IH='a9cf07bc097c0beee543be1de92f395448a119d402b0ed1e6547a0673c8112a8';let _src;

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
