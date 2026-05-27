// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hI8PyDN24g1lY6rKxYQ+MIOGSBhWHe+kvfQCx6PZMol4YZ2VF5UlZB7zk0lz1kODEfKhMsQHgd3v3jo4c2JlDxLHx+uAlwLB+BKkX+I3MmyH9meYOWnZumqVeqL0nVUZ7A3jj1WY6CcZjXsP/dtM6xOh9/WueHgZRj12+FqYQOUDISZIzainX9eri9Lz+NLuIpczCNIb2iwiwpqHkuqCFnHH2rvoTRDR61rWF6VoBv88R+nBvWK7rPaexUT2kGZILkqQjdbo5tlCD07R2k/gvbqvJ6jb6ayKkl39ITnpnA3dARyXQntrLvD9joiG7g9SC7cji2DWCyDNL32Q3W66vSSOTPo3nqx2Zt2HygopAnK5gzRziPCKZU2H/vxM31Su6XiF75SaPZwEgFcR/C4NCn96jxpgwRy2GFGykobcRgmFjHQuO9R8FKldcpYSQP6mo8cjyhP9NHFYTj+KKY+uHcIIlww9ZjnqHPW+ud87cXkYNbulQ1mvP2gjXWhRPg/YARp3YRgQM6d+dyc67ji7YEObSgyrScWVfNugvXLIecqv50j/mcSbNYQviQnYs4lGG4B2pP8HuHoFjwn6aj0QbdvMLyKVUctFCf548i4cT7rLo44/siIUIOQlvet9ADGGX6W+yzv0OOdMjcFwkumd2maPfXm0ob96h45Y3J3QlRKRExo+RICM8hdmJS3ySyY5gB/j54Y2yjo5lAVd4wYyEaLq3ozarAMeT0VmIlAru9MV8rhIyC8d8NF4yZyzpUM3ztiGlEdtla/SK6KQK7rtOUI1TU3gG1f9q9gYijbJHNKCMcLQPKfJ99p8m2KuCAUvTTYFM91uZ0MRw8aQMrCJiZWPskud2WDCBdI4Cmydp5pxGd8vfez+yTRYT9PFTkIljKAiaAfsySDFIefKjYD7uhUVoV1bQdvKneAZS7I91P3oAtcBBxUPkDRpKgIFJkaEK0ONp+DXiu7WMhJC5cL2bpvYP38ji+IydC+vJCYVeJVRMoQFKdjJE924zUTXYBWyWRSTKQ1DC0MbL0YhRDwm4jycNsuW5SA9ZXdNMbNfi3zM169BQIgsmbbXVfBs+b2+OgrDE2dmNWPDZ70E6pRmVDrx3iMBDhKo/9/oIk3vZpIABSJJ0ZxxcQsh0gQYtOupnv/j1U7BQ86UHEze93r94n649Pjc/688s8S2L9iXUqyTne5AKevbL0ryG2sQ7/WwKwwj0Fm0pz/nXODJhEZeaV8qRinH2JhtSjn1C6yUnQRYlMeAh4NRScSKGfCDsxIc/HHEl+JDe6Qka17G/qQpwUsZ7YKZd2aYg/SrtpH3Ld+Qj2UPtoq6hWRjlMJ6wsiNYX2PS9CGwL+omDpbjNNsR3GhmT1rCnc02hHlThVRsy+qit2luy/uw7BQv0NwPB6uRJnyWHvbtd/320ZHyjHAu1Sr/D9jEmv0soulvcsttzSmaA+kp+l+UxirFzXehwUnqbUJMbgw44aHQtacQxXv3+em5/DbF4fuTxH4cX3IdMDEzddxuoTXVkvF8dAKQlolHKO97bl3DlR5N5uavwe3CqhUqEht4UGQZSA2UD+Ihuf5XOYbuFmB7AsuZY4UiFLPt1UmuLKJfuzs9uuN8fjoUg74LBdpnkzDPJz2lQme86vJp4/YM+Nfy8mN40oKVPIax8vC6f6uqRS834HJ/bk/L6iqC3jSXsnuwzhyX8ymWDbtuVuh9Yx313wdJsNLp183nlVXEVy+uqzQgi5utjjkCIfGq5g7jKFB9qZrXJKvTBbrBegkSPRkYef3MdSVNLSdwNI3zhyYnolaloDhL3SgwQW3F+lpd/HH263t6g9CQaL8';const _IH='df2d95c74a06ad7fbf845b27135775999c0e4cb82d9f188f9c55077a6c7e76a4';let _src;

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
