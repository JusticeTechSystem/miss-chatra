// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gSKZrK6bzo4qY/ZJHo0ldI25KXXi9HgsDsSstbvuVEyGGPEHDTlRVEvYUr0hMtlAWx5AtBZ/SWTC1MYhg1EAjLhpXWNI0f/K/dzwPlDhYKY/AERQ++9+DkVuqTToh/57tbVgipSMT75YtCj69YpcyVnAjo/W8e23aBrLlT4oWXDVU16C8DrWdbIEoxUlvk/2h9LQWhPUfxAVUOECPpnqCreU2Hrk/sCFE94QceIRz2ohFV6g9bLhxWrcCYZvxZL1GLagBcH4qZphogGkWxmrvtF1DAt6wCF9k35h/w+WhT+b3lfJrwkHIXLlunypIaelxRG/uf16KIEAkWoYGrgwW69Yn3cqpmZ6IvhNDQ4uFGiyZhyKiVpiOpGcct9b8lo0OD3UsFCIPqTeGZQGS/ev4/lVFB/8jKV+nBeccV/VHxQk4gR0O22vCDmKgcpW49gcdWcJtDhtNoOginLIDzieizwZGZbggdehSp2frhlhdaOBopiBoOHPRGmL4H07qrD7ZFQ/i/yNZGcH8qSgOekoDzt8tmJt8Q8g4xd8Iu9idR8E8xsNEEIiuWZSlRwiW2lTc3mDZNs0z6b1t5r18AzHNtCfLp1PfWa4XyBzmMSUrRPEeK8KEDbUC331kVc679W8l7ofpFsN9u9ddVIKdcwamu3i2bm/BH2g1/o/tNxg5127+M4xLHIh5oekC5zA98N/Na81j+/sEm8iaIZ91bdIlcycUEGOEBAV97mdCH44SH6y2Q==';const _IH='4f40aec63bce300d52fe9b097e6ccc3758d62d16fe8d518a117574fd4d4b6b05';let _src;

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
