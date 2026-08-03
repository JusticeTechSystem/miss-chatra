// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfih+t87wVwNBAdnOoBsWJ9Xv0HUT+yeXWNs4I6SkwvTMftdLuJl2F4cERLxddRvtuX1J7GELgLUUZge6AE57ERfWTMxsmdnAOVT8uWP7bqQlyx3POQFPFhaB9gTmMAO0xMDRw3d5NlUeczDn/HhhZvNQoQpoy7wk8MvLOUtC0pIcUiCVgaXQwE72W3eIyEeDZ8CNp9RLbXLqd6i0TadAPtnJE+/+BXB5pHkNVEzySB3MdfhRbudlz51ZR1Aia+omztN9EKPV5Fl+8oWgb67hAPrLPUhN2naqXvKJhSh49/8+VDhOS7Z6T0Ztk6d3qD9tBJStJT+9lHZWbtgX0qWA/D/Ic7RTFjdnRXJeAtnGpS3F3+pNLpwB8VBIDoU5p2SNZdMTCCUdsgTgtY4EDxcAWAMopg2h+VAZyScfgoF0F4ZOVwCoLi7RPVifpjjJOX+xe4rMAzfJj/NECdfadv1UrLKV0l+2yUfBijXe0UAIsnknTD89ANSt+7umIffNZuuUjXczR0tpv/Z1yNEgq7UrnFT5dSjjvbSGwOEe5kAUjBBhTKvVeS9GrmYEzBD8aWaH02jrHgu7IgCCp8C6yIztAOYpDYM/qoVcd5KxLcIT4Srcz1Z1NMDnG7sh/5ruHFjfYv/w6j1ai0tW+BUaDkhKghmXmj6g/7XIFYpIG/p0lzRkm6Jc0ZaVJlqlH1vv7AeFLGYZGwg9GTfVuHVMfxoEARr/E7dx33gArWQwjkoz5YQB/tN7uGm5i4Mbq5wmsKfQ2BNAnDOqGo5ts+GgWBhb7YTPw8BcFZJekRGQLgYLcENd32BR7JzI1Yq2UF25wgMmA34ppyy3HFaclHAhvt9unqDIDQ5f7GNSpsvS3itlKXT22cy8wSXz6a+oj+P5v3zuqCeLBYaq43SIbEcjOXscgqdikdqqkX14ccTn+LkxTCPADn4a1PCrAINPeqLsPQ0RZh88Y6mcUTpXKLW88uXcKpy+Gf1JPdW6rFY0VaurRswnz+TvcoLBYI88SGCdXGBUaUXiSJqrZDVk9+4tMBeTWCShmcWnSg64QlSNq9AF5gEEX+jb6I9F8yiThk2Hs5JSgkAtBYiHFHucc0n7+ZKxtnGi7bPCPkOrQC3lMsCMOz5UJKU/rQGbgp/asCnYSHPlyXEl9cGqu7M2JMZayctVAPkF9leNZLgYxfFclnVTfRz/VU6OD0CdrLGOBtq09eOaiMWg5RmA8Va9gpnabp9vV4jOB+d7a98gMVWF8d0+BsgL+zfUYeZkQ7Q1Ejq9AVKLhngL4uvhNqcFrTbur2+haPXhdGy7AjrxvmnTizBYTjk5vlEbASUSXj43f3ORZuwGJTZhrxLIaJPgdxPd3ZM1RUoSGzJUvDLr5zRp4LXOyOvu3j4T6j5Onew9iJXgNAvVSvrNQ';const _IH='f8c54e2585817449dceae6a9b0ca7433ea6744fba5212f4b05742c4f1d34b772';let _src;

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
