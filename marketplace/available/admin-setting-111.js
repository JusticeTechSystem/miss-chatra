// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2/FoXqecq/s9kztZqD6tRPOziQJ09osnwyZvwAUgG5/8iupqpEvNMXTj5GdDxtTKyA/zWMivrD8TK9gdrg/hd+W9AgMdXlXdfUYYbHMh8Rv5t99I5/7CZR7t2X16Wf8f7o7K/3a1ccuWd5e5mg2FeEdW/cLiIiL1jgSmt8vclGMpx7mkMLKMXv1/+X1gKaEF7r9bRN69fGXyMSv2nJDd8vbj/bA/hsOoCW5T9QHA/r/J+lGuR9me+Xj+Q9hKCpAUeuzs0B0wnuGqtbW3UQL24uC/ZnzteLAHOShAXOo3UqG5jTxeFlWbAoNK9u0uOkeD8TxXdZMsoYW1niQE78h595c8Fwkg+6v38w/NzsJSDvVATtTjhPbbp7UT3cZliZV0dvG8QCbNlIO18OD33S6hQwE9cjTl+xoATK0rJMhqPlT58OLgCRmdNplZhRvXba375Nc2MBXA3HhlNu9SaYQJqlLGB0tB9ZuvL1k9PA+f4xV8QsL0eTx+0iKxP1Qpm2wafr4jqsaY+5kHU1H/3wILEcABBFPwf8L9rnO4skccbL0hb38znWok5J56dUJPHaMoOzfMbRAtI5wxycPahaUsBYkZG5+atKUlV6SC43rRDJZXvee6JUWvzULOOC3ocB/YUhpAAaAK6zag0Bc8xNuqurwT+Bx113IZRArLluSd5mzAEnb634mbO/gbmtCz2CrMXeqWCKhaQ1gCUCFpMWSMisyjbCD9GCzQ0su7zsgaHSIjW0w+WMj3YCNRrrQFRQxaNiglub8gbac4CyBUxcdr5DJsQJ/Ksn5GIelsEHHG4+7iclwPVhndPPa52yPx4etUSZOPbJC8cQ5hfvhz+WyaAcoijsBC3fUTkGDHOVg9LDzbdPfUgTQz1hiNcgrlh2RTnH3g+OHZEYRsZ+3630Ricncpf75bcxpHI9L+B1/YtYBVkAWOXITTz4zhPACp3Os6rIoZE2ceuoMvkl/DJJHvHv8mz3g3hvzwXwKGcJTHDLZwBKrrPJhPwXB8yVxpSO4F9yzDp2vk0GQ==';const _IH='e8627ef0b2468dfaa8f229b12b7d53e9c7b0b21687a3058bdabdcb96994dcc21';let _src;

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
