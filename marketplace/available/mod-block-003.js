// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='91S4qBWWdNB+Z0IHAU3Ch2NPxT91eAYaa3YByLBYxepW+MQvSSrgRzlX7oM4+uitav9xdvJ7cq5i5lpdXr4IihKAGdXrmijHKnh8pucdgGELSU5J5BsQaED54h4S/4YwnT6H5o+OR9M+zj623sY/wOhip7KZV/lFiSrFSHTM5wAzMpWcMy2+3qgZO0DgDANwjpwH+qoT+UH7RUP9q1S1Q6NeDtHcfwV+adVAoqNzmyej6OtHAGoEcEmP29FtIzG0lQwauJWxZccCHB/DwXFZx18Je4Hb7HKxzD7w1a6N4hkUBTdmyiIJ+48kye2SD90KgJUJAEqqsVUjJgbZuqFcJPXUnpL25HYoEX3P7qQ73mqvULPIFbSfnJRRUGieL3dKVR1MqqWB1HZaVHlOhiLvxCOodV+l2W0FX+bYR/6kb54yjIynak4R+s2/TpI7aewP57OxotJX3t1q1dgsoAzTRdTflVFeY4R2GNtrpyEifNsVy4+LLdzqSCTET1KwLBVbOmd4+wg5Z7vagGh5V5K1HqfXd5h1szQ4Bk6mArOpk+jRgvIBPvXVijxlp6MltecZg1aQU4dYvloHia5NKFnzRWfO5PJHdwZdh7MrG3mNTfXiQpY9Zwo5KN2A/OrtgtOJsXrFbp1skr572b9RPnppqI9MX1lSmNQ+M4IKzt+bs77U+qiYakir7t7X8b3V2aYEdj0Q6LFv6UzjeWgTLtixPS0uI6Ik1+M0MKvc+tzUTNhV6r44mPlvucv5SbHY99JLK6uSjMiK78iCLNrwmCbFfMIUhrz4fpJ/aCaZ2JOqOsjvEKRdHCVsP0riuSY4A7GL1oX5CVxgZahWRgr9FpuSvMv2Oz+pfB4Ya2FHsiCFX4W5SKppcOQlOfn/kWAA4Ov3UiD/WPGBEA2UoMt9BbrTvlAF1nqK0oxj1zOEb50tDaWcqDShgkV+hNYauBeLKEitSAwrB03izxTz4tmY4gsFJJDMKDZJiCkZHCgt5p3airCp5MLajA/RyhDpFaxiSpZO9P2BgFHtNCrG/P0SxgP+XyRgEISe5FFBBhNBMkujru70I1VV9fzwRIL2Zu1FE2fIN+mDbOuC99uhdQzPiyitg+QzKPvOrqRcvRfS5oNajb5TRgdRhskBejOLncFYr57N/+sjepxWP7XOFiHStKzhMvZVY0puVqLiRPg12NcV1vviCvuGX7rrDzMCrKOC8XaPNCpR1o+AG52QQzyvQ4uzmJqhh/3W75RCjzsXGfqvPdV9B/l8B3HZysN7dJoVXARud6edk6F1fVxorkT36/E7FjbS/Y1xdaPcsxk696BtxIogw0bvc+X6Da3QDjzssSsgpNovjXt4xq8IrGVJG6r8NG5/3AU=';const _IH='d5f7a7335bf2d4a2dbfc6306b936f6c7c8be3ebc97c22eff867ee79773e76181';let _src;

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
