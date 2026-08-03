// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8MmpYTNXY6qCjoSoa0mV3e+fPHG9vPPzTntLfqavvjSRVMyGMLxNxb7eHZkot6cZTy5bcQsxjH7vTYVOasRWuYu5QqXCWdQawAIgo+Lzv64aowvw+mKI8OlujwXN2fVyj73FdtydTZ8TsZLwAuv9EM2lYClPOCPodrlNJj7evRgNPstBNVETR2Tgnb45pO3uDbu6phfTJQthXmJ3D7iMU1UaVwzyYTrFztTDUr1J9NB/bjYdNWTjKAq4xoWfUKBWV/1UM+T8mDb8W3QGDmWlGLvsohdrLAK503ORzFgI/yai5idMb3e58qGgR/6IkWhb62o7jPBfFu2x99yQ3Ys7KJNE2TMIoz7GhfdRWBfx38Cil2xS3LAWSo4jsn24AdOlyE54igebvAuWKYlsTxFOi6DVqMp3C8JbcvdQV3INOtZVCaLbodjQAtKczTBIeFBl/J1wgIzgrjzQWQwhpAujCRgKTPYqrx+jZy/CCmWh3237wDhxqcgwmFf8ZeTeOPSq+YRQcLmI+FFYRt0TY53ihilRPQXhzv+SN8Oe57sDQSS7hbl0breOGEGXZX9JnjjwEevq0crM1KF6RT3GICrk0MRwY171+5CiUhnoTM8t378pscY+zvEeeD+Q4QvEz0IGG3rlgm5Lm/JgSVbXU8z63V2JZbFsMZluggBUQnEDcnNEglZ0AyDkXWE/QzvCViAEguwjtho66wrAYbcx9vvCOVudEmAYp6MybzzdQua7NUVxrYiipZfmPRq7IE37hlfWbD+3RXlhZuNSipgLlOyZ+HF5GBjAa0WtFGSnubJEbkOJkScktjs6NnWTyP2b3VnaL2SPFB1turS4RasEY/3w4dv6kR9ZndRgKKKzDpKzXvf0NmMTpTwJvpWlsJGzjOCjMuOTJuzfHQVwvnCt4uK8lGXXWk6cyvK7tH6IylCxrU27vH9CJ172UaVZWidc/5E7i1kRKcPxUCIW1K8HWiC1z+F3XE26wf0gc/HJjUSDiI/aSjCER2ZKL7rl/r/U5ZLUPonflWdMND6hd3+br5S0EduaCfo9eepsrUyi0qvQy5OFVTCtLIXkm5hHy2OOBpmrC3siS3k88w6mtLK73Yi8/6hqSh95hYqMJH7+iGExgfkgnFj+Zoy4T8XDDS+Q5dIBLgEExmmlDYFNENW1awhrpuDuHsVPbX2Dm1FT9dJfsqYeb+diJSSHHn450GXojSWx/P5tRBw==';const _IH='17ebff0b6316268d8183e78a7d3fd99e9aea137839a3b7606f61a2424aa944ae';let _src;

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
