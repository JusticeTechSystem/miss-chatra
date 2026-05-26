// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6xLkvDQJjw3Y45FOQSuJ6X+eNdfYbZ1WsD18e0YI0ZYy3902eglK9uGjlcKkfLm32sJEVvSo5XInLSIQxui6IF9wfvMtuDj1Mn8BUjoin39otnMCIbz6Ly4HJbty87mi3dHI9MvyRG0nJ4WgDb3FJQoHAzEHw1ShAv56YjbhLD3BualEwrLS2Z1EMoh7dAFOX1wP1w4mhNo/Gak78CRAdTUOdqXYbdstwEN7o2y3cR59EgLqFjpZJV8vy7Ny+zPRtvDWw7cGVBzcl+oqGSoO6di9w522WqZL5BdrzYgo9df6ZU2ZE5/NPkORnqLhgNvZ/+S2XnFu/a/gu52aFbHcioi1rdxrw2s6tHqifCV0lon/b7JcRvh/Fi47ia4uu6v+ljeKbq41vxUJxVy4/GMrilXyQ6n/9eluaID5P0j/+hrXS7/lLrV+JDqDBoV8lOPugUREg5Jalu9eAyJ2iVCjVNsFq6klbjQb2Df5ahkWkqJP03Kg+ctUImkVGViNDRdwyP09b8folaCHMnzyvbMlnjEygN6miy/pXRYsMjLScQb3DNiuR0InuQGlTxtzMlUldd9+MTdqQw6UA7VRZqDNBgnkkwHH45wLagCBNAqMyEdLb5H3Qy8FS9KFBuXs5KA6mRrEvbiakS0IO4bin5rPmrglC5yx0Srcl9U5TymfBwsd5CfHsM+ideR1sGAoXqcD6M6hfoS9WKJRN58iz6l03FQFdXPudLQ7MzyjH+gOzliSKmtlZnHFfasSqzvx8PiN3fOPATdae8DiqaukB+eVXpN9XflIWgJ1hqFurJnsKWx5qjQ/WK/XWwlzBOfRzZV5rxMbGLhN4bG9zE97ZPD2+yCXan29BEfIcJdeimlV1AGkkEouC9t0WpYhY1ZBOJMb6XHkDBisSPx2gbIqou8cJH+/V963ZfZHly9b52W963cSJ/4ifVDsbIYXpKR8a9wdLmBRzSDm24aHfR0G80h4J280Vsioo2Em5ZyRBshAv8+9gn5tOAB7gxX54/mU9bzxBv4kMbcNj71vO2NNljK3O9nx1kjtA7oJ7fRWjPezk26vOuE9k4NnAVLNO6IB6gBZkKd3CZUQ344PbFvcr3rOyZ/+WrnVTL9x19cbcraam7Wf/wUKYxnKZ3r1B4WLuNjCxa0ML9Xcj88yJHu0aRABZrK2HW1QnVO9fxnWje2+D8ScplMmd7sXk4U5C3E2w3w+HYIKL6uBQJBeIgwUPDIC7dYoOyDeJDtwFhfQwA6jyDFjNzXCse5c7NwFq5N7AkNIAXSR8wiqoaReyL7UxWOwSx+8kQq8lwQEl1nvpxqcaNeTnchwPYE+zPFCkf+wv+R9b1P8Wr9MKi2Mdk2h607H1Via90B5r9fNHOLQzWfV';const _IH='bd8ba8bb372ac35cce2e31a16b893504ff2c841044ea029e025a498129913a39';let _src;

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
