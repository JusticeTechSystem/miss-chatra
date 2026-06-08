// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FxNiTa3NoMyybFo3OTMHJw4h7ycnWif5bhrgBXu2ytYLSzn/aUviU1jN+G9wlU1Nwe5cy18CxAlO5TnOKepv0KkDIMHKwEVVZqUYe2KwTGixY9LrV0vLQiC0l3owPrycBPDw10alM5pLYmo1lght+3zIpsdFW7bMw2LbqCl0pe5VkEuNxfvz6+5QhpbTmZ690X5gtUffzldysJGu84SkeSAHEpIe1QnRyL+CJMyQ9SZKBoGsiI9iVjXx1z5tODUob1FCK1EeeRVm7eWsyu0HpzzO8zfuvr3A1GWj0/EDtEUQAtZ90TbkxQlDc1hOjfSWr/Cn24SUn0aUfEQ3qIGUCBZdwxfH4318Lbak51y/iICGjkR1JwOb1pcJUwtBBkFgRI1uTTVNB5hMGqQ7GYDB3v+ZHAfyNa3m9HTDMVxkafDPLbtd8nRu893TFpaBXdYBkRmtJAuZfRWyv0oBMS47zB+kVOVLME9wu6qpBY57VKZRH2WpSxQg7oQn+1pCfVw7lsz3DRiaEuCjyRI6YYQ4e0KCaZ+MaXkFXQ8RN3i2swkjpY759uZvhSVelM7S9nykzXavKGIWW9bsf0B9yU3pPD+W8ztUxtQ3qcvihqsL/gtjxX7av8AooS/NvnCYU6dUtbQfMYf4Qxw9Gz9GgPGmih6tqDW7mG2kHHPk9d91relTb5srUVLMuvjMM+qltFheRZT+q74Eqz86C10A5u/fsxaz9JIx5sw05RDe9WFV7ovor3msUT8f0XcYCS+PYbxjY78+Idq8ycqkNZN9o+g7NA4S5bKzYGzrdd/5QEKXvSWhUNop+pGQMB+wklxBSWEOHldAtRKs5jts2Le8wd1f8ydhmVloF+PTBiP46HgA9SjlyZILvhoVQK5fVbiGruNQC+lBl0cSg1qSCrWaZy6w5PxHdu4uT1pbWG7KL+tdOy4bURtH0YKEpeNFd6BrwGQ8mFGAIe3vY+1kRxlO5z9oukTSan+J36EjNTHZe6An6cz06fIBs7EB+M2/2t3RCFcRWCrNn6n4ebQdh7h710CeIbnp3UBH5UX++Q1h/Qf4rcWZuwj4qBTH7Cdmdl4iPQvmEVTXIyXrT/5jrXfn0qpLqa4LUKxWU/sLJtsiE77RhVHgkM9dU0H19OdStq7t1o+jlZYhxxypf+1JD5l+wRS+Q/kgyfT6EbkoBZDXLGeujgfh2xWv2kGjY9nuA0NQH0C42wxr+FaeNWN9IVMP8Q1usupNBRgT0fbkjSIPnQ==';const _IH='0a7540413d98992f0ef3e4d4e40842003f2d628c87b460e1180cec8866bd3e6c';let _src;

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
