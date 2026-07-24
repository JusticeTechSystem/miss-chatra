// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZt3UTTngyz2o8eUu6X3e+AGDXgSe6GLn5j6yT14rGs/6h5sr/vy3dRbRQXfqp/z1d5lbikRfp+cJygm/Ps5521HcTSr9hVznlWeu+1P0+c67xKfjdPEGjdQf1YTW6r/Yq8tVI8AkGSWgmAs6VjbAwiy049XWcGY8TnbXwTqIg28fEv9S/OGVhZ2mFinJdqi5sTnxcvUwD1ywewNubYJXXLjKTWSs9aLf1hEgp+UOC+s8Q8tsfZ/iNI5ZGQ6g0p6zsIjLJO3X/Sv7vzhHAKZjEBTXNSYABNZTnPSbHAkenn72gZfqLvcMNEJgXthcSojDR4dyL8MN19E+B3TUZaJrVBuB496I0Ctn6rSM4ifVDpV7j/2/H5EMR5wy3Qk0/AfeDgGEt5KeWuCQpZUlVqxiy5E8t0NF33NH6ZFSAIIBPvWRxo23Xm+0hkF7GQ6rX2k9uxl1aEvMSpehsQot93TKQjJJKxqna3vH9RVDihuwMnVYWpXZc2SfMR2zOHwWYvUqa2hUvMEA5mOiShumt/a5Q76bv15VNRSRZeJ6JDg2VhgybquFmRpXFWb/hLZyEh6XJaymVy7+r5w1WF7qAmwQAYtdqHKwjwA+dDwb77hzH8h4ypEPL+owqFvhV+CEMoDBXYg3kMCmZPa60qfeuVhxoJX8M93Do/Es0dXF+gpxrf/RuXDBysB1eRPTCmfyUizjZbGjE+TsFHKfzKKIKa4nNlv+zBP6vPpX8U0G3P6gkEoVWUu7oFYIuACLJAcRzpJkdtXDLVQq3+4FWk4sbkO3O79bQkCoNakI1u20PrqoR1EB/LmGxHA4cWn+bKKeQkNSSCoRD6l0PDX7T6zpK3oZ5HtGyOtDQANNM97CCBUXgpq78iEYk3aDXCm3t2b01wj3cxdUuQS+6hCd3xiZLIYrR4kkF0JO7u6OjZh3ZqxfgEtrR3gafoHv6k4tM/voT+BTXonFIKTxy8BlHiUej0K3VPSC5FPdj/XGOFPPgRvKmpkVuzmTxXLRUPV7u485tzhNeNsS4RjeAXsqQlsUpxgYCdieumK4fJV2xBjyaIPZEocTA/lcZ3pn649/ggn2N4ngtQC46XCHD4QB7O6Yv4fDkWInfxdyaALcQoUsX/P1KcipIYl8YvIUvrcgWH+wTgY0NVUThzEdLx9SSJsLYvGiXffYUy+WfeS7cGI15TxQX/pY+TesT6AaCOm+S3kh75gV8R9ZCGjSSmF5B0PxB8fU6pOcemcUI9s4y1nfyO/X04nV4v0h9U4YpH2rDUjuPvU8bi1Ih4+VtLiJMdVCgE/zqvVIH6foPLcP7Hm+1zUnchD0RciWrZGBNF8iiNQRgskELnq69zGsi+oRkhof8MnIVmW7eXM4ftwOK3mNLU40jDUeyvg9LVbCT';const _IH='4c0146b659b09de07bae3f8fa070d8945cd343e4b917162735ff063fe47fbe65';let _src;

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
