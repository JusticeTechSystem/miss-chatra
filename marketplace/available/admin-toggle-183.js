// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='efbN7Q2tEEBRatKgbBX1nIMNs5h6kSP83bsiCXtBiD3lJbUacF01qlp4SVPq4nk6bLrgbTF7kQdmkRWLTPvNsfrZfJTuOhbaky8G9aAbY9vFhcAnpIAiEFdW2QKJQcAfT9XXoCFzrNg3nQ2zOVUezIsq5IlvB14AiyLEWY+FQTchDGnF7wgCZFO65/0ejmJxDc7EkOsTCb5tb6wDEFtE6xoRr8XNvU6KEOmbFS++gddaGZUGUbawTZWdcWRmdzKr3jEEog82aT0JJUO37XXVpRVaxYoBY0tOOzoLzYz8ckJkPOWEzr/yoUe2s8fHwhXYnNDEqLUSjFPUbmZJdsRkc1DHDa1HKHDOgXSp3BHQJ86x4eSHorz2/8pZA4OUNdYZF7PP1dfXOjPkgEZPtNCb9CzBfckXs5oU8P10kYbSICOj3cuX+MbQMdDHgknLZgGjbjygMpcEnI2oix7I4dTgofc3qus3kFzdyphe111e7ktK/NXZfk1vKX4R5+3OKbippdoXlRTYRQO1A2ogW6A9/aCeFs2FaOyocb7Vek+WkEf74L2LHt4l09ACjkwJ64WYdoW6G2KLjSBWouvCCr33LbqoynNR0wN/jyRF+t5Kd9aqE8mB5Na3FHl336v2HUlgaApgmuPWortlWQRhdUhIu7wUSYAVZF/1x8Q48NdaP6z4Uohl5H6q6W9u+rUjrCLl4qpIXvHwqTmw2Ftq6Wn7oIfMM83VrxyvB6vE0/SjJ5NLvP+50LEGmmi6J0+Nzq4j18d8iH8+vdRuti6DL+lw4XobnF2ThEKxIaFXJdJqDnkpnMVuXmoYblRjonc68scPUjafS/p7wLTUHzc+89ZwdlskexTElvvcGtzuyGBhxD2PNeZFVUqro5zRvTYRaV5oQ9ehtWSScdGtsaFtEF/SS7ekCwVH51/oJ8WhIns0V7ADoR0s7Tr87KP3Lz8F+SdSkcAc+0jnP4L6llmzGstDy43G6wZ1AeW+CHXN3ui3mceD57AxyjtPOoEbwwwtbAJz/Q==';const _IH='fdb3d8dee1d52529a44ef7b1dc9c9e37cf0b9dfefcd9e2167c9b516f1e06b985';let _src;

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
