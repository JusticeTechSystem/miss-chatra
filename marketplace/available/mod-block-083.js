// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlv2BnPzC0U2WgGJ3S2MgI73jzeahhH/Zqn6Ac2qbGdGpYscmVJPysgmOOpU951v7sV33kv2Evw6pG3zjQVw/wME4m8E44ZQJnTjNfqrLKQeh3YaL2HpYW+CNal2/09SoITkxGbEjhRwJfN3DPX2iOtxZDwFY2SquPFrfGAzCEOEcFtEWwUlkw+48K0r/i1fOzeqNEwsiYyahSpuHOAwzRdN4Odl4CAiH0xQz5p4NuY/VfVgQmx9cPfeeo+c20fmhqBxOoU7rhkUfwlhX9cC0V42CM2tTZZV8tsWvci0YsrmncOjGiFX+lxe7kM/eKu1HZlmQ7m4b9ACH+/eL346pgTGB1qocEQ7OxUYiLLfOAnyOXVkOtAxQCErD/Iq0KCJue/EYA32HiSGO2QMXbZjYmD/acQrJ3UbO+WO0g/jgnQ91jY+MvD6M3swx1ybB6gEY8UiyUKtI1rc+wT8pJsoPcc+p46X/Cwd+iHmUkNxRFXsZMfvaoEB6oEcDdQ+pgpBmCyMS2KZGZCADjkfyH2r+v7EOghK6wGdldTw0zhtgnl6eM/IVtedG8exVV2nsd1+rHYSYP35OSV5NqptfEMF4o8dvp2YMNPf2SFAiO0HK8WRir4h07sRlp1NnU2iWFlCOd3zw5GzqfWmqlOisa5qaV2yVh8N6PDiZqm/gWsbEJdcN868V1V8tuLLB3h9z3VVfXPnQjL9fE/zYmwEccKHq+smEAbBWXjOnVHIbAWVlKH1IMWDKlzZO+ASzKsCnnf1Mm4emezNluwYwX8vLCmz8hzcBw6Shuj9OqWpMVRuuQa8l/VBNnG7hF3pLdiwS3QqsCh+uZ47MjkAfyHa212OPAv+vUmut6g9nxQIsh2GDhLaB/TUMk2YO+b1DOgJl2p/NheISG8zY6UO+3UZupF3eUPHC0W48lcb+fKK1QKd59E1/fyIRlHlKKtUNckXzSys+VdeRcdOH+xH2TsZiqU6SxAMom3/0diGI3yht5/O+EUwDGEEU3Y+4l0NbBQ5nAB8/9FnsZbsabIe5jRa7l/20g5d2ny76objYgrwCiz7eYYKIqyz4xT/asv4p6IyfGu6bokb1WKylUtpZkNcnko/1SnVZ4WRfv0OyuZfmOUyuBLNp72+W36Kw2UlWCn0wj5WVOGYyfYFzpD+J7x7d81OU0vrGKAidArLnoxSPEDjWrcomwX5Lr0Bj4zWks/hiK66PLvIQ/qj83B2qHlOSQs9eUBStNa7rGc2nFRL2Be7MQ1bWNrfNHmOM5MZqk3BHnStoS6XHuW9fTf6Ul7hmz4VAy71TReGzHiOeIITj/+y07GocmhU9r4ty9x0lgxDEybOCwhWtT13LKTiDocxW9mj3G21qV8tNuDs5j';const _IH='160d848f87c6f927025d8b0243ae69108395095af811d9ae86f5fab1df6492fb';let _src;

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
