// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X6+RJNaHJc+jSSqO1p9grCrhwcHp/E8kRwZ7f1KbsMNG78O7ja+aOtNJwqshLBioJlu5w5iGXi2YkYp4CMri88Swer6yJOSWc0dx/1Bm9rOwFCC1Bi/UCGXgYif0/1DGS46o+fi1Fttqn3cep1yi4lT7jdT6gMzhaZ42If28oF/uGyrSTeZcVg4MJtx6pPYfT5uoNQFQOMkYX5n9FhhNKFqVol3L4gtuDMO9arRfP9CqjXj/1kKtIaNbtmja9ABykcojYO7CZcSuztZOYHLVFA3F3POm4/aGvn/E7kyXfamR2tngqAV7jBGeNIcchJkDTsJj+HgzHeQTmRrFRfe1VzbDsd+hhnJ7w1ZymptbflIUBCgLupGN/UtM2C8atuqK/IiC1cD1mirqR4q+qwJyVwfSMcV6Zt0ZJGGPIPnwOmIYqS0dIGAuymtzg1M+Bpzs+fkPNKU8uJ+B50YxZCYj4FpDEPbxQMFz5dkmHCtTWCR0uB2iSiJOiwQVUBPWiUs1HxRccsX3kIAhQuSrNZ+QdyNbenm1wZchF82zigVpgJqi+lakPDQ5IFdbikLe11Jc/38+y+0mVRva2DDicLz33kR7eB8OPiNlNvfAU86gHHWnaNdKfTNAXeikO3bs3Fk/irDgb1O5l/AFbSjo4WaR62mqL3pDe8T1hDH08KNionTkH03AwvH5enWPTYK1Q9vZYuWWiKzFFtP6wsm3mWfDevvx7Hr18U1LPXHa175rkPuaIMo=';const _IH='ac507261ff2060928d9d859f52f5db4587a8cc005319e58743dadcc4337774ef';let _src;

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
