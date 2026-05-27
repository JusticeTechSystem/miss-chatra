// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8iazgI/zMbSpxrVWc1qwEFWusto6PMTuPoYgXiixuK6SYWYEwY+X0OtWZIO0hGWN6RlvQm/Z2pClQ53M4sujIOFc2j0sL5VuyzVzQkUM6E6e0oQXGvjGh7f8rP/Sg9EcsNdl4uQxFZCzv/PbSZkYV3pqVYI2B9AX47Ktz7BXMSFxSdrYmZHsp4D1pXeNKcHCnQVljDuJISOIrWhGHw9bIbL2iZDtewdVUsKTBgcpVQoPArm1oaDIJR78ZZrjNBGKzU7ccC9iN5Ufa+RXr87k8bkNeSiJUbVoQ8uxEhmp6RlpdPwzRR4sPTpjJmL+CoHQGNyPpLJEvP6GM0zuh8h+iQcPMTsceiI9l7yHh+YtqpemPcH3/oGFQdJD68rECUnOGiE/Q1+90gI91hGiBw3+aOpOXFumsPniS/C+105bbrZtGe3csiBMmTnBHn6QgcPWTHTKB4pDL94dXKLvNaW/ouYyV77TNGrQZ8wmQf/q/AU5pBX+X+uIZ9uDV139Uovsusv+8RBKN1mEWYR9LZZBIyQwziDSypEU5auZXGt+vvsfZm28Z54zYHZ2FSlAImQk0Ar+ZzIosPalCH2ngTNC2PBo8sfMzOfWlCXS+6rcVUtsJhrGppAPMY7dKw25+UmkfsOgrOYq9cWLSnm09SH3ZDbDPFas2mH/F2k1TZ7DTKV2Y+qduSUJ5Y6BQSwfEmanBwi+oYFHTLRkjJw=';const _IH='d98eb0cf9dcec3f24a172488943f7c16e5fc4156792ead41295a1a37cf09d3b5';let _src;

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
