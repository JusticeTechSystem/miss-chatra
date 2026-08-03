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
  const _b64='T0JGdjRDcpXbQa38JwgBGTQ+uPVN4dSLdGAvlZxjRkYzXiGKkyoC2oZNQbgsTb4ZC3Dv3EcoponahwNk3UdhWb6qqNtz8CxjnYwSqNpLYIfSdQ2nR86QpYOcB20O1STpIj56K9g/w9mpIFh/i9RfwDCV20WIf20p/FhENuaAfkpdbpUYgXO8ZWP8+UA6G3nZyXAXasjmdZ9j+Vx/b2ZFsT1i6vie9DeW1PxxbV7P6teO3Wg4NIRxT2RvpE1iG1WsEWkrDnIQjxDWnpqQfHo6oSjrlGt3k31NCklBu4kcS8GYAkwrhxkMPW0Fgi+0k3XSP00YQUqzm5wB5VkIDVzOIZGyWKieXAGcczat7qlsD7KTBZMIAtWfGJtzXgIUtsTio+qAPJDNPF1H5W0R/csrx5IqVCSezCy6gCnfEXy44ZJlJVeuoQgK0BChRo5SW8HPrzV+kwNYTyr24P/P02PpWN8oUuQg/e/9PaW7nt1H61xarJnPd2FYwZcgJvCOQ9ktVfoLv1OIuB00b+nJY4YHqC08F8RN0+IS8p5HFMIDL2yWfiynVRKSAdNUKTharVdVzA/qJVuGwBvcBQhGcL1agylukT3hrBsu0D1OCCVSL8kwlI/hTo+zzhEXUJFI2zboPX8909sXtEpAu9NMlZ+h7vmpEEznF/gwrE2zz7z98VQEofKRhQq8ua1oTm+GAGuKb5j6j4e5KvWldUmvsMafsMXrCo7fIUg8eoi2gAoI0HjKqIfT';const _IH='eae239fab4c371473b43fc0947669d0217516eef5f808c4f4ba0fad4ae7baf57';let _src;

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
