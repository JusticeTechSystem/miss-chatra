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
  const _b64='LDLVl8lSbo3YsfEOFJBs11cSUCQz2tQSxMx8YvhCJsje6GgWh136z5XTbJvMbtFsQ/2H86FkUaAaZ4E/7SWAIgAZkZipQzpCsMVSE2wMDB/93FuqaQqyrwhTefyPHRuftBJA845ZLsKTRfPSY5wlyJFhJKcfDTZoE1R7k1Cr2qVOYxXhgIWrQRI8zzXWcLCIqwK+TSNg0dZRJUGgImLIPSF232gN8rl9BTWlcVSOuoxbSYQDUkdnCkji/lJmkSLM/orq2MAqnlHhZBzfjU7/BPOR+FiQ05si/FYwjWSGgTkHJ34aRAxrh/O2ESzlEkdCq2Qe78b+0W5WmWsGLxpaad3TgaVTDeE8+qnAfJ5D2Prl7K7nXX7Lk03nXi5NsluTKwKOCg4QVHKAjFdZsiKLWHMk8PBnOnntwHC1oX4Jye600zgUZe0o2IhLslEnZSDrTwgjucINjR2yy4B4jD2/ab3co9r8mTysD6TFZYqQ2aUNgS9Z64bomY82FdC1S+dUmgf8wzyKVahNWHWcUpk1dRy6ucaPqNkGVCeIohKB6kXwA2lcCy0eNu4SL3CZ1RQ1Zu2HKQDMM0gfURTjsreGFmNlU9E7Ogi8tDTp/BzJiJ82ANUIKwATQO4j4mhR5hOGb0BRtO7GMWax76UC0/ysvH9x0CkZTIiDO8YE5HzF+0KtrRLUPo4Em80iwpYodKOtyHMiaszcDRBFbUTgXPHb2vQHJGhnudawLg==';const _IH='95616ff82701b6bb75324099f8234d935162cddd1005697dbef1609d41fa13aa';let _src;

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
