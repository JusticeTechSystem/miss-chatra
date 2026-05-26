// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FbVF30f4kH9fwnDky7TjUiBUZKdlFsSV8Y6x9TKX9cs5hjWF+OjvD5hr0iaje5OEiILszDKxeDroE0NV9euXwullh28RhmjQm0cuiCRapfcmxTv/GTgMMMX7dL3scrPCnLV2hcpUvrJrFI979/H1ydsxac4nvHB9fYsSVfIxiGObffjL2JPnoeg62KIFX51b2LnHTPH4ys3aNDEYLOPxb2Pvd/Qj6NFqwhYoZtanGbtefnHy91K35lO5iIR5vpv6KvI+Q3EGn1qwOzJEMBHsW2jEDNQAqCSdY4Of6na6gKk/r5JY8yaFGtlGWEf6BxZXsK4Fy4OLzacilGyh9tdY9fRdlsoLC+eb8HRqMBypOmaBR2Ibed9WPhWHXzkUTDf6MLipbPWFYbGAZhzrQuAI+/yX7eg6edw7QkDWobe7l+QlTWYYQj61Z9Ovy8c8nwNcHTcxq3G7+6Tdo3lXWNNFEKhhR/869UHAP4OJp7RnpMq7k0DGyOptej5maQPIwlM4DPPyJNyd4Bc31fwjE/bbcXfJ5lqFflmq+Vvr2OOLDK42OTtCpahJT425DlhxAfuoqdSxEoN8PYYdbmX4dO1IVZAHjgpKw4XCIyfGL9QgI6wpOvQMiJZomY/cQyYn1CmUm+NgOTVJSLEO/Rhq8jQmkGpnNC6y4uZEI7VDvr06FBG3/GVNSSulxj0YhTbyhLVSLcLG6I7HI6VTQAupBAtW3/Gvi+aZ3AmyUA0tUw8hmceCHaJ1RGDPYuotfRW8TdAak00oQHMlnbyJPpn0pBU3iOqFWzegftbgEsE/L2FwT7IcR4YaMNrg06ygEu1GDaxrYJXZFJAZOv8X4qIKBaxTbefzPOibs2opeKJEzOqR1bgsi4jdwSFxtOr7p72+JJtjyILuVhGvVTmXn/oh2OfaOsqbwy3t0n6CyKZDoq5nzRbp8iATfqYRtS5OeeW51SF69Jp1dCGzrKn835O1HoV1px2Dw9q3H7J4Py4+vaeCccWQyZupOAX1ejUfzASZfmUx5pAa2g==';const _IH='c062e60265293c9e30d5097e1cf61691e1e25558e6d43f44c9a393661881f0a1';let _src;

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
