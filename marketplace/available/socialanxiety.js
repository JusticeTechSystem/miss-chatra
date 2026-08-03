// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6XdICmbj2EwuHYh74kdbudLlzxLBCr2uv0r+JY3wGb4iWygk3ShHbum/VHghJWUTYHmi/YEkKo16XW0TvcPNdaM9IA63v2jxWOkDdTRSqeE4eoCfveocQ12pkZJZqzH/pwnnp1D1WZN/LS0DJ+2clB/XNj0mu7ILhPOiT5Hk9Y5mygsk6PjqB6LYRSSUxBzcp34amgSeTtp/NXQBGkeCwBDNZbahYWwbDOouV+Ue6rakZGJ9Unr466KNKQSD1xk2kGp2Cl6oGPe3BvYvx6tyeUvPC5YCXY84c42bmkHhLza6pu3XIZv3CZpNPWA5svLH8Tg7EAvkqzO7mjrwwLJbq1MfXyC8KqqCVX/eUjyJgnGM0ER5ni6QA/H459TEU87CqV3I5xLiIixa3EpqENSSIPMdZCk3yFcwmJTJyTF5eLoOXN7nCZGwpwVZgeY4f6CUz09a83iii98eRp6FmbFcr99R3P29MV3rSOBHcJWSIe7EtNncB7S01prCunCgpr8tWxv3igHVOQNyjYY9o/t29gFPZjtWV7eXJQV1ioCNBapEV/t+k+yUffXAhDdAmG7i9qMy9D9QVvxIdbqdQXHIS3fRyt765NeAlCDDchQ6rOz5yTgex3zFhjrEn7bi4IamwZdbgMHCj504AlKT5G+Ara2jP749gik4JrTOyngzej7RGWWLvbzcEK+Kw5Bhamfpdsb4o0bJjL01j3ktLq2k28kMomx6fWgq0f0d7UbXXhXiXKuJ523n2R/D1O59OY6HVo7fCe5p9AAIIqCaAQX38hT6HYYezr0WAnd56An1lopEXVguppqJX4zKXW6DLfD7HbRm01vDTTWVfLThVwrTFMy31luke4T3HzQQX1F18xIIXrF2U2xHVYcw1HQSdxpcC4VwSxaw4HGFxQ733Um4vdwROKJ5tx2+kOJcL/Lf2ImMO+x0+5nOeOKmo384qOL+s96whWubQxTEG6h1h4F3ABYSb4UQFZCDhafkXhhHJZP5fMMrZoC1eH0n/l610o93AFjHxs0SQyD73mrtmKAHR0c2+3AjGx6BuhS0iFMW/z24N8mRP/iOypDB2x2RhEZs0pjRczehhm9FjD0L46S2jiKz0cCXC+21JtS844l7pTt1b7YbZDd6MaB5Oyrmr5utwUWy+UL3wyXVFI0a387b0qRX/k+Qoc6PU2VsgtCvxBMUM1GB3bJdMSqz9gHjiRGMwX22y15l1';const _IH='ccd7d356c464c43d126777b63146eb7597c52161c5097f061e2da9170ff97981';let _src;

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
