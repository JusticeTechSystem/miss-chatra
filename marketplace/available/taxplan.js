// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPu9JEpmwjVJXrIofSuzY41dhFDJDq6pKRt0EvO5/039acb+43koY4BFyDZrTMLEhjjJ5Zm8rIeFNNfx0UQQqrENGxBKPqaaDzWjD/hH91ZlKAi+/dbYFIQnqow4GsD48nNIBOHnaBOzemP2oz0UJVr+jtSnEBU/3Uhgcxf72OHFmZswwzQq+agL2B1QKwacIgf5Y8upfLURbp8bTTFLZT6fOmeW7jQxiCdmbV4olPwCHouSTo3Bfqn2wzsHhUkMxWn42lN3tW8ZWw5sdbv6r+PxJ8ecTsFPm3FFMVkWe84v3z9ZcK7B38VI9ZBwql90EQXo8xHIg8ra0uAB971779rFSQAz8JU7KVQoRNPU/5kI57lgMqKdbDYAkFIkGce95t3JX527cBVrcMbnkUB6l8Zmd8DcvPuGdXJtx2XWh4v95kwa4Cbp+BqxSmekdI1xCZyVPOCALjhFQZMNuD0EE2iJJu8SwfeZqXEqWrJKDHSFQc17q7T+xektE/VZdPlgBgZCd6RkI7/nJYfGk9IZjObqukZGGMDRBbQDsvImVVTPJ/n3rvWJFbqkUzUz+dvmMp+qd12iErjIm1FSjEr8L8ssWVmtlhAYgAMbgGdGeBHTE8W/mtd3HHWU9fX+j3ITEp0kINGXdmVsG75IHjT1sls7c8tw/ew78oodqj8KgpHPALhSdGhhCfz/A2+eZHdymZ0waWftGrohBFHkQtEoIyRSUxtgZQj3+SpQl04VwoTT8sExxi//RglTJnW1rKX4mqDa6p+vWKzqXryov5zHB5/W8+G7l2ljit6qvZE1U98JnWyZv4HKnLQzlwlD129ZHh5eDOOhERCvOvTSXJhPHMnaydePp1fm6vZ3mYawjxIxrUihIx6Tkx6LY/6q1/Zeq60KQsJLZcfQSruFGwvgB4T1Gm6iia7pQrpSDpXPEcR5NsptGNBcXCLFUm5RD6oiMcklzRN7oWoil7nPuRIkPFu6WFvF2WS9NDIUFWvWHsn/oOIJJld9Afwjf+W0ghSmoPMLr2n2UomNxm5u8a91uJ2hqH18aKj0w+iqOiZ8zl1aU2hMjN64R3ltl8xgzqmcxkQRp+RrnBV8QAPF+e+Z2H7GwNczVq5SWyziE2ojVByIqoI6k/+4Y+L/HSBCRpiptnAHNTh+vjAOUyVcPsfeQor2n6FoNUpb++TJEjEsMW9Rgpked6xK8uhEbX6Yg1yxhj';const _IH='e70d1e424bf7eaa057134ebcc73c9d69582a9fde728bc515f985b3ab03087d9a';let _src;

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
