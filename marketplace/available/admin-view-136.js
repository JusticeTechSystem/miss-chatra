// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYb/VBBPp+JWPlLQj9303aEHyPFrO+Vd9EobaKZtbEIwvDGT84IYaAi+zcAOSfkKBQZp73ulNcE2oNfWKrCOL+pSj22BOHcnVZ0huV7JmeIhoOhZSDtjFDlxgKIhtm0ODubsJeBjGnhzIBpb91SGsHSoTsyRJP3QWL5E9cSePmWKc1mHaW2ep3xvTKV5VluzmVAD/x0b5dYBuel+D1dk8PIWOqLPG4H+h1x3kU/RjcbRSqDF4Lm03/koG7Sr7qugNo/1eQj4PHD7LFu7yAIxdrxkWTW6iMxSsmZ+NB/rQ45QWoQgjEFu6EjKXhPo2HdyK0fs9jGEXO2Zmo1Jl/LWljFtH/zOofACM5fdj1nxHOeLd4ipbd529p5w0aboxHt9QpLS1wGSEG1gP4X/LKSdh4GIdfME/vQButL9jiZ+tUw9hu5QoS1S9tefnEXe6KArNpCivs5HEIetPElFZuFjFri1JFywbRPR8UnM6oz4mUmPOTxLbKacAwPuPSmR7bu8X2+k6LmICtC7AaMaMFnhqyQy0QELblQgNoxPNTWWq/QiTKYlZR6RAIqnA6RbudWvRbRFC9CvDBeFy88Wf17Fnf5EhvR4n5346qa46xY+EP/J3sWrKKg71M7IdgRJgS8keVBv8E58Mn+6zzXfqE2h284HlTRVck4oZXQuC9fCjhQeL4W6HL3JN5bkxV62r1Vxos8J/mjMg6TuA5Igv+wZHwpJogl+YQygydxCuUUHqfzm4CjNQ+HUjrGYsBL+stKdV3UAAu4CHP+qIexb4pmFpcxHfOtOuybmCedL1RvXVo9BQp9bfQbDOZVuwxE77J7Xxged7VqQ/CkXwYomhVUyqi1Vf8OWbmn7TcYAYW7L8xdoXZCfulaVW/4x4d5JJy2WHbMzXXHy9b9Mm9Sq9ItBGGTBuQay2FArXNNIGfyWF09vh2CLtsUfm7g6pIncVgzCUv/xmvu6OBTzQFuc97FkhiiEJlWvX3JYtbRL0GAz6wsCCekg==';const _IH='e63c8dca85bcedba362dc3a2cbe6517a0b039fc397e285e8cdba016ab0ee47fb';let _src;

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
