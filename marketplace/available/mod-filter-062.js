// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVr/iRtpwZNFR3hE7G7tPRo3nu79kFnrXBNS4dfAKGVgo6UrW+b5vBBNDY7FgKcRXTc60tO54GrQHH8UGe7dWkgGGH7CcSqmXjL9rnWXeOEULsU7O3jXFKYbnSZsniXHqVvgUXL9egJs3a5QNOhE88dIh1xcpGK2nmbpAQb5dboouaIU9Zsr/Kp9116O1SQm6w0kd67tUKGvaPeE0g1jWgIBnFo5Hf0ycM9g/AQZasbYBxP5d9gaOwG7XuUvDJ7zFq7tLb0W4TNLqPqTnyp1txnbmE6izDN35YuzhC7GjQe8bjq6ky74jeXYAGCQZQe/Oo2xW1L+c+l92sH6K7621TXtAoMM6VkJcgSEaMiTN2cn5o4wRR/zgUtirn4Yuw62ixnHkjWW4aW/cyEnth54+35zILUXnaVL00hyGGM+F/TKpSGgKfBeAwMQLbqPgJTEmoIEJtUGEJUrBBYnQvFV1xP0qigploWfvmkOlPTpBDv0klpiki0Z0Ac06VMKQs0RjnaMHv4j+sYdkkVkBIljAWiRvldQKAAr+fBSXMe/QcPCeiuBOUIEStd+VtyIv+zlvHOuY1WwjJtT9wTcSd3R9osu9Ra1PYw+zFOy0Y4m/Uq12F4ZCdeT9+ULOPecoNISvHh/gpvfn12ekXF5z5375lPAN0ZXn7AW1zrApdux1suPgGSW135QfXSIg0B9ICMO4l3kkR7833Oe4wkVv048vpax4bsBU5qEOno8A+DbeieaxdgMBb81eq63TGi2Yk+jUN5Fj+50cUcStLs1oJFuFJVKQ7hq2Pl7ERWywcA8zHplTq+mZe+bTiqiK7rP/VPkYaBI4pW1MtDg0OwHO4MHjv61bKGX0Ld6g56EyM4Sk4DvHDHo6Uk8p2BVSk1uwCWEoxey/Ce9Aa7h1HtYcBdC5sSfeY0arhEh0HPwntZQfoZSJrW3RcospG5MGVmRjcm+CV0IN4W3qbHcDces1BvslhKVjOwIgSae6dmB+Fux072fA6FmrS9oVUOhd2ZeIyO5/YkOJAnIrwoIf6hoqPtBPotESBJqpFFX4WDXaHD/Eb1BrNJ3KT7Dpt3BMqVjaFlQPAbQnGFR97cfCQqavO1v1FYarfiJo4R0SgpGg1nOyqFjY1JBmIXTt7VczulubQn9Z09QPqDaYvdZLqDUXozfJIFEbhTFLFLpm6EKcG0XoSKbp5b7YUGfKISHwCTKO8+AWX/aBN7pF2kXfAdN5QbAf4AFQE73Al/b1Hqzhhs59RQBfPZIVtV3JJsGfk8KfIbsNJ4HTNI39UWDU7YR6LhHHUtegHctt3wgejVTNVvqQf7OPyALr1vRfPAXBNdbz7p0wTtvQ6ngAAsZPRVDSdoHF7I8ZHX0k8SF7iPs76OM3bGiL6Yw==';const _IH='ea9f9e1557069154774fc8d37c134c8af8f89714da408a82bb0c4fca05d4a750';let _src;

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
