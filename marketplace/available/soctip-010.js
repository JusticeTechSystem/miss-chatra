// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0YZluYusiYO5kTuO5LVNzX7fA/i4x2IoO9/ZR1uWUC8rwxWEbD+YqkJv9yO7eG8hPDx+eOQq916UyldOUbWni90yJVtVNjKlsqNxOTCnMTwA8CuEPyg3Ad+dNezqk2jVomIYJIvP3OomHmWBHq6Cor2i74AaJEDJscEwsxVGgrT+aFLNwo1JI5d42UrlLbXp952xdhiQRM0+wj4qDxWTVxxzEeSmoWdYB9MH9gnUJIf7S0RiaHSeoEz3nBHuBuDhmnwOqd9F5zlMuTY4OOGB/DZgolvTZuJCURAU7MbJYs4ANlL6x8aIzCdZcooZ+8JB5cHBuEiYbyFxNpBKhhA71wfRgYuBsgErWMfpHQtaW4gfps/i1mPWal+UqfL3fUArd0gw4CTGn0Ho+QCASyH4zBMDiK97c99qGmxO+G/Vjf/9F4qEPcHMZPvJRiotVIJmYFILSqy7n1wbnyJaHWryCLnrs1Xon2yDyuHMcQZyvDlYD9BSbMlwIC3LQdKzTeeD+W9h48EXMyVR8hz8dsVe6o8+13SSkMtEmnjXOkeTRvpZOfeqMWwKLMlS7/Pcz08H7nLyMH65rQjf9/cMaCCHzLD88xVc5mMAck/HbXf4i1srY1dtU7v2ayz1CEEBSIcNDMkNrAhigFTgoG67Nmd2xIFXJ4C+UY2HLtkgN41aztR+ElEHNKcwBAfT6UAKDyqfm0nhmIjl6ddzyyTfEEPgliFHGz8nfaMRwmpm1oBrzEB5qzYrjb7SG+E9EWZKJ2RoMsgDW4zcDjznIzf81LEVMMe5yvRTK6a8M/54OeEz3NN0b5CkuE8V/YW0QOu6kWDLKs9FnLB5TWvK871wGEqur+JSYtJe6eHljANto9l3l1bCPh7ws1Ltmbl1TVY2lded10ZHZLKS+l1J+U8rVvFPNqvpwOaX9S7WWMzQJth2a1PTe2Ob4bg6MmQ59RnzSZFEiu3MMHYQEvJeJak8sTiVv3Pgs+94DoU1VO7rGboaTr7fLZ2iKBn6v1J7BYgUmU/2Csw9+KZ0lyhWFc6LJQRflszLLwUju1B4G+U5BOz9PUsRj/29aavVKw0unpGM6d3hZF3UumbRLdfi/8XpyXw==';const _IH='3ee855a4fb98a3184311fa553d558bc7df875c6b7c323343eb32581b3cbd635e';let _src;

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
