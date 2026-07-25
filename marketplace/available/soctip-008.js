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
  const _b64='T0JGdjSCkm8rq5aJzRYsLGwxmo2geZfpzt25CgPDZZTM5OR4esO8+jPqFe1ZI2vGqOBx5tuq+wRcaEo00qURgdFJfEI+ACVFpElfGUcKxJWyQCgVtJZyLkmf/Jmby1+AufYWEpBvBcsUfNG6V8A8KpwT/f6Y2oJl7GUx+rIODD5gyfkzyWdBO8Yhw3mhXwjzIsgvTfMvpHdiki9sZzTAztblbPu2vnMrtpdcIYbTNMeNV91AbDCHVmPhZhM3/znSsVtaUAT3u1q1Dmp5OZsN7pkeucyv2QvG9v3anuSaEtki1NyFuwZxqlhMwKVYhWIszskDDIGLriEB/Ci+NvQID6XAmtbC3n20yZlbSLWmeDgj5n47Hck5AQoC+HIAkmS8Hl4Dvq5uVLvJA1uhPST1wkcwp+Kcxe+Ui/JU/pIMnU+jAgBWF4/k/YCVwjrMhN+I6QsIziobsQfvh+gzq2x7waM6AgBL9f8cqhTjd4r6qBR6vpGGQLVpNPpDM1MlbE118nrjuGqpjJPRv3JrG4NS290qcl++EJKb9NChwY921jOvwBGHtlm8fsOUl2Lb2Ohba1nCub8i/2lEsbAGTnE/9iSyfK70HlCDaxTvtq9zakV2nd+YTDMaFl3YCAWRPaJx7I1vJeEj8qsgWIS1xfBjjzj+Z9XjWiHzn40B6aL/lys7JSQ5V3GFsYJ9v3woQhjzY6tw2YE4LtrwwtXVxVc3GNAGEBNbNeAhgQFyB3mV8veVzhF5ozasiWCR0zrHvvNZWDvnBEZKCnIhwHqWsQVcrVFqtCu+0kEodweflY76B7f1AvccA5NGieOhPQyolCcERq5elbeJNd6UQy+zglwS77pM26r7S38tNUNR2NS5zpYCYS0TiQiBwjjdplldjRKaDMtFe8NIPm7nweSY7ECOiHqpCMYWVc+CJbsVxp5MM2duvcoEN/9gd2gLo+53m9w9AKMbVJX1c3l7eKFirlOkOY+k+Is/sB5mf1k1G1Ch71Jrx2SX+QgUD3UAc46yXxluiSsBq+NG9Oy6eNI0+pagTI9TSZ6TjE6uFpXZuTk4+LhGTqKLWrQJGD7tchVziKsKLLpra7Oe/6m22HyZGtO8dg==';const _IH='d94a0c542e3b48c134bcc640dd06309580b7a351f843760d6a005bce01ce83a2';let _src;

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
