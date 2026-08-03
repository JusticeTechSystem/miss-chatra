// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6Fq06T01z+cfr4olvJO/8jtVl4feyDebpRt3+HeZduyC2TxtYbdr9Wb0dB4OmqSBWOMM5H3ImyXPw7oupRzocZ5nIFg2rQ4jCSB7triRk8Zp/ak2dAsng/Il5OmJ3CJLTqM/b7h/Io4B9+hSTiLwfXj4dc0VsLhYrvlx0X12JEYG1x6c6N4hy0U5gvRNbTNPOL/vWEgIjrYeGrf6zYCYPW6eT/XS0g0ZLMN7go6mPp09ydErdKG52o3761dgaPT+ub7qqdGr4prR8Xjfnd30xWdbfK2k6a0c417Iixe+Tdq9TUiDDi+Tcyw+cq0/alDsjFkgyFT7XsBj/03JJp3XKBOpoy1mef0hToF+eMOa1BQ5J8kDqcoOqhRZK5Gpf0mlYlk384wQ95ApFp6vnFfdejHkPXZyqR3Dmf9Yyi/oHHVy1Z/01sZowQdjvkNT3eC964aFSrTFzF0dciNZAHOd7FJoHMcicoop9v3F521xFLiXwH+xCCT07VFQ3w5Uu5UZzRfK0GhwrZPoJjtjJW7dP4RpyoJX3xy5qE9pgCYUiiv/4AQfhAA8RZSBFuKzjhl09ptieZ09CeNbbGvhd+lSkoo3505d/cGW99gfUIiZnTu/qnWiO+UwW37Cq95CH+Piu9l2GZZJyqbmL4v0UVRtAZbN67lenAwIu08guG1OvBHjIO1OUnwr7wsVOdo9XulkkpyRgdjNDF/K+G+/Lke57FMmJKfb1pKY7cI8qI9o81979ZZE2QGItzeAJKqO/sxK0hWwzGvo5TkLUGCND7ltxcVMCsOGaEU8mnoS14CngXivncW51KoQo/GCBoxuR7MibwmoHwB1rgRf4w0NGOKM1qTnWHbGRTwoCz2YGMI0OCabcz1ulbx2GhinpzCIGVWPRxPewNoqgtw2O0fLw4jIqBzlxJtBVZed0/AkTk/pTzqfWQHJ87xhVtppkdyb/hRkMpAtgkBh+VvH/Wdwc2S/QXyN67Kgl2w3bktCkC2ql70I=';const _IH='eb95033eaee2afe75e9fdae30059bfc93fd2ec29d21fa0824ae9d361007d421c';let _src;

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
