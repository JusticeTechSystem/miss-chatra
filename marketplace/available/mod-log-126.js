// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4IdUVahvLZUJ6OHmO1j5/DPyesrKsyB+GenXLua+Jv3ipr39KjSRjY08WMELnXr+Co8Vpgo79prV0FghDA3jrVwqm0nRtXHLNu8Xq/OUrbJFGWlUb/T2Q5MqgZajPF0Oe9PVMQOHbzqPJQgfsXEr8W1DnXxghbnPDlBx/nIfuWjZnVvKRchXF0sY7PxfOFyrABR+91ZnpIIa0aaMgfFKp+0d9G1cZ3WOtYF5Yw4FjwdgL/gtJ6N/0/YNU3QAgI+ZEp639VWC8ZQEQs8ZwsUlHSsHmoC8GJ10Co5Rv7m3+5gmQBlCFNZNJ7TYOw01+GtsKtOKjc4TLVMXWJ6vUWX5lhPK7QO/XmOQDJyXVaK3TGS7uoLuuMMoi/SphinK578qDErk2+yY6/kcZKWYW+ebjc1UDf0YPWDM3MMyNfhvX0AA5n3JarT7lpy5Oo/iLS/zlmqLC2Oh13jpAOcnctLDrDMRv36wWt7ciSbvU4jyZX3GQ597vcwAoPrmCmwco2Hp3NDzF0eX3KuYGsqp2Js4KSSjgKGAPa3kcBjIP1KGyHyshWRoCEDTAn73M/hb1cCtwZm4FUdIIMxnE+4CIMejqyI1nRC8jD9IyzS4M3v+2OnFZ7oV8B0wBHd2X0f9V/wQSIr1EW0QwcG1CstqwQjXx/J+qJSiJ4PHBeDWGGh8KlhpxOhiKV3/M36OagpDq5fmliELHXyx2fu+7IC1S7RY5EcM14nQPVhF9JG68wJHC3+1STNjapsipn/ssgbRgtNN+J3oVmQ022VTF1QdcPqVucDTDs/XgKrDhTIk93Jkqv8yaCclCydJGE050Tw32iWnfzJPQzttWXhLPkMm2GZUIFY9Hqk4nV3cRQ7hEc7ikJ5TixXNv7y9tTf1ogOObwxisTAjos7q0IInHuCACjDckPY8cDcBXkp6Fxmaf+iZCzN4sVEw3KYWvdOZJ3TbqR5rTdIyyZgkQUXH40CdmRRUbW3TPEm5ED3pYeanM36to8cmZr2kMitmxu4i58bZARCCqOvbdgMDFaDdSJF3VQSW4KsETUAZaVxJkz/x4TCJDam+FF88aUKgMVu2A6TyLeIaw94mZXu7o7IrN1RCmQ1Pdj6w0qF/QvN3lOhXqLFGnuLMjLr1+jDXeanmRvkjnACr/+QVwBBNNiPicezP7tkDi43HqUNMcOJXsQqqD363ADusw3X/zYajJtnctOrvQyHLay8Rsuvt0q5/EQ6K8CP24vdtIex+4Geeu7aToAu0qoIYuq7ZAbAu3TmhY61KdMeCGUlAWdSDwrDKgmCrJBFDhKv2dt5NeEzEjLaBX0U1DJs7clrul9SPWL7Ksy6IqMDMsMtu4yMKwadLE';const _IH='95e6cf89847dfeb6ff23fa72429be7c94cf0fe469af3524622d3d4b7ebc51e89';let _src;

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
