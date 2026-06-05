// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ESy65AXBeabDaKL5AXhdoSPmP8gHYBVjPywxzcvRXfs0HDns/idQTgcMDkCCMBcTSAOFIvYHOXEcD2NkvbzU0HZhGS0KjIYTKjRWp31zJAXOX2HyViuh67DrvndxSHCbjQGEih/GhhrTVIZKpwUTfI8EMkLPRkFE7h9KVQlfWdfo9RrpYnaokVjsUzzSXW0sxcIhPjKtyD5CHH4UOpNDMmy8BbltLaOIU3WN8uSCj3eIV95qCVayw24t39QknvgY/eDXGt8Ioc+/aT+7OAw/xLsJ1N64o0Hy1Mf4UrfrZWjqoNHGKCMDIZ9hXwTqpm95q19YNaigb/+zA0i9k2SZs6D+9MBnrJwpRBemEMz1N0fWv8creZtmd4GiLBRfMAPrXR6QgnGjNf/Mlqf/qSKpZ7axbTTtOxDQw+Ea2lZbJCp3y9Y9DMmyHxCooXnE0aAB7QE++pLJPHeZUOJS8PfCzJLXLsbZV6XqrF8yW2Si/byi74pzBJqeeqmh0e4uBC+TyfWYHLz0phCSySsBfRXp4mFeCQ/NudUBn7gYAESqqVuJQFArnkCTE9vQ6sU8FsBRaLe2onftni4e65acaZnZQ9xXBd7WIEpFsNBZcxwmj25ymmr6B8svkCJD37oP9jWvT+tUxX8OUBlF7IkG2q2JU55cmOrSSrPlqLV7bROc+7o2iRmAOP69j7uodSefpmrekTdINhVxgVKjlDpCdkQN4liRlqB1qQz275E7A+2PDw==';const _IH='74dcc5c042b4c0c78bb2486b1618f7e04e31be7837da82d284ae10cf3943673b';let _src;

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
