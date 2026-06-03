// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iKJ94o0qPQk9eTy64YtXKMe86ZpxkOEoM3bi3cAPgSfU/eRyT+R8XJrhrCSiq+/PwOVyjymm4mzGzMd5a8qM9iSPE7ikoWjMoAaJ8rD6h95JnO7aE7W2RvcEEPfpewXSUuZEqU5IVjYgnkWC2eb5sRvRDgr1YvAcJVlNcZzXlVvGjgN+148S13cMsq0rDi0I34dBxqqQsilJUOfOgtkEnwCfU+CPKJMCNb/hE3gCSpJUNkzmC+5LdSGELFFQpKHh0TW4ZkInFVsRCTzaTAXLC2klmKvMvksqHL5Ma87KT6ELtvg5C9WkngCmGg8Tu63c8gIwYLYGNuuFy5NvHJU5QIyzMpgzwKratHUTYrOYPkSuRk87WNmESBD+slv6J4Lvg0LstnDLLYzPu325lS6gf3GhbXWSjd4Pmy+oWrZLuF0vu+hR3odxbQklfnQHC1AzCBAwIfoU8WLNaqvANeqmlBDSBlo3bNDuEUk+nC743mrDcpmkS9FAXNqifykjEzOk/+mvxZA1Jmvv1ON4xKfBEFBEfyuQLK6HkYTSL9bDuLJn7bD5tZI+SD/IviOKmVjjjCXAMvO4r9G+dkrsBpR4cTX98/ZNjiy7N/Am2Lsz+hdsID8UmENzXI8GOyBX8+D2yWbpz2h99bZCv0NVoOakqIuunrInuJeNozQYSuhIZ/I3+eSuo/sN5LgFJJca1lqOUFhMF2mdtMJxFqcLvalK6Gl6B4IOvoQUayw3vZcFznic2qh9GI/ia2cKAqtBOhX2ISgEjrpXSHJ/+0dKV69y0XImuwIGz+eyNgVPbbLu2UAbYh6nzakGfe6J48fFll/X8Cyr8lIln/j67dPdlr7DqOwvk6QTCjIv7LvMS4x+KnWR13JVdyubs1H15h9NtjcUUY0ajxgKStezNAUwTLDeZKOpFHqjcrem0XEAjeaQBWQFH5KWOr+mTKZLaZdZsLQEHX3r7aggn84aM1QisudwfYXzQHlp3mAoKMl+BHrxAgveYiT97Sim2rA6Qt9cJKPIe4Dd3xTKBJpXkokjpCTsyMlR1XeKYBYvAQYUrMt5QJYjHcTOot+vGG7xp7dydIlHzfSprkWBQY/9ZJobnALPfvrQpgyKJLWhJyfuAaNVEqBAoGFGilMfwCpMzGr6ytPOPNv49hbP85+y2pPmw/0vdClkIfUCbKUt5KpiqRw8HuoYVkwKJsKbDjJQ5/Pn+pPfRqcytJzDdH4zjhI90qPoxlu5HFBHE1RZYsZeJvBmv1AaCdv/urwgjST1yFUoi2zIth+5OodDeb86/RQwhlV9wuktD9yNgy70MjoWXB2xv1tzdl+Vp4lOMjs/5PGGs0mC5J6tDwprheVRqZA4LWqU2YTtN3FCqm/2+ExxrIZJG7E0oebGq/RioIH6SxT+y2SALQLke759NsMvdZpqUISsqO7eCkf/c4Q8AYRHjV+DxDjP+1xDXt/4IErxN7Lr64U6tgIr/MYirQ/eLmNGfVr9UUDZvDSEddqcLEFf4j4/3YCfb8hRlfvLOMXdZYcLi9IZtoLL3ASDowWpnszzUZ3pXOCn+csTM565qdRXBI0c9l++KS0BNALDUOccGI/r2+WrFpKvMwBbq5MpP2NlB9FtwvDcqLy4nn1gPTUspeWrMwpvYmsYwkd1SlWPfmLjNFp4WtLNwisU8K0ZeQElsSX1/azMTDREK3iklNN1kdBxRSbUfyqzdwWIuG/H/P/a+vMZl9/WdoCKFpllkxUeoWqpwyRWEh3gbEguSwTNcCXD3p699MyA7uNt/kx/LTPBGiSNaVMNg4W9uB+bw+Nl/leFYayIug==';const _IH='eeaaf4f53ff6d9223b777c810eec45276611bca43db4217349f37893d55ce3e2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
