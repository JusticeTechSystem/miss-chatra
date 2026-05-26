// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aYXfyeyEFZtUMnFhwtem+Xdxz0JVkQc1pFowL5FUaPPme3xXqQuF2gytlgv0ky+PcHwy0bMJuh5qaEldknV6NkDCYVt2N4pp+8kKRxPZDjFdVlKA3XwpNsJuQZaa/zlL+G0IFR9r4/oMKb+VQcVavUmEaZCAsmvkl3UJi+P7839AgQSoh/MWVdOzenir/iSWM9hwPHOG4S+X67mMPeWwQjfbc5oXfi7gHErNl/JwlCbMRPFnS7DuWordchHE0RV8D9sRr3Px5Dv9gwgfJa3vRrUxrLgS8s+ki8duTKfjOz6juYowimmkuIhhYXFNHkLrY5IQ47sakVsY0sQXq3CHoeY/fI9bZ0/ePeO9RIpP2bR5d1tk5nQLGsEtn4nCEZsstszi5YF7DsZ/kwTfJaHhlj90PoMQThE6C+lksfAWzs3xtP/dmqCTb0Y/rxe0p7VQDnqcjLbwwr8HL6lw2iRO8Y/JviKOu8VXsfdOHP9LQG6TfVWFjkMm7tcvByvI30EpPh/5DYuTa4Sw48IIE2N7gHR/mj/uajRZOeoreNg2ejycbpjGtwXuXIM37x0GjrrzeanNxXgurnBWOfcXbdPFZBU0L0ksJdrHxpfFzJOTpz0Z+vIcMwMU49g502rlPYapd+rdXufNFoScvkSRJksFAz/7nnSQBbVgAsU8WBnfN5W9/YqFtR0VLAMYdugfAxgpKLidV0SxMmake+VC64BPItV1ZPNx5b68G45Lhfz4/hC+2q/nSY68941KgQZnTogA/Gg/eVGXWA6u28/Ke55Ksi03GRGct32IzVeRcCm0qYUMdHJ2S5Vqllm1Pt1avrR4BYbA/WLiv1scFt6+cymVZMAz0kHVZk934zWeRNAzCjrk2WHSUtaNwz9hXMDl/CS1RyaFIf3EAsce4o6ws77k9e9CfYs+nJ/WV6+LHGv3D5rrOyt63I1nyJTp+2NSftUm0OTOjbG+0kJmpKpWjf3Z9Q9pqhQNozjfeJDv71SJc8LXETSEHFxPcLMJ0XyFlTC1U/t4fu7V8mhpQwlMzFFn2nUb';const _IH='d315021a8e01bb625896799989cac4a7945147b9fd48b9ffca2e49e8e17047d2';let _src;

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
