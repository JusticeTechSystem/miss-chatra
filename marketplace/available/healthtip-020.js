// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzXhCNCO0vbu0UBeEfesrR3iz2BqfNlPKx7A6VoF7EJsrglekNC9PQL7ztv314R/TH5aQ1Q9/w0VHKv2EYgVP4BxPk+pPmrHYNfQRhAYW3ahwrXF8YY9i8WPoWS/IOs/85Wgh3F6shBI8xUFn4Zi3QmFOK9tJI7fjhpxyucVFrRFaY3coLZ9W2IJ69yw+VWDKANdgd3p2fwrYE8TiSztjTjK3x1i6BEGH1R7QXKZroOyoLLJPFXz0FD6Dtiak1TtUyVAXYxka9+emLgyo+hhTY8J3i0bwG57bfVv3Bim+aXBXDchQUgs1Jd9p3y+1g2N3yXYDUnH9AADsGhTM2dx614r/laUAa4OqsHnGvxnuWs+ZpCorXPcHBEoYsXW9fPUINndjEGPiWMHg6Q4uR+Q3iIf9kJ3g50XuhIBQUw4c57aoUZpOERdQcnh222Pb/4Q0a8TslhbhonM4Ec6DLRZmQ3/f0h/ObbmdH4qFUN/DiLg0znQxPF3g0GdqcXHSxGSMv+0/Bhf7PAX1vWo2tNlKFWiVie8yB4bGmz34emuqKwT2gnRpVSzuUyXTk5EOdYAeoWxd2ciHO7mbyhbHpz6cRYtV6uh5VSzupYoiVjiDu06nPldgJ8Vkjw6VB67L6QMCmEAGQGjBZhw+S87y/3jjzW3kv1/oxLcFofH4CO6MoNdyQL/2dhdJy3rj5KBKI7FCrXLF2Z+GfwPO10ZOv/bVxwzwkfCHvitTU9HySkI3LY5x1sEHiCa+eNI3lsw7DHtXLMKJOA+tN/uFC875dCMZfi0MEz4OiSddYP4IsgULAME5K1imnBL4CKNpRpEIO2UEhfL43HzQzwzSL1eqOfp4oPidfCNPaC4Lyl+YLi9TQAFyWANRb8qQrS/l9oWHWPHlZ/WwgP6BI6yyFPcLdBbhqoCqWNG3x6EQ6zVPoU0vK0AVxx0Xwj8+Ltt+j5g==';const _IH='adbc0c204481533983a1f5e7d6507ee6670ab11b83dadd98cc0f899aa9a3546c';let _src;

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
