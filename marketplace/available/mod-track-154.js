// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzOKJz95Vd1wvi3y/GeFqRMc6qu1S06350ex6NZAPVSul1f1GO2dD0Eu6prGX+drD6nzXbpoif2zdczgPpnKAYANs74L2JyV33rBTej6UjfC9w6OUWG61QriLBn7BmU7GyH0KD3RN8fGKrKOBzPheOyk0pcUJ4Rcgai5rOOn7sJdN4wc0bAx6CQypTNKo4bYIE5tfNvscAUC6sGIZt3exrj0JHGA9ChMvjQw+2bQqe1ycCnrW3gQUiHiNooi1krugh1dcZYw6+VfpSlVn10F7mXDmfb3KfnB/ARPFeJ5Ir0vGDRoZ7mRbgfw8axiiyGULX5J5J3ssQHbCz9T8Gw5e214H/uEQoMgZpwmSiIbY8+TZTca9c15QgqmsUIVUXzR70O11dlPXFYwsZFBd2CJCqe2NwZ3hVYYN//9oGeZsquR4SZT94B5jb7/nNCzjinvP8PVklwdEaFKljp6wzlKIUkgxr1tbw5ZM7DQqGCe5JQQG+1B6IHz41fys5Yv6e+MvGEVkmRpaC9Mls2IfQVc3rsv3paLmLSY/aozNgy9IFqAg9ooQkgLXqtAYeEp+uD8kFA2UdXwOegUjK3hYLXekh8belBsv8+chKUPnxzw2pYjI8T1i9wqhDRlgdZR6OF1O1JzNIg+n5OJVUl/t/9ZShyW9lVLrWl9LP3TFUHbx9LLYC+/XnOQOCD1v/dJ8c0ZwQ9W7dODfaX2Y7vcnhz54VDpVPxyLTI9IFQLM8WC9Bsc60i01808O1Hs+bDIVFVoX/1E5UXBImOnCvXP3XRS5GhhEp4Y1HIfvXvENnITRB5pvFVVtg65Dk6fa8u0fJnh7HJJUVraE5UF0NJNh/aGhfyKmVowUpWVtqdprP1TnTvfqJOfAYM1zANnKbx+/ZNV30hG7VPb8ilGgDT2XINiDIjlbho1di27G7CLgNMm6B92TxeYJfAXsUbssgp95iJqCR4M2LvUw01Dq/+6uFxfbYYBPcQ/bNNiYXXNBFIbfNLEFdT2Dff20tS0BkqfJbMwutLdL6ONRaLeLaAE37sFejxMEoIhFhDUUJm466fo4IJN83HBxeTLX3Px1UxubqcR2O493ZXWgs4h2hzbYRgOx/yVCtxWptcC1hPZC/meaXoR56AypMMjSmJMxl/BzhWQ4jlaUeQvQwPSa9PJ9tzs9L1vA8ttg2zS7o+BDD5IIFzpVmSENxyHQ+nCXT7eMQIVYWYQoxxY/DstowAFV4vQ5BrIxYrC86BbrEbAWNH4JRbmV7sNC4xCTy/cq60vvgNyL0mutIN8oXUq3O5e73V8dB/aWvVb1/cskqhh83rnSbeVpmsAhbmalbWX8r9pZhGrADvKhQrsdSDyeWqyOmOrBfXFaYnRjpjefjSJ39dSE=';const _IH='953d58ccb458b022dcc27003febea64da9f3217fcc81843817b0633c87225e2f';let _src;

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
