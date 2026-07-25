// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLi4ZHWWFKC+s+Kd85/k1+pDpkrHIAY9+Ch7v8xGxtKM05vRQdyNIwffzACnAXBDgfHotTwHxaoaFHdmVbb1bPyr9A7oRaNrKsXFoNwBaYZ+b4+kHYUPwoN5yocfwODbKNOfny5+xacOEYON2BRaIePykcFOFkFcyLuqs1TOodnVRvWYyLogGsKOG4yJYJR4UnBAp+JPEzY04CAJOciEkEj+csNS7wFKy6G9IkpER0CToUErvEmNKcSbkGL6QfgQFyQgTTH0SSVh3KTSgQ8sJvbu5Rumsx3/+UgixS/FXDgp+bcwYHmNcMHZdpJVBLUFe7UYYZiUfRN+hHbL3nD6pDyLWoEO8A22Hinfo3u0/JDbt5RKZXfv7TIhXPeuZB7HzK051t4BHX33tcIKv6eYb3Z+EgSLR7qeZgijM1chUmGLoecsZmBtvQ6W4WaeoGu8wXqTZVtARIWgtphUW02HoD+eQQgq/ZHm4C236Dxk4Tfxl/V9xbWD41WnGDcCrtRbOnzT5bjMpcGwDBQ6/4nRBb1McJ6TUJST2L671j07LTBdP5Ci7+cqsnatRq4jYXnD5hsYyop/qBSRa5gAHQDOHVprhBvgwOZ6zNANSz+tbjobmFbCG9Hn/TZ3QAqjbYzKWS2EBGnoi7CeD9V9No0duH44QrkySC0Kc4SC+hZbLgmG0EPydqFTgSxWjd7nEAfzd29Y2NGyzzW+whS7j4lDY1mMH/yw7UWawrMK+HdoHI8LidNDgsrKJW/+Fbsy6uKFUPK9nw0W8c+DCQ345dG1BKUExme7e0/LebGlTp4kRt+Z3MN08BfiaAHgAaFdbD8iYOzCw+7fdzYrM7C2SviPw0rwrUsizkbSI5d9OqhiMqcjVLyt7JlImJ+GSmGeDXx5AkllkU39BGPIOFq3r+GmZU7JBTBwqAvo7zmkLMukTS4Qhud0z5DY6Ijcg5mBH5DThmhHl/VmGlLcwUdnuCvOv/ZymvmqzpWYSfxbIpVkjKmBWxx9CK4iDus6C2H9+U8gBVijE6ro+rpuCW8HZASrSLGH5afKgW2EEIfFzz00oxey78uKxjJPcVs4wOAhNmkhOP6oqomdXMpvnhmcE1XALN+13YpFG5vEeJKi1YJXyofl2/MrTpXdsanbFrRZQshAsy+OCQrA8yalK7JOc0KccmE6mBG7KEmDQx1MxRxeosqCbPAwEVjEub/WuYufRXF3D4Tk5SN9+o3qPxaMvgmYUkqCCrXdqZ2v1aid/2ZCXT7z33tr15sqFUvYZeDwbu8Mc//DCpGm6KkuRgEEXH7b8OytV8/TbwIKyXv36oF9TBZVW6kKXnphW7fM5ZEvvV1Q/wwrhVElOhJqUUNW7ftpHXjYLeYrIpj2PbuegXWB23mnRhrADjTCRqa+vsr4hd7aH24CURJaHlIuhIHyTO1d76qJmYnE6OJdydOLE68OKod9ZWtWFsuLabRM4eyQs0TQ3mxq3e79MpwBd5wk5UnETVaHSabGQP44cbme1CJLeP2pucCDz7uLFGpKvEN0CGev1f+o3wET0bykL562kZfD8TM8zuwU0/VJAPVvBUtxVbZcg1Db9Q8+kRFM+v6lPyU845lDzP4G6bOfpYw8mYXBjGnb31m6Hm7Yt6rlnS5ff3JtF0w9gjrdFRe8ht1vsoWeyBtcPpiInaPTe7GoUgj4eTNV3U3NoBIQ6hQPKctIfulRrx';const _IH='4585d88b94376468d593be173c6f5d5cb3bd4a03f67716d3625bf19cd7bacc6e';let _src;

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
