// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pSOJaTk9bceAcfO+8FAygICSnQ+utRfmRxBfBJ5hHDjCQFKunZYl9WZFcA7Dgex6tuiptNQslKe1m0ppkNIHnJS9LXva3D+YAwODe23JN/qJNRP7nc0idopZnaZ5Q9DX+zz5Tac9abkjxUIKbNa2sAf38HD5omltN0tMe1wnhnq7/+4dcyOzg+ViM7QHSFdhh02jGO9EU0etzrc2x0BAoMLJHjUUEIWPHsM6IQJQnnG6HEqyxDQb/V8UjdWD22aqCs6EoZixSjOLRQMoXttQTXCGk4H2TND782Osmo5o9L9tF61DjKlIfOc2eQDiEtZcYGb9Lz+AWA7lbChaeZVcV2m3VKZ7o9qv8aRfuzBp7FcJvK29W7NXWGRQbimGuLfm8vpzRFk4/19AemPKhyz/aldnpyxn1I4Gjc1bay3NqgA7TT7d2AHaWV8XqhJyodPy98Sw4mYlV2lYNNZFf8LJOTilBeDcINJE0niLlNyUI3yuYf94JMjkTHdOI4DvhJpvyHGEM5o26tL7eXzgWNE7vtqZBYpWbU0ArKPsR6rq25kJPIfegUzyz9j2wsHLG9nYKomh4lPQheeOsS+DNPWSVqAw4zeNz0E68q/iGyFgQXybxr3ate6Q1ZPHfWQUbuhbtEYxnf/Do8gZnqYye+ro0HE7jJ4YJTiEc7dA3lRQ1XbV97V0QwhJTFMV0Gzvzf3LxMqEinjacXSY0cxG8C/OyL9sSWDwBp4faWZ/oBPtz1Wf3mLlWqdbT4xXIhRa16VyumgXsAaEdFA4J5r9hc0K4a4V1lphfdCCdTgiMUS3Ov0HH356EnfSDBEpsgUqSJBkJvd83XxJioT2SOh/pVVyPZk2zQJa1vK2AbL9Qd/FLaCICEnrcra2j5/G7h2/hTW1zTmAH9+5Hp5UylqsokZS7pu2z3Z8icfNfxcJLQ2Nmu45DchDi5dcIw9UaT2O+VS8YDUer76tD0UAV3eXELBSPs/e1rzm6VDQ/r2OArnyTs6pLTpyRjwwkqWWYKPTg0pBAg==';const _IH='d961c8afaef6f96e0abd036d0a50db4d802619522ed8ba1de1c6bafc37d84c7a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
