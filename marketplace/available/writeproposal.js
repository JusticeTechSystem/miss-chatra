// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDHZYrlMmaTjPE/iMbrVXhKGfnziTCLFPd4eNQsfWeItmN2/g6RxfxfFquMELyyQ1aePbBVgGlowUzZr3RKYS7ovrrPWaheGEDTRgsXGIFviEon7iXwzZWFTPN9PQfyzKPCENnJRdkdvbcA9EEyBxLavA9wpl3Xpi2NL97CzGwnKkFbU4yxXPhVA5jFEo8snPajlFM+FgkyCX5BetnPO9iictP6/oeqW8V3svERqVwu+cZuS3eN2N2UYfoW5KjKCdPt4DMuGp4Zul8BXmcUkUTSlTp+xMKqJ4aZHV59DirOb3587L+J6McRyFaGJIiGHjGi7CitA+iaJFYZ91OOaZ6OKe3J2M32mvYZpqIIzmMybPU0oTEJgEY9p+k9mZ4R0rkxJ81eeCezzsLFrmLB8tUz8QNGeKhq8qLF2VSazI0gN8nROHfHxYrzcm5fcuZLQITElhDkRDBoKWb0nDktAt4gmGjVvHZrJBLPJtqJg7SlzV8Af6WztkS1pjfUPMl5WGokrWg/0U6rPDmSj/xqUcaE4JMtxnmUNxFfNY/oykYGzmlZqoTmSwoTGge/lG6VYqglXED2K0Jn09vkyaIpEk0kx3Am84ggZL6dFgfd8ED2NZObr+UsDiH9KomrU7kEOCyTqpV7kHEHTyu0z8kpV082Occg5rRv4daqxh+fOCeU+aWGcETHSM1+/qdHSsvggJBoaqQEheUvhxhZ6VlZOKRVMa6h3jF1glIlC2DYWGcqSHmsnrS1pA8nJ9tEPa6CYz/VS6dXJd7rSQmSc4s7jkeW1wDkPgKa7f53t7VCWlI1G3K1veZ906N1SkToWPToa4H6lruQ1WOOudAnXc4W5JNBrfo9TdR4wt8pY8XXCZ2XDvz3cRRfiEbTn6LLc0JLfVq7LlDsKY9HjsnxeX2isPvDHK2kUqYBIQQc2QXnhlfalDRr/lDLdbUIFJQXlfhTaT36IBft+ocDLwpIIZwu6vBfQCpbg5x7z+2p1nuOqrh2oqpy4Jk2rWLcaNTwZDUzzP0HgF5+8AtxsTT9rjM8RN3XRYX9sYwkww1zYudsdiwcAbI5+nQHSZDvUimOtspug94ZBVH6aFW6oEfGPW+yc+AoMHCKzxqchI315QZmHkXxsUEZ6gp8dOgYZmVfRmCEbJ5zo7yoHlFcVNMDF2/awzrvuqh6/ZAwUK+QLvfgc5zHoUq9385kHo5mpTO5T7qDeJ2XfS8FfxVDhxVJeXwJaoOzblY';const _IH='39ad802d493d7ad5571492b75eb082fe3279e03f1d6bd1615f7cc1a1a3d94d39';let _src;

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
