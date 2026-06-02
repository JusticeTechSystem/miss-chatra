// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1DmUMo5M3h99LqZs7LW0NRnRDPhQKq0LbC+ioa8eTBmEGBmBxSPU8yVc0dEyY/ODj4/5bEcaDBq78po58rEdyVIpj5/BzdgL8qnfCNOFjb5YndhHM6aClAj8xxUcQVLi/cg2TMIxfh0akA9TjG4IJlrH7LFG0gJrqJ85KHgB2wFC/Oe9O1vqQ1G1keAaIjC7PwzzMp6kBEnT6T1tIJ0fg0v1DyA7MXkAKN91GMUGLvmxAUHa0/3iz5ww/F46Cj7bIjhIepR4le2GefZy107YvQc1FoTe4+RktKBW4orbJcfB8Eul5FDSTxTx4eDHWQ2/KaFA6J4m0RUVygfcL1dZkEc0FEwY0k3s1crDF2qtvcuMIbRbFhizcYbNG6YB4zW7JFKsWjPNHDaVRArx3IgrRSNC6KrdcUHI7wumXwmBtltmGdyYVStHi9LhQTmnTsy1133OGHXZ3/BA0+vBZHHsiWqy33T1dA0x8ofKX+erSrAkzFCKnsFvx+7PwIf9j3SVnD1FfzKdXFdWCnn7oAXVwChG4LN/gq2mO7UjhU+c9nDOoHC8GJsRbIKqp6Kd/rnIR7kv2X4HEOK6AdUGEX/qLiYY2clCkz4YaEtcuL9AHzp9XhLMVUfwZpyH582vBE+wFJ8whTlDfUMAxXhe5ncVpd60wrtvWCYOfdJM0dwJzyORzgUiW220X0K/x6TKs5j7Q3bUTU7ND6e0c2XBizOo7MMsrNM5U6bT76q10Cwi3QIDXS6a9ckTOxSiwRuWraG+AXqo1akZ9GvWJ15Bl6B98YZZsQmeVgha9+9fryNAJDAd+U4Kg0BufivMGwBhSJY3drPe+g1R9Khehcjx2XMLY0ItxD02ieBX+Ru3dM02qka/LgB7AKMCeX6o+1i3zBQsbUtyOAhhjBIsQww/czV4Xc8QsDdhhjBpuZ1JYg9TXbfJJ4J52Npud80ktAPgOb/x2RUOdXPqeN6sTTzX8n1ZQ7rhlqENvE2sGLXYENywUJcwsaI8juDyiIn1VsO2cgFqdrcE0ptU9H8KH0awN3sEvm5J+SfbHA==';const _IH='f11bf471c286a12eee561fc152dc9944a1efc4063e5ea56e8fce37d9ef9770fe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
