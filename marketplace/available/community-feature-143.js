// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4QFgRGTstulteU7QDLeP1LZGeRHYXG5TIeeQRuMsvMCBe/z0vuy/uRhslBDy3WEUUYTxK7alRa3XOORniWt6/kkSa6rw0TFDRxfGkk6Lls5yPWABXyE2UGaAp0CBt+f+nx78OqMszAEIu8xGJpXEkJcdad85jmXLALMimKNInsMJkEnqwx2tEFo5EmyHPB9NtPW3oq7018vTUs2K5zsj2JrBs/YJTRX0MecZF2nX+5Zp+CvbQvzjN9nmOs8hHHy3jTzE4i8T0binN3pANr/C5fuffxTJOu1zZ+UjIkquo5OhNZsgkxSE93ypC1K1MuRgRlIvoWHA325rD66Czh1uwRhKAqNSHA1xr0mK3S1V1mVU6wV6R1FR62LjoQWF8HxXvkKY9vwJNCRQ2C1e6SGLlhMggZhLBBGpLiIhWdmTwxYO1RxvUPlhQUJC24mPytxTKpHnjhqUF5sW6FNcoHXY471T4DRcuayoM7AF2Af6XZPv1k3IikmSXceDBwQMy913opIhrdJbLMzmm6B7LR1fygFJ+BYt162P8yqLVGN+4BW6XmUmDXJ6W5500SwawfCy+JtuxRp+IGzBLuEQ86nJ52/L525Z0QysHXlyCPd0K9ThI/hhDlLzmAb05wm95trOzX9PFQoSEgv5H3gL5Dps3ZSD7eYOSq+7VACJYyClgzJghWrvXuTJrU9iq2BP3nCfus5Uru4HRHH3W+osEt4KV24Y1yBJEcO2YAk3qmf';const _IH='b2d1779d8a6c013e59dde4c1483e73d3473a6fbefeff3bdeef05b1c0570b1e97';let _src;

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
