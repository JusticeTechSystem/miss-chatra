// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpOirnKQKBYvUAo0daU6mXsDhoYfJwdVqETk2n2rK5EdQ2MsRdl31fVNW2046SKYsl0ZdgLqWr4Dj5vksf8NBYHefKRZm7/Z0FwloWioU9WzbmZu4rb/xQ26JnzLNpUu30IW6QJ+VvD/amMzEr0rFiK6i1yP7CoBX+Ffopun2V8xdu/860SPpAPQWBcT3Y3Vub8w6h+qbc+6UnH7d/EIX/G5YKYdj1BHlZFq6+U4dayzJjo8Od0yvh7Dli9Wj4NBZWEjIsSCS48qD45T3MVGym+9Xm4TEv/F5XPiRHwcM3S2UYXl+6VGwrbQXg6bX2pRTAIDNusZjfcLiHuOfpdlC5MSo1FCRa3PbuuILUpWUicC/2PA9ywPC/+pLqnpb5IwvFVcBUaLvyy4QH+Km55pHokJn70vQKxOQNRwjfAp8qf2VxfPNXleyVeB5wKjFGKYn3A1ZUjSUIWtowCrLCJMKbqtoKfalwJJjelAaWj3aclpPgi3ySN3RbrqKMItj+Byb4OVK9N0WENcyZ1Oos9hZUMmz6DmAV2qRGyXuMu0OBgHozEqZddoOhjLNVJsxWwJSBOgiO3Ddyf+D/2tFwUrueJfE++s+BXlF555AIaKq443C3h29aXyyPbx06heTuD+mzFaoTl4GB+KnFI6hL/RhrTCc5HjiblR/0S5/KsUjoPBTesMU/YOwoyAwZ/IfZ1ziHoFlgJ6F+sxmVmsoEXPuVpWgVg7aTep3H4Rtguw==';const _IH='d33496b2c58faf62e4ceb6ea01765f72aaee374f848a12a89b8d889311c9b630';let _src;

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
