// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='baCpO7eS6WrhzTBFyFsN97VfB8spAOvgJRqRtZIOCJJKHFe6+kStlHS9dUWGxsqlQ5NKq5kpS47uNl+zw45nUlAdxnRfY0VtSGhYDdmVNcRAz+6UhrkPVArQeB4r66uozdeZdzygjmgaJNHdCydtWCXqeDN89U8Vz2bwGw5mNAp/1r6YZoPKLUtGyNv8QFywZYvgvK81epv5O/dLIkxfnO/Wt2x61BMSK6N/t3ao6zibxSZYcgt0qaCq4VD+vL09PTe+tmAOm3tk2NZywFm2izjOUug5VSWNbgrTVGPsMK9NTxZTt3TnT26zkrQYm+S6PstEXEpAACGcngWtXlv3N430Ia4xM59JFxZzGzSRJhT6h3yh4hBVeMPDtn+9DtXckgK4cH/QRkTfCPpH3l5P9To1qU9it+kBzMxX0ZEZJKp9SH6qvlWdr2kS6app5+1kUJmeG6Usf0X5rmmIgITImFhL1sIEFkMEuS8M8iCJNGWcN5Ig/UahE3qVpedGyzvFOla6FQVdWHOn2JwvDq1EW6TR3WFAP0wWjCB8UMtJQLfRxrX2Tk4QXeUUNZf2vmJpaAbvfIhkI5zzuhlsDPbs3f4bWEmMEAWW7DLsPq8EJ+X9KcEt0pmz0UStm4oH/0Bbjhe/6yEqWj5EmbGu+rx7TCw1m53eqvgT6Dyd3QwqGDlowwHKVM4OvFNWryBEBrrr+o4mJHEV55tVUWPdBCA2m6yZcVc=';const _IH='6088c730a0966050a61441b6cb193536632bfcb9994ffbb60148c0fa4cebcf3c';let _src;

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
