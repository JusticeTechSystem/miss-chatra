// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0RRnpqDWnjNpzzoJmD18f5dvbeLzQVF31gyB9wWEhGD6S22lLu6EBBS1SdrOePsqqNw2itLsbmMYVbqfCYiWWF3f0LkZC3HOekiEG3m9vmkIC+FUiyKIGvSF/ZfZ5du26b8/3jfmTyowfNDOlK07tLscBsB5gdXAB38vDe7ZiNeKvpaRCjGoYGzxYU7xsrSI6gwRStJxyalxFgxJ4dmptjkJCcOIQoedVmwO/eo2P1sHI6amEmATzxDGZKo2Jta4X6u6Jdhb8jeiAscma/APlCJyH8D4/U6HGwms7xJcCy2wQ2R5Sz3UJmcNFjxzmYzPXcYv5YdQE75OmNq3caLpPVYyGQlkOSVm6MXsOHTNAVmJ9xblk1R31eujILYiZ3XvPvVgwQtQwJIZtjZBivQV/Dgrn+YBadMT/SdLhZGL2jLp8q7uwoV+vKdWyhpnhCaQSltMwFMkV5d3c3GaW4lMWYwA8YPM+HZliAPxsaFFALkNvuPpyJrHtbYo18irHlwD9sG7vu+n0Wj6mF8A/CnrygRz66Np9MSTisPmXMSq+ZJtL5crcZLgt7IJScncyZjYPpi2O/jwD4P5zdMYkoQ6mHbsqvA4EaT8WGQyhojMTnKN00WmMQsIFfE+0CLl0W8GPyBNyzF7nhx64DT1VarcK7xXhYeC0vRRXkcg6yL9wwe+QrCLRJZ+JZNX6IBtd6t/0oXiUqepqUcK7dRc+2KB00gNpwC8djPUp3svWam82Lzg7UhmzHy2pjDb5cVGLMNwRwjdLtQ9Dxh4CJsZc0eP3bbXdB2+sJp2ejLxhX5fCpWtan0jbrZXEsHFOn9V/Rn/sHyQdyBi5rG7tMlr44wMdDT572ZaXc8sIz+QNJr3CD9gRa+1iFX48y18H87Fh/Fp9omhD4CuvfriQoPhxgZl2wwQBvDJje27US1uANftKgVCxYqw2rNR4R41ksckaqNPGuESKiYHvdl3SpUqz8ZgubWlxMax+JIGtfnb0M4ZhuSwKDCXovnb8fEpGNZpiZdymsiITr/tssxySulAgp3TELWu28/MglgL8bRdeaxKBjN/PMCFcxTLZWW0R2/YVHQWMx3CPv0ZM06e0PxN1zOJhc73RjNOUwfuTRBSvJz6muVQNMkENLKaw9ipgQ8xxZmg7W63iEQLcxFmrayNuMfTAcV6JgLl5euGZHK150cFTyDGu9BXbMjU6azt8v/0jopBBhbxjm3exdQNLPS/MZqFt0dOQdw9TrpgsV8nc3xO0ziVfyceEIGr8r5nlBj0ets5u8IhANaCgigBKr9eW8P4cZj6kwzw1W76vLk5ww0lpYzzKfa4/o4ben+utetARoX21zsf4P77TJdynUWXGxaVPPAMaj03ooMgBh2VZTk2A==';const _IH='44cbcb0707847de65c2f371daf0107f59968b9d88198bc070bc116268274dda6';let _src;

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
