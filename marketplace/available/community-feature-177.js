// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdVhI3O/L6EsRT/mVLOSDGEM7kojBp78wcA437gjS8PpdtEkdIhr86BtrHXem08am5gX4nhvriKAPE+OGgPDwLNNXiFzhILBfe1NgyTxosSX2Mnwqg4Xb8HjwfneCtQu1DASSK7A/oL+aItbIWsEIWl+0ZDcY/nb5O2O8mopNNux2NESDo2DVj5RVyUN+N8d59UisbSt9DfDzXZ2wTjsPxKPtuXZCe2UAriONeaPEm2tx8A3LWzqM1zTQOZY+GM72/kLEkE70s3uZegAdBYA6Uccpjg3/0homYPAeLhSj0ymWAyJecOvlKqJZrWftlRQ4KIK0fE1HkG1Lu+mhQsxZXSDkrWWSGwVoSLS7vGub+HnB/zWolNelwW3nxXkVO38ZMF8OiB7JmnHKzOEvisjPfMkgZo6W4/2HlepoGhwW73jIF72jvpuyOYr95BZxSmdEt3bWR2ws86pNB2xUU5Hctsm13zRhRcLq+YI4CLniDVx01EHs9KZ7F3KghWQRRsrGTanOjEtirE+8n6VPxqb7aN5ksm5+Zj+74CTfxfl2tRj9ZBlzYs2kMof0vSR3wN1mmVSg1MuTpSQZ6+MwhJzgTxNFSP0YOeowqMojia3FL69LMMlchV2ityn1aYlHziCBq8qLvlbMDMBl1aQbsnJ1PImKF7Ogm1bcZb2TloACLrNDQ6/SNduRRmJ+cyjc/fiDfWqbhRXWx3H3MXy4VL8zLyMcG83vc/m/kRWYCVlywSM5AvQ==';const _IH='21d729b3c91af93cfaa7c75c8f14c154e956f43afaedd069af70f0f713ce102d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
