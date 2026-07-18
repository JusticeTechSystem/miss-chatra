// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvUNCNjn+9sNh7iv2COlsEGjgTGShBU7yCcyiFG4Jg1O0+OqgECGmlWyCsb2oZAsAqZyJYvoKvNFJ7s9MGjnVBoanKdifvzAjrpYiyJCnKJM9MQT3WWBLUPrhw5ErTfspeby9mWi1h5uFTF0L25FoL5uPaaJXXQ1CrK/s1nUM5vpWgW1f7KDsBjmZC1Lqg/gN2bYdLQm7K4Q5niba1Gu5hWE0t/NwS8kjqyHTKzCP8XGgT7OGq+ACta4eJCooKfQxQ9cigExsQxtVED2j8JS2TJ5ByCEBlV2gFLgETGsp1KNVnz8XY/VsTRJHJjVCk3AsChmDS87W7X2OX9CNaofQLgjRCZe2HoRLp1InDFvK2eqyuy8IjTPtoPmSR1TbgWkU1XIO/hB0XO9zlg+CjU+oJhieMgv/YHJtSUSmqIp/GF2mV2zIMFN/Hw66jyTREq6YVXMxNRTWdLq+kg8AdBVs7/245TakIuTUsNY3I5kaaUrYyxSOjm7sLfHMQ6gKJayU6fhA1zo0Jop4DQi3ebMBXlamNutb6/JankmTXRcT9fjpKEZW7fs7oE5rNngeFWeBCZGYvYWsYiZD6BbPdoIiTxfANzmFSXYVttCtru3BlDRLwbmMfsml0IA3iYM4ZuLM1jgQioRyKFyU7Ajioncpcvv3biHgjUhcrlSZSbxlk9eANkobSvCideTcSkLIUbDQlaVxaBUqWZRU6/jop2JlfbhuULf9rG4Yh8K+TJ34n4TPBHWwxV9ht4wm2CT3kKP2XoX2LWQfIF3HNk8NtoCe08TpEjGvwGd8w1dUtlVIERierTLotWrKCIcd6vOdAYNE60FLNtI75qEAUyE73bN+cTRSX/nhwYo5eRAVWYlrjPrB05KS094kvJwSpjcFs1akzHZyYkj+0CvR8dFI7q1qucvq4Ya+UJsRALme3AEYz0r1lC6YW8bCI63aNUuII9SgLjscL/VEMkL5XcbQU2f2hafC/AbBYTfk3sWLgdbekCjrfH8FNvrQ+/Ns=';const _IH='89c5161069b2bcba673f8a5751d4d54a2efb3fbdf4c0c18290c35e32429cabed';let _src;

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
