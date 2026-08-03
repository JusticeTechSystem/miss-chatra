// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPldhk7p+KtuQE1nkuXI3XnihB4ULIFuzOMiZMl05BaHGTVALH0BPE1jFKFbh0/u3mZ/46Xujb4Ljt1Q4ysFp9B7RR52LYtFETv+xvemeynvQOjL4f4YfbkClSHbmhMpctCuyd9VR+HzaFcI/1vptpD7aoUhtwXlWARQsSEku7D3T2sgqrtAx8aHI92oPlt2ddAqVC0VhL/ce1/6TgA4fq3zLg+k7IIrFkSrOvTeeLnZ07zmjxLBp7fsQQ8/4d9vPyHIHgoTlIyhTQH5ChGLb63AOtOtD/E8s0RCT8GN9VNnfQyCzIwM66DAFFfySLvtX6lKFdhziMXw+JT6TP9QiVYdOiTkNGO3wMxF/eyfzWFgrvl7Ij9S1oLPiQuvLDpzuXGvNsn6iJrnAQ0jL2RIdENC2Nr6WdTfDmX5iKVykMWmE8EOq/t24XjqJyBRTQwuN2Q7suXYk3u84H1luQrMr4/tYolJZlSuknrnytpzkxOc3UjwcsEXrW/Fq0r4pmP6ZMnUclo/MSr+m0POz4cw4xjNdN/eGygEnDGV3y4+h2YmkqjvQ3E4eM12ru/FE6zf4mH+tp3cFZSZ/G7iAEuDX41m4G/Y1ODHWViwSMh1jLXq+xuKV2epURmf/TryLEpY7d9iST8DTWHqdf5CipLksmCAa2Dks7DsOwjlXOs4XhgH9Tjy7/Q3M8vEiVAPAmkT8z01Ns3fHwkcjbOXHRP7+Xz33911C1C4KJAoOhC+cLBZiC';const _IH='1ffbd3e22b0d639542f6b94294c99512646c3bb797450839ad0706e15da8b488';let _src;

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
