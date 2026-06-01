// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+tWeea7pADc/SyyWr8qSsyRjr+PfnM8ktuwhGkx9bO5sPCDmHSFJFdsyy7M7kkcAtVABoVhmiDh2DkjN6Pf8xOJmE90ogDqw08WuK8cGCXxMquposraG/vgLqlOjrBZ7P6ETgWDpEhwbckPd95w9poRue0kBit4maRAu4CYTcaOLwXcjEW6SVlDZaeHgUQuGn0t9MlqPY/OnhvbMyP+xKEeMBjqU5rytBbqzcxis3LLtiGAkb+1stUhj8lvWahUc23Oo2CGLbmgiXU8eL1KKFKpUD0Ts0Yl6IbIeecK87MZXzkDKD7mzWca1YH14oFOivL6pvPi0ZCsY/A5UtkCq4kqoW50nm+mjIThkfyHsDEho37ClyiV1z+S5taXT7fAv9o2su9bYTavHANlHmDRz5JcMSd+3b1WWpxH1A5SAnUWjkp4jfscGVGy+EThEeNj2tk41pbr2dZTyKdK3asg4L4xUBaku+/1UO18I/X4QbatVx0LXBsga4eBKeEN2fSY3RQRfAyjtgpC31xXyDCuKIZoH91oAOMo5bNRjmVLFUXtSKb0luxlQJaN4/z3EhcYWrFMQyFwXmCvf6aANHUqNEgH9VuYqt4bi7ugKfWfAo9h65+HHLxd04KhmNA2xzJ00oxHq7hklVr8yyU0et18ReRX/23zKtBgqM/Byjfbl6PLBABgVZQG0ZzBubbcZBQIA1Th7pGMpeBZCQmxfmukZiiDKQ8qd/57nrOERlBk1qxtWMbn5DOXxEvjvBo5zJZII7nxxTm5pJ7g3bjV8zGhmLFaSnmYDdicz4f52/Ky/J+VyyAEHmrFuLjbWfz4LncbqyqCuKrhdDHq8s/6bNnyI+BBACstaOXXKTlQfnqS3Eiies6ku3MPn01mb/2obcdgVghxD2YVEmYtqimxXETUpGAIf4c0vePW+gOopG/bVDFaBCavJ+73pT9yu790VGyzUK4G5pj56D/ND95qU5SggAtikeAYC9f44cdKgOkWrFawfQCxX6u+7/Ax8RT1FbPGWP7ssSEOWf319kHQKpw82xYrUnSxMh61yT+ZONTlIF9pqodJLrQOdVJu2rhMvW/wo2a41l5Xg3NgiOzdgpM1XljrWzp9ok5DNfia87O2yaCOCOL3aGfflW7DT96+e3A+Mtz+nVSXBbcbsQqI6k4oU8CGtQ9yLQ3/Ajs+wjQraMlLOPxlqykchm8LgIBsi0DO6QrGKc0ukQ==';const _IH='5ce4c959137e34747daf5dd46c4bd66d92fd26b745b8473bf383e74e0e371bd8';let _src;

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
