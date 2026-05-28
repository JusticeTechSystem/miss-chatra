// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L1jkGQMdyra1PkOdDdtq2r2hscc15j+rVKdqcQagcnBo0N2Te+OPko9VBo2RV5sv5dI4VuETTTVvd9bm+dEolTxlHt9p8u1Ug7O3yhuQjJBfTd0keQu1R0qqKunqH92GSJX1CcGxOy+GXYybZnQvbdf/37w/ufhn85q50l5A2uWoVYVvPJ+Xd0Pewpn8a+g327qeQ2mpQLnWBgfT9hNdoOzA6X6ziFv+2XuF12WpODqSUvwKWPO8j52CXnLb2LCbvHWGFKUXS+HfzxLkZQHug8p0PWIOnoas9x1kRXw/l4lmbWW+o0THk+Nlw3+aFBjZZhcaSnjBC58lKn+zmmgU6kN3Wub3W3Nmya6oqXIjbrD36pQtkXb+6ynNzxFre48FIxm5T9zFtrBxmmohjxpsGhIkZfs/WUM3w0WBQspnKPYQW6j1N72d77ZTEr9A8iXgliEkOXjix19qT8UrHYuomDvh6lYlkZdF6c6Wf+UKzkpYXMr0xuVw9tBncRLhiguuUVeJ1so2GKGHLElC565QRlwhkjqY3idprQ+rLonGXKYjBE5AOnqX7P3UHbvc9r5KJJ3xoeIbZDIlW9ZkHWE9pS7Trw3lwGTGsFixsmKUjmwclQxzpO41w8NQUk7olhmeCrtHA3qQFeE1CyC71KWdXMb/ZOajtcYANz9A80YE0nkv1IPPgD8KdWkFLRDiGkctQ7hMpZkbKPvqoQsilF2zuzN2gLGO0yCmLfoTPBOlchhdqPsSPVy7IdHoWhAgJrj24XxH7hTWbuUFrz0dT1KRmFYbQfxviJOp57A1U0BOj6/LUwgb7eN7j7KHhgPRA7oPlq1pI3DopeKxfy832q9hwrVGC+DRb2cqhQ6id9NTmxthf4CoPCEymjD6jy/Yt5OwV+6brGLDkvR1pub7fZhrpa8eBEG7XztN/9247+ZYRogF6HF2m9/QG10YL2JANmWLSPqe1YnPQUETLmIPcg/gBKejcW8ANXrsErChULZB7Nvp4gVWb1ps+gTEsyrDWRbmtp3c7Uv1i7SmXKu8t+TiB6I3Kb2mWFL8nta0wloybHexj2f7qzqqP/qOASHjChRxX5hms2ntpfwF7J/XBY2dR0x53c7Q8lSTVxTrPMLmuP60Y8mcv7iZ906sJIJgojFYxY7emMy1k75k9Evkt8Xk6ZzlEctzaYl3YV3C338nFg+v946es8Cdhv47s0z95Aiol2RibPp+BB8=';const _IH='23f76e2bc6b1fd7b01650135d8ca9a8b127cf73e5593c1501aada238b6f0763a';let _src;

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
