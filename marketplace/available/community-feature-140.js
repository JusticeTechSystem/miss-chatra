// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDGLYtBinm8UBET0AE9CpmQd/UpPbb7zUT/F/INTlwzlLsaCRzn9zzlkafdYA2Xhh/5BU3TZpUIxMn2FltULU02SYbe+pegaR3ScqsnwV1cmlPwlaqcXGTkDrWtSLkxjXUNE0FaTuf0lhA6wy47EmsfeJnaAYEiNCxtQX5PIlnlCup1uo0iHFZN9zhbQbo17tUw01OKCxCqiK6OixdMfy4uUlxLMikl5ZKVZF283PrPjzrnFqIGzE0CGjbBtWrTAj55zyIzmYNt+3hB/jcPPd+xbiNxlyp13ImXijdha2BJbAhXuS/O6wK7+S8BO1qsoy1Yyr5uOBPDCelQM5lRLKMuTIfHZfe3stlG4LbgAuseRFUIZRKERKT8JPAGmrhN13pk6Iz5DTVtGKnjLZJI4paMlodXA7sYL7geHZLkFQ9hIi9KugKOuleGI6YdXIQoEWgXOakcshfNyYtU2mswfXHarb8Iq8Wm+GbYLNJkhBwJ8tSv88pxIVkEq3OdabzXvB+qgqt3CBiEKSiOVnsTpXnTHJJW5ZGx67MZVM7Eu7z9kkKA/8Zj778FvV3d5DjvsJUhgntKK01q28HcbA/HZArOTvxFkHTePohGn/9+5JGmMvZpNNkaZfDXLN4Ac4R4aANmBoEphxGU5HzXoe3b86NdpCkNozEgp/qWpHYHDG+HRjhspFKv4Mt6Q8lVLMIN8lTjiymFCJM2zW+qjWZr2uARYiS0UlJqG7fjM05VYrV+i31dyhxvA==';const _IH='0e38a59abf5532236edc623f7ecc099d98ae4461cd1a8b767f8f8352e5882652';let _src;

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
