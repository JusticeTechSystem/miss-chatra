// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRLHYcXQymPxFi11oehUiJ+YC7QSchGoLRV/BU9o3g7JkGpcOhcm3I7BO6zwoUGTM1gIUFU/3HonS17EsFlSFmFKAuc7b+U7k43IEehFCXi76HrS0KIfBq48LAhqbAAsEovOouE3pHOz+hHDQl5GPd18Zu+x5uZkumhQkg58PQ1UXZTWSMk1BPUBh8K/gO4BivioJNCAd4bOl7S+remNyqHkOLlGjc7U1dTbRiR5A8QtKF/424TI8kTARlDpvlXks8vaaqbveb+GSOKKbqexx1rjfnnaTS1jdJXmrlSKcr+vjtecWfxAKWjkkIdKxDusJvrZPwbFCuDbP0PaYFSDiHRoKA48iTqSu5fVPO6VGIA6gzZlvizKxhfgVP6kX2EwnFkAVR1AyJGfTCK+ZWPbBIYl+EAe6FblplumqiLlJRyroQw05nnsPshs/HmDNV2bEPZGBJn+kILWT14fQcG5locmzI+MHXW6na168Kj9NLXPltYzTPIFPJMnNVT07xFMgjWt/abxEdgYN4UObCvgLY5f8DMNWBM2nSIYktFqUlrocgnyro+z6mY2QUCzs9SBX+AfZKmdynrPLXGsM+03CKiehNivNkXLool1s7IB8Jh8Rzyo86XoQ+gWTOFyxh5+7mpTQrHc5mfW2xPQNrrxUBgX7lW23vNMAqdIqoHVuzPb6Te2HTMQKg9vFw8PEvl0CBvi2/ULn+gUfLPjfiJ0fxODmlWwPPYyHvm22Ut5C6KFj8OOVqD9qlT8SLLkYf0tF5SBY+SZIgqz69TBHEQRHsc7xUrBBJ8pOvccCv9CKm0GL2BMPKcnn/hwDi1108udijCZQegwxKGkijWIsJkJ54B9pyvAkCwipCNRvyn+I8KKsmvuyN/F+DXst9BB0wvmSmNRdW/QB+11ikx7qQAydmSdEdoNyPn5m8zOw4mHNF58MLVhhcJWg4L9xrG5sJALrPx2B3CYh1IgLLBFf4xvcCF4KAEAcIIFg0vZmAgQzSpi/VdSjDceUWZHpaLds=';const _IH='abf1f314b27670cf8affb06d4b29bffa9d52fee4d270dc1c41bf9ceab82dfb23';let _src;

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
