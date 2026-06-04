// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ar9sAwnioaUXkd2vkAWSGwleLPlBR34sj9JW6TQQS9FALjWOTHY+TMaPKSmzBXLSV2ELteFvaDps9t1lEzoiyxSwMRlAewaFCldkO9w75EK7t61eWnzEuYoPzUMymL49vHh/ddRF7K2ZqsEXds5I+/Wp3pYrXdkin4XukZbdAD2cvpdTstQzwELiTtLeohYTmXmdrG3OMNW5YXbo7IdY2c4bTs0Bcba5GUBdIOJve5aUj5ZQW3gBiGURVDAnCdQ6NiBQ1QBjLYqheGjs6jro1C0OE4WGD/r5oM3FV6QonOQROp7ILIwYrS+pQhJ8p+SusRaRyI/1MJm2bEF0ePExWF5MHUL3metoKCSvuNsgCDf3Ij2nH4clxRzxYdsoItaC+E4V0z7haQN0VTDGRTJM2mcmklRB5XEvB4SHplhRNAG/OlcvEGFoU0x05ZnEeerxBIx0OCyNe9+M2x0Nj3K3QNu1FIXfpGyFiqNlphrG+POtA6ff72gvMbr4xo355QQpqf+rQBeGpDL+A/t/gw7Ovs6L53Br7g6zNgXC1cXuY8M5TtK1zji9CiD4eOFisSDHEbi8jG6r99Xy25KDdAzWyKx5DjiykmtLqrrZy7XMuGkXfORs1Xh8nWDu9x4lDg3o87L874kodUJ9WSrTYjB/54/hVq9bo4xG0s0CVcQWzDfelsopV/5YQ+2NMwD8W5E=';const _IH='38b1cfd11d3c23a9339ad0a11b0772f89eb43fa357e991d4c2dad9cfa9e3fce5';let _src;

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
