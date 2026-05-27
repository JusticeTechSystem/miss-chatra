// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+p0jqk00NGBXtGgXabvYWjsMkIe/gvkqCCqZvZPRzLGINkhL4GWOCc7PoKeDirWJ16yYsN2wXgv/2rMCMJItbfXROuEck13SWaPU4uaiHI7E3j9bGlqiT3vbBfBSwLRdvP0uGGNU+rLbCiqIz+agqvTMlYpON0bjWGd3lVtMOsgd18m0U8S6YpoVj6u283FEQQtI7XnsiS2ZMs4MRW8QUlIgqF0geXocDnZyIhipbXVWf0SSuafyCK/M8bS+17SEte+gwP4p2TJ3PATNRm3g5zJAWAMxdlA/E/wcbpyekstdpnqLpc4ZBUAGHBDkKaTq53vnncQX58bcx8SR/upEPEh7rr23p8D4GLHctmw15DGgg4cZGSL7oSqWod0RJHBUcv6mF6MBG2+g9B7Z1EXxFwV6Kw+lZxpJfoTPxyBMJm1zNTr9qTBq88yxHSx8VaI9aYdyHRnr1BHuORErerhM/TIPwumZboiNWxHgI7uXY68RGVPCZ88AwNmuEace6Ih13u0AuqBq5tYKiQfq9DrSB1JB0XuO74W74Qc+PRvQrhUFzNSzPRF0j8WWD5i3WG7I3zKGiE1C1jS2ipAbe4VU1T1ZKyN39UpHBv1aK0OE/sfrGXI/asH7K3kw8dHaJoh8TPEXh308ET2PqbCahTS4wx755P4zzzkxelMEMJU+PlusTDSDG6znjEczyBaOYZUQ7161DKHbu306fDWn4Uu/qzB5xROOTyMwaj6j5qRy04GxeU6EVPXTjm978UTpc5N/jGxiZdo6BY5x9UGB4jxbxqPBb7xh9ytcVNMoWAavgMjugNFZySUfblEYlqpyhehJVmHR989GpNfdmNkFijAposKYNfqIHEAxDMrTxJuPQpj1Hj9Wl2+0twj0wcmBxy0gDSOyoj0idEWLSnjDBtA2ckxwKHlmZiuje4Qr87dRIXlFfGEKGveWMIF3Lmc/x3DeWnwpsIn8ccpCr4sAo33X5mefVzKyLCWflJcjY1XVxfG7aq46bhoGZDjeX65VoBWnr9TSUEkPfyeaLJ1L0v9Cy07pDmeCiiKVtCL7iuhw2ikzRvJ56h3i9Y+RiXGT5clZO4f52gvx7Ua5CrYO4+WnnM3/06czHa5/HNEIpJhMUZYx43NzPP16m7cGeF8ZH4DSIDdHr118X9Xy66lf0De5QafpZbjltbcWhxJSk0Y2KiEqaJEzyIjKf/nZDKbPyZNzMrsDQVAQ2Q==';const _IH='167b5aaeb9be9c04a017192b6bd97125ea6a0361921f757d548ae15e8080a073';let _src;

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
