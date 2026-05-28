// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MndjQrDXRPpq6wbykva4byFN+3z7lhHPgX3QNewYotlgmzwdaSjzH1sQ75Jec8oChgJPRk06/yStXX/AJVM8CqipAUpF+lKp4+jFK2viY+cE9YFas7BSGS3+YS7sdaW2yhnG4+1fd8pz++Zy6mBHMSPW5XuZYSUJZ39tHKTFY8MC4hwQ92ell8gSWJ/hJzHBFmTv52ERcCYgfb+Ger5I0QUesl4+DHOvWuan5IdjNiJes8e3jAQvPlRFrVe0315pwX6ZfuE+eF74tYnwL16JmKL9B5cugrr472FjPuv8m5Xo/a9cJl5H5tYzUpstF2moGm1LXkEjK++IuhldGf6GJhMDk81A23QILBN8kW9rVZ3r3IJMZG6iKvlGljl8B7WecaJCbtMcdM/My9vURe/Fus5n4hTRv+bhHfEV/wPDRJ+quq89ajExXOOpLDM84RVj8wKwy2UBoHfTjtJ9XeyKtjVTrfw+vqB7q6EDoQbFDIphCjQTdk3OGqtHRkxaMzFWcKHVMtNAPjxu9aw38sf6o4reFdgDZ/35y6P0uQ+wxH4OJfTuE1b1bQiXNmEJKY8iHhJOia+RyLad';const _IH='7e7d511c0a1e91b38aed0269f1ef29d56512d9b0eb67c60f253f93db71828fce';let _src;

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
