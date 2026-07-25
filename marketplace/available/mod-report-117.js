// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9VCwJrOk4vkbspQFMYAdQ70jdQoGaWGXloNFY418lqFueSz8Td+58gMo3ARsrn+DfyfkgqE+Ggx8T6xy3JyGVB389qF0EuWw5dUuRSLdhXs3pDsxhfOvUkU+ujR5olUFo7A/s2GtkFdzq6sJMb3LPCqdIM5AK0QJt/AuZKXKewOzPoa66ZkbECuR0f2VOeZXzvDBsTAMM2op89jQtYnPIWw037RxUrzTyDT2AoJP+FmVIchCcy9mGS+wvX2q319L39X1+Fsn7DmMnfmhzi2AK4XO6LAjUA520UuV4WHytI0Xxm3Y4rYaMofLUQ6BD9VwEFx2wl2bwr8ZwA0Ec48iXXUTPzXGCnL3cpXB/GAHL+67mCO1REXu/t4hDYTqK/HNDlzIlycerFaa7hxk9gTvsVKKcBLTJ4XKgXEC5TiZ6NMtOWTiLDmPcmzi1sbY/ddn3LLhoghsS4WkZY6Qk83ymUF8nIKeF9qk5jR7toTr5Kk4VYGL/IOu8xJ5Y11xmCSVxeJ1RMTCMfqblG/rEIbCxeo/unS+a7qxedAPtAOSSjHCce8tjglqKoNGub7qUXZLFqpbQsgPyPZaVcpxlr6uXT0v0EY/fDlsI2uURJNqDGbpE2BOmXZVzNLlSGR0U+1kvIjTya1D5k1Nw5UD234fQbwooIAEBpIPbhh4nwgGrlhPkuT4EdC2tC18MSZLjv0KZ7b6kbWkSkIi3MbnyoSEeJ11RdLwBg7kHanEzYmSAPAaBM4HPRjZmu8O13z63dmqNEZpwcs2xCLbVE5IObDm7gyDxSTdSmGkCk5fpGU6CDvkqc9V4UOmjnSX3EbSGetA0v/w2QPe/BfrgkGvQEvZwVhIUwvDjKVzix/4qixyA9ngvL3ZydbYbPhIynw8muywxyk59yCTt6xiRAYCiVWtQSUCacKcoqNXRflUDCgvTkMrvradEG/ZtXs1QhPEJuezF9oBLg5I2rOM/2ErJhZHhzT9hPUUcKIJVhFJ5zv2I6HlKrZaVAQtQpbfKDC3pvNpbzxxOqmHvwiBd4pRM7eoJjGLXE8ujKTNWgNzrSw+tWnoYoi2vCCsFUA8rDbyUUQ29wv6SyYfKbiJmeZ/0z4FckFcnPCsZT8oqAsuz1FZs14p366nw6eHv7a3w7QxmJ5UtdLWveee0wRiLaJ04JJa2KXXWNWFW/2/8U71MZINmuAuqsKZ/y+B/6AJvOdQZ3P9D5TpxslECyYYRTbJoxX57bCJvBZ5S6L8ZIpHRfRXuo3w61HPgWm1Ip5ZjIVC0O0OLuKkMyxQoBYQKpOERIYvHH29Rl6bP9Wxwah0r3N4cAStp8atF5H6YsPOlKP6VYH8xznpqaqlDiyUljrsgxGYFT9OuOaoh94HJtFLjiGWBgYN+Rvo59zlQ';const _IH='ea790447e26a132733e6ffefbf3c79e523e56d78af9d39c421aec1dfdbccc746';let _src;

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
