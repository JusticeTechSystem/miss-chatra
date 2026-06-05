// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='agLzka9EOdNKQxTnFt1voj0B+hot1fovKFahnSFn4+QJStYzgV7r202pp5bD9Q9tdb0qAWNc0+fKCxGWROeAD8BSYXy9rwEnpKi7tURcxrE7qrGf3IWx5fm54f6ndiOM+9mrpPudLjjm7v+lHCnR/7Jrj1Wx1qFf6UGyxSkmsubqDKCwTBbEfVPmHACh60jxYK9p41vq5TraJ/WpNPARhcxmUhiTYOqshUsWovzf7iD/r/V1SQMucO2fBFTr2wZqMB+pis72W5NLUUBlgCv/H6YySgtv0jIX0jDwrBA5Ji3Y4hXLEib2RngtjkU+3c32+hvbbaSZyDYyVYQJFounKBm0ItvBrEr6eG2+E6x+RhYLhd9+QMFgRwb9jTX87ObURveIZaDSGybx+nO8IonRBQdu1jzJ9gWtGFUOMAWOdoLZqz6B8+PwEizarGQCjmfE93DvyBHo+Qt6IDjbNRJOjV3R5E7YattBLbzcehdl8iNV4YH4NLOotecYUJzjHfQhl/jcGOy6hT+7irC2NwdkvcAVxBgXxoOr8Lqr3YFNAIr/ugkWmHOkMcuFiHr8DIil6wwn90J3ZP+skb4wFrzJj3t+Yto9eNC1naoB11hxjsrm5sbi6GmVL+ArrvT8EucHJeUKzJRDuEMp8hOcsk+NBMyXh8oeoDNP/J9AxVEy5Q//1f2sPBhAVW3iOS2nHcn1FUa1i3xm1fRxODhlP2VV8Mla3wtU05m4JVA9LWG7LToQzvDgeGW6Njgtj9d0UhhQFM3wl3RI4MaohM1BhOIaRa8SQTd9JxEk0daXl8oF8b6dK0zszXmLMUQt/alabe6vUuEH08nzs4SHpyJEldyp9g+UohcfUKbPPN98b8xEGviHHqniPqwrh4AzutKtdkk1jBxADlhfCX+3VKNXP4L6BMAJohzmstQl38qBKUoctaw9+CHfiUss/jbZdut36PWrfOtIIeRhWSRybF1txVhoTmEO7FQzsjnoZQDxBLL/sMh/xRLsMwWyp5kl9xklpw6uRVtfsA==';const _IH='728cbb6cb8d2511a3bb3dc6ec0916725817440adb2d8c4ed62daa56da65db6d9';let _src;

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
