// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5EkCbcfhajzEe3PqaTL4rC2XQ0c1AlF1XUjgeRnH2KzEdjYLTUVqx3m3DFH6RjuRh3nLM1i9/Q/Ec7XiXahkjrUH18junyO/8KRMJgIJKpkPKR2oUbB0ttB0QJyiP8ev/e6WPkmAIxMCnME7E4oKXJhlAujWNljvdeZZS8KMqvCFdW3R9XNNY06umU7DdBo0mK8Cr64H8/ZffvN+P266EVmO5BH4aj94XM+/E6mRj86nBFPYm9ojCTwleIvtc8qBn1F6ei9grZbmZ7wRJCDCxj/sLxJ7k7UryrlJbmz4kGqn/Eg/1qVHpmfNC3xiYDBhCbAzA/LI5LINdOld3AV6TFNqDJTHI3zOwPtI5+E1YcwNN/6F3aVCbZzsnc0HbXQEDSb4LKtysCo28sT634QrTvGJv8mH9rygwsxIim0u3DKsQxyKey2xckbQPYIEvpc9fu3PInd8/spHEXARprynxLVRoW/BTq2ReH3x79o+Pf+TwgMeXHWlHa0F5IfYQ7ifXhLYUNxq7sDZzbweMZntCS/HX9swWwgz/YFSijfOiAubIi7NFJFUesgboMDR8ostTG44ff1srXroGzj5hP1pfy2RsbpOxA0OYq5q0QtiFyj/O6CvNymWPZOHmjSL4IZ5JjjkR2VgV92MY6Ox3nGw2TgENSqdjLjpGdhlWhAP5gyF+bgwNeiJArcycfVzW5mpz7atNoL42mjY0GB2mlBsX87JSebJywY/AruyxUJm0ALNAfQCSZnz8QhXAOPc4w8Y4x7wB6uBsBSwrYFibFREOWclDjQMSDt4J2Tv6vNTIEFzUnPpApv4mACaHN7zvvLmtQ+xDwTepzZisXpLXkDt7Icq7S2CY1ZDw/P5NlDBxkb2hIk2M7lu3NpfCarfC6daM7bGEVqThvs8inbsmZpkQzyO+xYlpfvB6XD8ilhv8Mx6LlU/5SjvYQ==';const _IH='66ea0d04a0bf49207701a3ee7be334e843bddca845513b4a0f5a11c49d4358e8';let _src;

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
