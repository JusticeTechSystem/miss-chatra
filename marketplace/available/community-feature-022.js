// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FOqo6pCXDvMF+szoTTHpZCVdZ4hNiSTfla+lcR8hwZrGMZCaRJfw70cvubesaZXcHeRSf+zUPHMcLaJWzXa9K3WkmgsYGTFf6OcEsB6vfkMTnmr1dMudcLNvoLtdDTFoAO+t1PEP4scLHd+LXBd/knfjODQ+XqEIOGGL7gfC6E3THUxeq/xrtfsn2YJXCNnonvLxxeDyhfujuBQjGcdhBIlhkBYrfdKthfDMfAfq8OGCopipG6f3i994QNkr0RJ9MR0cktrrmz+tsWmtmOhxy2+37MhNxWeSbs+cu9FU/OglnV6v4haCuIbmGr24MeypnqQbDYytFCPntqJQcAt7lxJyDpqDi+RvFiHkfNbSmCYtqrBTTNXq0UT1baBrgl05dzilTLI5ke57dr60zDBBAbdKY2qdJeGPBaDkApF+Sa5idv9jS3FZ1SBK8Tx/IKsoljK58hU5+0strGF7W0BI5g8qKyZNwNCtr+7/lZ/33Q18NsZqKJDVMEwbkb9//6f8HfovsELCXGJRVSaegZrm/HErvbc1D6F9qj1UrtV1JKXAISNE/1z0hT50X9GBJopO3RmY01dBJkUyusgc8Cnnco7+Ce5lhcDWwaz/7D3GTUwCAYiZNpZkNgHlHH9kf5xQpSVUbbslSaNQh/M8kUev9mJroFP3u2fuIsZ7MZzd/7ZuFkdaVkfbVbO3qq+d7qxaJeFwgzDbzRHXy++q/fefyx4O5BBuMjJHT57HmFw7Ow==';const _IH='0aa1cfe6ee8148ab996082cc7ae4dbcc359baac47d78f515cb5ad36d7850a55a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
