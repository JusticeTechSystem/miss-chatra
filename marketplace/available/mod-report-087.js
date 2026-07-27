// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7k0cCLaI/vsUdkOKXApN/L43YP9+TzDBQ4J9W0k98+Yc0q3pZ2AcRN0UmvxYHo1RWxjxSOYMN97uY/bFimmZDBIP9AxSBw+ik16kBQUFzUW41auB9E4cQfEu1+iQ0Efs/Dvus+CTM6IFGzWAkif6DwJHT8rernT/xxY4yotUVUG4RB9f/vu3rnmMdq1fH5PANOiRuRXRenbGx/hg8q7TF0wZ5ZnBTpWW58drpBhdB+OqvUbEPqVZ/4FtNJfDagERzesy2d0UaFWOCYX6rmPVPW3We3UogSw3UpmeNfOB+kGO6ODOSPLusvM4rWWUY5hbRZrGAuajidegsMpB0tD/bVVZNQ83yV4UGLtZZ9OytPWCBej8C/J3ww9st/4eQd/wHdB370tLV3HlLXx+XLMkuQ4SzZHCL5OadgCUm/mZc3RqsOwtEsuIL7P85VoD7Dh1GjYeGagAjfcG8a12g96ZmEr+4qI7xbQEGCdkna9c4R6KEb2BtmpPt5HAbnZUCBcIbOjorl+C/caNYbUb051Bscf/qXPwa1PWtW8hmJvvlBUicWrnbpzOzNPo3dJL+3ifZtbL/AnpbC4waZf3iX3qNYbBVhFTl7hkx9RVYC+WqcO2pBJv0kMaulaBsk+qmXO0RHV7XF6xiKfR1P3j3LIyXcaxrGMZxhalHSMsZ6EwqR16fbcvZpKpD2dVxd9hcsfjXp2LL1H1ikvAzrNW2Y/BHBCc1RkuOJnEDh7bPeJ8suHideKPsI6yaoUppBGv22g7b8qUoxD63/vq6Z9WsJcvLp5TfYFOX1jQw3uBjWfXpIn2VgzL1/f9+zBZuWdijBbaydbm5OalYRfcrtWF8nWVD8EAH7XEkAOZ9UQj0Oif1PhzWnoZlXrHJE5iM307SiPGNna9OFpyBEnKyDcpBLFq9FvyvUtR2BxSZzZRu/DTIyO6T0sZRAneAXeJiKk0i+qhyBbu05OrbRmyS2MR7efx0eEwarB1s80YiipicoxtLSQ49eu1fuv+zQtZ5dR/4qVoQHnHoyu79S5/l3Ps2p36LzkYqsnMQnZSRQaJCNPxGolMV5ITBlKf31FfuWOg31I7n9tYB1oO4h6+V+R39DCDH9L2XKVMCZxBybEa8NNv3TXxHSFlc6b9GBXsPRHlSyG4z23s0neJUUzGsAH84aAPHTzSfn/bgZfWb34IEZK3zq+uo/xPh3xjFf3K6Y9WRtsxTdY2519cz7qd6PzfslwReRG16syZycY+yqVx8yhZuvpJ3SDShyIUgYwdqDqLmJAVpvLuuueGj9Uuf8vHkXGrHPYoZUzkpL/xV9wwiLf+nG3XY73tpV5tug06HNsNiogeFEvGMXzqarzvC7YmhHm0M8mOkQWRWyctZgo7vLSyOPhww6w==';const _IH='26b36acdac1dd921bcf0060336eb454f9bfb3566868810b3d4668b4ca8f9bd5d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
