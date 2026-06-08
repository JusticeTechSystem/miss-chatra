// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='58GgKOA9bYP2KC3YWF+ukDGiopJoIcSqh0/VblpOjfTzkAs705YURNXeSIgSG7vt19AHppB3mlO1irhRfxRP4uzEl7FUFrwHK/KyADPQD8bK484YW5xsUkiXmTgN18f9b7iwOrUxLn5rMEbX8QU9ANFmz96fks7ZntwA+HAuKe4UjotlEngl4mJoQr6MZWKuQx1ocv65+xKPbqFES16CViF+G2Ct9q/RsY4rA4tRUb5iD7Ox/VQmzPHd8llQSvdHd9yYiNznYJXQeDw5be5vvifOnYUgBO8/IPuRX+T2BNyKn1g4ruSBGI8TWNxTsuQmjKySMTa7BzYDikEKhxulD8cteRMd98/5Sfdo4SR6udvRAC7For/cAI0JhnX8yd3lWkv6VxGAhAfCeBN8sUq1HxskjM4syAj/QNDdz8q4RDgU9t08Z5ULDnkiQMRqLJN/oh8SQp4jO1fuz8eXPP39ndM3rsRIq+caWeFRJnkTbwPthEmgzSc4iycb2Ofn5On8KgVjVExBImhtp+5uypTJjSVUn7OD2WGnyJgnf4/aT2pOrrGiIhNYaWzHdj0RHoicRUqjIxdbfLhkDniqYMR0UtgDg+LkyoGYZ9W/8fIh1+/Nc9zzhgHkMRQZ5/e+YYEv03TDF6DZxNc4yTSoRLwvSM0HugvDwa4R2lhhpC/Xru7ehVG9o2CJu85km1NWOaib3H1FtdsXBhgElVePQqh9bWQ4r5Ir8cJYNbCVCdOvKJLjy1PYsS+VKK/ZEiGta3xIX+iyLxeqS2bgGJV5qT9ereCqehnO8Rg8QHuHfK19L1iUeRAq2E347lj5khn8nZBiKXRvbs3k64mAByv79wG8WWvwHtXDLFEJXX5h6n8F6qEm2bC1Ur5WwuWZ5HhXanL6ryAY0F15kRH3foCyXO3+20YnqE6rNUtYgVRBxd5QOV/Ma34nZHuj+EGAMMiQb9ce/FjcJTXXqQ3bUIDJLRyWQk3UT4f992dBeW1ywB6PaVejYngCsn//jTY1ypz/dXEdYA==';const _IH='309ab96b2b228a1613ead7a354a97165152b2dea7312907416b5e390470fd350';let _src;

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
