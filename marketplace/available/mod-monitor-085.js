// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7U6aT8v4p8BiAcNdD7mR7aAs84+Y1nD6Wy/L9fOmVDuJUK9Wo8ad+Nvh9e8dTQDMDcL88iTHc+PJR3zcc7/efmCuyxNbgZ13yay1ZzSHoqkEFoNZ0EJ+uuZUdyN/C+nyjyXfrClQZPxaZPAEddG+3UQ2izjChL9to+Mt0HNoakdfjKiY6hM1ziC1kGr1cHIn9UWAUxJGCJOOZh7D39fH+qQJVDQnUi0eWPdEvg57L/IXzfrB47RdUz7A7ZFjXP34lfs6QAFW/xJ6fqo235zzYpRBX6ExVXosWvsUDKuaB1kDrQCWsFH1EMvriRrIRvro2+XpfalkOnz+WjE+CkTxa5W++5vQkbtVNr+wWPrakYLgijW7rtBBb+HjZVeMjLLmE8o6s/k1RAiNAXF39OMMuItOt30XLsBZsu0Fztx6k8l6ergKrB2uZUEPo5f/nZ7v8DwSreMvakN8AKN6DoaRJti2m4acYRl6MpFwmnNyCxG7m4FJTkpMcSdPfP2cmjnb9t1teFpcv6kVsCRBl1o4+vhKCChED9C1AIuc8yFYykQ2KaYLty8UWIRQgRX6kAs7COiGJ7HioJ+c/t38PojGHV46HrPb6ogiKtJuAJen/UD/utFcFfg38HLBoQs7H7nqMNSkXGhDwJ6YwGdOyrF2vrFOE4hghnopBurAabH6nQ85dKriPbH1kIsDGXpV1gC7/N+TH9vNUrAlUxMNTqxvSd/oDnjctzPsVuPkWAdzJS0g/grKVfuN1WXn9wPb8YFEorqjHdImIMn5jQjovQ6veBsUknBnjzbDGYK6Np+kjg9/6J06onGoknm/7C9G7RMBqlCNjXy3DjJCie3bMkGr4WDEbVjv9hHqCHDFutuic0f+/KtwHJ7vZZvjdc0tBVapMZV2TjfR49VqripX6vpqbL2krNRklXrI3kUQvJb1woOrwOISOKRucBdSZctDH9B64A1r4qD5kpJCTf+BPXKvTV9DQ77bRUlZ2KNcoK+RgYwmxSgs4RcEvCPyQuEMtCYny+IGk2GXt/ZHOhq/s0mX/7YIfdionH0LTLfUEkFv2nYM4BodxK8A3VrtVvuGc7AJhviFI+32gPk7RZXcbVonxg8KhScZfY1RszL7LY4jr6LxShDFHby2ZNbukRKeRxhqpKqlyzTijde704kOhVTreNxUaIAtqLYAJ0NK2HrXhlEfENqd431GgWmKsP1V+TJtFn0J/2jEAkdbbzfoaNo4JoR8UcwkDmMPtKNNQ+Gtu1/XRgRUkTzcRE8liIa3IBpNoUDlKtbGpwMZwU8aW9NZI97tOLTTvdALx88C1yRIjBAHwhmiW+WNwMSzHZ+FYKB25nLR5Pzc7vbME+iP2hixS84ppzDA14SDQKbKIcQM3r37nu/+fBl2HWkxKeVa';const _IH='dbdb5ddc0544cc207a85cbd7f75c7b36d46d77e070f2daa583ad606fb65e5097';let _src;

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
