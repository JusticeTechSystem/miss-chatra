// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='11FBDX236N9PeGZD3TQ5wN7RyKuWX/jqVKxbdu4l4nSpbN9PgVyU6xfnPPmZnjsCutA04iDJztqxolEpdA1vqZDKrmSrt8Js929RMNaq14SHJNajwRyMk5JT8yRGzr5cAjP6/psttMLFCtyv3eHEFzkqbMxS203W8hdsn3xwLZZWRdrpK66RQEbST3NUWp0wrQlGkEH8kCO4L2XmLhdZHocRaPfmH891KJXFxrCLUpaviwgHmGMRYHlGd7evqQRt1cVNP6rAmkGFf4Q3+meDRg5t7jJDYfyrR0MDdFhll3jl9kn//pAJQXDxPhlbD+O/szwo7C/fwc7atIXsviau6S+1UmaEjSEyyWusGUu8DrPVFC0GK5egvrO1qQVpqt1wfnOkB9kNxs+jmIzjBzyK0sOBYlSNAV56pvovAnOIYIbG87eUNzCnNXvwfdts+dOSTvo77gG7DNY7FT1hCzLwkwTxcsOsOJf8zb1Y6NyUipLd8DxoMTda80niFQ3sbTS4OMFRMAnz3ods1MxEOvmxgPIDSP5eF7R0TiyJ4dkZ0UKJ1dVfgHlZPFxa7volzVUrDYqEoKMjo25c4qsYNmLQAShY/wSBUkp2+DcvvWp2tkxZYo3b2VLYiGFOsgIOkQAA+b8jtg0NyFG94yzQZQu8gKY52HVMkCaJ9bhyJqzEydJ8o8sK/i+T9uLQ2t7qk4jcMyDzV0eQws4QxljyTFrzIMeSSxh8KaFcMPy43skv856zqxcJlxo=';const _IH='c7257c92c0b3f97779753b34f30b21de0a28b9c8e90c7b50d39853f17b9bf4e3';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
