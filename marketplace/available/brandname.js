// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYgpiMmpr0l5jn3JGvsjY0TyV5xh/adSBVBw5YFbpjGSlaj6qsobgU57DBgvYc1CjilEz3MpLd/oguS2cUIkA9+DKRxHidqKSYqaP/lhBHiXqA0wVYzgnvCiAHu3vfrTyCE8hLx4PZ39E6mfu7nnAVTo/ckpnNw3XJXNn/I7rLaTZT8KQBnfAYL/rbxvfhqO5L5ePJHmTyWuDTOt/EC1E7F7LO7aWs1IrkQfQJusybh06XRDd7xkr0VvvDjkacXv6wXTewqU0QrUmqf5P+GDab/o3VmzwK6cFkpBvb2cdV827dnXK56KqkjN77W3E5r7QhmvubdkRrJ8K5W9fenwhNzMo5qa7S9naXVcR9QSIWoyRj218Zf1lLP6gHChYaHk/S+CxC7BUuh/zidgQGPn2riGAZ9YtJswyLd8EyCpJ2d6X7OY6wyJPo4Pxnrl6TOlraSqMVPSQAwrGW18u7N8BdCDUbFx9bxqX5U7/vXoF8+dOQb6n/vrTfJlITucWyorKDq7wpltlzyZ0Kbbhb4S9fn0GZc5b/DjEIYZHCmkzPWxPKvDrYT2+KLUSJxrDHk1jCUbi1ctTBhSCSN4oI+fcmZRWZHs2R0afQv8kVtyVJdjgYG0fxhGAh0StJjwP+ry22LYY3+NXq7O0Fh0nQq3KqVC5k2cKIH2KCVCGD+rWR1FinoXHWsOyV9Uudz6mYSJmLh3vR08O9idgbcelTMaRl+nSy4I7F+hIqG72aIrvHXVsmp1QQkb+LPO6ZoPe4RNbTajFOMmE/QfLYdUphwsqTYTCth1orIe/xlUSAr8KZDpM2Vkbk41jDe//o/QBoctQCLu5M/zSEhcSemUO1Zsn0dLzGe+oIoPk52xNddLF8/jBZfKupwmNtT5SZqqH29Sd/rMzzq60uaQQIvrhI1DQXe69qKbn53EXB62snqnxCG30pqW9ADIaBDJtz+tummjua+qPOUOelyaigVHMMHV6mk/JFwmGq8Pj0y0CHmyk8eP84uOO7hHosIXNQAGZvyUIH+fVKNVg2oGij3hGzvNQO4CrRAvKX7T12CxhdSGUl7boC6+zwe3CAKczq4rp8z07f9eZjZ2cwmeN0Wqd5HuoyGq2u6lzofIFMcnjnGrzfDnw5n5O0Kiy6I0A/eh6ofmMJ0RrQ+JWxvptAXM9RPsp3WlE07S4Fa61kT0B/A8teMbYdYRvyf3n+Qhg1YlMgeoCOGI7hqPk=';const _IH='41cc2b45ca362cc79ee4012ac4cf02c2eb12839647889c7f334755a08a9a09d9';let _src;

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
