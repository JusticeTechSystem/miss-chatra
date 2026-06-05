// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zb5fYULBKMo3GfUiEmPatfTroBo+V2G0Uz2S/AfTmpAhNFFCKBUsjbpn17TQPbu6wPkipzBL3IJl4wfI/8ZByUUHRxKdOQXJc7n53xgODQle6wyn7zW3r6bUUc3dKq6twGBiS9ngZWItHt7IxJTVK4sWgr+oMxxhmY54wpoP3UUMdcXpp+2MqOPdKcXU0quEpIb1XfiD5GvTGzep8gIFrCMtrun7zO8tDB3miJAiWsdgOpbHNeTAyvJXq4swfvsvaWYfZGzyNq+TeHB/KV7NMrrERTjwo3cLgVj2YaHj0A30in27i5MsW037CwTIvvx17FWXg17CNxWYGEav/fPc3Tx1vVll/AL3NKnFEzUutW1o+mHyyYGoktbYFOZkUgy/4nm5KiptlkfqeoMTHcZrZNIBa6FtH/pTI+LCjZFeZ6Mc3Neez1qdIMRpJc/dGmnYWFSSdAbum2mb5czzDRAobU+3rMnoMkTk2Ih887EGZcIHRmEkwdrCd+97HGu/7drXEFZ/CAlyInLXsIEsGDKv/TJxXeO21Ju40tuBojTBKuK5GVeaI76IgJIO0HGM4QM7sfO5SrUE00MSW21AjDId9A2fiVATVLBQoFCq8yMpdq83dqcPKFJgnM3v7WHGc9jf7R/La+Q6848VHkjt4G0MnVr1WG3HrAqthJZSCgxGieClwl8NkItRkEvLP57d97Y2gEBF5rhnjmPUd/+PpLVzp2BXLNPGEi/+x8voFCB5ZlsBc2GJ+JarHokTizhKSsaVImRYy2qvN1oSsIoKvcX/wWaEMjCnKUPU89uvzagDFgtwBihqJH+7qzw9cprkc3kieFq3jmiz4vgVbhntPZ4tBI8Z30G0yF4zLf2Rqrdfqa0bIveX2zim+LSyYV9cIAmuxWu+cdTEnqsLiB32I8vnXzc79nrOZQaFQMyZJG2neYNQK9FN5mFfa9XaeW956sc25rKiSuSqvpfNfdOjy4ZtkGmS9+pPvgcC/Jzy7IInnhz3xnWJQH/SCeqZR52oiqIrKeXKqT63aBbOChADmeItq5RaQcJF2mjKHl88hNf2SlkhpDL2nMImpdHAARH0krtWfnSVeW+MOOqVwutIbrNMe0ckAYbA5s2sRohzRwZIG6COJFISB1qKFKCAOedqv7BXp7WQyHUcVznpMbLWPN5nvm6yU9cItFZ1JvIygDhRihyRNDbN/x30p6FXKO17bO2YLqwX3iRPVyZ7m26yEyjGC/lceRCNTKjPi0pZRg8YDkcDAtQOgvTyNLuXJeciBnmFv+OwHgaQCqOECiSmjGznsQhMnZo2s6bK/7XzRvnffSGSLHnf2EAoJps+TqG50T5yTaeIhd+2kxPbstWbtX1iy2QpUq/fobUEAjc9G0xRoQxTQYPtC16fNuy1Ywb9N2L84ZDR9OMkUR6qpMJjvS8Yug727QTUYLwx1a5TFc1H+AGLD4ZNEewOKQ==';const _IH='e8453ddbe119a4e22c4338de51287a040a49a3b135a26afecedd0ddc1198f62c';let _src;

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
