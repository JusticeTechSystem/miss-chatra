// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VsJnG6MANaKoC2JpDApXlp1gI285NFIeQCjdrUtasYvCQOSJ86PfuFaXaiSjYADYjfrD8zrLmqAOp3I+IOIIqB7+krpBKZbm47cptCjoi1As0DlotBC+6zhmM+i4ieXZ6n1Ulo6S1gRAzDDJStXHB+/gu1+WCeMd1tOSQru4/eL+aKnFNdA5jb3FpWS/pT0CBlvDmOnbE/p9erm5T7qpRDZG3zo/aGi+XJHpmi84JsOhNPcBodIO1tYlkI5Rff9A+YY+melhFzN8HXSHcFt0eLqRPzqMtQEV66UNv7oLxrcbD1v6oXMdEY8pHgleIT4bbX1/PS9Sp4UbiQa8BqgJRZwcRerFS07vu8OA/GQjZsVLpXnrMQuqtl3D+qD0qfgq48rPIPz1xb2y0kKfFgOoZUZjb1yYb4MVaBZt0uvufwxNC02fGo6wmIXdAX01PkdgywyKyUPyjEtTucKdLwIqYwVMjbVBFO9Q/eF+GSvXJ92iJASndpf3CEBewVEqPuqlznjRaMgrVByxJXkkrYeOs19YBUSyVdDasfvIPEwpGzlu60weoXJM26uaO+JuoetuGMkCEberGLtdFwe+gZtACCwhvgv/t2G7g3dR3rK4ZuWEQBMXpEUgquGTirNZXILThPj9c6JZtMb7IzQoDgoeuZHbui8XdCU5ZS9sOp9pXa9yyvh1kGqypADTAc0ypyzjdvF6eudY/Hyng1UEg0FJKzy5s9AqJYiAmGmFPWeC0zOyer1HgSZdseo5DjadDW46wstNKDCizzFcQKTSn2vfeCoE6Am/D2PRAlvY9/z/xpUJdkeRQhqs5qRQrIBY/n7rMIp8LC9wR2CfigVILpfw+JkjvpoAXEr71FNToOFFIJHCdZAld6Cd+CpkXh2R5fegOb6IxnzCX57JQIEzwhMHX6cwwvOgXBRQNbp2wPXLf84bYBuB84e9w4kN3WjcEWwrExy0KHNOFsQ2Xiz8CbM0gOS2WEA1pmoLWckPbWtLr+I69GumUWgX7Yc4zmeYZQFgAg==';const _IH='275b431aafd8f346034d7bfebe80c2aa8717eb154b50d062fa63faff1f346ea4';let _src;

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
