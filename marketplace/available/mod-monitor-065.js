// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgMjuWQrMz3oOReZHsfvBNI+VWne9/azbVNpIo0NRnR50ECiIYb3EvrWA1aaXyHOv87STJGpbfUmrZpBIQ7oOfaxufRBkQsIP4ZOm3GleqgUP+vdvnIeW6waMiVerU1sFH9ros+oXNDp/MqSd2vX/SOIf71Gf5bdp20xw8LdrGJFUNqVD/abHzLSqW1uh4HhBFfI+qFFAlrpwzHHXCEtxONm3WihVNtm7ane+gVVKM98cbNgkynq0L2bw2Gn3/Iku+GHnMJEivzecTGTJrwsNnZJhI1LMyoatE8Cj3p2tGQNzhvW4n3M4Wb5QgPLh/Hz8Zo86fdpmVGFn9EmUpZArZflp38qqrdgXgd7Y5QE1R/HVgikqeoe6fbUyTEiyCXMQ/7kH7VGo9VtlMXWPcp4QHBb5y3P91SNj42ZUMvETgytqcgrJ6pUp6JEROq6Q63d82YxQLqoPi8oX1nUO77nbCtudseYn/H72ZybJiOuhswrs/+qL3SO0SUJJ15kXpmRK2mNCjft43wgNqlrPTvVtKJ9KYoDW/H0aCeCFnny1iM3u7ra6Sw88l8eo76agdSz7VMMftzKrmQ9iwjygJ3d8cbcG3RqGLEyNSj72vqnFz3mUjOZ+He+89lt7udlTKYCtRuizKN/x2xDNtlB6Yg+sERV0OBizU8Qp43zVg/Diq/2PqSpvGELwZEWvv3G7ReHJwah66/8+ZI/B2HKI4J4kcFbLoj9dqq+YptfSvNDg+rSgY4AJUu8O8bC4zWg3rXLV0YL9dDWi8sN42Br3o4yqVI1Mlpco9+AetWEnnOHRhgUgteQAd+BjRDggeNvjGEXhQfeRfBK7DxKMIUP2LbKsELkCXZOQXQoq1zIBIuSWomnsQyv19Md/v467SwXsJdMEVbp7W+xN3zPvV9d9UVcxXS2pWUg8Sptlz8l4uAjIr8MEqRFISqPT0L/zEEAyrFOgNEBxbKZh+XBqT0BcvyePYqklXtEPtGDjn6wnEiOLjnpv+K/7Z0kegLpxd+kIOaE8mxYh9/K1BBK537oA12wOJPQ25YkTLY6U4rdxdeHjJ50BC+PoZQ2Isa7A73K4ev46m6U1lPppJD6xRHDh+jwKHWiB9wwmyaH/Jq0meKeGGz7umwpMcaemJXiRbdD2B376SExf8TP3Gq55DMnt8Zk+NlKexLF2mnB/E7erDxkjhTboiylKDEbSL1s8gFO1C1zssnO64TG36TUqC1l073W8kvOH58OfIiDl/2NFqvAQIjGJQjiuvJ7QQgzWArj4zb00dk9N2UBpFY8/PIDMVlGv7DFjgJFy7RSaxk6RX6qsAXqEE9fmNyvucRu8sT5NUYy/BzSG8RnLuY2vNgMWk41pnpBfa3tpCg+PvJl4DerV2/g0ACL4jtpqCSUU=';const _IH='d92615f07b05f513fe4e172dd8b0876083dc598ee9cba31cdb98f10de23f31bc';let _src;

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
