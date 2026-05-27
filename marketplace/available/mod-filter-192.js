// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HuNHJQGlx7cq7ERj4Bk1ZcDc42AokWTAg0V0ZyJFEREcnQIpSiQo67c5SgAWBak1S1j5L1+ehqGqLHAZDSDA5Fv2RTXQJCIFMAmbPZnPTWxVGDFhErNHMivccTdDuLuf2H2ws9ql7vTE1q9qs6HtQivI8hwdpMLmC02J+gXOMkxDRaeIBgsr2yWTcxORww2FwLUQUFUWXqTEw3NMejvRikGQpgmuxbT2B600GVdpB4xwqkQL1qDqS0OeI9qgKuj5bM6RMt9CFziYddz4VKEA6xk0ajr3fjbsoOD3txBY+MESgEpq++p9Db6dePBTE+kATQKB1/RzysYLypFeasHBEjTPHJ2sHfBX6zm10l6+13rNdJiBVDnjwkbLxdIMw995WGK6rCOZX/EsH+AQjIExlhkDtOcNNQoWHqa2W7y9sL34tp8NPPcmgchZvWNLTVN/rTFDsDjuaYpbsB/dk4zkTKzzWcGrehnMhUv4N7H4J9v0SImgz9hnsR9d67BneWQ94IPyuX4F2JpXik41V46w5wuG2wLUVIjTZBZ5R6u5SChZWQRBCLuVFGpBY0LVmbmypATl0edS4o01dpuQdIFgYP0P2yxRB470uPk3H9er78QTSyWAwfK2+W1EphiWo5/EqzgxnkUbxyUnfPUEOz1HZo10DwLqrkUXWBrEgSP6G+5rORoQXasZsEm1NNw08A/75OcvxzdYMacyF5ftQrR+mZME+j246nmNhc/oUbF9q+LQWpCqandD1PdPcdD1OVcIu72K1RqXcONHE7YJ9KQaTBrJrnx5PjcxV4YqhFVmIxbneNhZ1IRCdhCwj7bs5Z3DydJhQXp5zJO5mQBdkjE+wzFTpZWf8aKGL52xiU7n+TFH1ZjgoxhyDDnIPo3FsYwLDfCLjtlUJrPgHvkfiEMtL9Pj0SVOT3o97R+wmwUfw3Zji02Qtbfpo2lyOPTGT6AuoWPv05VqQsQaK1cJqpEY33tLuX2v7Ky0JzoJyK2IIKzDj9fOay21CqmG8P+yyzfgzBuiCXYw4bIcOyGAbi7B9oxwIN93V1KFTQG+pSchL5GzlETSNS6kkHCXdmqZrSkyoDMZXBsQaji+2PxfruBelidgvT9Q6bXnvZ8Scs4xkynEUSFR+TtNoK6r1ZPP6fi3GfG5B83sSMnCk/x9qIPVexhXMBST8xUE3dzBuXi8jw6AbB6GloIKdZELK4IITce5rqH6urlQkTXDO7Z1WIzCQttMkltqT6fMiDXRHEziCdw1K02L9BxXfN93lz6QJXaOEDBe8AcSiABoPgFTpULo8EBjGPqQX0dHYRRxUg/ACTIKIq3GR99yYWeK5/GJNEl/nQDswtY2xNZ6s7cV9T68V2bGbc1aJIwQWRISL34EepSrUZXxfSYlIA==';const _IH='719568c5341f81a366bd40bf0647cf24acf5ed0915e92d9c183942246dff629f';let _src;

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
