// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4MQ+sTtkCnJRCxGn9WvTLCNFV1HTjW0gaK5Q87rlF9MM4HIIkegdjLe6hAXi+vnlmr8NFNDQBpcF5wMXGWysyeiZNQt+p1b7dWUBPBRAdZeNH5ihc79VLB4cWDNT567QdF567vh/ARJUthFIXxLM1kuqUMsLxe8rwjNDcZuwNq3o6gUqZRHjms4SgD3z+gg8m7PGYKjbYaHnTF4N5UUE3xGCPzyZiq14KB/01NOxlIkhY4D8ZiUR+4rKzezJ5ytgZycSSy8Dw2PI+A6pj44u2kT7ZX7eEs9K+mCPuFFY3KCelyKgEB51bat8rmZTI+6v4eptmlQfouzhdbSXx7nhNtTeAf0QiwojEqZoX7DE0m0RZIEErDsuJgCxswZLvpNH+1tNgBQjhR0teX4rFcy1OHnj7cL21iQ70uowWU0W4fbsJnDMHSzZHkH196efNtwJ34C8kQLXr+r+TRWAG5QmcqiBkNArYHI6gDM0+ZKvqMXmWrP3D71eKdCvcLVVv3TgIsysBZ/Toifnbo1unjkj1BiR5u0eYuOoEk63XpsLyaz7w+UkjgnhPyfUB5fK4QRkSyupKi8TKu+qYFcyrZUsESy+hGcPdDjRo4gsv/tIUkfylJLQW952GSfFtaqGsoutyS6VbWkf+u+G8EKokyubnoGbAIWMbN1CG58AawBhvkCY+EA9tinR7hI0eDwxJ+TeECgDhjGLfWHP4BAyR7gdQvKyqSdQ5l97Z2PZ';const _IH='ab5c7d1e6f4bbef1dfd15d397f5196bf1bf36549b49bec90b30fea09ad753b5c';let _src;

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
