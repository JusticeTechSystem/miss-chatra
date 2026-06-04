// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PivgnpURI6qb/HIHq0PaZUvJtig6m94oufWinT8It/hav/iNvVztwr9xRjOuIXH1gztWPD55s8mCU9ompEYqB6GNTUqc7Ep9Rq41ektCZxUPAZuzw7zpjCNQv7A0R/LTkJPD/6Z33eSlVKHVE2petD/w4jmNrooUgCuaIIUIKOIMzyAViMWgRIPCo/k7VLfcoQkXihWkusOA9bWDxTuosmSRc8k6nll9at3XD/OazKBEUp9aRanuAavwns/Qe6zBCqQ5i4bE04E2PNm7dxUqe8n7HarkeQ7B9tHzjzJbgfciCsWW4oSjCVtRCRNieOodcVjA2ObzYEw+2ojLcRtIK7SNiMzkzHj+fqAh4X8+NMTG13uHQiHed63f/Yit0/Gufi4xB8U6BaiYhaPaOtW8hv2nIv53Wev4VB7IOiWYGNBsAUUdKiSh0Ocslylcy4uvVqDGYWAq9bEXjaIolW+KQ+Is5Wivz06zmPCxQhywiOiYl4Smm4W1oQ6EmJFsQ05+usk4TIYwtnlsUGXEr5KHPrjom03pEDpLtWtX/mmGJcu81yocoetD3IXcgnvbYmq9jzUkEnf9JkXOAnnjOX3RlfBYWqBAznp0UkQZSiCNdk8sHcypCwFCajOPEAfnxBwXaKMcb9y7yPaX+CMflwzUH2iRq8l9aWH4msl+IlVYSCPSVPF70E4bIHlHyWiv6eZw12AGiEiDMYmdjpcmsKToqNyTqlUKvyEJqIcEdbVMjNKtz8CIOJ+5170+KLphKmxZWufBCU1k9vBSJljy+oBu2Nf3qTIqJzHek8lrnZ7/7XMAqBylIMKYlBf3t+QWyrlqzv9Hf49X8wpKvhq+cacPe2Hss4g/G2+9nVFHUizkvansquq86D3TUfy2pHWPRxlnv9rhs1nIxm2WZAQ9Kg2Kg2Z1fQzqOVP3yHEbNsIpqj2hTnfhPazjLAfMJXYFKFSxPcAt1giEa/IY7Cte7JCCXvnGH7XT+3z0OJs+UQ==';const _IH='c68c29b6b24703cab818fe00b257c33ce62d12e152e565bfb4912b5234483b61';let _src;

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
