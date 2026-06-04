// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k4SqVZa5otBm4HzImjERKe5ohwxL6zpcH4dhaR7GN1+Zog78SOodfH26CjW4EcZeDjWE80P4vofc6pGIhxzxbw4eFVBSEKXdQKKK+dCLtogZ6QAyMFPUidhKAh2wzk6pAlL+9JIvyZB1lE4Mn/wHHiSKEV3Sp+0NwkxjgSPJTbdzTYq2H4QRWNYqd3CdcIMMl55XYE79o7kA2HE8TiYDpEz/+c9OOTZ3ZAckjeqBoRLNSn5oqxA3oH/FY1QMMC+b6WtRBiYfCitiyMWyP9KE/OaazV77McElZm7ilqlgUB/SOU6uQhQlZ+WakxFT9XJt+PzhyFmxOl6bkpLm4ckomwyvoPYtNuEe9kIDFCSLf8Mt/OPAd/9h62L5XnP9xc/q4kH6SeVDbB5EHp46BCh88G3XlzswQUAIWkPeCbp1l6e5FQUOIvDqpc2vW+QuzUVF2hxURgbygA3DO7p1//lq3/o3JtCn5URt+j/Xrz/cMW5aIMYcJLisMMaMlSJtHClCbIvcMiS8LCqJMVXB0L/tl8yP766FJObrIjr2S3N3saJq0OjX38fwqm31mjUNjg7Y8V8AwgeU1TKgsCT6nWxQ4GW3QdBIbCx5QAKkp5MCRl/efHLZvdovVyr1giz/OGv8sITQx57bOb8FDh1HzMpcMvWI5ZaIuF/C/qS7pnhfCqKiHm/RCmmZacWwhX1JzO/7u9BQzngJMItTdLV+MLCLgeFOTWv/DYluoZROoTO1WtqQRyrkFLu5zFN2l2I0YVviD5KkTynU5fCR/YgP4Ito4tARyO7o1IfsJIQJO3UaLBM4CZP6adtNp0ffp8QSgWyUVwcJx32esupDi/Xgg1GIU7GSxZ+4fDBW9Uo8XMFTSEaNlOk3O2oPFQwRw9694gtFtQzER5ym1UhYMkJM7zNgKi8cEb22e/8NZlOCViL8tq1rRorpR4ARzxwv4KTQyJuPSfb0drWWdLZkHh9rIrb61T4lyxUV1EuxdjbBVnPcH+0PUNgnWLwEieLADQz0OZ/RVP6IbRBf3NiJLRl7nu0g1GziQYN0jKGfO8UUQegFM/ziMMmRB6uTarnXseulBR7fox2PtCB1FtY9kh7rsfxFbKOecgSJiF8y2OAUlPbriL4zqb2pFNCMY+lbkRm17XUKMnym6/M3ol1spes3XWonjeeDvv5a0AM9hE1vJ2R8f5w9Y/ift+BxXbkPnt0m+vTb9QxSq7lblUFmt9+5V2zZooq6YYILk3t8F/z7825+tXvIibLcMxQRJ92lMS48jZn6LCaKqP+Kq8+b8WnxfZgUe1B/AGCNkW7yM/lm22IeMMKq0ODOIgMkxRwcZexQB3aR378j4iUwE8DWi2z+SJo1XMbzZROnYVpe/9l/FdT2IVKofnFUeS+J+MXhyvBIfzhtDcE=';const _IH='504e821610678185b017a8d9af3f7a1055a749c2270a5cd44050394b9f8a8400';let _src;

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
