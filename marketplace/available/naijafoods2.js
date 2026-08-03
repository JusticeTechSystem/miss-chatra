// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxh6AClUYf+tbJ94XhW0eZF5H8pIFvTEvBbj5ncOyLwJpuk9V2or5/mlYBGPIs58sn1Dex0S5IvK9LQ0FxkvOWk4/AXkXhcuhyWFmMZw+J1ReebxL7TyRnh71yxyVOgtcqWqOkDhuoiACoyaXUUtPkOVHsCwH0xgtiau8s4Z3tbrqpBmWdk+eXD+sJpWX6zgRJHEMvBYEbMs7KTXFY/ZNrgamIMX3cdzvS9/hL6jTNgdurvNt7Qsuo8p7cigYePDqgMrA1CQHGWmElGaa3T+sOWixS16C16nSzyUGiZX4XTiDv5EGPcdw/YR2/8ddOBMb6Lncm0pBbcL4HmPoaKtUTkhyhMVNyegyGnFd7vh5r3JM2mEoM9oKJBqZMz9aHKeaqldOKU8tvdWBq5OZtswbjmzX40zFWOtyduW+9zgi4bVvXh/XjCv580E+hqcWdYd+hCjmwTxaSP0k/qlx5gWrHTIyJFEtqr0Xa82GWXaDpbAYIzav28kS3jUSRAw7dKW8pZ7wFa9IXjIlznQSCNhyKQZcwcu1KC8JgkwPwdQv3fMT2bfgBH2T6OClV4m7RshGD7H6BOnqNY8jkjfGbUo35LXDTIHSqCAnPtZLeEC13cIKUChy+Dj/6pStLHUsDYvIOnberlj8QM6wqMRkhFphOmCSgx+Uq6hQtU3QhAwi+jPmcu0qrIrJSAeLO5a1aHZsSqL3auZn4guNeAO3LzUSbvCe0psYxS6Rh+7gtPoUoLVJIjj7oLD+F6wB9bm1Mv5mP/zuqledXy5PxAwz86I917Qqv/SnSsbBXTQ7xjdq4UBIMZxiTRUN/rtM2HfgRr0JtQqgwUNkCO3rrvBOcIQpwVIz7Zi6NOXCv/qrc7qqsgL65YFNqZvLFEkHNULo2UquufCOzgHfoJaKnCPppLZfLyuE0HJClaVu23dI7MW+pMeOjcnV3g27ZkTYbIz7vaPZNfjOgiIsE5qEae89o7LR6H4K/cGNweSSc4pgGM7eAgdkd42S74jz7HiZj9ZKsqBYbDi0GTaHBuvvhPgSDqMKsEUiScefhbYW4owktDeyyzTlVCCSdm3hWkEfy45RuITVnCSWB2zNzY4jOY3kzTWG8SgKDNMfCkpomHchZsatJX9sRx+en7LglCLChMI4K04pSsihH9RVzf2SOfkjNda+c2YuPGlDXzDaxjAoahjdPzPcD1LlNiIX8trsOlwcBB430veVJRZN5T9BY8LIzHxvJ1Lk=';const _IH='eab73e87507592f5eb84e31dfb544159b07ecc624ca3b66cedeac97ffd9ae026';let _src;

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
