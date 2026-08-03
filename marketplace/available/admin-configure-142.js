// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOxvBcdGALq3sgPUWKqqJPEBZhxNw56V3zwDiRFcFMaKYOIwkL0wTMHodRGfXBCMJmhEfYxsg1naXa7eEJnKF1IDCYNf4xeTgvkaSDq6bXh1nn5sisjQpAgdXItkyfdtc7sld9NGZKmI8bq8HzTMKU3LM1NrQ0Kef8hSfirSQjB3tO0eOczdpvUl38Z7EoCwpNpOqCWD5R3ZUITDX5k2OVcDxLPRIs1Cn9dl/8zZHLfiHhK77445n2GLW4wmiOLhBdzxeL1lCAVIDrFQUFDRNTppevjceMvP/BWyxL2AGnEIOzgPnF7O4fX9kqxWybSH2jXeQV0EPvjs3E/77yfoQmPiBVUaImAJsUpxm1DRT4xS7Dr7yEZUId+Q5Clv/14BmXaWnRUoQFRMrFw69iHDVAeUodmQOHYAMUshBiHbktbZ5QJ3bdtbidS35nSFx/fgEtVFRIO0PN8lvtX9461GJAfiEY9uKR8l3BOYlbmejBinmOygSolIoQRfIpWyESzjBHOS2vYS2rqp8gHvwPRy5wFuoaE2IzXpTLHmfmO86VkjG8AInNiL00+CQBUHnRrTB/L4+NqYFXz3Z6pFgM/s97BhT/ThXrp0IvcGEyksVUAaAOoDLajVZ/tsKfDoXLzSMoe4wR82/chTxqIc4xxdndg9RtO2sCQwyxFpoD6gU6K+l3Fq/+roJNXMgt7vPUP2YbRBks6ygQxLgUrzYvBEP2BuGHq+O5Yd+r8QNE73JGk1caN2Vf+hGYpl2UkT96BUVhxiVmmPZ6VsuhNOp7ZzVMBmaE9ApVk6DhQx/e/0Ux21uLkLMtDKl+ibKswnbWCOHafqQA5GRbiutuhQveTvDd00D8hmg43sdbCxA4b92JW0dCD87t8hsdRuTKxqfhoBpvbt4GDYrkitNIARVf8AKVUhoKjc0x5pN7peAJt+Im2R+toY5WHrppjHqU2ypbPgs7beL2ETLgUrZgmochiQ1MgYQryfmts6Wo2Tfgj4hh0ghzZWALrMF3AKNzZit0ra9OyVbHSRsM+YvPzC/StPj8sajc4g==';const _IH='8f51f999adaa200b18afcc79b972ed78a8cde90fcee2b69b3d882b95af57fa46';let _src;

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
