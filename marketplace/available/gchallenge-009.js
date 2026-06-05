// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fV29qsXI9QVY57j9vOq2ysRRwk5S2CujdfgTMJXMfEpxvi8rYg00oxkZdKcbj/zBTOWCrs2bfb5vQMsdNn+xxINOlP7W9aRgliy0OZKuhyiV35QiY5ZiUBPA8AAIP9ZTZ9hqrfXe226Jr6NB1dlc5vL0zc9yZ7lfw4nloE6D3bTjbfn7ybf873/k8OhPkp2V7NTonnlFUXsMcba/SHkvywfg/dgsoWqQM4BrVZyoyJw2xTV0vRH9G52xKQsRCihQ2qXVes7T8PMPY5ueIUaIHR6xqsgfbWSgTqX1qC1/j3ILkx1eLQqDUzKN9V0s8dCqWW6eUGeJck/hDxMDR4lXzXhPMyCXE7OZUfo3zec1ZJQE9X021nOFkASpnGkFrNRUXE9KURzUsQOKgIthkjhfTiMtZQ0CUenarUWGCEJ6GGNCtLB/iRGqZAqlQ5m2InRtzRLoG+2H7xZKQ9tRA4LNfwR1JNE+LV03WpoZtXtXmRN4z+JFanBcYDMw5YAEk6HRJYtA4YoZp7AYfQ7yUqE5Y5iUQKofLepOZ7A32WA2gNCazAI7SmbobVlvZspwxt5I5Ff1DG90TB+7RmDiK0z8iqP2/+TAajY6Q13HTPMyIMn+ir8GlMhR5Gaz+EV1H2q+V9WxH+c=';const _IH='13cebaf7f9d9b3792f11f4315fc00610e1ee14b1172dffd3da4e68a412f22237';let _src;

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
