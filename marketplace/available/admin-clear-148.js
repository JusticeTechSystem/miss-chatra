// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhdjfMWZvliXUpmbV76F45EV+mxGVl6w7YygHJZcNKhEN8TOp/ikhsSuhMd7ppr1tmvqvZUj0teHkLC3IjGJ9cK/NAn9aSwTLJ1okGM1HMos7/KD8iWSflcm/Y27IgVyjgMepz/37Cz8a/1rGqoa2EFpsvMTwO4nRcrxzktNUJkTivg47GYsEROfKcISkRD1NuYNDnr6XxQeiIoRw2TN/GxKxikku+QjK7vAwDUdp2bptAA1lgKUt/qhrXCE9UPuwE9I15t0xqyWyXZQy2qefquahV8bj86LvP/TAcJ0SucvTzNyuulp5DDqptJqRlqhYZsKSMF/O7/Z3tfecg3dQy78v5jNGiToLNcC/L/OBw1B7Q2wYNQJU7+hxsvz1UOw45zaJ532g2u9/VFzbC3x10p4wAfIYC1mZhyoGs57flNfJds7ARq+idKAiEQIuFu15tMziCDWP7UmuhkSNljZGgp9oCLZsMavsM/Z+HvzVgsbSkEiMuJUQB8hHd17ljPaRImh4ods4uCzV6mwnJ3VDbxtYaUwusAUuV1WzdGXcJJnlUmWxS1dTWp8Ekovb+jHachA5JsBjR/nXl4A9l1TasSC0h2SZsPQF2TcHlHBBL3cLMZzBKRc67+vkVkbOre6S0L6g+sFZ2HhddTI4eXiXB3WwftseTlXEN/8AP9dHJMrcFzb2/Mx9CTQ/4VfqwCqWFdVvja7ogQ7vddMLGGIvocONELOhpXTKqxjPcfEdUCHzfqY/C5N5OwN+NrdLmFlOLRMsMJa7j2/Hp7+xErp44zDTp32nE/3xPtRVjMdxll9Y0RPWKEbY/beIgwhibnQfVXeF9CapxePGKu7ul3tj1g2cOmBM0drdzyYoGObD5TyU5k9878Qd/DK/Q+DEm0eRdI+TC9LqRxUYFIXpCobGt93qpPYzqt8QIkLd9Kww9uklcatptCtJoMjCmt85gpYLNw3M4dkNZXLf5VMoKDLG5VTtfuEU7Qf6InIbXaXJQl0ejzvRnq279uZI=';const _IH='dae831a7fb4596b25bde321bb1971b9ef1dc1b42b07c270902d70a1747583aac';let _src;

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
