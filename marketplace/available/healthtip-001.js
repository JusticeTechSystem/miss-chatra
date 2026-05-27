// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yz332hgdyGS4ZE8IrUt+AURTLov5yTVnGT1eCJGXdp+YYjudZKOySIdOl/41h87vEXUrNS6JtUdo3Mb3eDPn3x4++E3dOJT0WGbYeC75Gq+q9e4d7LtjNk1U5kvPfEU5a4Ws9gDTuGTQbnJzcJHHFgS0iz4zfUCX6oFRTX4wXlkCoOyfSvi55ek4TQRR60ltr13gmawiaHPrLkMthDK4a2lZJHkFEKkyI1VxY/7PGgmhKscSWS1HjKSapNIcMKwVwl1I12JZjRIcauhIcgCKkbIHKjeh9YnGYCuJ7OYgu1dpRns4+W5eq3caf2h0RorsseKbhbEXOkYMG+GVrjWTCzymwiUJOllsCurIfoCUlXJF7Orcyy9K+p3ixz8AjSkAOeDppE8HhDg3qVr88juRD7fU3QdrhxfU7yt7PJq9R2+Rr0c5RjQSK3k/X3ueaIO5RFTFCDPgLu/cC4uOIFg8/Y4QkXZDqrCssCRqejsFVI7WOGkJsunRCoi26yAw/++9TEsTYhKqReBGEmlN9O9wHdBN6rQxEObRDjaf3+1vAGBr0yuQv6gDYQT7fc5VfdSgLif+HLWUMllK8zhpn/piFU8JNJQsWkGG0VSJZT/rhZ46Wxt6vxMrK4b9u24VRH9h7OoN8r392GI2Nm7gnkxA6TWzqIAc4a3P8VmXMxngER3qj+0ouyjFD7u1O7zj7/0s193s3Dw86a0B2yxOPNGZFA1pvo/gf2eo3tZRJxGbUfBtAsfO2SdKp14s5Z+WwEivGq76PQELZx5v83AV9VMQDyU083SbrINRqUjpTPoaJ9uYVl1szoGYHFiaTe5sk5OfGu8DKGcSo//opm+W3j49rcWmNuFM9M/OA6WOPa/MietqCfZogcroghJY1MtrENvlolpCtRV+03iIPcByR0xXL+mE8UianBzIJ5/6db4g5oUalsIZ1rcrGA==';const _IH='20c5ea5476a0b28508ec0305728b699a45d8514191b1e65764649201e578c156';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
