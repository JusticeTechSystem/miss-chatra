// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/3iJgtOopqQdhincNnoPf1EDs6czwWTYg9/lS+VRwx8RR14cZOYMcM/PAO/i9qhXeglTQcysk7W1ITQNGZKeOz1eusoyTO96sCLaRvFmqTcCbIoiZt63sEN/JYYLt/KMZDE85XyFynQZZpgn28t508Jl+AIYSd9qAbLapBuJSQrYnrDk9pMHuFW0EPCyRNnf8y6XFUnbVTUgSM5etSJbORySzotMXoR2kgPMcGlA1VNO6HdTIpecwsryYZYOlWenL6r6vyvnyr3/JuZwcN7ik3403ruGT44txhJ+KO7nbm02HMQhZ7ErSfX33WqhRWp2eyrhFd2qqm40PRGBFgxwMtKU7UBRQb2pMnAX5VF/HVXO1T/AKVy6cvF99UEwabSH7Z2bIPUlMzjmB8BTXTX1Hig3ZMsx8BGo9wAmH6JPJqL7tT4S+2Fnfcc75nlbBPhhe5yzC2CW+nTcyYJZXm/HuhRt/vqyhJyGCJyq0fz77PauwK3+S8Zz5v1fbQBd2BawsLNjYesmq/IrA+9VSTg9XdqT1C4zqDSceYx/oaQBMK+ig2MX0Y5d9K2dBEo/+OOjQPYar/j4YE/gH4m/0AV17IcFoYX6eOkRltQZjBss0adUsLvQEvunK6BFOWgMRnhvdiM3ajlr9mU+8Fvfk1P20/03CfcZKi68OoldWsWeJC6Kh50zdEQ0zam+7z9c9/JVbThDDUDkn4lf8ekoDoSfZFJ5rS6GbkVZpYunpjfLNnJ4N0mOGRzu7sgQO2HyTQZ7yk5dFjHkCOY0cihQvzmxFSm+mdB+a01imn0yxI2BBT68VHGaPlnWgQjvMcFOc0Tp4qHnZnwUIEbZnIy/CGrW0a+jDE4hhQWjNVfnMpU3IcupzdZDMtjC5YFooeWudrorwX8V58mIVBsaPMr47QFeOP492AFGotNwNLG1X91dZRpvjznx2id2N673TNgYwjZXTSWMcAjlBAdLLYnxntJt8NkIrLbjJFphGU0U9+S3j/TzWgl+jPrsqs6oioZEL0lAqNyCODmlqQX8ghZAu7x8hcwGvirMxF2b7JSPXmBK5IxzL2FfpKO+5hSV5JjEo2AAlodNIDkABLao7nRTUz/6vfDOxDLEI19Hk7V5aiaD48YovVvZPdQAjbN1taf8QmwOZsNgxwY64wC1hJt/sr9M06zxx7yfzKhEIpEwtP5xQdfn3oR4fvTab1DY46VG5z/lszhCMkrWeDNd1mObaW7ra1Rs0iMqRn6I+k6dXBHdpPgHN9N4VFJmRuweYBubkf+IHwCyvl1wIPpyHecNFzNASx2mu8e7w9ILuqWR02f9VlbXaM7KmxogDavONZnLxE9ZyB0ec29P59NqneU4/J9XM+oMB2gg9qqBTdGM0ZirH7r2XEPYxsCVsA==';const _IH='4fc16e8ad2d652a6793388b0ee0efb84cef0e592959b472cd0cd5a97c8fd7b9e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
