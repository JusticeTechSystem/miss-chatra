// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pzZWgspYWO6A6ixS0hJzpsLBjMsmSHwbO7ge8xzNOnTG5TiP1cWNLFhIoCKbEXdyBMaTAeRXqEGX3xy4/0oxvAGn4RjOdPR+bTXaTovpnqFhAlxrQ2rRfdmPdGgRyBRbi+R/4Apy8BVT31FExjxufLy/ki3vuj4DYen++kYpy0nyaxv29VX4HZbembr+wOENu1NhFNSUbj3oiQqD06Thh+0iEFsBSei33ThNdnUnNUyS4wR0Agn/Mdnwg5zYDiOWHHM+x3A75eSmX77Q4UeZhshsZy+NNtIAr4yRCdTVB6JraYLYvwBkG1b2b8Ubkyp2hxzqjFGVe7zjJkxeGk///qZuYqt5YSp/tOxAYvViLMMW7LX23AFT/zs18txtQc2iKPVpbhl5qPHS5OR2+t1EnlKPt897Fw6cWszeoxY8RNPuF4TEAOuDNV90isdqpMbQau7nGbj+anFYvpiOFECNAE1mJOaYZR1nZwhhodVdp8eCqd/rdmuR5CfQ1HDWHvv0Vzy2nc5EsyHFM2QN9aROWgpko7yCvwPyJWJ5MQU3VJxklLwNewctxZlk1+LzUGqBPyV4hTr8tMceCMeYtoitrHFz5AUDZvdqF+CgatxgtyxWp61sj+U9E8Cu52wLGGTWIPalhmr6IByD3g22qJAaMqkjPHskbtURVIPNrlVosPSj8KqoCwKbk7YabhZ9kF06siT62vE+k4xlZy5IX0VMyxnckGqSuy4OtB2kxIjgqg==';const _IH='0eabeffce4585078477a4d476f8c77b2084e960dd15404d56884f2e583cff0b1';let _src;

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
