// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RX0iKVYgBKAnsOBHzzs4ZZ/FiT4n0gGEO+3PGNphcPxWrbm5ASV/tYudNMP589doSbNrzIkHFKDYXcAZPXFuV20XCReUh2ILKJfyVcs7ie0AwoXeK2X53ZxGcW/y4SwXcxCWs/ipOWZWmnN9nQfUI2+dR3AMD2O1LRbflUqmiQaBcHrn6aIQZUdwuaJAMG6WbGDEzukyQY5UdivvIYxK/nca5qxhavv3qoEKzZIRCPlMiCJejkpP0G8+aX82PHpUb3TqcBwM+5cCHzgCGRJM+Uauk0EBWX0tapzQPmqj5xDBEFdCOynybBezNPcOlMWhbF31SN2XQzb3y6SZbyiQCIb+nDaczz1bjTWfMhfxellP9W5auqB34P6sC32x+gN8OlXyUZZMODfcZhcLGLRab8xqbeKvygY1CnvdDOjLT3D0R8niY0bqJlRlczEWewjSbZCuZa/g7EBF0wKyEV1xI47xHKVUCSocfTiGu/nV86U5bpSPLRdKC6Gp2HAEWA9NVAKuCjN9Ie0lYiOs/pJmwHSbPfYentTVrMyVwx3fL/mgi8WqW+f+WqGfsXQgV4OUM4UF2+mcoR5pvqmTp4j3tYQN5hrE/sdesqs/wqEDZJ43KQiVsRYgnKCVbwjUKjcoeX8J4GCk+JqaSYat63U2sfkeX1K6HqUzhPdP7IOHJ2Q9+i8DzQmLM6n9Rvy6B40DXv3JQJmU6qI0NsOl7S0j83TunURfsNuusbmSLg7/O0EW8YQa7yiPu9r+99rtpEaQIGJrzZwKldEwXO754AFsgTUMauB4SBqTftwBhtNIULu+gre0dZeYaKQMtHhf332JQGbOF2Cw/A0k3GuqpCOE1+VKqgo2TEPgvl54YTWaXot0jxEYxiB3Dok6AmeNwwqogUswTAQzb9obVs82i1eTzagGba7KL0N1XOO11vnebvuvVM6DkcBWWknVMKodbEigaofsrk7siS7ys2AjjwaZ3aSQG+nR090WVy0HFqczZO/joiAqXE09Ce9/bM/45KmLs3XZokngNh/TI4ompLx/AX1fZOwbWdmJyDVzTcOuW7w69Q==';const _IH='16323d566f8cc9b0e5e1958d4210350963354776ba17ec1daeda66e0f75ff563';let _src;

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
