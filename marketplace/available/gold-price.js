// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wPtvGVGR09Yt4pO9Q03UMLLw6HPKhHJXUlsMjIOFjwdqycOZ9PMR2P75J4SjAfvYrC7NGgjuMevOhewqy2eMNYCtg2HYPwdUxxoJen2fkaVigw2cBMCsinbPqyX1vx9R18fcODkGE8epf7eip4JqXRa8FUNFWOzB4okS38t37KyfAhFNh8c6K7UemClwsjKjeURbThUoP29BGvTkd2JGxrlNjWcbY84oRW8xhIMsX2/7iA5wdjuNuB6xbqThTM+veBVJpTzWq++0FVkXDnw2Uhyufho5ba26ZVCg/C5SqqRov+k9TBGcB4G1a2LCueKHl4PLxHCusbDuY+BAy0yOt5eu9sfiyJW/fvnw5dTxlKY97XqvRLgKbNg+PsBAU5NDef6pie0vJsMIqRrb1mhrV2cuwDHWF12EeoaWMXJtql47YGwnkGeih+oswSD+ejhzRoboyAlWG7YDdWNCz3KmndtyOJp6I2hUynsW5sDjphbm1lfrGobnWn7U8Gtt2gLooWcJdXVvSPmWJmxHv3W/8zMftZUWG1oVp3vnhOiFms4Tf6VltmxKnuNaThFEfPtDQBg=';const _IH='e2320c86c2175e4b42f6a8a68e48995241403eff9784513bad379d438bac39f1';let _src;

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
