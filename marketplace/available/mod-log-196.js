// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XaXtN79353Gyt1fDR5qtfXNPMwQhhpH4O7D9omz6wmVCxwHw8fNQzCC2hWSYSi4QA6eN56EHq5ZJWdzHo9Kj0yR6kpxiDSYUgZQ6kiVDrJsI/8bu20zv1/xCHMbCVucIJzmSbvMZNm0OPKST0m/pVnVtcRlcq/7folNFtirtDNn9PfjRkYwbjIvx55N1WK8DpP14YExTRasvejcV6uv3RyXrsWXIBv3i7VO3pfu5CSEgoQPOYv/MZRAkvk4cZpajjRC6NJquNUKlTCHkwQLkS9nrdnXYv/kPtkFQtTx1cEFncm50sqQZk9w9RnkdnuxTBW2IkOoKrIogp2BTtG8u0+3X7F/MEidOYqPxF5qExC3WhyB2pDX1lj7aHo7FFlhY8Ckh7mQ42mVpdvqrLrKocLH5nFFGLt+OUuHIDDgbrUHQ/rdHI4Qp8spurSuveC2RpgxkTSkOnVkYUvSgdz85qSXwAXj5p19KJONso1NMDNmqzXhFNXzYvmalkiJeJCycyxrobnoSUn4VuYyJyaYWG0yiGB9PPHIUNw4zxN++6q7Q/2qG23nnyBEO94U/vw8f/Q+G6JN5Pe8hfi7K/gL5DpCq8/iojjlbvSLsozcVc8BDKCgqM5tjjGZkhXWHHntTrhG9gSEcMiJZVRxCXZAjurgnHAAl0BDl/d5GkR2f/lJU3YhCMDFaIqEJA/ui6t8G/UzxIHjhJPWXhrF7yn9rwbctQy+Sbqwb6uuODjbW43KQIZ4jIXC8I8SgWEm2ZQyyehJL3IV3wbcYqP1aRyEzBK3/l0Acs//+AYj/NsxqAdPuZCruIhoGhec2PI5EsA283wh1XiiN35AK/M/el9iZLK1IAY9vceJYWGD8fO3HxZnb+NHNODBUZ6oM0AdJ2cK2zF6lSw39vTzHzWKJklcTUVzb2CkSoOIR7Ge3qRgqu7QUC/crfCmQ00/ow/V+USrb3ZONQDsv1c0u9oJssWUtxiIyMd+iOC4SeLy8BAV8OSKSGYLyUUdD0NZ1ZQrmXc8Fm6VNr+npApoyjhoo0exc+cNWEmGC/jY98tXiVKYjwl8g0arvNzXEHcFH2zezBFOnQ//qsQW0Qb0CFZpTzdZOo7UX/Ijfcdy01Pe+bLZ3E3MMKAUSm2C/uu77ev3bC7P50FkmTd3fsYDpqNfsViYzJ3PgjjXN6egC2i0mUwUp9FNOOaZekHOq02HN5U6sQV56p/UMxSlKmXkXVncwFYpSFMO/cJKsHkECZNWNcx52QHdO+ZsE/XdKpEQrC9ImbSFQlnBg0SU1ntupPUy00XX9IyqTRk3E0cp217bpeejj4Lkm0eUnSSztzGVHI+Z3sUoQQ1WkiKR68vgTsw==';const _IH='714cc7023a03abad207859674369eb3e6c909b0f8c20aec31f40c3d0e10befd2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
