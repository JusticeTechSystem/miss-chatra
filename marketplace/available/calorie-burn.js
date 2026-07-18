// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0k/sO6blAn1GLgEKtFu45F89oG9ZJVNe/Ed8nj+DnRqf9KynePxHylNa1FpxBlBxQlPS7tT7iB1+2F34OvNCcwhP7Zy7+JU+6JjGaHfWgSS2ygn+kDT92qXB6IxFRk9SsLAe/76795F3M/9ehTJ+Y4j4Bx7Sip533A5ycUPo4rXMyjVEB/U0AIhZcL89MWuHHPDnH3KAjWqXqDwVfdoz7yVu0V9SqzwpoWQvcG8HET5fhiAg4ffXT31SYhxUf1kIB4QqNe9FHglUQrBeHMYXZH6CPFea1F7e28HPUcVftZUGLl/6GGT8TuUSQNLsvX4BoTlLrP+I+EJip04faoExpEApfprrPWqvgkworiFV15cxPOl6Q+zMjMyKJvmzOr64DT5aFBr5WvQ+oKwY0K743Uymb10Kf8YL9NvAtJiu9Ufesuayld21DJcJCX3SXCXMqlewBxYIImpVCC9TKJac4/pWVjyUYflEqvHeXeZsHZlgf7dR6yYjr8D6ta39SoNM0rr/cK/RALT3dJNFAniqhCSS95G3FjcTmjtawWmr2THJY0wOLq3VkLPPo3LjS+b17d1PMYvQDvMBMLQYJ6dFSGn0zqr6gASzaysDa/nOue+IP+kb0E7NYkOn3MlPS7MwSmm0q4hF/PYlq0iJosLJmDgT6+pbZAuhqvB5kajVFnOe8a/JZg76sA9ReMLubHJeDXofJD3DfPGiB6Xih9B3XTTMQdZVf3MdqU5BPkiKFcORh1I0G1bkfIOuSMbTFPTDcS7wVOUiWw+UttG3l+DQqTUmi0Yi3RdQlpEGNYEbL4f6x1a4e5KqaP1DvT/uVrXXJdFV6qhExyjaG909uQL0AJ0/s7I29RVqCKzwIubnXkMoGuxp1Jf1GfnpiCtKd5DVRUKcMBUWI6zPokuqMBX4LMcKI0DqEa+iLV0DVvBChs4BaXub0JVDMzJZ4hHNiQ3FtC7nLsDtNP5MiF2YqvrAt6KN1fV06rBrQou/h0wSJQd9TsU0bsTa0L7q7lrankgmta7aJLdzl5zI6HEaQyzRQRif7DlgJ68Peu+6BH74rtZgX6kR91jqWE3rwcGhboHPB+aGYyIJNyU814tslcyjU5Gs7DKMwX9EJwS/QhozJcmOMcorCxzMCTWorZTzMUn4jSm4WdSS/jrz5lZpjMS8OXI8cfhAt7gX3Ii8HktLJ3vKS1Xwu60gzsW2UO3yTJeWv3T/qioS2mAV7eYlcYgrwF6BeoG31585y1yn6A6ONPYn6qf7vCwj2pvnM6FCd/XTnqDWPPTlQPxQiGs8tdyW4UXb3ofuhsnrU7BPys94caBfY75UiSK+y+vFoXTrxCUjD4PdJXItwAkWELUTDEYsqJWwTWZuBOyb+XOynKdg/BvwaYhDXsisOypqMlwSGmD5ruxGFoNQx+0KTakJIwoeIQ9mM/g3/kf9PytI=';const _IH='7ab8e93b1d738dd8932ec4d7c19e98f341c3d8177155b18f516efeff70957023';let _src;

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
