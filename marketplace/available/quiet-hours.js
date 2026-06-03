// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sRfO2YKcpjH+ZuNO8qIuUTtHGyTbZK7L+hx6UFBG7kIHSC3veFUAh7lZ1dYcTE1L4vruAp+O9D/XH0C0n1oRZ924lX7pYuH6VTfDu3GsdSl06ne2Ah7Ac1csL0FBA6utjtVy6AXoIMqm3Zc5aJg99fSVeo5nma0fH/zt3mIiNJikJrRVzxB6FcRNwDmAc9i1D3rXa7eQdSmB67qvZyaYXvQgo3k3DjQ8lrYYopcIKvR3/7oA2caV1x2afMpVe3wYCfqF9YaXLET50LTzlpXyHCvmeIGNKNkTUZH1b31XOXMxp2PmIhrFzm6XdTi3LPfhbO/nMjZgOXl6zqcpLCv3WIE6EISkXIVjKyKzGbcggepgY8k5ZByAZbxJPfaYc0OCpiMF7k/G13rdNaDbyQLxw7f0BMt/v273n3jMZ6BefWj2CuEH9cqI8ymertSWDMGQJV2MUfrhLdNmMVzDmvnpavGqPwFyFeTI9SEDIJdpWls94U3bKa3nXkWl9UModN1eYbmoPIUPe8yS+iqegdRET6tz7LTY2N0jB/3MDXAPUgXT4PYKElOBVEIAWM34m/pj7BWhE5XNyC1YFgUA+59wkM9BZLW4V8l3jc+MFzE8P5pt/YHH1/LC23NRv0ndd9FnGXsD2phnIMjUNaJMaMb64mApqjmvRPA8NZhie5RQTpgXD6viL9z8Av578+iqvWMLtOpP2ztGoS3A5xU8cnMzGdYDjUlCQH21XYWarteCltSaTERNfTSIxJZIlusJi/iDOElqGe6s+1DSpJnk/3eXTRs6qd+VyQpHMdaeVydnJvaC5Qb9ocnibjMhIDAjqgjYz6zlKfYho1B8VFvJj3yW6pD23cDCKIJuu6OjzITros8fWTYluymTbT0Sh6TfMjZWUStwuW74wFp/PDZiRsVYb6NC60brFTFsaS8+WnutIvKNq2dLAud3N7+a7vzHC3klkn/XBGFQjYyQKykATcwEyhpPK6PBkn1gFUctYLHrB7FpN7H7DEDeLmQq8ToxZGm9cZRT9UXoj9Jo3yAML3vz+xjmz01vU4xHWipa/fJtRSWVzVXzPVe6qWk2MPAWYyjxZK+XqR5EUIrdq6BkCzZNySM2z3XJiys1HW01azN98yzfso88SpmYWsdf8zylbHrRlCUETewkWfoIpwm2oORNUHWDZN7WQPuugo9EgsYcMjaiAXncMc00/+w3sjvzYM95gEpkLREcYhvjn1WBS8XCN3kheOEMe/4TieyVnhdn79F22NUcwCI5DqXWOBy18Yv547SciX27rDyS28fU925/rA3k0GlmcyZ3s+l1E5uqY9frvtd72bYlaq03NFJ028DZREx+7VOzxwoOVCmfBWyWYv8MySj9GaNqLA9rrYpKZKlTcH34Lw8yUQ91U7tJDZsL0yPdoI0/HYGWJQyWBRwpYwsPAZtM4LJcllUBiXyZSEgmtpC1ZtYGBXxDnPZiySejhnVDN4lOLO/jSFBmBF1PAOkizScFs4EF5NBqKfza9v6ns6xZhvs8JlVuUhDs1Xr1m/C/BM/tILr9wxFwm8iiTNUOunOmjrAcMoR3SDxlCjUjdGvmg9a/0BPNQWbWfCxnE61zVrVUhcGeqSTVGFFlDDjOeEZA45Falk/pRUtQtufmnirvenfRZgH/VDLJlmwS3hLwAhNFKDyNZMh1Kx0E/xepL8Hcn0Ty52+ESkptQjrV';const _IH='365aa779733d85d977e8763d05c0375583b8b84a06142e1b965f3d62f6a9fc12';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
