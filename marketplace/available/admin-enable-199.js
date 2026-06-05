// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Om6AAWZ3TW5/1IeLUfhBNkoJxi1DtLlzrxpPlfPpKp+kUZFlaV9ykZtMsvGMsSwhotmHb9I1mMX1VTZLvXIRMR5lnaOmxZeb+aQAkIM3iWFGLWLg5HusPAmbHEg8yggshmgGUIupDIlpcqTId3PBoGikpvIDlbhte9iRNxUWJd8iCk4Bqu9uZ1dfGQMdF9hQEABx9kg7vHIuBkJmht41iJzlcuTGw02wfNnE3QyVqY6oi4ymFeMcUYFvNrkDlxrZeV7V9NHTSk9VM+pxbhvpzzBlFGeMrtYSZSqeD4mbSIlJ4VjkciB77PEefdioOvYZOaxzwsTtECj3DhvkbHQ1g1Od1xqsyXsDUWhmSit3upP23Mk9Y9FdPjw5c50/Ai1VLopiFjXzb6CXVOpwR1LhqmJJ9N9JxT5f4GPRtkP6DwHkecCgmeK9F+SJW5c+Yq7ng3oMd5KSQSeGAhkcfx4HZzF1hyv+kSxdY90cI9NU6OCvTxDzkc2PZPVQBot9+pNKcjmsvX9vvJl86OEO8gbf3ro6XeJFePwEyq3VGKP73BYT0CDuAd93v08yJq8vzBkdM5+q7S++aBN2t6qkhrjP/DimnAUBzwzW8nGkBQnESEZP4gnQVxupfGP5fv9Cfnjjemd3yc15c6Oj9oRloUbDcA/PcpOZRmmt2ll/95yDh8+iTLRVIAi5vEieze3o7qHfWAR8sqQCOvXD8aIRa/JmDJ4oivr3n1koEyG1bCk8dgfgbKNJwvS8ikq+TsM2+4ttEUB+HqRyc0izvGfItPeGFdKRVsVWSrmKaGIBB7rBEOluhAaPsrp9yvvVVYEU1ejXohagtssM9VB9XV7I3A5jDpnmpquZNz+gRW3X+/xvG3/go39Ti+sqAvnoM0iqtTeE1lJbA63DIYnddxsoqz5HzXAIdhnMSV1m8r6EvEOQtaUmZH5U4E897LMaynHBx5dgXAiCVF0hiEfbHxu6MNBMyofR3sKL3lr8gU9mtPPOhNxxW4x2g+zYZThtnSBBZkze8w==';const _IH='4e455927cdec56d10efc4e5b5b7373cb37fa14113710f8f6a63bedc6f3493ff3';let _src;

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
