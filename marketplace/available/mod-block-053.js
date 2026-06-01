// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1KHS0Q1c+NDgwwXfoochRMbXyHa/KNOp4KfoXKbnX9MdZPV0lblaCU0VqFPDDMNX3BcGtPqstb+2mi5EQykDZMAi6KVWuyLv7ac3sJS+lNzVxU5VR7N3r+e2f17caAhBR0CqiA3/z4JPnFBUAFVFCGW8h0IN4adBApe/NkwSEjJbt6oG7nxjmaNvEOu1HAP8ihoYDklNpLXf5iC9r1k/1Ze6PTQdqx5kqRiwBfN7C3fieTO/JTjSaH562I7y2x1smLdjCXNGK95yOUpZMvYBPWVcT0sP8j1hGWjGP5yS+Dc7tWwHi6GXd4cUDN9YQAUIFLEAnVjgIP37i3HFLAS4uG+VIeqlxk0B0Y0klha661M6azigHDfFKht+wbcxQ7Mzk5t2oPMBQHw/GmDR2YCokAQfCjyUTDg36IFIOpGYFnAIfvyi7IpUjmSkPg2F4wQg71vDVjww71f3dMVMdfpK58saw+mOKv9sW5A32z0120O69u0BlnGDXV58tTE9+VXtd0oIm7DDf8E/sjXZud5VqxIWMUMShr5wuUHagfysG3v+tSXeM0Ry84dvdmgjbnJu7KHjG72E7N9Y46b0FNHH4Qx/w35AfECYklsrbWn4UXGo9tF3EcrpE0aoE610lD3cIwdVhx/3W8DSinjajmzBv2HdTl4H8ku8eTbTsyEXJKN39ke6EliBWW6R1MgDG5YQkAzuHtpE+ikAD6B0Tpya8eTCbqcu+5z21SZVAwHuxu/F/Bf/MfLThoowgdRUUsnnx1fd/iTdnD/91IREVoJT9Z4KWyKr9gW3YERDhGlTjqbjwoytLs/VQp3dOknC91lQ6eOgr2lqEwu+sRN0klEK7YwYkLPKjDb0qKuPZz+SQWzT/ghRKqk7ReV/pH5jqNxYn6+WF0Iyeoj1Tu/D0SdCtP4l2HJQTHjDR9zycSVI04GSCCcAhZxByXSotbYDLY4ZUcuYhT6uOZGQ0fga+KGng4IWPLMK4qV3eRw+VGVFvJKNsiEMKNhL8zOfc1hkHVveUXbciQs6vRvBxCH1mlDod5313Ogw8CYAoqQYUnwVWs236pPpqwhPK4TDdVTrf5ADkUd2LEyxiRlPFB5A987P10WktYRCWsTDN3IBStdN5lmwHIWREP6ompg6gW/kQ2fdGYDiEeZ/x1qMqMSMDxFdWq/2lOY8PSw9Ofpl2NE4PnaHx+XRwIEq5S0CruasYMY/rSS3jgoU2kcI6nb2u7g1dgSmh+9Ywlrj2uM8hQeOFKWGLTbR+wgQC/LcjVSfKcknkWn/VuFvTFSeHBQHb3nEbDivOq1QoEjShKC9qJ7t++oS/Vk4h4+tbe8CO/JhMuQTrZwdHoJ5pB9M3CaHA+bwlAlIMHk6U4vV6k=';const _IH='73368448e8bc46b820554e5c1802ca10e26172095c5f0cdd20f85e2583194d17';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
