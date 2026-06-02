// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TRuurgYXJCy1dCIb+pwigLj1kxucAXANtT4JNRm8UJlDLdVmoeMsAhV0Ur0YHn27dTt301GhkDq6ztJjkKdqFg0zxGFIWQRV3m1ySB57zNccMjGLSH9TX1tQtWRz8haXBTIzo0NsGP5+KhcjYyz16g7QqfzkP9EN4sG0zTsIXDl0lcNYr6OpbFUMT/NiFvPamPChRhE+6lLJtIH6XgeX4SQgQSD7M7uUABESCcjVCrUrDgnKFmZWQ1N0H5mTkfDHSiJgyzG1zekniJeE2WUPDpqviaHgz+B/bi9iMhfPgpQAZzhI7GcImxKyK0LSBHxQY33/2I0F7Um4jb1lVZUGgzux+siPjxtSf/J+Dw7/9oToHchT8ETxkULZkAQTmWEql2CH2r+H7GSDKbBjegYIj5o+RhAItYszQx1oqiybrgvtu8hHimbA3lFyoiN1srNx6p9A1rjIxrLjTJ6gXWhym7lT/4uJPTjiKGRQyrju5EsdU2dQvPuQCK1Tb2fhwl0Jbh+lAmF36mLFrAsc5osz5nq45Qeq7beJu9G88S1VuJzH5P4MjzZ8PSnRjtcrIjYSo3m0we/5C2w5m2Yy0Tygc4esEnJfGIL36hTl/fZL4yhqeEBRBZNjGU1pLonmaMSt/l44WjyjJ97Z/qanSMB5E55ELZ7urIB6AkArj9aMJEBzE+2PRRDeXEwyh948d6mXeIlg+RBwj/BW53i7Wpjq5CLSqaEQh2VgobpfkfTrEgvb0yEcOFAzhUzJL/F7YmcO5ffBUT430gZpuSbLMSzTPt1joIwf/RSFlO2m5XgEvL2slTMUyVfu0suTfxNpQDRkpDwfUTyadrIVHnZDgNXqSHsD0ryD+IK5D/oX5fA+aXozi0Ty4CH02KrD/BzqlFpx9hogdA0RdN9jWYsMOF076Ri2iuoS1A8+oseAumhjdiwtS+NyB/iI97TiXn/W0D6HC9eqUtXERU0Vkwemmb/J6Z3DhpS5rvI3iyxud0k5e/23v7wib93wa2ntt4cJGnbVjtx8MN0H5SxEgt4U7+CHSdK/YtyuZsuO1rYNZh/DLKEDQAcQS3a0edrmGkIGkccj1dYPKNwFq12AZ1+PKYIrZUIeEumLU0Xg5etMhriGjJCkU6D1rX9/7TygzxS0NAmJc13BQ1XvyM0VjPPttxFhz2nabcGHfdv06aMRjct2OusfEZEKdl2a9V0BWKeKI6sFpj8m92cwfj+kB2xwzh9D2grnxd1I+KDGwSwPymEpJe0MK/+8fZ7DFZaan3QJGlwc261ZDxibhlS0xTb1PQtNSEgnduli9SWvEQ0CqiVq4IJS5sLpy4pss6uZxiWi8X3pV/qkdpIc7aPNxSvDY6Y3nVGd0VQekI69EOEXoPYTKdW+/JUzSArAqTHDohPRKWnuTBZOElMFZhq485IZlO05nufMEVSqdynZ0dZvJT79xo+JExHOMg0Ww4AZFVnuLZ80qygdn86SrMDW2gJ6WGUkqEk6bGfH55Qlk9ipBpPMgg==';const _IH='02ef7da0cad58c6402c0c5e71e90cecd2633b76f15517b3f8d9bcc7068f5e5e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
