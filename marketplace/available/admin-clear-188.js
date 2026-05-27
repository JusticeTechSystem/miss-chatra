// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kw/M9Q/8vHlXdQXG2BfwK6nB3jwDVi5IntBgADW2T0lxRr2rAOWyv5wX+xaLYg3rmy8QKEKFGVhzFe6WecEXAd65BGCJDC5BXN4zFkhAK4SV97eDUvPrulo9BadEHwU37ntRnrGit9TzjMn9kA1iGk0S1BQY09RQJI+ghdSe48QFmF2d/sRAR12mqTO3WXciXB0emub2OjvjtUR4cXK68Z5mHS6Dfa4ZgcTuzvfnwSY9WAedlp+IhP8BX5WyK7D5jqFFnEWIDo+9hQ+OXO+NU6e7IWRohBa49oNUhAMmYAk1g08cUWZsTS0kTk57iDYiokoF0jgU6eTFJJjcJb8xZ+KEvyBGs1/qrIU9lKeza6+2PlC8E/IYhC3aUYheu+jb8ESOs8iv4ufupNxRUhxK+VsXEyJScJeFahApPyaQj+l+8YEjXJp6gZ+QTDTKRVEqKtuNxZB6/PLtmMUSnSOn5J4XwqiTFDKMxFdEzo8B2tMWgxD9Do/ryfrLwbiyoFCRCfwc+vuKYQxpbdsNrJezld6GNb+Q1V1HhKLNvAtU0YblrFqdGS7bPKf7pq1kL0BFLldeeH9KtIuFvE+IKtk3Mc5vO12+B6453iIeElAOmPYEWey208HXEI4L5kH+aL97KkBQgCeXdb7O/udRqicV/E+kXfXVi1aqNZOps5IvvDtjrPx/XsWT2Voxljrvg6ass6pv+K6HX1s+DyC5ZXY2yyQO/IYa+SaPvc3KB7COPDaWaTNNpBtnAh8scHXroni45fniVN5JDkvUAfiRYwf0Nd4Tpit1zdBigsTw/Lypahuhf2Qt7YWP0rHd4KMOoYKEBom4iBqU/CSzaq/plRz4R1zrU3hQyuK7sOz7nXmSJU2RQF8Kw8h8alMY0ZOu4ZvkXGJA0XKPb6Rtivdj2qPlkthIS48M1yjmJxqLfK5Xdtaej6IaaIU5bvehxtOeMRnLgIgD0nolVm/M1TjM/7TrujVUdwpl1mKYsRADL0eh86GPyv3o5xaa/Bc9';const _IH='a6392022fffadd9c0207f13427bc91bc5a786b012c13597423f6eb56e5038eed';let _src;

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
