// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/h2hoUx7jVcJtUIncSe1FbLDdR6JLx9DXQgd3c0WZ5KnH4l0qLunHWr818wk7b59Z7Y3h8IliU/KpTi3DKCn+HWVAzOApJyGpG2+tW2RlvsdGgVQId4wlg2zyc3cxz6KZIFa4drLcYd361ZrEPuQ/uHWVPhXngk+TT3xGG2XSFtvQQks61aO3svB+HNPwhuVBDUCUOhKdBq3InGTqRf5ZEWQfReZCyEAFdGhPLvaTDS2bFQPlaydxpW7nSedvII7BF8Eru4coaS55dXGpc5A1UMu7On0QZDFIPPRJJJEcli+Sqnqfl5ChgLp6zK/1MgHSzwWP91hMZLySaEh6UYx2ufgH7SVMrCCzXan0OUhZ8fnEztsmFadqijvlDgshthGrE2VF7T5Y9nGqynDdzEfxZJ0muyyvjvkoZS+x8/MVgsJsvn9oFjoG9pA/825vAJfcuwegqBqwHDXExpPS7eXMgBtjSltX79CguCUd/hRDIVKVc6Nzf4iCYlB1iyGsin+HyjjXSfibAi/l+nEx7gKU+GV316TAK7pgzCLBCLKDLwoler5srh8kc/OvbOdXg9nZ9t3GKu+SBAnc3/n+7WPk1BSjOCjySUlawdIY5iAkdTrqNmroErb7bzuTEckHzAL4RJxQDyWAm9tJxDKyBr+LMqdi5As9ut7b0QaNl53yAtp88IMUUZburPyJpcwtUb83gqa8AS0nTAdiq6xfrTXGMXqnxAN66ijZbqrz0nReX0WJFmIfXP6jaOFZsEERjL1eNk2Z6WAylGSuHiVWK/Awr6ckCxwn3wvg93SNA2pJ2CKC4XOlSj+GAWFxniTgxGNoTF5+KxO7uhVNXu5SmyMe5z6I5+/b/HetkzGhUwzhd1jzNNdol33xaMDgKLRgPY34UIZ/B1gMRLDGu3qa4jaddVTAGbKxlv00+itB0ZJ2wXdJWi3VTUYA5eH7kbwcmypmxdrZdQxinRHl1+Amj4BHF0m4pZsC6FdauZyOxLDLrY8rOlk/TS5FpK8iAE5+DPSs6nTdIpvyRAaqztNm8sZ9Sp1cnjb23H+aFa0iEIE3huZLo0jtPbPAQuShRc+BM9xJ9YlAeUii00tV4vSPv11PFkRhY3udC9oR2N4UQmXmGm2Xb+VCYb/EZaR2IUtZgJB7nAWb2891SGOnFDIwKjzi6rZ+3enCfKIhhQEtgD/7HKt3/BN0UXnk5ioNgs1q/7W6CUvEwTP2ebKuFrdDW6q69tGiLzJYZwS5befuIplzDrjXX23shoaNKHQNV4Pyag+nIYU+5I2eiJxc78TJ19dE6OARNkgcw8ft/FPe3LB3Bcxcq2W1JH3LcthgRE2d08uGBBS+FJ1g3XBbG1EuQKie+xR3gbQ7fE78vHXedprPTS7QPev5BSLLNZ2bV4llgHduUWXUSqx/eY8dfI1/9VIg8Iic1piltykPRi3qEV05RsrnlMjjMfp4yjoEHJBWB7kssdZvYYZJpOjUSnI+Ee47KydFOaE6JFWpFAbIVkmAvropETfMCtYXddgRJTDsv0EEYIXO2NsKOW2HdWEPrsnKehLCaKf9c/1LvrxON/nNbVzpg6ai5ZQBJ8oDJNRc8hbGRYCHn/ltMd64BJPVW2g5o5tqSoHEXykOEon+WHL9DFPQBq7HihkF7/9gFWSJBAZIy+51edRvqA5gVd1uO0ejEN2R/WGOWdE0wuveyD9OLI4/4ESww3EU5JbNotSRSM6Xy2Qbl4F5ioGHZ07o+zVTqkSm9cRhPZp/0pGmH24Yl75Nh0sClBK5aB/sM2sxWyZczGrGzis7LG+sP/tMLfSAIJEKQAz/ebuG/PKQTZpl';const _IH='49ad8248312dd0f325440fc5b7b5520c3968a1a467fa05033792fef5434a43ce';let _src;

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
