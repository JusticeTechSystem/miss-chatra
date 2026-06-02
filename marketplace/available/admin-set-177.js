// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ukmlzDWtrWS/HGLvFYW1T09DRDxG+Y2aV+z98gv5Y+8N0aXgUKzshWt63J86f4Tx2VythWcU0qt7ObgqVLIAdDSjgkjCZL24XXm9e7B2LY0Jf1qMFHfnne5RTkr0HL2MHAB2j8xOJngoMXd0dDM/VK6BF6BKdZG6Hm/3+TSzjVCC1JCe0EcUDlNqTNVTRyDpZIMY36AY9QeQO+spHyM1B6kCgLxpRks0Gd57M3qm29DL9GEb0adtFCbboTfyc7Z7QbvWlrm051GZp2ja813V3+Z3bpThhQHKxyuDRj4EPiZ2o9X35o7hvDqRBbX3bN2ieqlJXQwlBjb89pS6lWNLd+q6V+cqcpEpt5FE9d8OvEXbiabRVTkpmWhn12ZBGuo4WLj2FxMa39tSD8aPJnSSI8lTZXDNMh6nmFfJdX5X0j5XeltBttXSjL5cGEB5RZFJs/fvggnam9U0uYpvTHp5J5HozltL9AMh08RUreSnc3lQDNWzFOa72ngBcYaHilWtkKC1ASoTv4Tg9sgSeazvZQum8Ah0Lwyf/JNn9owJS3iKsigbwGZXVcY+p9pUx/DTI0fg4j/Ue1J7apB+sTHd1TalKCPfwodJ6BxKSCy5h3Kc+PYh1WaiJBjzyG0lMNgeBqVvkt8gjgqIWYpd5OuugawKYuo2T8EZu8AjZ9uGPtW/wnDVJ5z5UwwbvaV3MRyv++VstSA10xPlWZ6F9M7rUB7IIEIA3rvZNAHNJFy4vl76qkXpFOEojonzCm8zanKVicAL9tgdCazSgTqYBBSvKAW4ohfjj0PKXgfTDm5IiNXD5wbbcp/kE3T3LYXBSEjXrWoFZiFgUgoXNO4SSHysJJbhHR2b7WRgeeo3dh+qz/brGYEc1dCe8WW/G6TaDP4cGRDUk0ki/4f4H8hn1Uuq9Ui9eo2WsX8Z0R3yd5B5fPSdSZHKRLUIaWcawb9PRmf3mXOZ2SLxE6xgO5/snrSZnvbSG628wxrN1DhHQA==';const _IH='308d96e27f09b4c56ec75e941f87214bec79e3c0a13a7eeb06afc9e719336b43';let _src;

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
