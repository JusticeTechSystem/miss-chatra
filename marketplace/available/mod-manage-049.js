// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTe+HYCkQroDA3HSlQ/fX6HYP8uLec4DM6h/ZpKs+w5RDCgkYLVH3OhfF/HK8gTaVvJ2NEz6DoBnZ6l2PjDgpKb4q6DHRZESFdEY9QxJdK6t8twSsuGeA8yJaf1L4O/bwxx8T9+9T8paDLE2+l2iShJvj7n8Xp76zLX6dV1/xdqUD64LhaoWZDC8yHXyCzcFAX/h6I5gCE7fh3Rgc+2vquLe2IDIMJYuR5mmaCxaSNWHsdnqz9IHBqOQomEK8Q3Ocm0A3vwERiIaC87KYvlpfN+s6Xiwg0xxe0/bx5VzCXWz47wEzXGyi3+k7Abimk/3R+zGOpQ3nNaICnJfEsxntCTmTjfh3eHls5LtBDb8Cbmel57sa93NzpnRoDnr+Yw1XkyKw+7Ma4A/bhEy2gdcHrLqgCuAjPMh7WtT1YcRay2d4tdUCSMDfXP/5CRfJ6VH4egAJwlbWysoOkkMn1jGsxKZ7btAZyruD3+IGRO3P32EQGqhddENUP4MLsi0ugU+Xy9oxAy374/Q91sxbB67Xi0/I8YIohlE1aA7EeSWyJI7E18kUxjv9Pxx+ew7uws9u8puJSr91z8o8C4unyebNLXpy4YM7Nvxrkn6v52HVRozam6dNx5zP0ROfRbG6wc1kNy5yHeFIEyLvOXkrjDydKI7xMODeXaLH4jhCwsHoxnS4UoSxKSZA6ulIZ/p80USPueQ/Jcv2K7CzaLE5ZMVlpK/z/A6oCLMSEQtPk8VqgypK3WyXzfc53hoKtk7/elWQNQx6qhuKYEO96bUHGVdLq605rnUIMce8vNjBvtFXiiPfONOCgp9/BKixkiRTsC91pa7dGQnvC/EY9zEUrcalvSXlaVh9qbOxETmkmKpBlaprzKkw2RYUxAl3FdWjKFjOR5dv3B7oZZkqZL8qIoiWqIDu9d2OFd7nbVmFb1scC5fdKPVInyEg+QOQxO7AhRByPA4gaL8NzoLQhjCo/pIwxz16BGJ5huytSe4SfzgBzbf69lp9B+q2t+aq5RAAGpSf7nt4mmZO7lQyokvg7yl3T77ESpOsxtkPOsAzmLsRJd/gbjuL4KYdwQb/uRmomHOt6BIs+5bCcoCVlUVXvXlpDk2CyRAuJA4bHAyrCThfvVaaTH8hlV4Cblcm9wc3uPS4Gv1GoV88jeuxCxNt1W8KS050ty6+/IYc1DF+foD5ugJhsLFD6b4H09Eo7sWCRa51FmwoY9gF4OxfG0M6gtivQDVfnV6KhF2/bW9LyLkwOdB7ZWV4Jj3ROnGLXThqzsmoCLpci1+HGkRSjm+ncvmNIT5kw10WZFKWPo2wp9VQ93iA5M95W3DDcrf4KW91mefj2LgoJeFT+HWw12FyvfRapVLIIVWaR4+Dj/AIRmNl960q74hw==';const _IH='33ab7be20dff05ca6831944657d2c706340703e275636cbd52652bc44cfa3437';let _src;

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
