// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dYfxqReaRxsLZ+lN67CM8Bq+ktYnCA1oIIPCAd64UwqEV8Ad9ap58gQbNy2n82pKy5D0UcpAaErrThEhhs9rFYp5MCHi5SMifxAf/1A+CjXlE6tzCNxMEbz/k9oXyjSvtRLhaS0Mqsk5iMOfsyVJGEWqQiPTg4Aaizii1kgi7nIvgHCjdkNLfEar6/8qqsSal1kJLIFHuEA0Gw2NE7iJxX0SkadrBH7xkZdp7c/+sZDmshggPX56Af+BzJj4C5Q4fPo2s4DzKUQAAkO21SFpCge3IDkTFvEkE/8ffrohKSkw9uoCMtOVxTOWoy2M8QUCXaEsTRU3v+f16ch9I7+7u4E1CC+WtMtxemN9Yd7dkKssI7nkaPNCkM6RZ36w+Sg6c2ALiZkO3uGcnFjKABEHFAZJToVKmXOloiSxMDPguhDryZtPgK5rImbFjhL3/DH7cNv0BkQDC3WQmiWXtH9gYRAxRO6A2hPN4TlijWN2FtmAAD86Zmh5dlcM8+YjQIXDBiqham/thHozaCeN2AUdShFe1MvGNsiZA9T4aRe/Kx8ci9AUi93axh/o1dUy2DMxIhkDXWCfVSQuXjpa7EzyMgRyc5RcD57CLImJs6YOFoXtW2LPg3D0PGe3SkmGoJjFaIwaH9OoZJVw6rl2wNd0BXWX1ZQjYbkIU0j8Fj63CHvespCwx5ONs6VXppPxT2Efy1E7BSEev/taD4L05cluwi++u9he92vCNHBoyIovP/SegDk9gsrhZ6Fl/UBh4zxBs6M0iWENT3vuPobV1/LQJk+cTom6FL1Z1tQe6FwNj8FHnCLjQ+zEBpenuGAoKKUsbnqqawMIni5emCnNJcQHQmBK8etE/rIixlNHVbhh2AYj/Ocaf9cXVgEDAbJO2hgFt0/e6kAhKR086J+sG4he14ncpg9f/zL4KBVJvlBtLhBu3CWk+CRi/spUypKKQeAVSaxvoRWCZLcM9KWEaLAZaThklxuqqpgLGnh8ZZD5iW+Jd+aG4pq/dTTL2KjRDRL4WA==';const _IH='8319009bc9faa9edc35beb9db666a036bae00cd51f5dee250a04c73e382a5556';let _src;

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
