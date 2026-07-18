// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQD4PPoMr7gW4sFKOgmlxO85IjoI7mPCHmfnNqJVEZmFRgLL1mu8mQQ992Pw/VAIjgnc2p0xfrON+YDSN7dyQDgDqs3Zbe4dqWRyEtdQ9igFf9q8lEaqbbHRCzM3468YX8iRjWmJObbty47gvhhrd9Q32AQvMrtvs7screugayppCeUabygz03G57YiG3i81WzBg9DoOEeDUeu+FLDyrzcWcVf/APTl0FIpShxP3C7jSXkGp6fghKO8XM0OjsZh4z/hWLrw97CzutaNsGKpp5MIf18ZACBz5e2On5t2dvC2X3J43UUwbQY6zBhdMY5oIm2YizpWtSFPlKdvnparW0FZ6R9eyw6lbU8TEVGC59v8CTTZgdLK1rFW3O0pyOBgsbg8WTFCoE7koFay1gWpkqLIlDaBgCw4Up5thjW1MsSWGszKcVcJMO/ubVRCsFsbA3Hv+8FWjbiAxGlIQicjb5I1O7kjE1oAC3VXat2eAeVCR5WtAme+6zJ4Sw7833Bfj02+0XnyROHk6gC+98FRpmk/VPWQO/uFIOCb265QYxv6yQJ+JozPesUD/46LF4ldLQG8hRyKxj07X0MspjJ/uWPHATP1CReydClfVtDncJZ8GEGYeXeif+RYoeKjLLhqGwdREHu1NxRyQCwN7PyqA7gea5r90Us9LrZ/unj9DA59n62OhsMnLBhbjZYQK1Q4PNPOEiNW5ARW5z2MlG2yBEN2zXtX2HS09YPycFnyspsHGSpdpIgziewr+Q0F2wXbKymSzizSXYYkBS5zxkw06nqcukfrXBuYYgRFIjn5aRjWi3AjItdzSBiS6GUnjoaDA3LFTn/wWsS3D+ssdKn32bmo/fbAhz+AGk+huCRhDxSLLwa0ThvcDefKWogrBv6r9xm+6sfIBXlICPrHw9utR1d/cGqIcGck1DHmhms/B338O+BBb/OqvMT/LJTZnLWZM8Nc71YLsMG7IFE86EV7k99TIBT66Y557lZoovmXEHlgEf4ybab7VS/d5lTpztyqhcLP4MU9OkwRSzCg/WaxwRAqxoueIwkSp/tdDIApYtbJ9VfWajIBGyCv8dSUYsCxA6JOX1QAbG6un/4dP494XyNL6nWl3tw3Yk1QvWjONonfBnPxNMDNKPl32hCgHZUi3FfxD0Zqu17vu+meXAGu8GV3p4fSYMH6RYVrvfw0/HRT9ZC176gX92n8JQM6Zh7fL5qCLcw=';const _IH='ce28d663ad374ca53c4b8b1f95ee674e16a94eb7613e954192e8168f29a66295';let _src;

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
