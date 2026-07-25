// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrx6mDEstSbKcBFw50qF1stcwuQMp2U6E6DCHC1RtjKokWg772Fz1txuyKhvVSvCW8X6XiktCXXETfVaTVo2tPZDdeCL7ou4/JTmzIbLDZyW9zQ16SjCsUmilNrYlb7F15/IGDRVatsw/fEsd2P75DA4G2LcNogxSxHSA/lpzlRgBFiq60YzEs342i9axSpGXZaZB93BSff9A4xIRekA6RHzBUiSYugO8kmWurcuyjVBG/WSCUhj4IzJ/UfsK2ZKx4P7L4t+s6C8IIxA0Pxsks7t6mMa7ZUhRQrQF8MyOiYamgdP16zh7vM0cHfLAyPUGJu1/WjvkX9PdqlW9oBu56DdjwAKKLAvEMBIklE1NGZP5CLjZThTC/q5Rau0MMPp/VB3JM49VJXOh9LrRrRrB8GszzjA8OdG6/ySTJNZuvqyCY/HsALIGwJ1ajP/opT6LpPb7QHf/PN31PVZ7IMRzD92018xC5NF5KSHUB5w7sSWO4FpjbTmJXvlZsibUP5AOeVnaAgJZ9Wiey7ctjyCf5yOuu+dBR7ORBDJJrnks2imDDeV7HVIeYUHuVYp4sHwiHAozZJjfaFlZSKbcWXo3fV2VKVhB22XOndXQZjN3btCA8TqUvLVUBfyGvfYu+svA3fhNuZCqjCMbl8rla2H58RvihX2E6cQqXxFJQrjACAwbfhWRIupez/VnLMZOs6ztjNze8rSzcOdPc0Dbu6aoNAyYL/51frGIf5gxDuMY5vYICTznxTWAVu5Y=';const _IH='c0b09c3206566daab79939133745d9134b5b9dcf19e07b322ef468ea595a7749';let _src;

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
