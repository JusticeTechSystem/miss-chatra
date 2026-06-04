// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lt1qxxfrWkW37CFntNRLiOi/SpFaywOmtwY4hwiIGWemJBRPGSFIk3fhz46Yh6njw3Wfm8TY+utgGkR/eJeTRzSCGwQG6Bbuvph8TFXwnOaea++Us+qbefQ3hVuj95jEdNsjSSDe4YB8fg0qTqbFkU0vm8+6T2/CSckLF9T4Vmn6vlhoUppYy73BzbueeDO5ic803ugtPYZoBLPo0axT8xsR6fT0twmhbuPbrYfhcHG7BGH8K5ZUja1NUqlgMwqxaB7m6JmtsbTEidSUIqjAVEyPprydor0ELbVOvjav0IMjJvj6LiNPIZAfTBr60C9sPZAAAl11s/g/XmVt2xMIw+7ijHMzg9vKr0uL5b2JGJfXvTeXhkpCZNkVJgG1P5IppwHhhXnyniFUYK03twD8w0ZFBKQqoNDrrDwUGr04D5tAnr73nayDVb/dTGU604RlUxaOeKebOoN9OcA0RCIXd6OUZIg4Qj6k6JLTDepiZhtoJGSB9OQIK3Ym40xsE5L7wFHfXQtelDli1E8MJQu9IUF9YfIiY5yd7l+2rMGiXzMgDdOqQFBYVU7sIciJ8EyglJnv0SXSP7BwfLIABfdLulYrnFQk3ko3F6TeS/tniEj9YrnZc0gkJWtTFCsPfagnLcW4sLHXkx1BXZy6gY5M0J1ounyyeY6cyXyJdO95rKtXcfKbyGtVi4msVU0U1iOOUZ+TIzQ8msSpvMsZN7MMGHYXLohu/wW1DeMunSg9WnrO04Hqq/++VJA5HBJiQXwaDsddWbv+lHODf58yLkhEYvb9dXwFW8+folVwDsFch/LlGSm2HXTkZ3L3GCHlcQgu1GFZgRHps5rMGLWa3+e/LV2cWdlTooW8f1kH+OOFW2Ew1uHtSLqRl7iGNq9R+KAy5EPUYgA3sYOAropO+ewozRdp7VJKK7kiJDBo7cjOsWuPqopG087RKzDX63sKgkAMVUsMAlwxOyvvvh/o29j0jxBy0zD4jviRo2skGhDTGuO5zYz8v1WaTEkqIVUt8hlflQuxuVluc3XjAFyfTk2+IJJKqIw08iUKDVweF77fIbrfgXPq8nt6muvOZTBvFxSxOKtb7wQKVlLWTBpwYBdkWqlFuPAiDAsJmdNoRGHHRjS7nATxqmBqFc+Qq+ShbJAC8UwhdHagMTxhhiXlcLLG/+5KkFiq9kEhdwYjpXKx1PiKslPQrrZIB1SYqPM=';const _IH='f0532bd2ac024ec2300073f4270df4b0e757ccd6da04c54af41d8d0c7e954028';let _src;

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
