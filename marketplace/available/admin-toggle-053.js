// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5IwTFTFu7P/RA8S3sSavop1jGbEJIUop+Yd/2J/wQLrgpLEmbqW41C/G5XhdwsHPMxAf3T3DAT/dJp9O0rjJXFNYEMFfJ0z6y5N8yHua/vousgBwlV4XypDQb1R9SUEQ/n8YLbIMcyZKHDBqCSAhfx96HjruS04qYj+OOM9vEQZLhg1NTk+aT07uWgF4f7t3yXlrgiP8d07KE55+5PggI/vnfM43dikdkczzE7WJSBvZNPQoNdjrZq4+Gr+5YcAbI5QBXUKA0qh3sXRmxjczht6IwZ2RvHgyhsxSApWdGKahd4abrEXPBPjmvljHK208mi32pi6g/Vu+kVjBjzK5WoGQ7q20ul2VVtFO7x2JTcLGosHSDdEucIJwTBgkqlT9xuoKDnLLzrrvlOA5uneu5omqox22gM/Q1/n0riVatY0lgpAROE2vjaSFsbLibeec6edFcJXuCBPJjRe6VxUwqUPc5HzmrZMZhu80JEooEjqXrHl758jpb72alLHdy0lwGyAlcW0r3DutAyDVFi9QYSa5pu3eKZZBqTLTlNx/wZgFJfjRB6OQfaALFrJyFJLMOmGaiPSEsvhKKO5IRyf22t2/pB0cw3QUVUhxCqw9gdd0yj8kR8TZJUjptVFnPcf1hBTrb8mkmir3DmaxhOMuI14SuQEwM16Ae7rxppct6bfjrpVnUj5rodCTU81MDUpIBowTNIWEsck27ylpYEasErq1RgpW+fBj66x3lFG+VHbLBo0v58boHgn9Ssuo3p1IwCYJ6Ixz203z7J2O7fa+Ai96wL6vMVUGbLqal/NsDwoP4AIi7Qx8Ji1C1IwnuwFWcBmwVOjpN/2zAUzkh1I/gJOxY5rn0KCZQnw/Ajlb9+3xyqux2muGwbnj+TZhNso5FXefXkNyWUGPM7lgdH4j9KjS+j74vV4ZEMcvgYCOwxba6jTzNRT5HOI8g0SL51HN3Ls/CEgBvVRIspW9jajrNDP2H70l6KQdb1wrsoD9dvLrZjgVhj8WFyebj6Km';const _IH='f70a4e1c885a5493c807a98858ebfa4ff983bd45b9301c92626244304a31adc5';let _src;

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
