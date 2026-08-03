// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCcGoszA0l7CTWB6wRhaf2eAoK12fblaQXMINQpXW0Lpu/QPo5SNXd1lwVz3ySkfQ3ueOK3MdomGn9kPDQIQimrjKqecRTRcYbEZmCka6LcCuBNgPIVz6ikua4uCxNmun2UoctIoDaobFHaog03kaTyHm33VcJgq1cZSyZnjmaj9BJGMS32dsMg/nA4ulOjjwhINgWv50L+8m9Cm7B//wHpH93NErZ9l5ANs7H0xmpazfAZj1FCxTzxzK8x2fHZ2F3XmcKAL6Okb2nG7w3695dN1arvgl1ciCfju2QRpAI6loxD2sUL54BNGIsJ+MrvYAzJ/ZiaLELm+/TkXoVcX7OudxviQzcgFcizHZy3hOTBvsjj+Z80c1jjRfMFE+woCXYNYKdpj5sFgS9Sv/dtDQEHYZj9zELk/F/2bwmApkSXU0rReYUnbEEJRvb1v7k+kxZiz1rbNPCRpIPCmUmHH3aNBFZ3AeEVmo4iMOgkX2jmFT7n+bExSJf6b+62zoa1pMBWxBulTurHbGjw1cu9nSHipsPVAglntFJcBgCrEWaWsSfwvP6hk+WG5jORU0GdKc0o6RP+dBacgpEMJx5ojndOS41srgSTdC0JqvDcOExB0yQZfv79vEH6AXj13dC8hfVsZdxXJWNLfOQzsuYU5oSXeypHX6oR6pe81KxUxFrs85I7aOOsLPxZ+hy3AquvVkxiOxnilwycUBjbC2A1Ch1t8OVhuO4CI7+Icc7o1e97uiLTShVn5WalOSH8QM73Dms9F7PSigmhvsISC0p8UKk4f7HlQxaiEekN6HCB7wLTJKnvS16JDpRmeTI8N+zNN+BPP949GwSDOqKvlGL8SAdVRU4qkcvcpPqse1EsdxR5i1JCac4+aZt1CbUpHsBgE7s6qJ2zcewoz/UsOcuh9IPu5WlWSkxBCfuzj/PVjs19bxulrikHM63XzBjxA985Rcy133b9E3pD3B6QN+71ysCnJcb5xdgl0jUxti6WQ==';const _IH='2655972bf6df40a67fafc50b5a0975c6f4d3eb07e2ac080f100c6745a764aa5e';let _src;

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
