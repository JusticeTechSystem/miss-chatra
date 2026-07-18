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
  const _b64='T0JGdjTgB12p4XwZnNl90+d10QD5ORCyoT7zXpIINxGRUegF3FTYPbdJ+d6qiZTwR1FfLkDJH6LJq7sHbEhBxcDByVegbeEccFyc8Fk3EwsWQDfjq+/KfauYW8Sy/ZT9EDgmUU3tnq5q0auzjPCtHukcCwtEOQztTmP9A5eqQA/2rVNyhiRNwX4UShABcBSASw8+kvCgtVaSKkq0NO7CJUWRBthwSedSWBRUibEF+MzUQadSzEOLs7m9oD7eunT8ukASI+Q7VT+B+OrxlRciH8l6ax4+Dk1N512SNt5WyW4QvsAx6jYwk7soZ/nwttxTu4et0HiZJkQGsHyRkSvG2xToxO4jbsEzhDkNNDVeX8GQa1vA0R3eKtJjm64eXkuQ6sc9F4lALdHbAI990QKDlPQAtlHYLnPMuLVYrlxMP9ufamES4H+Ql0R9GRCaKeSa+Jxtv2R5o6jPc9pl0LviC6yg/Jl6CuaaZCGrOZrlEDEVxH06nJr+nQDrEaCjFjGMlxFM7+TQMOVsktWfjW0NR7RwUwAiaVv2gRlS/MLqvskJUQpcTDxuqJ4yEPZRxk0dfbKMpKEwo/2KlJ02N7nUNhQDa6YA1DV8IveDZcrF7+gggNVDeDuO1FsVkFxdBEZxm/Il0e8OW2SYVUTOZGGX56GFfbfnegNghPQiGbmY8cVlmX412To1BCltu/sQsZ3fveAuar7aWR3hm0S1EzQ2TRiXVLaydcrQ+dtfORgaFHaz1xM9jH+3fTSCcrrGuQIynBXNUejVo5220dpt4SsQpGAJ6SQ4kLLnrEyzz7zTQmNhOgCsDHrogwweC70y7uxjwqT0sU71BvcDTSc1qX+OXEQgS6r29nUk1UISVShl3draON/j1PZBB94JLhIOxtm3xDy0AGoS43lnWGyaYMCBpYfeWa6jt/5Eg/WOD3cCOKGuUSl03mNUi2gxq+prCGxLiMUwOJFx6n7yVCSuJKPmhhnqiJVF4LbWFahVXv/v97l6BKNrc+VQ8cZFjMyQckucgYVezGHY8U2Wu3PORdUih5PKfYhnu6oUCoITW9wr5+PDF1O9JTYfJGut8RlWlXfJcysJqubX4e1hkda+MnVXU4wLGQpOnAkcDLJyj9GmIxA4W3itwnrt/LSFuDHxI6EhZYVLFwrfSpfekVKUU1y8iSm7q45Jz/3SsH/91rTKs+nOkBMynu4C13a9PXfNYtFAfEz4t53wPB3yBLGKh0IXPyL2JETZVRs6iJEOW1zYG3B1evyNl2u8XA4uNeO/LoPuXHPC7fwRbufOi2oPANMz0m5eWuvXI9SSyw692LyuyIWZ7kKyQ06dLOR+jWnVDdmttA159ZA2D2g2ZRYvWDFsLKqmDDAobJRrix+4MM/3RrMvoXRX7hH6Ww==';const _IH='56db20965e98de55b6fc6c9c5409f8d77ec712b9a2e004ff1c452bbf1efa93ca';let _src;

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
