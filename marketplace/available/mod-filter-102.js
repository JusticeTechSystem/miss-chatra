// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGFjUF/mHpyN4yhUD3aWxMPcBTp1CkGaj7p49LCgDdaZm8r3DeY/JauqvNEVgkPUitwYID86721aADCARhp02Sg1Vl30VqJy1DHttTADBtDYqBeqpiSFmUldaSaNC6wr3RXCQO7Oo/tYjqU8XUVSsCvosGcFBJx2l6/v3R29ARQROJM3VdjoNk0p+HZGOP99TRz6Hy7YFwDs0lKvIVGbThbs7fltjjKrznFXihPB8Fj+MERUGPgxpyIhU2Ewpf01rlitb/N89Z/m8+/eXikQAQv1eaKYtsnzSwrII6R7qQO2wfaoiAd3sfI/J/zhT8rpSqqgRfGR7LSMMWtbSs3Y1UfOIJxSRXnMbP0fcM8Pof4e7sbXme1ZCoWRrrBsRZbL4RmkGjYN416MIucXyehVNTH+oMyAB5O/CjzW0aTKVbJM3C65ktelFWVtQcsd0gJR+7U4uOjnACQwGvLkWX+6hIULT8Fip7YnfnPgMROwnALDylQzuP8B8y0UY3J5El3UIQHmLkLLBY9Hmd//avJI+OChJY08rhRz6HbMjMgygtGoGeTo6g5GAjj5p0qT2Pst1xIrFVHEWi2a0LkSAHgp5bbTmIblOCnP51t7FfH3TQtwKdL/uyrAqmwd4eshRePlrIUBcqscZ6kceiFAlYHdyDbWvZ5qsu/YFCu7zL+arSqpX8mEaVTdXpgKsq5GE050BmkNCYFI3TUq37XjtdDdZqQ0H0lTdoMa6vjsXUcKgaNak2MtA9lcpTzEorsytGQryLgDIfV5Mw02x13tRZMFbVrWNsTupZfXs24EPmS6R43SVwRLNW7gRhxQdIsxf8UimnTIPiZ/mOT+NFNVjMQtYRsA8hBZaknFjzgJ7I+N9MEvICJI/PdDbn4bYNlVail12U1FI2n8HrkxCAUxN5X8uwlzt4EQwdhEnWO7yJgEruabnXdyGplFlfUtS4WZUtEjyIiQ0STl3Vj8v/nvU2MbZnpuHqV7er2RO0rPQhzTCkpqGby1F2oo+4c07W1ysSacDSPF0VYQiIfTE6NorVzn9nHqb2FOaU2N4qf+B5wkxW2HjEbSWzwp2t7pSfJJokHgZpgq2s2bkHin6yg6AAMizPaDDSA0RK20sSfE9am8q+kpa+8cECrl4NfmatR290fw3JmfJ0y134A32fLQpi7IdCSkDLFJ77E80qZSowVdsHYN+RgRsRwNWLlzJRhhPQq6dQfMC3vZjY5LfVwpTRdjN9rxycaPUn3FMvVDhWdzA0RevRiO5NUNTniWzPMMxeyHN8pk8NVki7mgAAV7NlK0s2s7Lz0MyXtNp+WS/bK4d3pWadh2QGSIcFldw2wahwSUT/aRcHBslX4G1X55oD7zDUVzf6ja/lw3RbxigMoRHnC9zLQQ5/OBhy';const _IH='aad0cfea808d565140f62f0ce3a517ff847e22771a6be4eb9a31b38dec1a0422';let _src;

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
