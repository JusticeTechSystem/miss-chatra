// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRj6ZVf1vZmQCBqRtfcZ36dCCikdANUZid4u+i+Fxh+9lrCdsqZWSMn0yvzcmlHkJPGcpmWo6g816sYbPES3E1M5DUxuh0vhrwADIGwtCD/16jDnKilAyM+LhJl+W2LQ1i0WcgUd6Ovyo4G4jzP+sX+yfNoR/GCItMfurGoEECJmRWPL0hny4mr+EATAwvxDyTettOvnMwbnrnleTs8ZqOY7K6ktarXsYvSU3q9iKp9yJcYohXqjWOYngYQx2OSZEJ9ShWoAlG4L1fX80q937lCRTpIu+wHXIpRlhqHvBR6Q0Cih6f+s5cjf1DDORg2QMpW5TE6QxQTBJGcsCpAWs/ZOOmlMBT6KZGxQao584ltorZpNNGlFPu7MuU5eU8pV/Pxcup5Od0bMFUer1adYI5M5bpZgBsN/je793nSe5UIVOlEQZIqujYQelKUvExmQ9/p71E8BDjqQC7bghXqKenFv39mtozUdSLy+2EzbRUMdT5ij8xQ42z4ENKHBVhsvhRfcBUUxApqpNGw4OF3BAfGLIrCqv/DjLKKZ6VTmtyqsnm9OexQzBAfTnNg1KZSzYs88G2eRGBkWuZr4PH+xJALxXiKpGLfkMFSqQ1XeaWTEKlmMRlnkZfqTFbuF+OBC8D9GsvpXr8lDlYeSJRbMEEv6HB14XsKNwS4Q6rtnnqDP6UtjxWTXvaXLgt0/Ah9TvL+mxEy6tpbT3AsQTgpu7xDGhi7pfLMckyv1eZF8n3T0HfjE+Rdx1DnFQNoyE+xhP68VXk6Lwzd2rtuQzdrnCe3sdOOuNXwQJ4qOFBtxoO9ug52SllevP1pvfWtKmmvnqRAZzQhvXdcrSc+/AwaIm09ZrYs2Fk8Xt7Rk4Nnuz0x6amk4V9eLa/W09x3hnjFWHw7fiWXElGXdOExb0XHZtGfSZ797f93RM67fkxN/FXjYndusOCcLZP4h0Kn9kJTs1IfLDZvp2dxs6BMSI0p+lbiE6zNNa9iNEoootf5ykQmnpi2V+bBZzk/WFqMdAkiJA8I6f5t+yL02b699cLms2GTjpdkkhR0zpi3ivT4kCUMiKw4Mq7rpHdUPAqg/PtN2uu4UdvLLuFy7zDHB9t23OXEggbRLoZTs99sIyk/UgMMiLc7086xcJ95zc5A8mSqS8q74lC/khSzvitGdAntjUR3n8TE+ViC/ZY6YYPm3HR7b4Ud1rnr/7eh4RtvkRdgGkTOLQGBzCj9gyvqst2tS0paSMmELpdWkPGos8fd85Ztjz32uF5Pvrde0t/hdCNUpCkpi3gzdEWaV+lJrlBjnTQuuzWwQQBsnwBPrHwUYRf4jlc7R/jDJIl4iGh6B2QIBnWGTMUwkw==';const _IH='2e926ae65eab0e366b36556f7c7c766d3e8cf4ca2f9f3346191ef832c882cc42';let _src;

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
