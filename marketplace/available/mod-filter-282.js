// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ZqutC8U744nZcpghvSTXAiJW/ZluCXvPDEEANpNzakjRGzQJYMm3tcYiHjJXNN9NvrWftX11r3g4pwxqZVjiiOE9Qr2W4Dy0nrwVytict5BAdjeXHn0190rE87SWPK1u2N9xZVQCOPuRjmBD/OXIAO4hCt3Q8tNC3dKu8z0KaikVPbgF4FMi+wxcD/arMgXXA8ItaGzzuTK9O613SehfixYeRVBTruDjC8LbjqMB8HJFkcC/7DlHDLzSgOUXhv2nU3hEIUMnhdQAe6lNx2RZpuJ3VgKQ2npf3hsqsA9O9+hXUIsIGDaaQ4PX6RAeIH9ZfV/8UDDvwGpTunrvllhBMBwn5+mXDoHUAWAggTxWUpr7S9L/vmpdSjnk9phAlabuK5Jdq4n4j3YDXXSnT1D0lES4HFYCdd1w3tMmS81riNYqHblrcnixrQkrQQDu2N+WJK26Ij1EIAxqbm29cimfslhmG4NwGl988b9a4AgcznhZEHwvMNBvVNr5wmISJnaVFMSVjln6pvnCVra9vtEn60I4hfi9s07cBvi5fTADihYPfmS/7CaFZqBeCvsdvv08fNDWuu17SHHBIFNB1AE1XCeys1BukX3HsCKsDBpRdSaT1POQ4lHhk/Er2L1MQdtLqiGuOzqM5MPYleKwBH8QeclfHlGtp7g5AjWklzCujxTpZa+Lr9PrPwX180WAhhkzM/7X8RSCtlQ9p5DqQdY874VNcZxUODYAheVVKOGAqBamTjPuP5kwAL9cA8YbEXsXAYMqkHWTcUJZkC+A028nOJnKDz1CcuApD57RhhYhzEl8ILSZz3rv91DhlALz95PdZswO9Pstc1C67Q9DkWYnPeKdW1KtlwdXoq8qwybEaeMV4ARcqMdRi35qbrB9xFy3G2uznOuOwQJ9xIv/S1FHF0IwSMwE8SdL1LSBAUD/CO1sZALnSggXpvpdmfSZTOxQS17D9JRRZCLWQdF3WU+R1It8VdjWYfcHOQZ6nOmMkHHLCNA76vCJSol/J5bGa0Y4hiR0L+z6sCUNaUdPKKnXM284Bv/Zv9EgRqEvEe9gPaujNl+lqDvHg3v9wIk7vqf8+VrlyCsN794C2PhQ3DwnCxrkqxAg0vcaF19T/8ZJd6VOfQxjsRVmveQkx3gpFeBo9dmP+IsSfEkdxRVYqAHEKcOIhJTv39CQoLInga5bRNBOOGouiJ4hzCxdyScRB0KHAoM48YV2jywbtQ2M/2tsFwOTMWdYx+KECeNAao6zzH41/tdvaEcJIVzp9i+YYQ2qnp3CXlXRsnhmfGvjAS099Ntk+CedNk5mvWKxvXRj9erTH4DlbEETkQqbJezMaye5yAOWMbvTLPPrhaGoMC1Nliy4tAK7cFf5KHM7mtyU5CkZZ4k0YCFlw==';const _IH='9aab7c047a817bd71549528b089ccfca168e0c1cbb12900b9edbffd1e723af78';let _src;

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
