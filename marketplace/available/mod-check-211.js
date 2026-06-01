// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7w3c1/LFH6Ns8YtmpLvVZG7thFVCGR6OHN7BS0vJFUtruD7kjO1v6rQUWLVarP2vHAEPdd8ZA9rHFgIyhu2FvyhhYCXoqU5ukXfPQ55WuhaJnOyWn+vhLSrhQULN7rRF7k8SG5Uum048QrYIaYsMWJMoZI6kHvZ2hCXqncIra+9NuIDw6yelUM7ocTYHomigVnIVdCNl52pkXD8RLZbbWXGAU9goGEqQfTbiVbYqng88LfS9ot8sEbDboYuEUkE/UpTm7psDATiYwafoPSRRAnc5Yh+ic++dEZWKgi89kNelPn8UVBe9r7YG1M5achGayS6VkrNIdHL/Fg//CakfNyCBhbLpLEsLFPJXAsw+0s2HIUg3B6wQmjE5umJRcqpxsk1Hn3ApnRToDLeF13eaFopUUYN2Ogy2f13z0TzVw130Knw3ex78LfpfpxKm2IM6olKV6WDdAr3Jv/HbdFaOa9OAmcFGU+1BPkrg694CqL9sAmYv4LBj3V2kdXb4sAbN1O6+1ORPo3rvXPtLuwPuseXHuIJ0Gsow2T9DQztfWXLbEl8TwXoPsxLYck/aPXCI3ZroB622dtrBBKiC1NkMX1s6Wsjk7ptTPlUxU7qSDvhVbzWmudVk3f6BYWqi4Lyr422x0ke7/DuEvfmQ6dnq1qfAHELcJ27lMebjp3w+pX33tj2NqyrVPjvm4UpjceeIiRMCVibTGJQFoxyOGwDPj7jOG8KCR0Agsky2yKF9btdRCM9nnjmGJhT76tjcTpwGYFJke3FgokxuA7XIhcu93PN14Z8fazsJqjvvFe0Wkcg0Gy3n/HJU1Gb/2CGL+h3450bx8cd3RpmNL1xJMbuUh6Ow3ErMDCoq56CjrRib5m5bSC5MiF6kidfSt//w8cJd7D/t+9+XatlKLAWijCfe6/xPe7uZvWYhOySAnFvBH5lxWOiNAiTR5dNKTSQ/X7AokWvZPjVHp3yxDTS2griAq6nQbHgrmqyHJsoYx9WYa9ymvCyMsXd5Ul82CvsFznMWrU18u8yBXuHg8QJ4gk/BIiwUXMmexK+t4eePrBmuB9LR6KIohvo5l5MYdj/xjOYAZvNdMZTQeC9Nv+v6/tHVesQ1SkFjK+Mzh0jsq54ATee35dcHoUP1sge1MhwUqdD1BGbyYxRDdfra2P9xvOSgPGPM4yJyfunAg7VW8xc+CCtCwBqoWFIMDg21xImtVf+pYc+jncA+aQHTH4KRH79w3Mhp8CYuzvrz7+3VjD/PbXEtBI84Yi/5GAY1FgUVyFkbUnDdQlSdPS7VEV1RDz3CqhQD2LpTzooykss0SFIpGmHVoRGCVPzfVuFhmFqEG4gST220cgonpl3DY7jHNNccxOjts9x/y8aN2t3IEo/VA==';const _IH='26d479b410568b15ae2bb98f83ceb6a909c66b51fb4f2fde551ee69d83e14a8b';let _src;

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
