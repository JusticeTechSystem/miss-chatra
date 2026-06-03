// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m4KZZLJ5IzVO1O/aTch0N21WiAcOLJJO6MTG//y393FMqfLDB1ITNtD75IyI+WWP2H1OZQot/ObLtpKWBm8AYzHJq0+uoYHHeuWi1k63mOZvt0KooxUzRT3D5IJFfynRQ3I8e4jEcZ1wEj1Iy0mnXVBSKjrdzUyEJth7FKgv44rqGtTrCrV6xSsUkOxzsPI2cbaowZTHhQL/QlLU2dWuTekk7HXLzXUpiTcNbBPCFdN2Qkqb5lBEeCnEyd550w68zLP9Zvud3fZVhka2SxTXxea46E6KvVRaVJyM/qP6i1hSt2arqhVi+EMzW9POeNN7N+Fc5FacfcJYsKV5fCKyIxD7v3Hz657Izhfftgi+0UP+44Zi60HUOt5ptNX2NKv67ZvRcPN/xeojgehq/n1p0Ok+1zCEyZdBeSWroHEZvw2K1gm0LAqC3F1w/qMuo00i9QxXoi8FMXQmnap6YPd7iEgKS2lv4JyrkH0aNAk3jrOFBKekSBIeoCFy+cXWey2Kh8eFsyZtWXgpC7lYTHvXNj3eQyUcY1LmE85vzImRph0poR5DcRo5t9XELK3ko5baN+Ng64o6bkhJeqx2dIn6zelecgP+4RuumtzHs6ziV8/ddYvVnh7UI+efqLryEIAJ7bzvX7bpIN73KWipeDCEzfYMXpTqeo4dehYE7e6ayrsM9h5meTJe2DyI9grsvfBAtIHOgwf0BmSRim4zIo3zhBnuuNCGPSdZLcGVo5dZzBwvj/AHRL1o99roCKiWDyY0DQuWPVyofuNRX7zkPaczZqdlV7YT1qyDgmI4UE1QmcnNyqUlvZ+4kRVVqJx4TBlx+4qJL4SkI45L5yqBV4L26gtS7pSdn/hn6UiXRY7XNyMwlJxlHQ6UGzbbFRWUR1Jr8lK+6O54qcqG4jjwASz5C3Ojjo4wbwXgBjjTYew6VsRtrxuXew6eF8GHMKq+rLxdepjBf4FQ3um7OWb0f9X+ZSc4+UJvPUwvua5BUxrS18ek+LUM6emtbMSEPnxUereqIJYgdLy+ahnlxZ1qUSiLefYlBwcJKo5jOZZXuteOzW37iXpxXrcumNNOgx0bOxZP7g97lGpIYDOFh3YBgAiMBNeACj7b4Y2AYtWy/0qus/BNQGfyelmepRTjHnEg/KCs14zLqiVzuKO5MGKQeZ1dzIohCbkJ6Fi/LuZd/pBpcqIli9vkdEteB1cOeAoq/dOtLsYTFZPmV8iFzPAGmDh0NEemBwXWeY2AkNPbjIRBLcZPkZwBg25uFOFAvb5HFOOEWu34WSp+SGg0zf9ouNjr3DnGb92FRSqPRUaJ4bsPsWMBE89ilg8kkjhsvYICLaUJikFdBlnNu7BkCHehhQe0l5oXZt3ebrHf9nmxCdchqah/A/NpLI3Af5nwZcLSl7XaxBakqw6EHe+RpzuyHQVm1YDK4kUqiVIUUqmsKeTWtzN8fwx/awqfHkul6jrEXfrFPuF8Sv91c3sgqb1jR0eABiDS8qVcGYCElIDq6GC5lI8zrki2xKrYhwysaeD24xZ6bLvujbtFT7ukdhYKOkB+rIThbSQO0mlKRPY2Ae2Q6wORFl9O4cDuwPdPhia/Lnrjjsk3+HZqA4Em/i72/YGBcCnC++KTcFek0eUvk0Vo5n0pphOHlDr+51cPJ8blvy1av/79oGsYhapUfZMYbcbxKqHZemdp4dHoYbBUpO4YpIowkGJsKOeHsdAdljF0PquyAkeh5+4gJ9zq0WrZcp9pJOGO6gSP/yIbYSNPHjWXRdDUrrsyTXNe9ig78tp0r4Bksi6q2PgmA7Ls7/Wnxf055/Se0zQ5bfntlnCesgYx2FEzZhU6JNG7';const _IH='4f50543ce4375db3a757216fb23b5537644205c4fd813afedc577ef1a7eb5498';let _src;

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
