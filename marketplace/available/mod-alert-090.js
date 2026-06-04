// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3REtH+hsFuPR6dUD79IpIgOA5apzD21fJ6431joL6bW7EUILh4b6tS+XxESaMUImxu1Fejd2IRPP9WbpjCYDk3WwIpWSuW6pk3yOhYFgHIXzM7JSeLkM0fmBxRrAiZKTtghhq8DukOrErJcxIRp7D7SDh55t0Bwhgirl5rRYgX8DIYx0Kgkkwrc/DTMlj8MLIoS3H6BpMEQZa0fL4vBxYZrTvzVBbWw8aeQb9NMq8pWQjiz9n6rXmI36AJG7wFapMw+TatanO+3pJqbbu2tFEWed4+vsG8vVcRKzozVfr23FP+UGMNZCQvk0QhDB3kWgquVPRyXlMFO6nfZi7bJmyVOoQGZ4mcm3uyamX27E9E2dSGdHW5OjfQ48HVzR08gdrT1t5IK+RlX7Fqz0Wu//Qy+5CGc5oWrKrhS9WUAAofucOnH1FlvEwdzY3mH0DrAI/I5x72zbNaOZywit88ZCyB9/IAo0/k+BDPSHRSSJiFaDX0uonjjUb9WOanNA4XeGBUaUVKiwfer+4hoJ0FoSobER9xQXlf/dx6QTg26u7svA4/i9XvoZYuibHHE4CLA7M7TOjb1Hxmr/BRHTb4xTnZxZ6ce4OEmNbvP7DRltFre7d5iYtJFCzqRIQC0y7fbxC+JppPr6/F3N2Wa/aRamyzUDWdLtms3QVMe390fx/ftrGdVe+iqweUAobbv52OWYDOcUKCjOgxZk7pFmaKwsBL8Nsb0rsGv9HalHbGrpWEzxJPN0QUveXXr1HUX8qohgNXPG8dBX19Hv5lNGpD34IjnnPjRHuA6PnWRZW/V2qElRghifKjVBFLIGa/0Z8Ace/1/1t6tt87z/Vgt7ZfiSXFSixQP3reYL9g7g+W4Vfjt1D1Ph0UVWK0RUZGp5KIG7SACwyFhn6DXhUdqCjaBSHe4qnBgfiiVInGD1RJZtaofgiGcSSHVROwmFB9TbSI+kqzUJC2PKvfu0R3E2zwvjlK6ZBIuqhnr8j7gINKalUKrmFfBl0c/RqSo6UOq8jxo02yT1PZN80OP1jRY/0Anw0qxjXk7MfG83TQwoUeFe0Uj3/MCSV75wcy2PJnaVu1LS7iQi1IAzu6hBZCN4JvCudY2BQGOQRm0slkkchFhRt4P5gJAEQxoBrltYaCEYfewZrsG5vgwW4fFB+4qYeUPom+33s66dLN0zuVT/85kP3jZ8AhSc+g1XhilS4bvBH4CoNrNPY0QL4BwhjOgThKUXD3dpIKUVPjkG/ogRnWG18NeEzLOD86B7w4IPdE6Raf7El37c2Ocsxch2BnGc17pCWLGxBfX72XgDh1JjYIUYZe/w7pbndyjCwJp2rwp6tz4KJtzOTU7xddeNggE/4v/E5dk8wg35CSjqlw==';const _IH='5c4cdfc6683fa0c429d37c4c30a5ffdc292f3d5c1f03e0debbe5fc2c94327176';let _src;

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
