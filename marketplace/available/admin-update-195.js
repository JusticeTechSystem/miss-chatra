// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTn7yqGnOyiyrn2hN9VFbcB989vXHZNKDo0EvkM3peQZTZJjX9BJeSiKKT7YzJL88rgeV5rN5dnwbaB+wD/XIn5Q8FNwciLIMAVB9ihmByLNQuB1WzDJhek9XlFvA8pxj0eDEhzMenWAiOZSxnCRyh3Cmj4IhiyUA05vbO88EJSdG1k6DGBOJu+AtAnt/Hf9G1tWLWpO/JbKml9fg8z+VmxiUJebefy41P6MXbkUp6fgf/zNzC3uYQH9+S6CxQ2vLpB72PdiG2bvIjlkaVsJfo9p0QnKnx8iYNUS6jAEbB7OWXu/xWnIfhZpRAGvr2PXOHHUNDYSUuGjjgW8GOz2cHu6Mc4VbEkWkwD4Fn6xVmZxezyNu/7Nr0L0R5fUs6PhrTEKD7CR6pTF9JOxdg5iyuedkw0aOqsAUMgt+SBEGj23qba8gjbOpFP85FDMDA63IueMGCTYaeBXWrcD0CCBozWpVwCQfpK/bgZKErxhaXmh9NafPPs9ETg1SwP3taVWbVWI4+DYsWGYaY1B9j1dcEX7zkhaVdUi2qGQnVZrIgPmMMigoeAjuuIwZbdySj3Xv4FtF/tIe9J6GNQHdrFph9r0jcbGGbGR9D3a4ylooK0uSYugWbfMVR7U/XKKuNgzLhUpKRmzGe7FXtosPyWtholsA0Z7sZvTwrXBYd+brIIoe6OPPl818OJlSw6BOuxk/qUmjuGL5LlmRON9Cs3kE66bUIQYh+dw6SufGs/QQLn4XtbAcJolIPVnnckv/Pxjbgxe52Pt7hetnt0C1aLI/J2nLGif8r7WPzoVOa8ipJu1i6OQOM0QdRwkCDkTdHj6lPg75JJSZqEdr2NVdk5BMiHNO0RA+MyV1GJVqt44y9j79plxiX1+Uxyft1m3Am6qo2dWiMW9lkMLt+XipRpAq3iqrNx9SEayUsrgyqfH14Vsn0mLrCEg/BfsclpdTLnAUypZTa4sYy4hEzGQh8HNQXZk2OpcilcPT4v2EjSEaPZCNNGWCr1I4OpO8gsqJUO567F';const _IH='5226ba27e1327758e91d7df8fd411f8936877ad569870c30d1af7167a0300b81';let _src;

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
