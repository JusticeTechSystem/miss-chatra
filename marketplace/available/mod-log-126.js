// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1i8dVwUUonXbPHxQwAJvz3lsyW5+dSI1cS4hf+zWkaG7OxEgJk8pOPjAr535/cANMILyweXAONK9kk/OCq+ooxRPp3X1Ja41x9eS2xKNMy91f8GBj8Ht8WVXKq8qqpnAt3oHde0S20gRq9Rk2SASBEstYv6RvQ4GlgvhRPTn984qlmkavZLmqEUHnyUnGVSF15xPlNg6JWClnoMdUYQmIlc+7M0A/1GGhowTIBYkRlVBbAgV/xTFgsJ07cApbVnv6ItOskwrF75RShHWzYfkqtCIm5Ey8nAJxlpMnjbdCb1XfxirtOfFH2MTyvdzrUbxgfxD6Z3SDPx8jvneFqA/xujJYhFxdLlN1pIl5CYxETxtITLJJb0e9H0f8HAM/cR+jpzi1zXO+9qMrqYM48wF2jad8h73K96uIUspAzHimq95wnPP4SHL6BBCXMEJlBCQeQ8dK2GrlRcaK7twCZsW1x23Pjy0QhjShWRPq42Y2RQqW+KV7wklwobSsPOdfMTB5mE09kqJauSM1gdnnLAGCPnO8Lrj9sAbCOdFjET7RGWLAdk8fiWyZFIhA4AoO9xjuC4JgOn50oDOiyF32ZsoelDPUgEGXR/k3/ZsMRR15mZkCcQ/ZyxcVtrPW5x/SFpcRjD56JSdlXSKQEk3zwtVCktKIE0wl99E1BB0CAT/GZ1MMkEc3/rKzxRAZNfz00lxUG9XZVV2UM7k/q4K4JLKy/mMKsL6NIUslxsmaUktZbt/F1GMdDj5SZa2CPkFble3Kg8e1R8eO9Ho5EUvPO2Tdf0ZLsv5MkgS2cAiWA87Wv4erKFO0Y7F7AljC0NbckIttoKiCW+GZSdqyHeWahdY09jwPq7uV8EYzwz0L96M7kgN9kKnX+mOrsR2N3SG+faa50dOq/kCQ3+Yt6/snmkw/Lrj1yJ39M33oDR0Bask0Hy5pWxDeOV1le5K62Z2PSL1zeEn0eGPHXbk6ZxqrYgKGwyrbml3pzcghSXqfmmHhiayekrVg35beXAaeFWSK/iqPm4TDa2nzzEPjhF3xU6re0+Y7rtvy168o751BAfiMTjvR78y18/wJfgiBel8dB5xQWVRCO9gNXrrI6l45Dc0KzERCUATmUwbJEh2MoOPPwkjq5XO2DO/5rMY5v1O5o5dOOnOeRgJhjBoWfMcu/hBOlLKVS3WzxxAb11xg0Mbp8S5Es8ZtQR1L9RO2RAUMFxuPybV6DOUD/OpsPSpKQgpzMq0jsHBaQghZnkJmtTqRdm/bHcu8pu7rZR7Sip35UdG3t6/i+sqOfO8bEl7iN3K5jo8OK7NXZh9WZCRPhtdISpTiXXu0Wcw6ln7FhG/AakEQ1WPk/UwtFT45M=';const _IH='fd3381ca60a7ef4653bf42ce2a28d4fbb6625c079ad86558933dcaded5ec1fdc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
