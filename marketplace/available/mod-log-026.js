// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0OV2RKk8wHCwvMAM+FFwkBjCdNN6SuMKhKqlmVdBE6C06fWK+JG9ydHIMVLMnyzUR85O3doUqyEfe9f5hjwXLMkfBOoixpRLK40LL526wCLIEt6c5phIjJEUV/wbJrqISIcd3vx3eGmXYB8/y32mjRYRQHsw8OA45/xMKpEupM0EjQ2fneex49hgJ+tJ64kIC4wglNiXgA9XP2mOS1J23de4vc0hyc017uIqU+E7d6V6vBErobcoQGoqoK0AxBi6RcZkqRGvw6ZhjiCrcMB8a8PHIv0tofb2Sbf1QRcLxBjQ6uarehpuhQ0gDfAHwbTLYVZiJjoh931hL65h8yXDlpKZekGiVi4y6m3ZXGuy+q3aTcSufFW2U9b8vxrAYMWyzAmiKTCfJWPrvxrCSzkhYLQ+LsSbW+v4lzfXMzQRUsImGu13guqt5r/pgiRz3nhvWGntf0upF3cVQh6oXjWyG/O6YzeWZQyuwFgvCebziDWg5guHCEFROmn2o8pX625zk1T+bnDWH2b0Qa+qFLVL9DgkGabrYt7f7yYnh97hIaaT8kZLFHThXVWESrAJxbmKMj/KZdBNwaj3ylYrH+Jp4jHYoola8B5YT00L6oi5ISJsfVNgUbPg+VSAOQqe4I79bCMS0YRWBuXsvdjuUkLnOK/Xg4MF0ZWZ9VNLa030IOqfyc6+fQLu8QCx/l4wIozCPeofHzvCXB/1a6PpcVhiK2Y6L11f3HwdupYAvw53Pedmykla4aq/vk8IbuwfL/V9G5flcWuePm9PBXLTiHCG4b6fFO1T44wSz8/rOookRtb2Ux2WWojlvGzcL5ZnyiJv69pdJhjIF2vn4aZmaTsfw7ayJk/VCEAUbOPpl2sSueZEyOR5oVfQZ1gcfp2AuQGdnjNg7OawWLNI1zgmcRSFhI9fKnYVArM7yPaPpnqctP7rWTSuyHETSsBsRR521LP0lbzu27w1LxX9FBxDlrwQw6alZWnClJJXg6yPZaAwHBEtl8e2EBmnAkdhhkytr0BZEPKD/MsweRcQ0e3HHIyque8eqeOcuLEExd5crjYR5DHKgeIuBTkEaNnFEAAatXKerdf9lcjaoWSJI8o5KHaWsS5U5NotoiYZeL63d4lCFMBJLDO6KjWu8Tjh33xbIi7Jn7p04oHObgzQNxUFZlv67IlK8c65oKewykTgP3RsrZ+vn0hj6frrUgQ4XjeSevhQ9xC5yxkhic3TQechP5HHavsmOh5rVFjTo1a7bFIbMZ5TxB1FhudagsPD+utw5IpHeBLd0Jf1IggpQbY+PMXpdn5UZa1rXa3QLhYG8YxmYUtx1E5Eicmo37zY7BSfSSmBJzn1QII=';const _IH='487c35adcedbe6d0c60160ad8d5ba50c6702f9a1988f30d1905068cf1592178a';let _src;

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
