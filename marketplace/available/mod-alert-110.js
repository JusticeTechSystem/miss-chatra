// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSG8h23iS9Prkea2e6dXM2oJpUzTFK2vgxkvlPh/ALMHgStnMq8pBKWgs4OtIMBR0RE59l3l2WyFBTD7lphU+w+8F/VeVDdjIhS2X9RBwOqpmmuog+/P+Ku0wWDnXqSXNlOu34ZHA/JSh4vOLlBXgLFrSPb5qtXFYN7buoJPw8en9mzRgPr6uoWyrogK6FR2ptPrZZs3M6TTs08mwtEk6/RGPYRiJ74d0oQegiLEQz+1eMV4RiWkGwzYBvF8vk4j834Yeu/AZPxryyIbNwY7lmJRXuf1W3S7fDeARQDPEeuT/wPCF6fQs4wGHmrCtBaLbSn/DplM5ligapH0XSgMkUJh2BYHxKVxMWSl4otALu4uCCPOROPCeaQnlwQi8BPuu4G+EnVHAcCUD9BKyHhOkuz+dEOv+WQEvwzn3/QIbwNbRJ4ZzNwwA8Exky4lEkGRKlnA4o2kCZ14HXGka+GsZfovDkNc1mPSkCU793y8wSWschelwquup9CY33zzqbA3FHpkavd3cR+8Wsuj12jkk14RexBZ8sPYwzX4JC0Eve/1/Wx2WdZke7nQllaaY53STe5KikcpU0QgaKTM8zl2b0SMyOWJxKDlpHpFF2JkIB7Ei05JjA9oxpjQQACmShupPO89HwO8gU6MZwPbqrCjqwdEF6TNzuJ1RMLP1zR5lhJMwZ8n8e1wu0vJOEbij+GdZifldwEterKA1fYYkMeb6WrNDm9e61NxyVJCp35F8t2fMAV2N6u+maMw5bXF9GdnK/Zz1wdImr1w53jYoIsYYq8hbFm5Q4V8Ui37PhLZNqRCoqSLl/W94w4piF3AFxKxr7FG4HZ9d4PzaxMWPb3WtpiVKt9U58PotrtMZqxKGmKv1ZrUpM5fHIht69lkGp7PF7DOPf7rN7dKZINiReFXzqrPWrW78g2uBJuwH4RwbXsSuwGpjANoYbSIgHAZvLOtY8HBdq4t+yYPsGg4yyQpYsKHcuT5/PgB5t/ZRKnGf/m19ve/81ThwXpa9Mq+uXjZ2fbqB8v3g2L+H4n3TSq5vJzmnl4graOzEvtwuKYLnSBX2SDbrIHqmjRP9oFZPWBOrr7PKA9N4xaGFwRtQD75a+KWvUT+G4BUBm8220ew8as/iMu1r0qLEmjFrVxQJHMONE6wOJToOd7jUNJxmMJsczqtCL7kCdP0u/+9C69+iHqmD9bQnwEJLmyO4no42kNLATotIGYWwHVfSpwAuhKuz3gKcoztti0igvmhGPlJu+89ty2XFSVTM0KyfEu9lD/kyCvj4kxcpfbaqTHGQ1uTwDNnpdtSkqgNd7vawulF1SY3CNXEaE5h2rjEDt+z82XmzxlWeu0O5lQGkfVJ/XGEeRLKp00UU1saWgKMKgyNWw=';const _IH='6d835651b704118f61c58944b451c5ba6e0760a36a39eb183563ae3f89ea609b';let _src;

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
