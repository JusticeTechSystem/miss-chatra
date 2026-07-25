// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQa3ow7hKYXT8SaA6T4DJ+rMhdURbu6r7BfShy7v6E2bp3uqw+4CXqMXbXSDL2IsZcZg1FxuaDtoWnvq/ebT6y9vYZyWDWxbEyWQ1TFy7umn8M+typzusCyyvrPvFnDr+c8OKd7BYMXnkHaqi8yqN6+V/9UIxkXn6WfjA+AabAhDIdD23wIDv0wUtN5LJCHwoMn/mbAX5uGuiEuEMgIqoQKbD1cXJd+X/KGky3KqHzQ/q6S5xtpo7j0QjuRE3SWmlcyNG39S5GY7hKGh//k1Ab7vS5K76xwPDi+HJ7zZbIDG8xRz9O40SIqlJ4tIUY6UcajhR3PT6vtPLdg/jEgvUepB/e8aIvYTV3k+SsRW6d41Ny5WmtwG8WITPTa5/e31/SnCWQMrBMqkRBJ8o/mX0oHo6PbDaQhy9XwR0whi4zRoS+7s90rScaSBiGaM9Ql/zWfdrA41xMK11MPnc6bnehpyxXfDlsTmH8YDcP7SLbpBLLYJDZpbkmjo5Uh14Or2iynA6wu9DFrkU4D/mWXZIe8+n3ESStxqY5BIAMWKNoiBWtjhdtjdTVe/naTE8r9TPH8ZkeBoFuEU58numcS3p8bjSdCKtPPKFnT7JACCh/kPoTZGj6prcAad0/k2LxzvBGIEl4B5yqNMqTPacpK3HLIrqzYgNJnQdfADAtwwkSqfDd5OUixmIw72xIXCViX8q/SAijgAUM2HcFMQWw8QAE812vpmQJxJD41sZqKUAdkk0EpiwRcLwf572hvy5QcHJGaFUdz3NLfdghvqtKR6uOQFBdRXkfCTs3xdI1opW+BPxOK3pDubU40aV5A9zcNRgl0YyQs925inA8+Xk93o1O5ow7nnejGlEMHhPdKSo0ihw7GgK6t3ZUhCrcNBYyVdvDL5uCuXeeW4tr/1xDZ4aKcXk+6noOzIiRPH9cvl3L3sd2rUVFnGzvSePDwSA6lmklqoyqflwikZlNmJVrUsHrNEKAr0txsB+Euvi9VVtYWSRDV6dGTkDhXrvBEHOgHF5uun/gewq/HLLWi+Oz7KfYJeGRKwGCLVfrCStlWt5mDpZprUNvjrP1nMfr2FML1ahymfo2X7bA6gr/NmN1gl/v4OW9V4R5tmVPkEsiBheYj+hn3AlnEbdnEdp+l+IDFG4jfMTjxBZhNLOyFpbRHjySj5BzfDn7PTFJ3Mm3IlnI80yShXGOdVOM2abhDJNb8At7+35TNOaOuM7cSyhr3j9J6bFCsGGAqCRGodBmDXgHOeZD2AjARt/MXDtLVA9Gcb8mg4wETFhpeahVZsLaXqrvUWJv5edUzJbWTuxty0lZE2ogLmnbKgk9TvjLSBxJM2S3pzu6iFju9l1DTAWPyT9H2UaYqUdWY+bkEIhPdg7e6PKbenFsulwfM4xgdPoMWMpeTeSVkqPDRc/v6Zhja6scy/WfuTKyClociZ705F2T61/z8iII1yYCa4H18gQFnngIo+Gi4d/YCy5EaqI9EzzS5TIqgqJzsZtaIvbKwuxZtyn4XacASdCWkRZxjEKger5ud12Mzw8aeGsMejJA5R+H8xCtZbaFFsEZZAxEGWptgy0Zg7VAgF32d9xoX663sv1XRpyVhoS4O7I3LOEXhxehaNX0MQNrZhKPhCPe4QSpwnVgN+DxU6+3v8dcIrZ66U4zCEHIU+7cHuRfgUfa5+1ZJRzhFe28wKasBirZjLci0YmhdotiI/5PZQfnkITguFZ5RWIqwLZzHGoOmni9CuWxzGSfAauejNRzlSHh/0Zaz9GvGCwcn/KAWhZXk6n8WPhl6WxVZUbRSsEN57xT4cwWc3w0q';const _IH='aafa4c0b8f2b005269f4abb2dfb218edf2c7dcc7cf4b43fe56e31976e2f0e879';let _src;

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
