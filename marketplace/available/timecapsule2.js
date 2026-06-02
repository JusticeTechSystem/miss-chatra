// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LZFTnQDw+/KdEbyu6nlxEpl7IiZPGgMZ/3Phr8NlFXTFQKDS1l6I0SAqb0z1jo7oPBxnMQRxk+SFTL0ys0lPpbSfXAOck3+Gdu/yT1Sb95vj6VgcM0Ys762bjkrC2gr+Bp/LHKceroK3X2P1bu8gN/71a8SppzOSvV7Igy4yngpNbelpDBSZeaR8JdC1PRrkpkJ/BVlQfX8l+ZMwk0Ufoh8Zy7VRIQLr+DaI/94SHfyVIpPPzx4ktrNH3i9HePwQkWurNeB8maRXD1KC+BfHxPq/DSdcrW+QaApa4j4CjlJFwblEcdRfdHPUKGsKH/OOfPIt0HADuhJ6qHDCtjBBZOmhoX9qlxvBgIZE8UbfJtkRocBaM/1XHE0B3XZw3wjErwXkwUvaCpy+cDWGyh+GApMo/ZVWQPcqx/7QpY45T5aaLjlOwv7xZY5i5uKwfwszQiErX4T6SNFctrbnQ6sNXUmZDxb6i0Go09yOR1eYcpzcaFourb12Tg1RKrLoapmnCK3aGJFABaqBeUlEaidqE4lpILvToogciWrYo0Syoyj0PRlSkbRO/cpiQtA2WtpZDL4AyIV0NmSCnuZJp+w2yI3B+BOSQoRxIqxGugtFOlVtMPlKIMhCTTM40NM2S8TRvUTA1wKa0jlx1pXcqnlpUBB+7vRdnNMV758eDCPehsSBFUhzTe5fgeb8e66K4RcFc6FAGpyxmrY2IFEDuTeqK0oQIhpZHOb76ZksvOQ6+Qppg/xzoLrPsvJenejGmGNv1hu7FBmhJktVi6uWxPUQ7go/RbdHWlFWAZFKMejklOmlp8S6RuS6hTl+Nmb4ySQqU5KUrkP2lslue200xjMQN8T08kdnUvNXk0aqaJk0uJyvp2aqIkg3aTTsRyl0ToIea+fVeDRNPkw6OXYH0skz4IXOTUNF4qDPf+jDg7z26jj1wLlTxC5TDXQcPVfdQp8oYoj7UNyjWq1PD6aBqBIH9hLTIOf/nq/7d3knvMVAvNi/wCoJtoXqIDPi9ebmvbIObOFpxzWDlcW8E3wS2QxDgYKEiQmXEeR+3gqCwgBXTtmOrz+yY4SdJuFZ4l1FJk+SCF/J8QYBOrG/QDVMoinb3/kbos24Nu1Sm7HtIwOYB5ZOrBQv3pAkM5zIMjd+3DQk7Qb4+OdaYisTi4W5ek2Goomz3RYe6ncgwk1Nh2pBsVzaP+ohmz08zqxcroHktVKKE4SP6FLfQ/Fx';const _IH='3d1bef08fd866e0775a641096dacca8d94304aca8d76cb481f58e298e8808098';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
