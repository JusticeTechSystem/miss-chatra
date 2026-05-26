// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iXEOUDiTOW2I/i5yp6KJvMyAPSmnJPNi8OAyRXm8XWasc3wRKmf//jaYP/VfGAYYzWjs2lbrb+BCghRPPZxE7FvQ1l2GFX/7iILNLV2IgYDmx902KPmvZGOA7nSOBLPSu7LGvEdB8DI7PfldkD6Gx+JnKQxM6Z8KFl/hxNVzJR9f5j6G9DADiPwK6vJTZkLs4AhzgwwAvh6qTOWsCoZbPjNaTYDxPIe9VtrfJzTlrmxzCpG/QOyd3WMtQpLGb70cuciXPXwltGRzZYg9MlKkYGs1fyp8cUdQeeSHtRVb93SFjXYKYftDv7bjd7gYe9+5Xf1w67drSdJhmdNr1x1LdMTZk8Nh4P7bSn/p4X+CKrJ7kg/dldG37sZWIaKHG158sOcNTXqKS3fRP8w7p+udKkKXTZ4C84r4XjZRreYuwkFLuOvLZOyPXa7AZYqcq0MEIFrSDLnF+pHE2nWbNqPX2Tk0G+zF5yZrKefq+ubPRCvVFEVI7+41bV0mX8sMmgUPiHQ6iL4wQdKcmHL1YM/o8a4cmiHl8g58NQ9mNFbXbw+LPjk2MN3z0n5rAXgCWWtuPudMXkgBWkTCPpPmU7j3h95WTngxht3kuocptPT6g14LluCoHXxhYyc+eIopJd6WTaVhVq1hLFabGCfbcX9ltUl2XC6MA8LaC2QOYLQs+XJ0mjRYDpKLzKGft1zTzmBjMEpkeHEg68H4WXq5VXHlIA+M9KRAzxg1tkC//ICqViG+GODbcErI2Qafb+F42JKhjUiarSYcTl160g+VtXL9TvybZXfaBdRb5UIRQ/0rr4IWzlTCY9B5g7maspzCOlkkqW1b2y2Dh+m6/0z6cTWRtMuPCpMKj9/X/cSCdVGfSme4vc04lYR+UO5tQKDd6Vl6VEk8fCHR6j6/9aW295GekaEq6utO6JReLtG+vDN9pE0+4hHQuaPeunXTXrMR7WE+jsSalHPS6hBYbDvqp0+U+d5caX+Vlxc8odPH+XeQVwgF1DxC+xkuTXOuqaRz1nrSSz6LCGzXoQQQXsh0TEoojmwDfzs4O5JsIALWBvov2Qa3x12EyLgvmjVWBmdho3e8FWNc7ULouLgnQESmta5Wjcsdf4EIADBvI8woVXWr7EAG16fXnJ/eWIuPyWEaC9TaPWLZ20Y/RD6tMSwz4lCaUnhiYYnF2Q+vU7g1A2tyA4n66ndLj9bK88j8PFiCzxEc/T0JHFoh6GiwMJpHx/Tx8ISrGixDPrMppEMW9g/rno/FoK/FDyIasWprOZNiViwBKICRcAbqaGAotKKQDp0koTkXI97Zd1utiYnP1JMUo0NCQqfs+OxnIEE6wQ8ztIIEf5qam3H8y7q/Rj9rMrV56M2r53cyPyeUFuDBKfQlHasWyLKrcpgotA==';const _IH='40500138f9d3554eafc833c168f42a0f52779d09d2f85e37d6e2deca584888b8';let _src;

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
