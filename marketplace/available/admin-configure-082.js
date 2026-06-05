// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o3Xh3BcWh7+W8oqu9NOyqP4aidsaWOSx2GJihUgWRBG9sNbYCdxaUfve9JHHDOcXQGHvCPfvEN/VTP1fvGYOdTTM1SEgJC8UE5Tec9xPDnoeGwEeG1D/W3uDA7TqkhSvsbMpuHhSbGS3hTayvXKkytlLw6qHQkONcwu9j2lr9NDNwjIjm61/VhAl0X3qByc+6vjV74+jBdgIowVMEBL9a8Z8zEEED8E+jRAxFhl2nqHTdBFs3/KE55s3DDgtoCj5bMWq0AyeIaZ6y1BdsbL5JOsjF4ESx6n7dSnvxExcS+03fmlydYPavZ9C5gvNq5oTvX0nuzG8uPLIU/YQEooTStw1YXa16enmSEnpwTi4ofJkw3DJW1hYDcCgDaOSdUT6cHh1fgxTW//q24XfUc3fq7ZHCD32Dy5Gb+vYZ1tFjtEFkhAIIVkIW40im5d/cl2HwIIIF/UZx/cyHrKqq3iyKHRlvJBjWULvfTsy4zkKWESndJHLPeagq/+M17vtLb2PhmgzzRWK9KmLZcKAVNmgX9uqpab8fZVVrEpT1LLTND7fbi1ozT+wu+QIWbG+N9lWr9U8tjwIFIoGc0Vr+CoIzytMp9F2zWFyXjDcPNRll0/PHCSyXEQG1jqo4kvIFXUNy9B7Y2+IW0dah5HoEp5vBAoZzJ+IqwcSNd9InPxisEJDbYkmAuS/4ap5D9Srn6SMwPUTuvtZcHoiID2I3Z99vngGhMhTpgqHxuna+UcneQi/3+7KXnKD+Tw5TAaFRX7oQzGcBtgdo/0pMbThwJvBSbSg0fjQ4ouVkQVfytGGuWKX+u2r4HPbbiQf6w4fuDAK2gUNswaIApOUP45qk0NWGw8O/WnEywKuezmE2hjBbApkEpF6pL10a4RZJ3DI01jLUob/LeMsthuQgMF3LwDse7qW6if5D2fijHfPGIrptmQGTeieoJVFQpkSqcTk5Xb7kQNqFKydFW0jAVeSRe2BOY8PZeRLuf/Zub3Xj/vz/qC78W/WtlelxmO+6rEMyJkHFH5QrhVntISNveIjRZrRnb98';const _IH='2e70e98a2958bfdd9530be5ee0cfc8c871ceec4ce981289662c18c1a8ff4a35d';let _src;

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
