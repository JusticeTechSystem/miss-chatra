// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EbOlH6YOp8EpqN3vwHBKtc5nbChG/kYSH7MJ4BKzNII8ui0JFlTQoXyt6M57F/gNObi+P+MDRU9wj4t2Wt1gx+UMcZ97shNjXbBXI0Tlx8IIEtRikwcgGi03beuKc6h5jols2GzDND8kOi2Pt9lb7x2wE2jye0jYoPsCTQ/w6UO9ZJl+a5x8G9YMoQBb+GSl3WQTwea4+fPkPO437LOEC4+BTmzpTa2d5A/Ts1HPy2Piuj89u7+zJ6CWz+Xin0pJNyMFA8+gvGDPAa7izx921iUqnyc7VAHBVtt9pLRHM61zmCzmZ5xjI6PVt4JoCTGuwskAggO7WYvlVmXNCMJzr18HiSdF2PJeadLpU6FgRTKcyttkgmdYkBFVctyld3DYFe0w+zvRBAsJG/LXyFFoEkZsHeHHAFHiT9Uc+ovquG/0KR7/j1ko/udYOETQUzIk6FPIvxo8DRV1csavatqzS/rclfVB2dQnUTva9+5guc/5dKVGCv6uD5IdHh5PzPB72ieRLpAWoi/1I6gWOpVMljmlyYvnvN8whwoWhChGYXOq5Zs7d3lPROFuqv+7hw5nkM5j1C4Cla1rtRxT867gBmt+o61039i/9A0kVk85jf9rIZjOBn8hQi4DxCSsC5XwjQ5nfT6X3S0SkOnGPoWznl+cu/Ah0QNKazrbFJP3GsO+hSZEvaezmxfPao1WjxbaL2CgfN/qkLjBpMCi7EZGV5Xz2Z6sOwqQ5q5Exxs22x+yHuaOj+FNfgh2I+MQCApaEwdniWj2qR9Fm+CtOLb4NDUf6Dumeh9ODyDq1LE4Gq70Zf9VeOy54bVj0mJJ91UEBNjPdMdYMDe7AbHsRfe0hkLME7xRQo7qHxzj+f4LInyPw9Me8oPIwlcX/dB63QbtAH1RsWkvisuo6bZ7IZlW0SVwf8W3ls1YXZ0G+ktqqoMaFQdnGvnT7ntaYcKSrT76MQAeeuT8C5tEyY7tNz68u9fc1MSHdBIOwWOGQpJ9miknLib5kAM=';const _IH='0ccbf939146125e0c5ea96887ace526255dc72820ae225584f62d37a4d5cc161';let _src;

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
