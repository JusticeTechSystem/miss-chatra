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
  const _b64='T0JGdjTRggsNsEvxbYMrnJCDg1thmHn3xPmpluN2ys90bj8AF6cjlBqqbbYQdwP+pLFSDjDdpIQpDCHu8IzS8M45hdMONhxyQp/FqLr53eamOZoaZsRTGC8zbFtGQxQ+9UKHUpeJw07rpOj4EyqSnoEtTt2mps92zbMotZ5mYuqPO83prcbM9VL3A7Gzi8/DOjkCFGDeSweA+fZi2el1dXFf91nE7/qkXoGBbPZYizbEOTdANCSwKOTs0X2tWJaBEzP9B/vJEnV0fSwi5xVLhA5mfav2t+kLrKZzIok+LEe5kch1ItwrNdWB8LrW0Xjc6nhlgJdoHfI9ye9NroyGFu/EVbdsMFT2PCZX4U+4er4dQgu4uPRSFRjYRws2q1rMGGxOLKaRKyY0Hv9pRogn5nfEpthaUvI9uvalOAKgqfQAWr1aWGFZhaywL9o3HE3/Gs+YryS9ANju9YgqBECykvI0ay0jmBMA/UrJTzZCug5fOVLlf1Pv1jUARc5NpZVTthzvxG8ukyl5NP1rzIWYyxuqqndqYIUPZ5WAW9x9M2Ze4S/DmuCF2+RxpEgvm0+OA0V/E86UoZYA5xihC291mQ4OAfc5jbKqgIjvwBDi7BeijzgjzJZ2Oia+XUEztSSzeST3XbZW3+uga+twFSBi2JqtUnmejNzi/ZQ+eCuE5Srbjir0x3CFMrv95k6TL38DBUetjvyddCTdAkaFr88qTfDoN/n5VfNerNvaHXQ1fvdzMiSYVNeJVNcOAw==';const _IH='c9b00032803dbc39f5478062e05d1ce51a56cc303e23cddae7a6428a5dbd2a8a';let _src;

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
