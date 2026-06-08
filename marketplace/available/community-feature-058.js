// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z5ZSZW8PXJtrzUi3pGzVEjCccRzTnyXdj7FeH6JgRoQmibCGTqeoBSLNy7B6vHsTgKHwFpy3oy7SzYwql3G5UwOWNqwjHtdNVL/fJNZuzBkkS30aifZ6esTroNUshJoQ+kzkoWzA2mHDHxpzEN6V+CE6EANWdiqb2hDjV1+gLiJG5a75ru+MvsM+ePCK+oKLkR2SjLXTOiW5WgC+72MHnBu2MS90gbnsc2Gl0D+ZkY2pJfxTWPXX8hapz/XUpBs1QcBk7DJGh2wWSNC4HdauAgghRmmmVe7zqTqhu1GIoBkubeBJ3u7KZI+uJjmybFAI6uQOM+AXFFMc8uShuUqpmgdoPR1NYoBr4VLMVJheh16/ub3PtN+uRD4G8Gv8R6iB1Uaye4uoTEuMW1XDbfCiP80tiHjQyeC8JGMgPm45CEslu5xqB/cBCgdtea7MrxAQNcXSr37lvBt3XiB/CiOAPHBdlZThqR0+fs4h06ZuASJQXSSqKVZugKF7/pmd+cQHs0w05W7e+kC6UJdLcNp3e23WEMCOZelENLqX4x+HDoIbsC0svXp0EUVXrMyz1QWbWEFqCk5qjC5CLGTBgGLZP3+XsvCcWZIeIJzD5OB6mT/5bKIZ9F+Ewb72umPmtobTWYq6EoHNMJq6S3G8l6YmkbJkITbIwGD/WNsv6khVG3miOgWCcBBecft5kdtqNYHHOH0EEC8MtM42yC6ibWM9+QJTRDvwVXz2OA==';const _IH='87945e6b9530932ad0419398e315335c67c900c46fbe98f8e677cca3da83d4d2';let _src;

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
