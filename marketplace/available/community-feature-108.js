// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7WVQgC+pACmHpzia9Nmg3PqszoqZdM0oJjgansPgLfSwCrTSudulh1cnUoSud3u8CICBWZVjPsLWxIpRk9FSAHmCBuWlN7w6pBXEwxoqM/cN+pyHmWrQGT310YX5NdRI+f6u2g/o5CWRVXeX6dIIA0374mrpb456QqDmmlq0Qd+wVkFWxjaniJW8IOLX9zntwEgOcXlEf4v32idM2otBSU0nadqXQjebktW/QQ4FcsP+PGgksFTaEpgrPwxtW0Szl/+j6AF+7m1/wLCjYpP2Th27Yp25+njeApFrB459+XfMnzaFca45YYGNsz80eDduMpJEZM2wAIp5jsF7Ak6BaumPBXIgvJJG7DpFY/heypPf0qVKUSDE1XMweMhN9eFmaDyd1Ze64cwoiqSZNThDAReDLJblxG95rKjR5VT+dKOwX7WzAG6xaRR4+p2ZLFI8cbKdt+69EF0mC7VX90QvbjBWrSit9Qod7HNxUgsH6T8XVxpVVA/KO/WISKhxE4StxC514GfowhNBUWWfPqSkz7KzS/DQBFy7SKigZfoxE1WPI2ogBF7WcSx0nLuyJ+aEPatgM2isgzypbEj12qT0cSKoMK4FJXxQKDKd/NyenrBLLJasU+op2GS9ZWMVyK5DKtq3EUDbg9kiWi4hSVd3Nqq234PlHxm00m7Vo3q/nN0jz85FX9JeLzS0wjMtuCc4mQcQISBfPr/frwU3b0ANeH40QaBcZ0gOXxRdspA==';const _IH='dc4b1d9cd17f52984f72a3f21f2e24d294b0e83c3c11d8ceb3a481a0b24429f0';let _src;

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
