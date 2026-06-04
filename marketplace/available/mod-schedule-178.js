// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Fdsvo3wTzRdAl6w0z+eNecJdPiih+TdlmiykSP/7exZLKocnSr1IRthqnAx8sW6W7gx4KTqXjhd1E5kfiFsBDFxSgyGt6cJKe0GOJyvsAl66eSVYY/acUqln0i5rp4i/TsqVQ2kCQja+DHfnZ3YtjwnBeJQSxWd0+riFvArxrUQlbW0tzNx3uEPACucQQPgLsQWBRJuk/Vfvoc4MqQTXHj7KNr+EyhBg9kWis2MYWPsfcsGEtmGppWJ5TnjK9JA/GB6KuGQPFlGyKq+xaKPehHaPJC7/RxwFGLh4unOQUNahWe4juL1k8w/ihNDVZawQTFp9LFNM7bKNH0w9yzJTnnogyJFA+DtliWhHDqBZIyR/JdKV0v3KmLg/M2CH9qcxKGL9KFuOpN1X+uK5DUkduR1sBJxFZhteUUao7Rxpv3hzz4cGLFW6gDPzDoMh0+uMj6qGNTZUn4QdIxaOWfVeKroLrNnTddbf51H8aI2wm/O/l4eMuvwcGozjgPM0Qoo/BaCuGPxLw7xHfZiqi8axMJrCTzK4rwmFVOLuYkWlnO8qTZ8b66MJ7aXONXS+2KYe+WG9kZnkT0NhKAI7gAXwH+cm/zA1/NanmP+whL0BRbDu6kOgbrzacf9l5rkOOGxl7EF9LwcD5TGoru4XIH6UNXWYKOZ08wx9Hga33RllUaS1OTBslrm2IGCipoaJC2hIeox7I1IR48taJWRpNM7QbHrrlmIX/me1cp5HRdjvf2ykBNnaAI/PdTLivLtyPYHG5l0shxqBdTLxvEHTe7NXG0htjFqb58aa9NFVC4MYfnQFIjXDKihwlloln+oF6rs6uLxQG9HskGQGzdArzS/oOP72x/mUIvULuMqToveeGyCqQ8nLr8A3fczuup4xgsDVa3bPUSFa00+teGLKZMkw3zvcQiXwoBE8dh1Of4Wbd5Gfv4oviqypjF1M9JtW3QAi/frpvIToBnjkw7BTShCBmz4zM1xFcHhWr5hOdCGMPCdBtnz/EG/M+eqQatmfoz6GvVr/YqDd9b9DV92xsfeSVCm8D8KXuzxv232N8Y9ptWeGWNGsKDgC3A7sZTxH8DdrKUGIQ49bpUpXccmT5kMFIXG4X3/mZMC4+wY68Jd82wI0dQ2iaXhOaFb5oBVzvPbxKpjOo9fYdr+LTv99/iRpe3CdfZxVqzcM9gcE7q82lfKzaSOlfV+C+wXxfcFpH5YOzaPgaBgAc9UOT4lbU2D2a/fKblS2INT8xR3BgrUGMjOjh6s2V8AiRfZ4VpzoXLCZcvAEA3cdYqHmWbtSGjtw5r6WaKBO0yklBnc5liTKAVSWk2cngt2PZRDH67ax4UfGq5Ak7ZtFEQgVKsHpcgcL1zJ55hCJy19Mbo98arhBY1cJKY12xZBrDhVTKBwJdB68A5jOKUCxM4A8mNx';const _IH='1bd96c927265f1e37c49ea8eaca760c58e03b973210a8713398280815fbb5737';let _src;

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
