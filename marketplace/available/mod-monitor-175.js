// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CbCaWtktuVHk60+K/6AJvyD6IHILgXI7YejQPrXr1MQj4DN1Dt3vZrQDI60aNYkjTxGqv5WTYbhI7WROk+KE4PATLlcijb18DmdLzUFyZfyNAx74nW2IMOHqIdhHtuX9NcoQVl7BeE2FF7+aeuzJkP7BK451W50hw/RFDl8ALb2AiEoHWz3W0jGypRFlU8XNf0j7WfSwwoJMrfJANbuxyUTKqmA9g0N8sqF9tAJbZE93VyMT6oXPIlVNnw3xLUYvZ+J8QsRuOrrSwxtcZddDAmTRguFj3LIONs+yd54AitT8+/4Olz0oP4vpcli1aBCdR6PdKtpTDAck+KOmdLPMA2QaDO3k2MNSlgSLbseLwXvDgnuVxqMRSk8JMTx2PYemiBCkSAVG0gwC09c2/OtJzHbTR4Kjue+8pLMpYwfE98427cKp9O/riLEx+/e7sv+nbkKZUUlgaiikuYju5zI+oPhtRq0UQmI83AYy+esoCDUMnUkUtnYFsQYoMAq8wA/g6E7IC7Bc8d0A8auV9jaji6ojDgM+2eksNEu/J16qcIqOUcMpKXipP/bTPnGvm9vFelXIIbbGabhH9Pgh3r+Skd+DsvjO96cTpMGpr+JK13YPXC2y9xTFEMf1sEKG8YpfXsEKGFND4AC5kWaRCkH2BYZ5OlAiNEUQUIBWtTv9mH6ypWSWv0OJ+H2RW76kib53ANuXviZuTSyrGLaR1yR/EoGMTh4MQPlPP5phJVemsxR9dk+F3RGBRio9S5F94/xTYmY3PdjjOMbcDoWygRR+c0qqc/OiKUeCQiAduswLcav+B0gzzFyF9MAHFIB3ePP1gHpmabwN7P1yMMPVjJExcvC7rUvHfqzumktQrIGAZR9qvVBN189NXjMMxhSnuCaYpTxOKunt4HiZXeFmMy21/Ez9TbX5RTti0hzWZo1ZHlOVucaloSNTitJb+7p0DW8XX/QY8GiHOVg6LyJZtHWOapdmkN8UqnUrUVyBGZJSBypeSR4OJkVRqpcI4gXh9Y8dnw+XDymK3oID3D396ORz1ROJw7oeH3eaQouJy7jxm5vYENEfTmF3W5+oBBE4tIuHv5Ghc6N5iB23hrH86nu5hsv8mhKRooSOXy7Rv9RTyZOIWZMfDdFPB3ymBIYgnm500CkFJnDXogpv3KJF19uv7fxqwl2bCPhqBSSnLk1TP1OfeIV9G0OxNA1FZST8PXujzsK/0oOANvT4lS3DrgY60fo90W0ez8k2CxSOWqdtn4TR4UPkQI+JUwVJCg5r7VZff6OHMx4WuxNqwQ3D9BxKYTiNjTe7nhy+51CXHRnRJO5gPJ2nzzUfd+o2bBLJ/oFWacxBheUt2R1E7Cb+h3wRkR4xb0yAr/YbILxLEUp4IW97yyE1+KdIXnqyRqUj9UTs2q4=';const _IH='7144d6e7b94380f477f5366322af72463735525610e3cbf4e80fc989b0c125b5';let _src;

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
