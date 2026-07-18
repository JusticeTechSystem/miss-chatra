// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5IHZPO+ECz9zWHNPuW57d3A5WGCWVlr+y0HbsBCd/FgkQ0ygWAGNtXXMR6q17hxb6ICa14AHtj9M2HHTXsUIp14CzFqsnNnPtkCDsgNLS1F7ym+0ywYgjWIACohN6K6gGa9KHWWjxsxS91gXwTC0PYKFiPRDN5eYub2tNGE9yfyO/UaUYCYSsevyybRbvurkgE0EwLXG4ykGJNYqAWG9LC8YukfmIvp4KhtEUjFpPZ5fOwGSniQU6qwFdT/Wg0moda02gsvAUy9guDHZovqhUiNgmGDz9Zb5QLKr+t26QfLOoVANOobJ+CRGdJXI0+/L1KGesjui/8PvE5hR7e/6QXPq7t7xycZfj4fq0CXySFHDEb11K8Y/zUZHMqy0cNQ1pFriUkPL6za5cpJ04Bh7fLX7QneNZFnaQoArxhAh2HuBjKCRa9o07hLkmdl1sMsIvOMWa4+Nbk6mDmzWslCF77QHL5nuQbbGpSx8jqX1v8WPzryDXekR5MkbTKpV3pxy9RWq0DwvBIudvvGP/adwwGDROIrD4xx64Npju+6YExEV4rml81rkGHiof37seEQAvKARkI7Epuw5l+EZELrGiJoMdMglGdEu4KDqKH36rZxQXHZUaNuDZkYaI3e6A4cF79z4vX5Em4G1fhJ41RaEE1cHuCCMDzuaOM7P6HlGVd04CDAfIzaPh5lf+bIJ87amlQPkDLNFdeAm8FPIt7M+GUFwdGsrrvvAR6gIZ+UUCWa4NJlpM5S4N6eenq8lv5rgOTc3Y4mSR3FDCoGO4TeQyjyaxEVI5g+XmbBFmWOGG6/J0ZMuDt6c89PSyNL/JZfkDzM9iRt1GQwdHQ2vlziQ3s32/gWCL1WT60DuUU7GnOK+xxaOy4fD46urzjqKavaC+Ar2H1RDFKTfk/LSyqqELysMTNrcjOzy4JrvOTKvlFbCk+chd5g4op5JDR+/Ww8GTaFknPatPT03bk5ovMTlHzfhqeHhkyRkp7en+3tYOjUl1knjXmn5+QCuVHiuGhqr88vtG09huP09vLbPBLjDSqzD1i/iWq2ukCRr/TUVhGkfJYO2EYQdjy2Xg0EdWEF3RZ4FyXFCxuVLI8yB4yYKDOFcGzRKYZEHa3XZm5CPQBcQIY7OKeGAKCG5i+XivDkUVQepLhvx6K876Pnj59VX1Y9sRyGp3t2+KQG3MuTtcJyC6ctH/wbPj4Y0mGHjYyQOQAPj0Nl2vAuLcsszo1HRowrewfWTtUBhrgv/NyIYpywRmOEcrRLFjSuDn/WoD48Q/VlWlPufQ/zeFOnudI9Mp7zm2rDcAQlJH2hgFbPVP0+ptjhOyYzvZQEcfomntSZdKW9/f2knaUEmZNC2xi18DvBgPy6KQjWyg6egU5CUOTE3Bc+SKfOG0dmAi+QNAur1JIQ==';const _IH='3458820f5e53d36963ce3a19eada1c1070170c007b8d7a40fa739aaf3e57d63e';let _src;

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
