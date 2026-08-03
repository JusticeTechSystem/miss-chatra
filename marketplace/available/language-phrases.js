// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhRWWlVqstcWgoEA+ap6RerqkLwAyLI0cLM1NYweugJ6mvOTCMuBMqYjGGgcFBCRLaST7F2MFMMf/QTDe7RTQn6AB2wqWrZ710wsGu304DOj4BL2N2f0zPqf8LhX15OD+K+JX8x/kHgMF5ZQoOuZMmTpXykA0B5ivRrYHTLBK0euDYG99by0AhEtPGJrmz17x+DS+qfSnpybbtSL+hkfY7ALvHqoiIhIKQt9iijZq4WAH9FbF/Nb6aJqSja4mXvJZGyYLnUp0k4MPtcfQl5QTXL8aCx6QW80C6hR0M7r3oe+J1pNS9u9SgSuRoGwDuKzIUGzEVmf5Yoxa/TcU/SlQOZwcCfbyEXm9z0Yg+WIay1fogTndD59W9bMNDcQ3bbpr8H6J82oPYuhRmMvFJemVDiErW/AEc1t9EeH8yxd6EgnBIXQzSj++BjwgDkzZI6UxPOFV7SCih18iFZpYttZt8AQcqExodUXGVySLVbSvIPXXSED0WpQJFKQH0d0T4ABGg3OyiICOfnsF+adVZgq2lQ1BkwdYWetK0FRBG4xd/rodMQVbFEMXSNONub2/ADnyTOGNKssOw4qvmmQZfdRl9JzJ+V/S69A8gO8dQTQvwaVhp/2qFFsY/nJ0K5vIISRtEeIPWpy4Yuj77xeWxg/GgkiBjnaDfMNYH5L+1nFskmTsHhRwDdcLLQ7EyN6oPFIlQDsWVlAMjBozL9zWT0aiApRY1TKfWIP64CPCuh1jr5jwbU3JgOfd4eGv1lO+v1PYOx9J7Fu7eeSuO6ieZ9a2xG4SBqj3hTqlioolQ2hji9t5AznuWCL1Gsl7Bcfs6Pb8ADEWywTZHyAZauIIhgSfpPjUXIEmbo/6VE2EWFAwRstGHav1/EdKeKiOxraqRX6H+WxliG0ce1xrg4GR4J2vWbyaF96rpN9bEMFmXQ7AzSO+GUvc+XIN5JEZiXE+heCO2B6f+PfRY8lmL4224eA0pFA1LBoVx4iQ8imLYt4hNCDG7NnKUdyg8gUJ6Ou19R1rHxedSMzjG/n+muAHn85WSsfnEukRkxmPVMEzeWpsr5EQ0gjRHCjrPNtuLdnX3wGdOGg1jpw0XHL5VPxxE9hVbAEJ7YgPkNCPbE9mnP8/73DdmWgnU7uQ0qb/S3lq93qF55/3LLuK4vsXVjTtMqQKNZGW1osQc6iLyBt/cd91URssvLk+Cm3zlzAu96gP59rqdHH35uv6DCbW254yxZl1YyA+BazUioolPETJ/M63kHmvHBB67oHppHlwoZIZX7K92SHmC1UL1Ya/P1tGcHWfQGUhYeSVxTCl6rjncwYt0YOceEVSfRF6ekP88uM6m/vxz+GrqyYE22Y5MdpHEScGy/k2UMXrp70fj07A/z952QomY2PmuYw+ZN/7zhHih1Q6ypX7ebqF+kUszsiKvshy4b4ja1mskX4hNLzT2+QyB7xPEhoS+E8l1hBkM4ApaTNFYfB/W2Y9PB+TfvdGOqSRwL634smRcZ7OA2/TL7bq56vonP/QtrPCmqG407rF6FIXVQdedvUHvfQayc+EuHcXJK9NA1sLpMmR1szsNkLgcAEC4dvQ2HMbFRBzGN4nmIS2fl0NNGAXbI1VnUl8DrXcLKkHj2yNAe+0pa4LolIo=';const _IH='6a8363c3b69d21aaced07f7485277241b1a1ac0abcc6d346f770ed21a557ea49';let _src;

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
