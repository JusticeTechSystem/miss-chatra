// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjSqDdhps2Ozj+LKXDafwA5UJEbrDP+a0rXwl12nUVSiZwWJWpe1+ys+aWCs8dCOceNNhwARTJPj0rcF6mzcPSzJPQNndbOxXFDBmiSkV5hnHLsq04vB6lCm39clmhWwQlJJDHg4QlZCR+FkVOs+3ITiTscK7cZ20WMjCi+UWK8wMOsLLCSbp0KoU3xGWZ+WuXtLI4eoZ/0MDSKGgG5ZnNlADNsUU/eIvZe32gvKt3sxrqsy+nj7KLz64WFPZqDeNXQWSvmjhBE76hMnGp5VUKA+VsWhxPshauDq9Kizjwmf0rPJ3kERGj3/ANz+4LupTRH/go+fEYN3gNDV3UvOYQQrBfDXTDilmvi0M1cG/flXWXOE9tlZGf3A6xQxQkTMJvFHugjczAkfS/sJo9W5OddHK6tiBwRXScHSQgW4EMRi+7ZkuSH/o0qODMu5qlmAvsW831HXtpmwo3CebbVsvOJmbO2RPEurzNHsfm/KKHj7kdOVGBZJd8YXHHo3vpF2NYNRHOPLI2yXy1yHKFp43poSh4xWoDVszcldrxKO8DTj0CasYcPh0pm8ouhj0U7l+KQHghlwRKVM7LIC6odqkLH0VFpkcVT1z4E9O2HQCjTH0d9U6urAO5MGlR/vd4GwPdoccS3ETUDeB5BUU8FjA0pC6D6/T2CA8oQwD/33NRRfKnMNmreYSNFzVV2YIm7ClZbTozGtpIBUw8k0nvK5lnUdIHvauOQnpItRYvewR+JJvI1ShwmcjUxpNgmL2uSwj1Yva7fHHQN3iZnLAww9IvKd4UoUl7J4p5j2teUxcOBeaE1e52hgntjsI/XspD73H3giWoJIfeAJOhBxwkVsIpBZ/aoZ/QRntCC8HYv2y0x59bj603ke6W9Dxp6t+L7lw3zTEGkLrcYqhi2lsUgMBCFNjOSzIl2JMYrRnkz3Fy1qjtwY/1HIRiykCvOFzys1Sa4o24Q8L8Fxr+46Saqi6jbUdke4X+eiOi80nXztlWmvkiBbJCabxEXfXMUb7Vc48KZpqE';const _IH='bf1cd44c4d8efc3e3365885f1148350e82a67893cc9539b4dcc0727ce2426b0a';let _src;

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
