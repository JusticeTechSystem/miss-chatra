// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tvFWsCjdQpLxF6AEwWbwmA2RwsTnYHFJDOAMOW7G/1U7400LqKftVFpZCHub5NFik/DJr4y9cgWAEx6ArbOShOOXMcGoEv26wgCOBo7hbX77J4V2q+lvtXrHo4pwYQIrtXQyPNs7/6SfT4d3lRVRRDrf7Q6iJvc6/ywApIsbN8stPQKtB+3Yz4bNd+ZvCnzO9ySwjJtQG9vRNIn0PThTMEUAnWUSKN+hpzQSD5pzwaK/WGDN3QTBOEBDyAxb3opSb3wH+bF5GZO4cEIB/PF7jQ8LT/HpXcQXDcL7IF1nPKkRwRGnEKeJ0kB708y9SXjPG3s3DfctFyoXczELBBE0xZB6ywPgXETEGwIUMfFypK6N5fy3+hLfpj919Jmry8YJoFQfz4TjnlUvBBF5Vu/gY0IUt33ShjHZMJcDJphMaJOsoWhvRsxkWeOHyZUrUdwOqt7bfqEngX2eEEgOK5aEl5Z45AGOCj9pdK7cvfmmz12HgZBOoQyckYwXJPG5cz0I5rjJtH9mtE2T6cZH1ix9MWXzhDwsFsydRGXcxn3pJ9yVi3gv9G7m25g5YhqIu7lfFlAqp3nJv9zw1FSQi9KWPzc1Vg/hUc9unACBBNL9io8Z8oXgs2IdWrUrChq94kytNIJCGNNTzE5ksvFZtJIWF1erdo3jksuKUEtZSYUGzeqZ';const _IH='f3e788fab81fdb2e20e57630545de40b43fd79d14889ea71c590f394e20d7ffa';let _src;

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
