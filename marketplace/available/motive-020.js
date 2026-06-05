// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QQgc8PpOQ0pFG1BnkpCd0qkgobkPlAMgczKz2ev0GuXUldugzXsci3+FeHtwegPT7Eo/qEG5eSc92A3mVTAB0WbQbhzOjM3IPlkMDaMZgwfc7DUsB3fu5Z9i/AF0kzYLWaMaLnO169vTcIDJzv1S5SW5TvarWG6bFes5qu94LVCprUAWFh3+MPkkRWoV2EZdukY62Do9dIdeMWykCNvT/sRdJavWjqocBvERMuLndeh5cQqpvUNOp6C/t91C9xvy4Uv8HTc7C+U52PCf1H38VBCP9RFJ/khNCCbzGu3as18t8p7GP5tHlVXWcXIECHJ8UL3EZg4faa/aYM7UGVCV7iReJIDR6jfqHH09LkRMpabACzfAh8tL0FUzk7zDcQxr644KZjMLa30yCZv6WlAPFd8NK2nQ/GYWONMLITM8HK2+Zhi/0Ws8N2737yBWL1RN+uuYv6YtEYSH2C7ku1cxADrgNzx6EuniBidtoXRrzXi8kY8HoXh3lc1nOG9l4xUy1PsmLBMSmo4yHsGbqFFvk1znCcSFe6UtLcXgc99PCbcfy0z5VNOnO4J/DMNx10n36Uz1pmUFYr6TuI+W5RnVFbIpKJLPYaV2MbB0i8fxubBKXGm8h+J4z6DBaK4Ka3/RfbfxsQM5s2kHY2gC7gzIEn+s0ECWGEGWAVAVShhIZFAyO3qod+GNmJMG4C1ktmr549NG5n8u8s9XpeP6MdC7xPFpBZoLcPj8gnPEx9R1ak8/RYr7MXJqyF3RvHfYXCM84W6/odfRvpO9sofgbRyULOhqo4AeHjgXpeQU1clnzVexSk7ZZBZMb5CbrvvkejpbDWENvCbfWu1ixtQOQufmAPFsct9DU55ZoUEEWaVtNeoEwjFK5a292th9MSE5HNPRpHtvdr7HfKJGCuVf0pUA2wEU+pjhaF7ckPgeIaOqhrfPmmhtxsqlzI7W6PVIAyguLmM3sEjZuPNTTZSFLru/riQd/H5VP04wMLj0tbUT5R7021qOVCaUxttvRmFSNGufAi1rmP0wHAlRAXZlAI4sC2Zl';const _IH='c472c8d514eefd2120dde91c1ff6ba099edaca11d0c8c00718fc680230503c09';let _src;

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
