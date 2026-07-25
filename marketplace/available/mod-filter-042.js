// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLsUqgmjWTwKHAKb11pdu9xD29IDo4phyJtbjXNNvpbBFFdJfIvXxz4dacwTkl7P/7a166kIGkaM2O9Beop/LuoEaUlVRjbZWsP+ZnMdQDz/aQ17U7GhsEwNEgjJUNBjmRh/BD7yvM0N5DYpVxIeEbsVeoxgWdYFI6thcYvAfBtQj7ujDc3mRTcKUqb/V7jQ75nNDnXrWV+K2oILVklPGwqtr99Tw1fQKaBsVqzIeSXhgNU7PH/i6XVKgUwyIXBJR03wpkjrAMUUGO/ULhaqOlPIlDpkRDr10f+M1afM6pS6/VYl9dMbvtAcpjzqx6JthN7okS1lyz1lvxmeXykquRfAoLFT2tDXq2hYkRKXhCrkCk+XNRsjI3qOvhY2k4nBQ2HSOXFxNWSThAqYq2NVmjq+uejp7yozc3pvMRF4JV/dketoE0eV1if/MTuCt3x45rxLuEY130VYeE4OyzQ7WtrBV3A+maCVoFKqMdlx5sObfFOKPrWkGbc8OVIU7xiBmyyn3pjNbSBTcJEHnLRnZrH83IGzHWt4Xo9+HYauDS/3zXYUlDvl3cD3/6JOOtqFcDRFsWCqI4QyfAiabfUhm5NScrjhz4mu6NacymbsmArYgyx9fNmv8qR+hRZw2MmcOcZcqfn9k43j4mt8qOvWmhBMKxc2T5su2J9QD5vylyCBbzFncTtymngl2I1OZH4mvOaZkGk4/gAMc9Sj0zFl7RDRgXUnZlQNpiIogl9IJ7yZXiyebgDPvEYcBOYJL7i8V0hXr7TtBcXbSBmxcXnNdjJqrm1W/2CVS/4XoQczzmzS6zSqC3iymihcrus928AO/qq0fipIHTk1Mn7H1GPXnrldrlZ437heusVD53Qmi4C2DElPDg+yFGfkxt9VX3oAphgHuyy01GBfjmKtiJ1BLLz3Pt+c5Yy2GCKCqIGFgNNS5yX5XN2Xw17GHfx+tyFrx0c5KgCmAl7gRIVgWl2Yk8ylQPH6bZC1WAS0c90KQJIkfwl2Jhd2Ngg83S4Vw42T1rwjbJEUuS39bgo1EX/nz8fI6rEk/hK0KY+D3S2200bFFh2sGJ4CqlMoVGuu7Luov9hXGXAMGjfzwnVkDZYmxMTnqnKboxQ0ARWNTqYuAsD1xPIv+yCdwjiZet0tbvIRkg7GykTfU9hKgjyieNt8AAIE85WU0Vo4BO9XTMkgmrZNNM6HItc+d5HwUhV8CcIOqF9lCZTiikXgxVs6ukv7ad4NVM4AmvZpvboLKo8Fyfc9RybwlVAtf+vxkYFscwZpddD7swUhXX2DlfKMpdbu7Q4SdCZ1WdMYrTQdknu6So/gxTNEi8y3rhu8mucNYrvcdoFN+vrYf9fnZzctlXhwzy6bLZxsPl8gOZa+ikmOSkT4Kvaw==';const _IH='767d553e05d85155c9ee0aeb39e3362f898574880cc73f5ad858e00137533bde';let _src;

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
