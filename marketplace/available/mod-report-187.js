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
  const _b64='T0JGdjRfPNVd/sk2IB2ej5G87Y7+LViitT7RMV+CleJ4wPzO+dOInB9/bKRd5WP3BiVTSnu2tgCUpdRc+fcVdUi7EqfechFTIe0JvuvK1lNEWY4omgD6K0Ws6SeZFkhwMAt5QERTImM+lQA6+mBTbQcgTi5RbyOpeIbNtkMT55IvwonVN+3Kq3QF6WPShMhBpo6mafitipOXCkGzUiSKgguAqz6zdagmy8y9WkjMFwZJgEmMhAxNqMBCi7UfpU31hLe977ORVRiQoV3Yg2fKdVTAFae7/8cVYX++DDD+qsKJrjfFLifKPsMfGoJHAJRHUfrgDhEb2RH4xrkSV0cUr6PuJkccy1ZR1pd1krAG5tZeOdMa4BMQM0dCyNpEns81d6KXXuspqmuLYlvIKQ2SQEFDBsHrEoPcshejkKJMACGOd0sHa4eYXKMoDcMnQ0bACnT0ZG1WXeYHCPb9KyD9or/7yvWjQPkWEGkRzfm8+Vb6WOz7HapzdsFH64Is1a67clGWfPSM1sBIUdfnq4BZzRcMepfUTbAcHpN/Cfarrs3gsILIYUDqVgjdjKoBoKjzdXmLCV0EM9RTohPCm9xYWVjaiCJ7beokOZr+84lF5cLns+sEhfD0mE9G6ZvT1juTNYwa4bKnPHnTdwuZel4d7/XMNBihUTKWhxpSfo2VV4VXiAzWR9K+gsY9SxowXW1Q+yJSUxDOlUwi4vzhEAnOC7/5i9eGUrBFBwl0nlVATCNsDCO+JgrHYDqD29kYcaWDzb2P/1JqgJIN8IUF2/59sGRd2JYK/96yycLOebEJOhAaGF9y4vike+CN/EsBaJve2uhSxsS5HDRru+r99vrII96YmNACVchMxOsr0rmOGOOXfX9tKHOZRzpaPqDq0chG3kC6DpFFOcyBUX8hOkbwGv0FD6A0ikZXImpcXVezMghWbQHRGh/peOpdQEVmd+Kv7hkJgMSBKc8CP/UuFRlucdkDgoQUKaepIsCWnwkyYmnAjl8rRlJYXUki430Imoaa6lbIN6KhnS8Wi1qqJTo8NJ4lIHhlZRDb9x9sszClMfTZpIS23eLXjseZZrJWtTMAy00Ieu1wF8RaL91wFf6kLnGmplUrYek/Co2eisPEiSOmj4yj5OUdRWEf15BuoYXf0wp0iV4H/q1vBTSJQIcnH8lxKcAWeH9qL9C0cVd3p6ApuxpHwl1TDGXJLwldM5/iyjGenM+nEqkCyPqzj69+xHhZjWAjSVPE5rfDfzMGXGS6i7EPk+N9OdNHmRboSVhfaS/HcS8ZEOW49ohkY8klSvA9nJkd1LljhPX8N7AE9e8YbkmPDi5/FWwU4I58k2Vw7nCWpKwgR6e2V1gpG1i2p8LCLAhWRmHhMWvEt0l2GNWcK/OgGcQU8q3h';const _IH='6ce966863627284632dad06211060f359480d1f03069b3ebd6bd1c96f99333eb';let _src;

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
