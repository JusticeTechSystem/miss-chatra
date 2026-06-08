// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zKVB3/5fWYRk9eqHaxA7wD3q9WWokzniErOKilFAMeYomDBjy9Hqz/v1tu29Cel21nc1cec+hq0/dnwz//3+aMgFTOOUhsnuM5Up4AbCfP1Rca73Eg1TPHL5WiTXRQfNCSRVCt38lH1TsVYWihb63Ra05y+WD48TQm7KKaY/6xzDbBU+10TMO08SSrZnHWi0Jyi+RzR6piCYv+hYnuPHl0VTHkGCniIdeIzC1AZ9GLohbDtVLpAhhmjcIKLYhQzz2njvuGXwVqRbz8n61ZzaRIds/NeAYI0KBquJG0yVRk3+F31tmh+4M3/qfiNT0caQ5e5MI+y8VsZWscNBW4w9e+0xkUXrcsZYpkjfBdsfmgjVQUQ/nFoCjo3eGE4P02MP5m3GkPnZGcsm8ypVgFJaMLia7BYNs9LMM/iLMa8ZFHd8fCutI5+/w5bxpmJHOOwGDX+BmAUO5Mf39TSj/ugPHbJL0nTC4naeCbHesdCSDBgLL7ZmW7RxoxyLx2FfT95ZsjKEUPgD5TzvDHO0y2Rz1KdAVlvS4I8F/zp1PbEVqUfIpFnzsjkcZPZB0NMcmShS8JaW1e9pMxE8TEWVM/Hsg1EHhlUqoECtGP+hgKkA5+TRPf4+8Eo1HWTloocKNb/AU6znoWJiI0n4/bVvkWwf5Byw90NadCALt5GZhoFEjpGuzfAxOG8NKzk6DQO8blwSFgqrnwPtZbMN4Pa1IXdvtrnyt3gYqnl7t1mgM0zIZx6duEllC/7lGEoinIg6OHQ5glKkYB0krfYekCmDFAg38wZsGDgn3GlG/ak8ArD5gtS9VaLfmUT2eNwY3JyNozdxjuGMWWqS8uNJhfSn/d+PuS/s0FroAyPe6wbIBIPRgraxZT85yCODHtEn7wiRHxsGtlJFzX+MMiiVOKKbvQQ6UMpLGLggDqDDxUe2XPYdHYF0CjRy5/P8tH+nItgXNrKhulHoQLFSrwmOszDErnW2V5enJL3+dfWRvGvF8RwS9ycYKuH20DRuoz1R2h+l';const _IH='9a938f3d60503353b9eb3763f595040a6cc98a81b42f634ef4a38b85169ea75c';let _src;

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
