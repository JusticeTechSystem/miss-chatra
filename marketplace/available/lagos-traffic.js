// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EUKns/hrYuaLkxW7trA5qQReErT6MXxTYIA/2sS6l6QcuTPaa/GEN5146U7py6QyiwaqobqrdjzkaOggw08fktW15vM5ZY2u0aZlgixS/fVAqA4UUi2GlLzqyUe28yX26yyLv+EorO7Kp50RjlqpVdjWXcrldnFboxHVmn3U4kqjy45f7dWbMCNUnVH5Ui5ezXogi3Nt0qeZ6XYQD/X3OhKf3KEvKULB4smk/jUuNnu4qM1h0skNlRAxVYElo5SWI+vCAJpxNAfngjxjeMmWtxNVsOx50/to+0uWCWOqGFjUf5f9l/2IaN6qEukRZ2YShaDvx1GFTTELgaHtHNtzaBY1xB1u2cmvdrWeHMgJ+A//Gnb4ig53cVJUbT93q+g5cRx4tDHzJGScUC1syf9NLGVn1MVx7efkzdLgUiiD37TKH+M1VEpga4AEJyep8T6j38p33Z2U2sOTQSZp7JZs5VwntkUATcPH+nbKFzOVIYdOkAhyLBwJFV78n2rzeZSjt9UgK7zhfDG1zTmOzbDjRSvBUxjRNssOqcuQDwrJxevJRY4p8GEzEt7LzA0SDQ+K2Z6Z4EugCCmZYrIx/JN5aiE5qRcZ9bIzoirKlt0W3f4c9QoCfnWQvmgj1yu/9To9TMede+aOA6cbcDGXqxmNt8LfeCq/qjEao69aJlY/bJH2NnMe6xRFg9TnMUs/v6pLf0Y1yvUPa0uiuF65p90qEbwP3qlkO6bIk2h/7E3kGbhyBhrGZxkFj0rlV6pIiZpOTGvvnNVbx/T9WVoPi70sLzqnFdeAmrLJScfG3Lrt8AEtJM9DmwTJSwjjyG3V4tGTp8QY/nMNHEDZmgEABEwcred0qsu3RxJn0GN3da8weFEzHdoPWNkiP4hY5s3uA9ktI8BWVgEOmr/BEGFZyY70D9UNc9/KEIQ6RHGn0wesj581fqhwx7IwyP/ScYAKe+P+QCfGYWoPbsxTLbiur45FT0AqHnK49F6J0Bsnl+p0ww1uizFSbwtATtIRxpukpQR9drY4vDhrwQqV5O69XKNf1V9UlHhbVprADvfqhgopg8yCX/Tdy8MkQTKQZKJFBLTgVmpllV5/hx1KWoGz5Jwq/tBzYuwUz3y+wcp6aRbcw2HGMltst/Utna8RPbUfXsE/2bMMXgWOCMVGQZIzXW1ad68rbqEBQyuz+HUB782MmWIBvKUUc8Otsr0+lowsHp5yN02PBfZ31qJr94nUENWJj6K+oSmEOXXgLLVJqM8VTbJX9YARsoPP4riiR/RLFpS7tzaLRsBBY4cNgf/Xfeg9eBFV5opsD4u0O48F5Pp7EEFvFWRVLEv434BVWSul+P6wYnNWMm+YwNlJ5x5vBSRWeAL1bwCJnqdbIijTnlL/i/FHMB8d4QntUFBW/YBv2zXcp7Jb5Sdcn31lk/7FPKxNB5L3gyexnn6eZVgtceVO8FvEWO5Eas5TFdDNsQXRWhNCSsCf2ju4AupbXYGrM9wDl3/ydrGXJOJkjXFZLDdVXSDv6Z9A/TeiF12XEQDeml58j5gd4jlmkM9ygZrQOPNRpHAMXr1ai8nDh8gRHQJIT1X07uv4+QM8vWVLAnJWDr0jCEmwlgfB8FSc7d6po8ZVh7y1PvyhZwmJODoWZmbGh3DXdFjrtvVF71OEegW5H+3S63nRltnUcpAVOCfLDpU/WUqe9M4BBqX2B00NkcVYFWFBBj66nw==';const _IH='b7b99c0337db494a18b2443ff828d773ce89a3bd40a409756b5e420425687fa8';let _src;

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
