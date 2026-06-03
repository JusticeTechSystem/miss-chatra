// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/myNqetBYzD17fF7EUDMCmfDlYdJWsFdmGg8uHmCtjCXaHKfPYxZmWCz6HFQwAHj/yqQk8MlPtaJE/wscRz17b3ZYaamtnoveBIrZ7Uexo8BLjrzwXP8UcPmbXxTbvM5cRsNgvU/77T6uVBsYp/U0YcxZcBPN4IEb0Vrlz8FNVv4cuKoYt04ENVZJTIDrMG6F3+ZMyjyry5qJNa0yx/c2s4I22+8tfb/q1UmLvhl/gIT8nRrWk9U181mC5qyIItpyMXWup1EZQ/4opclQg7CYJJsrV3cQV6vQ8sNo3hCJq7tSXKcIgPmg3ww2RNLs8PcoWELOW4dWSS4v0hHZotXEAGdksSoLV0c6QEUkVhwxqDQ98Rywxzsy91hVjhzpbHfiNaFpMihVlyd90dwVChPqJaiVZ62SgmlZ2T0NUizPSVNmWKLnas+/07jJtSAD09XGEV5d1YRdMnbIapiuwU1S3TGcMlGxDUnT4wzjKQPuWfDtyo7/qYY42NuRMrC+RPHOqq7ZJ7h3v45R29833TCHY9hERVMT9PUYFh/MbAvwWkmu8gfSrxDu90f9NVwZ7Yiv6nXSMz1yHwWuhQe4MOqbUZeHFj0wWi/uu1LiD5IF/aMbNSy9oJOKlJkrzC8xwitP5yQzQD7hN3P8sL9h23L4kSBbTEawrsmkLKtsbW4IW1+YyAI1TG2l/oA4o9K6FVKBU2LQHol/DpbZfCZ7NFQihwQPqa6r/TTNXeY34/P0ZP1RqzdSUigatV/fkO4S7BjlF9r1UWUm2GZjs0Kqkh81Dp6gN+jWFnFoSYiTpBDERSAgO01f5ab1BRCjr+KFMANekZrZlW1ay9OHF65G9On7v53xTf9j4I1BrHaJKTSmkKzIhDIlhGnOOvoXrcc+j3GLYsvmW5gK+xk1nQRn1K+keMeX5aaZ+/TrrZ8A5roUmTgITGVBxRm6q7BCnjeLnoYnBolV5E7orKbtpEZEtsRWukfa4882rib/rogts1ZqPi68B5P2ZsdhTwD3q+The/JJcibFoz96afSbvMvspC5wcUgCCEKqaGYAwfC2qt7HH1TXy/yyDPk2M/clNsYJnps+VlAYFYGQ0DM41z5dUiC5FnV65U+lir3/5nlLhOgo+WYm0ubFeZ8oIBoEY7Oa2eDjcIyfuvEAKME5cO6PPoTAWsEXBrJ1jWkDMxAdp+fJW3iegYbG0fKFoHeQBI5WeORnx6IewH5Ss0PbvlchxFybFEsQ/E32CM8FEdOxtTYqZPdqyPnXA8euriwDpb5259meaKx28lM8qwKS5ClbDszFmGXyfKSulcLPzwuV5H14FTDH11UCCZx3TC8f1CR1NUd20RzlMvDGwDywrnRhiKCADE4rT94U6pS7sZ0Jc/lM9xFj7Z6GHPbW8GWEM5zQfYbLVtevzyvCnJIp5jyuDnH8teJgVQ199ZWze5Bj9ffe0CSVJ9d/Tf0ur0kMsPXicj2vwwss2mSZOcm+PxOYoBWiqGrjURIhB8U7Sas6KTR33RHbkGneFwOiKkfIvLm9nML3fjux/PWVTHuAIAOmaVlQk8IYmLbM5tMxslwP8zfLLd+3wENd6VCofB5YVXlJ/GW7zD/cYu9+qUQs7IyNxdI7i88YV6o2I3LUOCGPwkpvdKuHzYGqvI/dXTc4bwsjjn3CQKV3xLColXZqBtpTy5S91Bwi0zs3zxAcxtSe8oxzbO8QEGIBdV885QJzDyoWR1fRHOlDRVgUpyMJh4zk4kHYatlo7fKBBZZNqDqD6R1CAPxFRpXcCDuWX2FNI+cksO5sYC2390=';const _IH='466a3e516da879cdc13fc127f1427e9090f15a4701b486e0d3bf4ea1328fc5e6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
