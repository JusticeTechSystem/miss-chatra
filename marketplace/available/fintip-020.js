// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZRkAZVScZt15C2bUZ0TObGJmTQyjyqDvK4JMXtU74xq97cTFY0ydZovQClEc4xYBCfXtqjHCDP+M2XXwLqrQj7UYfsRI226KAhwPXeCHIBRtUPm45kQWRoFFs0Df119pb863uV8y63IOsHTZJkkJpCCANMrG3zLJwjnM8uJgaD6MxTKPdNtHIhazN7aPgfe9ru98yg08s8MCFxwATJQUIxsdcpJeY0o0OrNdQDspTcLOpc6ZXI8zWEypaXF6gIFCHoUEbP6Y3OWU56Q8Mzc38Hpjg16xZxvu3fTPCl6YSfhr2846P7jwZT97USAhc9cNLN0RNfZi7F9wYx5ET/drVjzGdg6d1y8viqz+vGf5eeTT3BNF3Virt2XpYyQgmK7lNaWHeur0bx9EKyeic3wi7vmmPERqPxsLlktWHbQimau1gu87IGuc/TfaQD0FN5eyA9Le+7oRgXeu1ZqsVhRKRKNHDR91Px9Z8zq4bESf+/oHyD0inUN2mJREsO9izojPbjUr3qGXvRVbuPytb0IobGAxSCyrXMMjwCZJWdLTaR7PHl+JCFpbWs5lRzrDO9oG9J0ph4yvVr/7AOJ778m3MrZ7mde3jYBqt8JgXd2DIVLvLcU3xi33JwS9NZknf2OvmoyVc+6yo4AduZ4v5Iw71g15KSk4psqVu1mclPybSAND+jsXXKXvWxIywysKcCC0wt5RNk/nhbNVtiMcGG5Uim3MSmKaLCGYrzE8Fs9uRfU5GtINGqGu5teK27u2cw5mJ41VIWuJsqN0NsZGqeKmuzTGTidIp/HuaU5EKDfwZvW5JRpH19FnagcdPigrTiFMxIvTLxsnQjMDGHf5A/o8MqP6nsnQxD2PH/a8EXyGhr1iR8OO+aHk3w1PqAIQwfZ2u9D3z34Q+Ab4H9ShSIWvR/DtPUtu+b4d5NSOIcOZsEgCmxocqsMdznTVFbg+1nVbOg79anfZeR3TY90doJZoJLB/LUtjA/iVLlQPntgDa8ZwlhBtC5A+stFzzIzaPfcvURPp67Hjtzb3ZUrNDD8jR+Piq9rB809mDSa/7eT38VnJhQ==';const _IH='219f7d04a5b8a69d1352e179702a8586b6125649e1bfa759cb7909a87669bf93';let _src;

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
