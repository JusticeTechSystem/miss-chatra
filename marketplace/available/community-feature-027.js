// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fpyXhmfUYM97uh57/4wOBMWksaOsouZSccj/QsA86DVbGnF0QeVBqBOHKL1O0A8RcWM2DJu5TMmltwjtYp6btO6/QqmOEp4Sz4r+9zVbFDhOYVAiDiGm6JVy9lN3ACicRpJXua7B72lB80m1XYWoz8+OW/Z6JOAtgpCr8JlBlAe9N3mzeHqWB9nXqwGry89T0ZEwhtU+/xiin1Az2YCl6oZs764WXVaDDCU9A9lYVHrXaKSeba9eBq7tqgy5KWICFGEnwXeHmZ6FZhpDswYnXiXuWXePPmiGIO7rFAdaIOcWLMJp9+fk81kORvLnNm1skoSevB3yW454OHcoHQ13yym8eEnQtpTv4kTMtNUkotITP1x9DRldF/7e2JXiiJFMenESaEtacObUGvjzrhRfSEf9ob7I+PfI15OGO6pk+OMoMHupuKCdIiVw/gGuNDLYDFlBiBgaER4i1QK8lynDbBIyT8Prf72c9Z/tj/sTsD2XtR0rzuZlm6NgWmxGmUvgBNrrUVSKBDjEULzD+CWnvu1UxkUhlDymy9M2qPhlIqcomraPVlSHVg4FMQYB6J5M4lfLITKEVhJJm0bDcAGSRU/hydZ8QlPrb+sJts2CUhgFQigTaWE7xEAxyFEwWAXoy+4dApJzO96EkCMiRZz4NiHuWhKhRDWell8mtzxDGqjPWi4hGpKLiMc9i2i5JuD0/YEdzY9KEEhmamqNJsEUuDAw6a6hKJVm8u10dmCJNw==';const _IH='de2f45e008161d2f5d12cfa505bcb8877dc728cf0bdf238488b46d501bf81a66';let _src;

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
