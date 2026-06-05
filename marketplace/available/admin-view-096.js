// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aJ9pF2wjLdKWtRcJrXYp9u64FMIWQUpv203HcK2/6FuXZ2Ao3b8cbFWP2AhZhYt9y1QDPPNpcFgKE7oQ9BE9Abih5sKtvVgc32X+ZWOcoGRn83uRl0dYq58m3ubugohKHvMqyb2mfotQThLD6mdfJlsbPICvjchRezIwe3ZaDqlpdRzd/VP3C5QpfE45UIkKaz91YGz1+q+rn/mgJ6hSlbiD/acHfduUdbR1Pu9mKazBJhB8+rUoTzZSm+CpB6cRZfBw+AQY5MSkC/fYR1/eitWyNEdBwngdqdll6OkR8bK+xXcnWtzwQL99FLBd33hsgwo8aMwQovEUhgs2/XayrQflK55dTHPyxbYH8YKOrqfKh6NIKrA+SLa+8D+m1oMEbDSTZ9UF0P2ALQfxmktUBVUh2ec6s+aYn32nNurDZUO2tVMSs5zGr/CoRpr43xuWELvOICxuwzaKd1tU+qscxgVE/wot/siDdJLX7Jc+Ui70uakZF3s6UrpzYoPN8o3OcZSOPrntIF30v3hWTYc0i0M9t9UbXC8b8txJcJ+G1w7DqBdyTK6N5babN+FnoSOwsNF61sIRCXa0OoViihjY4Di3Og2BWQxrCX10pqhb0A0ExW4Nw/1/I0OeHWBC7R89CoqoHiehEinL7uWfbmJTrYUnvc8yeFtADVvFLkYjOwGgR0aecywyfOkb/2xK7ipPXTiW9VTMF2kAWHDGfmMsgD7+5tWaHkGT0xDhq+cI/l+0F0pCEI6H8wk6MUpA8fzxemyHQdxwOIqgQNeveTj/67Wusmtohz8qW3JnLjGoRVDpNQj7L5cIdCNDWAv/wgOivMO72UqeOor9t7LXKDwxWpLH5Enz9I+zPqmZj2nCOvmQOiXrpDWCcw/ZRDzN3vrQpuiqJYWwEGNngSKqRyncaeXjqKSFh3prnarjXhaaeeSZjAM88yQ6JMcI9ZSzJSnFrnyOfKCS/Ie1r8m4pL7yST8EM0yMraJIfoysvWA4pw==';const _IH='3a62a48c4aeb8c2848d8180369f0e224ae9a51912199fd95ad40c482bf1dbe3f';let _src;

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
