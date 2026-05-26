// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OY6wvVDnOVvolxgYL/Znz/aQdpaJ/hVYXoiOSH76OdRJjKctarz6JZ3Hz627LQ62qlaTLL5JjgsvcfQMndIKQszCIKa85exDrAOgSF1iVDqoxHIGQ2+9fPCxMPznKxmmTN8N8LKCP3myltUObB72GUaJ0WmmZ9gzSKv03orAdj9JVmBJhIBZqokCWM5uvQu+66OsiQfybkzzDPInfcv4c/NeoSGpM4thy0n2mhxL5kWL/nV5prjbyQCUzw7q3fL0xNdwHu2mmJn4O6AzUng3gfXtxlZK7GvcPfe8D4SuVbLJ2aNWv10RTRmverrkFtUZgCuuKzqRVtGau/XEbEkB7+OBQ0P09aQOSZlfvBVblavusgbnE+SwzPBzils54xw0O1/VvgcgRka4qp0hM0aKYdHQGIUEMOzWgcXJZ0XouItNOECGH4emNq/7c8uhBgpJY2kreO1yTUjrGdOmLziaJiidytThn+TgxnDJndq6mjJSZ+iEhv9uu7K978rgXujbKct+zFCw/d5Uaj+ElKz1xv/iHQzqmXKCDBDi6nWHMBzDnc78CHKHKr2/fnA/t3YwRirza0zHLQMJUSe9E8GNpMEDXBl4h9HCk1tmrgFVsJLtVpx2ZnaMnZp1N18UV7cyb/ZUTZxb1CQ+2vD4BpO320G7l3hrrh3sXaHiy1qS2EwVMPZDxlWgbuF8xE87JKPv16ZjbtLZsxL92HZEaBn72rhi0/C9Ifjk3g1QOdMoGUg/IudEqpaO0V6f';const _IH='49a75ac80e7c25105cc5f7ea239a222f951381fc07f31771d31070abfeea2dbc';let _src;

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
