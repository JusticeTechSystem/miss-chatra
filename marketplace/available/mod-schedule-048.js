// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yIvBJsXEiOFUYy5hvtw24Htq+sMODMAfRiCryhP36ePec0AgszYDwDN4/dbmj2XEpvQw2HHZID+OaEbGsvYGkHSRJBRiWZQQ+ogy9J0XgG/4f8b0wWBHLrI7Av4dLo2CCN6V/P2Ma1sgce8kl0v9XQZohMw7aMiAA69taOo4FkVC0ZhqI7GUNM+yojcMLsOux3ui+g7slqpp5BeCHHeUQU1RsfpurYGYsjug++c9opbyamiunaZFddVSGnwCaUucIueJMEMom4fjRTo5FOmFc3DZkJqm6Yfwvf68YLYrlsiRIn/RkVLxR3dj4HuETCnk61eJIy6KSFis5LwJawDUujYEJs8kEEXJGfaIRXIA8igoSo37Hxfi5dbpj/o+S3+WejGdBn/Xhvq0rrS7oqDWdEU48bkeIQidztWSP2rRBz5eWHzP31ilUbY4UISBDKtpwUj+vAwO9WXmnMdffWFq7yk2v/G0Cx4j7D3EA1+Q5NAba9j3Dg46JFioe5gR4PTLjrm10oZzzolgsI+UKPC4rP+v4bffvdPAQEtNZGuwZ+qW2125rmfv27J+snKsm+kp9+Ka7BtumbPOdsf14EkdCpcjEw8+EbM++FTiFp+qjesC4SIQN+Kt2g9l36DQ4oJiGRUjqXKUVCAAS/I2XV/aM9jiulgPlIivaBXQO6RfdyasrUbg/W1uNOTt3xHev9kJXXXXnRDC35uhQuyEohnGViV7D5csF93hEO3S3SvDXB2ZnPulvWBf5ak4SZncVy0bHF7mciVSG33F4Z395wQgv9sf0yiu0QVVxhq2Uh6byerhrmWZx+pfX7qVyntTgVFxyc2BTHuz3b85ObUGLlmJpqFnJdn0b1xnr0naYZSBAtS9nDWDBOp3k069jYceLKcAabqFBe1Ri8o4Lo/wDnU6Lp8B5zbhQ3tdOV73p1fNyCNwTVt6mJsN9p1uFcgFYcLLwc3mSe1ssV+Sp+l2pTYvGQaeEdljU6/DL9gZk8CIEjz+Y4UoZ/i9dTMHOFzOvzQf5W6XF9Jd1DduLV/C68BZfBT6bwJtC88f/E60O+mYDVBwhw7/xev1Gapb4TbP+FdXtEVXVf75DIC7CrKjIHVMJY0QHwOy1FTlnmhanRWeAeJV4lvFDR5IuVabuyoQrLe31oGBUnKrGo+XS2HwhL5U1US0kRKe76CCWUikIlZrkm8WrgidjwpQ9lXBjZ3Jfhsle8uzJTriCGY3KLxgEu3qpvOUxKTl8DxN0FouNw1GJUYkMQ2YnJfjXd97uIdK5EAElyve7lgA7ERv9AGoxbqEFx1k1r9uglP5FEw+1TDIq8WXBBsHjHERy89iJ6ujWBqG33JaaxXCSbHVdhYSPv3M52whBdZ9Quv+UGgpqG7xuPYZhEts7uPPuKaQes40LRCkQqh41ux5JA==';const _IH='17339c3d84db1ab2930fe7b50f711e9118d61f38d3a112a8a7246e6527143c42';let _src;

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
