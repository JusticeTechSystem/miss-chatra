// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+/EQz2v1s906LS8IerpECIqrkFw/SX/lZp2AbSn9n5s65+ra59JzVaXHGWVRHeVmXCMD+g0zi7g45g7CGm1r3D0z6WXNvcZE53YZxktWnQWLk57rgwzXkujecgImEg50AXJFhZyZAc6TScdM6VdrO/LgoukKDVhYEoksjcC1vudojpDtW27n/F3o/iAc/OWMuoWpvztcuqoESJB6APWA6cWgMoeHC9wDvwj6JFMk4RC2MJSe02x+iNlfyiFLwsjQkCibKHeqTHFdynlSFuN6yluhZfTKFhvgTOh6Hj09VjkxpLV5Nijy2tUUgrvuep9euVxIjQwzir9LT2PQxuaWQ3r1iCbURElwORXDDciisUwX/7Wb/BvJd6N5mzdGPLWtUFxMOJNwjqrpWZVTWqP0vynL5cVR9XtlBuU8WWRHrjls6FctBdXNE94v2ocQSsWswEiCUMSA6oSi2VmFLnMIViNcvcHpg9VzA+Np5p61Uzs+Xc1zK0MiCArwjLNDzthiReKDtUlLyrVn75c8gM0XXKadQFIoCshO1gjoOkwMSwATQY572uwOrr/BWAw7SkO9s14Yc35MtLzlMdVFip9GD8akkbXiGd8BhikM3sLH7SU9bBbhxyCMRSK8q3roHsALRJiif09Jvfqpr2uGi9tZWN6hG69nDPmzb5HFVqRKkQIJgWxN8MFPc4vThN/bmpMAXp7k1pM8xW4ULjg+VAfNgNP4GNVmO45MKpTAf5it9YJpMXSvMh3McsnZj2ZaCl3HH1gL0eJUapoDgpCFDzYS431UoWM7mE4msjgmJM9DehOqBLO7yLhkv2LGAiPt1iXF/DSvU1WwmN8Tk/dUOY/x6DIA0x4TLJ4ZsAoG2qR+XUZXFq7IYAvybVHiYqK4E9tsz2JEq4AmQpGttCNrxpxutZvYidEBUVB+PI2PXs+pf39AFX5vaGgIzcj6toa+LAc57Ojq40ICY4iXTvwhEtTD5eg+CCpdV6XeWxKX/CH98eI/lSWii7bABjffKkhFW5mFeGuFJroN7VIQXbTP4CxoY+rqKJqbw57c3BTmIlK5DPNNSktquuBs6R6tqNfmgT23dmElwHAmkkPt9hR97hG/wgUqZVfir4u8SkIxhVaSzAy+NDijxkjGNDOneufUF5O/woqPsPCHnqmgH1lVUzz+7JxE20hdrHLyip2TCQt+tqS91vqz6w8ZM6pCy2NiujFrlRkrW7NdnUV2OQKYKwPAGIr20xN9urGkUuaKvHA+66e4UmFu5/+sFdI0FrelIjJooW0Tqjx+tasoFl95YHX2Xjp2zy4Nzq0YT8LjB/ICwDfIoyb3ars9rCbVXxDk3yBLldgMiFs9VDnYSvGGgeWoja1Ar2w3GxlLYhQXEg0Q=';const _IH='d9f6b4463924ab8fe18a31c9f5024b5ba21eb026ccd900d82854321ccc4eec81';let _src;

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
