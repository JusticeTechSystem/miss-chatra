// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdZ/BtqtSV6NbQAZ/V2bLTqlo8p9S0ZUJBuYNac5RtPhsvPXU/sVo9HXYXVdhWK0z5xtaRTyo3tB7LBnJI5569c6d9pVnNQpoMTnANM1f0x+93vVn5fKWKQHI7Qz7xC6rr03lLvBmV2+0DLXFKrCKsAPw/7V5Src1XWrvpmjLg/THMuJTsRQYYgM0vq44hLb8dhW1zaod9K+P9VTvvLSE49RvybDu6EZeIcTtO5pJaxNU9CDD50z2KgrtiHsX0aI3A4qmCoW0oz1dh2Ho+p5jhQxLJLFfV4sqt11HzBVvu0vpMF+hhcKW/u+7ZA4mMQSMzhXIPUcOu+s7KMI9caKxDyRzxrwNckKEIWpGmukfZ6n07cojCYwoCuz0/ZbAvJkhO+7+v7IsoG4F9klZ8rbVoWSgW9dWGsYkQ0I106EQXiB2roegFe7A3/YmnV2iNzYSHksbXbLOtw8DmD/IiGMA+cLM76j9YHyvzr31Z7bJ62YduEKQcNfWJYM5t1Z1su+66oGj31iu1IjadbgfQUk1rugNhSBN0JdQZpy2vvDFURp7AC7lpK3Gax2S6xBMq8I2sKu8M9ouzCu7eJ1LwMEdtBAjUH975HS3RnWbw2C/qZi4VnWr5fLVl1Go0YhdB1Nwk+Ll4zlMhMq33GkvXYDF/CaUWHwlDEdz2N+bxwmz1AmiATrqCUpmX5Dp1OpkYKy8yBIlkfRU3u9CvJR7WDSSRxAvO4ttPARVKOWA4XTuUN9PEInU9Qt+0cbIlX36D/xtBPhYu8aAOruYVdZSuMgrceLxCVWUj4ZXUvM6i/aCVV1ffyGWEx+r0OaehXr6C0ThGRLNMfi3RlcX+31KzJuc/xzrmV4ks0XWEDt8H3yjNcfNeKF7O8NTYelHujdltrYuoqHoKi8mr0uhcXyiDmE4mZHS3pt4eoksR6neD+lYTxpFAyEJdEbcm/PPo0pzjTXcWe3aJekL43z7TT2vzSDk0iTbr5Z+Q2e1+guqAt27SXcsJfccPm9OiYZtnP+AtsfN1ijz330hoxsuXgN5PbOWwCt4rhOXXgxTb7v9sydc2ooqErBD5jZpwjUP9SUAZPiz4GmSny6c7SCuowNAoLwgEp1/EFIs+YKsk+VmG5IYDy0sJ8LkN1vw7hFQe3BWHc9BP/YOV8y8zz2YkaBhlIEw1B86l6TtkKQo7ilPzTpzzswQoyNqgqMO8BE/OHa6hgh0xLL0j27zedYR7YTxwfeLpfu23chgdCEaT7VVezai9uYm8+tivNTJos+l73hkbFNCyDycIDRVbji3Tco1DkJ5X+w/F5phd8GnOiRRrJ8Oj5ieeXT7cL6AbxE5MXk/oKGO79OgsGIxFDehyYyCrBYFbsqJcMWmXaPLI759NSArwnKMLZkMJ2ZhHPQa8F9DpUlGdVQ==';const _IH='658c15ac18c92f56a56ac54a01d465ca2738098d406380e834eb62a0f6e583db';let _src;

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
