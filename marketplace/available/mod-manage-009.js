// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7UYhp+owEMxFoZWCmBPFJlHq/DUBoHxL7M/wOVO3oj/9jAjuQ22kMTrbgknRQFE9zL8V8tcsBl7GwwFve4FoF9lcoCXlpVr9FhImNJewhLQOw4fOzmJ/JbAWaBkdOE7OD5382r0VxFnnXiTnFuD6uFkhibxLPaUVgU9vdHIQWlq7gM87g0CK066lbWu/ujDRMDfmZYUDICS1/LDuruFL8a8eFmgXTY+3r0OeSD3oDfrc9/5nQxkAdUoRqN+Tsr3YJrQvT8tWga7/tDCAhKajHmO3g2rC8D07oNiuvf2m+Qd4iTHS9bxVnC7j5IpV0UtxDbUfYDEApkAWtlIoJsmtLcieH9Yk7NNdeb3wZSOc7tiTuz3w6hpLmpk6onLG/3qTS13S3GHvx4lrWnq3PQ9Edm6Qkovl7AkNxmbunpUH5dw87q+b5zrPk1shPITzx2xRrcz56gcbBGSiWB7QQH0NLphv1ERgvIf3TAskgLVTo+Hn/ip6etSN2Gm3E88m1jXUeMG4dUQBg24uc27EhUjwp+4my8AoDcKWGw10k44dEg9cOn+WMFKUZ+BVG4v8vZe7MEtXx8sTB8wB67x1MO26J3ra30mG/67pRX9C2I1Z88v3AYXCkWsNh6zyrvqrjfz+rKcszSM/VfPxu1PUmsfOx5R+J5S+iD8JqfxjyUqFE9yZnFRu/s0rFMIMqZfj2sgNOF9V08ozNBy3cpv8Qbb9WJ93vU+Kp5/RIcXh44RLgRzTJz5zH/JgpBunNheU7N84qvWqyvFBiDiq9OW6tSBTJ1Z2oZAPs10sk820mlsJuDmUvScZJ223605yYknEy5DLCpSllgaLsh6pVBcLruu9Vt6kHrUUbjdRfSrZPem3ytQuOJIIkngLBuopde7AHhL7zC//jHA51atWh4wsetG3HfsIx9OUFPHjJ6RPtEd6LLTL0hmspIprbAYKlZrjRMk82j2E2E4FQoVxIN6B+zJO4gatQQkQMcdjFByymyh6HuHnUxkRRLoq2fHQdGx4DRcNft8XLFLCEChj1hac0DyBWOu/W7KEJvd+TDY6smpejUCsDxmH9KXhDx7+8XggMPBGA4DlCa364+zwKbySiMyAC8kGpC2C+TbYNXCjCzvxpNqRohbx38BncjMZ/mWOxme7RB6wHjHnvoHcpEOjOsXntWuegzgCkRj9prLCICqiozvxbC+7SrstCqExGvHzj6vZGjmlOeVtEEagEJvQ4IGsCKcL4YEhDtu8q4zC4rMoPffI821dyEtDiWRGas0HlfAhNapjbqvX1e+haV2Dtz8HBcOoveva2jjnLP2Yeo+H9AIqgVazHkLxocmGeDK1ePsM865Bs6i9hshtgueXVOF9B3RCAZ/IKZgh1DCC8V/c';const _IH='efe37c9d35ca4b8be63278087b149c086c25091481f5c55af1ccab2e9284a633';let _src;

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
