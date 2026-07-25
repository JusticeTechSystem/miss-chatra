// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTc4oOiJYTuQwLHWA+yVPlQmYuFWkWqTMBrxIJuaREmNjECvQDQyS342MinDrYBAZOoJIE5QNSbI8srEbsGPTXJpYYD2Lg34fUlNe3Nl68YqYIgejkrb16W4hxATyVMa8BcJ4lbzupXCnl2CzWFviF26oIqWHHXGvlvsMYtj+YrPJsFo5Ud98Fm9IKXN9hyxB+v5I9TLDza/KYYF07xGNAVuXykrfww4v3ZuXr9ympZ+DfS5S0/6+57oG1lebZC1xboTap7UUut7RPuU7JPLJ3Hrud0EOS4vhUEvmXVCuWY7EzXuryFzj1COAolW2RPes7OqibDfDo5M6rEVCGxRjVHK1gzn8zy4PRGXGPbZf8xzkK0Zh0v5yGVGyZxk9rSboMFz0tR0kd0YIo0PqwclyLilufIWSplu3EBxK+Pts/w6sNd5rEVSbwrZifkgo8jlOc8hGADua0LcFdvwk9NSQqPSQpH3+loEzYPUJLPPV9XldN9WNqZawH0QKwPMs5q32C90zQC+n1VTGLIr7bYzhF6z2lWvKb5hBTo1bTWhn2oleZpSz1/hsC/MjGxtE0Wbq3nSssjUq1/5VRaDQvTj3fjOCa1spCxqmXNee6vB5LCLaOQ2JfEws1I3/HCzwKCjZGvHj8mg8t/U5lP21Orp/5RDIFNofemQDMVh9jTQ6BRlAaDs+WEucF3vn12OCi3JLYZnP+ay5rwheeLfYjM5+y1I8CV25dapnoABCCN7a5tBuRsBTFaTELLQN0r23s8lvyHwLFrJBCyody2eqsoXXoxSZ4lwOVm3InnOU12AiPfqBH0HwI1Y9thlvkPyAgDBUXAqcr/zIgbjyu1Cg5O6Vrw2OMpW6tgDMXhZIaPEG4rBDFw9VoBwl18GIGIH0bPociNwlKw31xZwcLraifzpTHa69jeq/w4HirvXZV53rimewlNQZxhIgYt0nBia/0ui8e2yr+DLTxH9uSPTT6b1AdjRprUCsucde8=';const _IH='d977af81740c8faffa16fa35d6933304c8279fc5181e2e6d72dcfd171ddc3a8e';let _src;

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
