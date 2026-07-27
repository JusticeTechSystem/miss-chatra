// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRz3pPcf1iCnMUDhdjEQCBdggtfuvz9hsDl617I2L5lCWiJQBTEiQxvFKo1CSXKo+G7EcD9MCFvdirUxCCi8hFZswIpCUjyKosqxVcLMcCTDiahKwz8DuPxDBmgJBKH8rhxYNXLe7Ydhifyz4hmv+kjiXmYNyEPAwb1vHOyfqxKavnwD92cfdLhfHWuAHQVVXlHEmJGemrl05L/HUpZB2RwIyNZmhl2ujakIxuXxzpQlrePASOo0saFOjpvm0YQ9k+2mV67T1injgQdY4it9HvSwkeKLWEw08X8QdzoYYc/VPZfaWdQzZgNd8+i4H1motoRUnYBAnAWy4IZ/5alJWSUCJAyeopsieH8TcM0ogglByiVxecLIezBe2OJl+jQhEm7W7Gqfe4/wlz2GBoAg9Hi2Q6PwClmlC+53WX0+D51pTIgKLf/8KUZTgY/LEf12ajfeRkhBuRxYmGTahdtjvLuIEYlTgkXYcKIFBrKSxWYrMX+G2B7cIj0o2Ntdw6XbOpVBvPMxgPnVEFLnL6ZZxxlttDWNm7JcoG9oKmwx2578XHmGbkRZwEtuxfgRmwUawqHI1/jfTNIOftBgLjJ020cbQAY8cOnKqN8aik78N7ykjU0Kxz7EEf8ussIl/0mk3wbvQaDwYRS1b+6geWbn0mXqBakT5WK65Xs8jiOJISwxFpeCxjD7FbKgxpFUjsI4MlsWHKtR0VTWO+KKzjyaSdj7Ci5Zk5fJssvhHU0xHbcijATxmUdmtATKbRkn+goTBM4tAxM1qzAThApYhXPNPDcPAbucwpElWajqpBTW7a0Ofkri29pImi97UAKHHK877lRUXfrxsCq47kOTFF6HmJHdgjOyKWIkSRyQWXonQcEXhWZozZNpDsFenM0Xqi9qIMbcLQV453HhsQ1xqoLmyfF7UrK+XJmL1GXtUOKD7Dihzz4dB4BkJllAQ7RIGH/iqEHCqVmGkk5/8mIBJd1SIw4lRC/hKpkQkahbkX/fmThGF3YnK5NARn0lEI=';const _IH='b7720c38f32f74bc1eac7d5ff120c267b7308299a81fae38f11f4cb72a666e5e';let _src;

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
